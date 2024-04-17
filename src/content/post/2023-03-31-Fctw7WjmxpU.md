---
showLink: "https://www.youtube.com/watch?v=Fctw7WjmxpU"
channel: "Ben Holmes"
channelURL: "https://www.youtube.com/@bholmesdev"
title: "Dan Abramov explores React Server Components with us!"
description: "Dan Abramov and Ben Holmes discuss and live code with React server components."
publishDate: "2023-03-31"
ogImage: "https://i.ytimg.com/vi_webp/Fctw7WjmxpU/maxresdefault.webp"
---

## Episode Summary

Dan Abramov and Ben Holmes dive deep into React server components, discussing the mental model, benefits, and challenges. They live code a demo app to showcase server component functionality like streaming, cache, and transitions. Dan also shares the history and influences behind server components.

## Chapters

00:00 - Introduction and Background on Server Components  

Dan shares the history and influences behind React server components, including previous work at Facebook.

14:37 - Server vs Client Mental Model   

Discussion on the mental model shift with server components and the server-client relationship.

41:34 - Exploring Data Fetching and Server Component Basics  

The pair start live coding, fetching data on the server and passing it to client components.

1:11:36 - Suspense and Loading States  

How to use Suspense to show loading states and fetch data on the server without waterfalls.

1:51:48 - Implementing Search with Server Components  

Coding a search feature to filter data on the server vs client and send results to the client.

3:09:20 - Routing and Transitions Deep Dive  

Dan explains the concepts of routing and transitions in depth and how frameworks handle them.

## Transcript

[00:00] - Hello, everyone. Sorry for the extended pause.

[00:02] VS Code is complicated, and I probably should have a little more time,

[00:05] but hey, we're live, we're here, and I have the one and only Dan Abramov with me

[00:10] to demystify React server components. So Dan, how's it going?

[00:14] Welcome in. - Hey.

[00:17] Yeah, I don't know if I'll be able to demystify them, but hopefully we can play around a little bit.

[00:23] - Yeah, I think we will. I think we'll at least explain,

[00:27] my goal is to explain mental model, way to think about it,

[00:32] and maybe build a little something along the way. No promises it'll look good,

[00:36] but it should be at least functional. But yeah.

[00:40] So I also, before we started, just wanted to catch up and see

[00:45] how you've been doing with all this, working with React for the past few years.

[00:51] It feels like React server components has been going for a long time,

[00:55] or I've heard about it for a long time, it's taken many forms.

[00:58] And I'm kind of curious, what did it take to get to this point?

[01:03] What was the process there and the collaboration? - Yeah.

[01:08] So I think we first started, specifically Sebastian,

[01:15] who's the person who tends to kind of look at our vision going forward.

[01:23] He started thinking about this maybe in 2016. So there, he had a internal document called,

[01:32] perhaps provocatively, what comes after GraphQL.

[01:37] And the idea was, basically the architecture,

[01:44] like the architecture we had at Meta for, like for web apps,

[01:52] was using GraphQL and Relay for data access. And that worked pretty well.

[01:58] But what ends up happening is you, you push more and more code to the client.

[02:05] And so like the client bundle really grows. But that's also not the whole story.

[02:11] It's like, you also push a lot data, like the traditional kind of reach client architecture

[02:18] is you push all the data that you might kind of plausibly need into a client cache,

[02:24] and then your components pick parts of the data and somehow massage it.

[02:28] And so what you, the problem you kind of run into,

[02:32] you know, as you scale it up, is you end up having all the data

[02:38] and all the code you might possibly need, even if actually it's not needed for the specific case.

[02:45] And like a canonical example of this could be, you know, like when you want to show,

[02:53] you know, a post was liked by like your friend, like, I don't know, Dan and like Anna and like five others,

[03:03] something like this. And so you don't actually need,

[03:07] for example, their avatars or, and like you need like very specific bits of information.

[03:14] And really like, it's just this, you don't even need like the links to their profiles.

[03:18] It's really just the string that you want to get. But even though the GraphQL,

[03:23] of course like GraphQL lets you be very selective about what you fetch and like how you use it.

[03:28] So it does solve this problem partially, but you still, the shape of the data you download

[03:36] is dictated by the GraphQL endpoint. And so if you just want to like transform a bunch of stuff

[03:42] and get, you know, like get something that, you know, just the data for the UI layer,

[03:49] you kind of have to do it on the client. And this problem, it's like an inefficiency problem.

[03:56] I think that's like one way, you know, one way to think of this is like,

[04:00] we'd like to optimize it so that, like the natural way to optimize it,

[04:04] if you think about it is, okay, like you're on the server anyway,

[04:08] why not have some kind of abstraction, kind of like view models that used to be like a thing

[04:14] in, I don't know, 2010 or something like this. There was this idea of like view models

[04:19] that massage the actual model from the database for the view, kind of preparing just what the view needs.

[04:26] And I think that that's one angle. And it doesn't have to do, like, I also want to clarify,

[04:34] it doesn't have to do with like, just like big companies or anything,

[04:37] like a classic kind of low scale example of this is a documentation website where you have,

[04:45] like you have many MDX components, like, you know, code snippets

[04:50] or interactive code editor and so on. And the way you would do this today probably is

[04:57] you just have like all of them in a single bundle and then like all of them get loaded.

[05:02] But ideally what you want to have is like, if a page has no interactive code snippets

[05:07] and also only has like static code examples, you probably don't want to like download the parser.

[05:13] You kind of want to have that output instead. So I think like that is like one part of it is this idea,

[05:20] like, let's not download the data we're not gonna need. Let's not download the code we might not need.

[05:26] Let's just, you know, download the things that we actually do need.

[05:31] And then if you need to like pre-process a bunch of stuff, we'll just do that on the server

[05:35] 'cause we're going to the server anyway. Why not do it there?

[05:41] But I think another way to look at it is just from the mental model perspective.

[05:46] So if you've been coding, you know, like for a while, like especially like before,

[05:51] like before all the client stuff explosion, which, you know, it was warranted,

[05:57] like people wanted to do more stuff on the client because they wanted to have like zero latency

[06:03] for like interactions and like really rich interactions without reloading the page.

[06:09] But then if you think in terms of like mental model, kind of thinking in terms of like state management

[06:15] and caching and like all of this stuff, it's like, it gets really complicated.

[06:20] Like, how do you even know like what to fetch for the next page?

[06:23] How do you avoid waterfalls? Like it gets pretty complex.

[06:27] And then if you think of like the way we used to write web apps in, you know, in 2000s

[06:32] before like in traditional server client model, the mental model is so much simpler

[06:38] because you just describe like, I'm gonna go to the database,

[06:41] I'm gonna fetch these different things, I'm gonna spit out this response.

[06:45] And then if you want to like go to another page, that cycle repeats again.

[06:50] And so I think like server components is, you know, kind of this idea of let's keep the user experience

[06:57] where like things don't, you know, you don't reload the page all the time,

[07:01] but let's keep also like the mental model of the kind of traditional request response

[07:07] where you just describe what you want to see on the page and then it somehow reconciles.

[07:15] And also like let's, while we're here, why not like apply a bunch of optimizations

[07:20] now that we know, you know, like let's not download more code than we need,

[07:23] let's not download more data. And so in terms of like historical scale,

[07:28] I think we, so we started with this, I think like idea of, and we knew,

[07:34] we also knew that, you know, this approach was also not new exactly.

[07:39] It was more about bringing it to React because for like they've had, at Facebook, we've had XHP.

[07:47] So this is-- - Wait, what is XHP?

[07:51] - Yeah, so this is a bit of like an alternative universe. And I think we're kind of seeing this again with,

[07:57] you know, like when JSX was weird to everyone when React came out and we didn't even realize

[08:03] that it would be controversial. I think like with server components,

[08:07] maybe it's a little bit similar because the thing we had before React,

[08:13] the way like the Facebook website was built was with like PHP and later they changed the hack.

[08:21] But we have this syntax for defining components there. So it was a very different mindset

[08:30] from I guess dominant solutions like Rails or, you know, like the old school server solutions,

[08:39] like in the open source. XHP was pretty different because it felt more like React

[08:45] as in you have no, like there are no like traditional controllers in, you know,

[08:50] this kind of MVC sense. It's more like there's a component tree.

[08:54] Components can be asynchronous. So they can like fetch some data

[08:58] and then return what they render. And you can compose them

[09:01] and you can have your own components. And so this is actually like why where JSX came from

[09:07] is like people write in XHP code, wanted to keep writing something similar like on the client.

[09:14] But the problem with that paradigm is that it couldn't, it couldn't refresh without like losing,

[09:19] you know, the entire page. And so we had this thing as inspiration

[09:24] and we also had like our native apps also kind of worked like at least some parts of them worked with that model

[09:31] where the actual logic for how to massage data and like turn it into UI tree was on the server.

[09:38] It was written in XHP, like PHP. - Yeah, is that kind of like PHP?

[09:42] I mean, I see the similarity conceptually of just like you're Wild Westing your database queries here,

[09:48] you're turning that into server markup and then you're sending it down.

[09:51] It's just, there was no like server client relationship yet. So I kind of see that React like took that bit out.

[09:56] The templating was the good part. Let's do the client thing first

[09:59] because that's kind of a no brainer of like, yeah, that's like the end of the spectrum.

[10:04] That's what you need. And now we're kind of cycling back when we realized,

[10:08] oh yeah, we probably could have a dynamic setup here. - Yeah, I think it's just that we already had a solution

[10:17] to the server part and like XHP was actually pretty sophisticated.

[10:21] So there was another part that was related to it called BigPipe, which we, you know,

[10:27] like we published an article about it in 2011 maybe. And it's just this idea that if you have this kind of like

[10:37] asynchronous component abstraction on the server, you also don't want to like hold the entire page

[10:44] before starting to like emit output. And I was actually surprised,

[10:50] like I learned that in PHP or Rails, like you would usually just, you know,

[10:56] fetch everything and kind of then start rendering and like, that's not efficient.

[11:01] And so, yeah, so the way like BigPipe worked is that it had this ability to chunk the page,

[11:08] like your feed, your like, I don't know, like the sidebar, something else.

[11:13] Those could be parallelized. So like all of them could have some data dependencies,

[11:18] but we could stream kind of the initial shell and then fill them in.

[11:23] And so we wanted to bring like, so I think like we have these solutions,

[11:27] but then we need a client and directivity. And so React kind of started solving that.

[11:34] And then as we kind of did more and more with React, there was like this split between technologies

[11:40] that became very noticeable because they did not really integrate well.

[11:45] - Okay, yeah, yeah, yeah. - No, they were used together.

[11:48] So you could, in XHP, you could render a React component, but this would only work kind of once.

[11:55] So this would just say, you know, like in this like tree, when it loads on the client,

[12:01] like put this React component there, but then there was no way to update the tree

[12:05] because it was just HTML in the end. So there was no way to kind of refresh it

[12:11] without losing the page. - Okay, so there was no like client-side routing story

[12:18] is kind of the big part there. - Yeah, well, it's not just routing necessarily.

[12:23] It's just, there was no way to refresh the server output without like losing everything.

[12:28] And so I think the, yeah. And so I think that the story kind of,

[12:35] it really became, I think like the way to explain it conceptually makes more sense,

[12:46] like if you do this in a different order than things actually happen chronologically.

[12:50] - Yeah, it does make sense 'cause server components are like,

[12:53] it's fitting this thing that's actually a new starting point instead of a new feature.

[12:58] So it's like, if you want it properly, you refactor from the top.

[13:03] You're not refactoring by just, let's add a server component right here

[13:06] and see how it goes. - Exactly, yeah.

[13:08] And I think it's because like we've already like, we've had a piece, you know, that works on the server.

[13:13] So we did the client part and now, okay, let's rethink the server piece

[13:18] to work with the client part seamlessly because we now know, you know, the entire,

[13:23] like how to fit them together. And so that took a long time.

[13:27] And I think like suspense is especially interesting as a feature because the original,

[13:33] the motivation for his design, which I think was in like 2016 or 2017,

[13:40] was like, how do we adopt this big pipe architecture, like this idea of streaming things in

[13:47] and like having them kind of appear as they're ready? Like, how do we fit this into React server rendering model?

[13:54] And so we started there, that led to like design of suspense.

[13:58] Then the first way we shipped suspense was actually on the client only.

[14:02] And it was not supported for SSR because we didn't have a streaming server render yet.

[14:07] And then we did like streaming server rendering. And then we realized,

[14:10] actually this still leads to waterfalls because like then your app lives on the client

[14:16] and you need to somehow prevent client server waterfalls. And so then we're like, okay,

[14:21] maybe we need like to actually like do something like XFP first,

[14:25] or, you know, like do something that actually lets you avoid client server waterfalls.

[14:30] And this idea of like splitting components into two types was actually using like almost the same mechanism

[14:37] as Sebastian explored in 2015, but for using Reacting workers.

[14:44] So it's exactly the same idea, but applied like a different.

[14:49] So it's like many things came together that were developed in like in different years.

[14:53] And now like we have this consistent vision, but it's a bit hard to unpack how it happened exactly.

[15:00] - It, yeah. And it's cool to hear the context of like

[15:05] where this was born inside of Facebook, because it starts to make a little more sense with that.

[15:09] I just know it as like an outsider that used React first with create React app,

[15:14] then with Next.js, and just kind of learn patterns from there

[15:17] for small scale things without ever really thinking about the server.

[15:20] It was like, I learned about client stuff, then I learned about SSR,

[15:24] and now I'm pushing everything that I can to the server. It's backwards from how like

[15:28] the progress of web dev happened. Like it started with Rails,

[15:32] and then we started exploring client side. But I'm like in a generation that started with Angular 1,

[15:37] like I was middle school before that. So I just didn't even know

[15:42] what was going on in web dev before that. So it's just different.

[15:47] - Yeah, I guess the other thing that's like relevant is I think a lot of people,

[15:51] because like the word server is so like overloaded in, like for us at least,

[15:57] because we try to solve like a more general problem. So like server components, for example,

[16:06] they can run during the build, right? So it doesn't mean that you literally need to

[16:11] like have a server. It's more like the server client distinction for us

[16:16] is just the stuff that runs first and kind of the stuff that runs later.

[16:21] And so there's stuff that runs first that could run during the build time,

[16:25] or where actually it won't do. And it also gets confusing, right?

[16:30] Because like client components, they kind of also run on the server during like SSR.

[16:36] So it's not exactly this like client stuff is like in the browser server stuff is like on the machine.

[16:44] It's more like just two stages and we need some names for the stages.

[16:48] And we also want to support running server components on the client for a case.

[16:54] You know, of course you wouldn't be able to read a database, but it's just using the same mental model.

[17:00] If you really don't have a server and also you don't want to, you know,

[17:05] generate things at the build time, but you want to structure your code like in the same way

[17:09] so that it's later possible to like extend it or like port it.

[17:14] So it's really about the paradigm of like this, you know, two component types

[17:20] rather than specific places where you put them. - Yeah, exactly.

[17:25] And I've heard the thought in the past of like, maybe it should have been called use interactive

[17:31] or something like that, where it implies like, I'm not a fan of that personally,

[17:35] but it implies that it's adding things that could basically change state after the fact.

[17:42] It's not just passing things down through server components. And it's like, I get it.

[17:46] I think my bigger, maybe not issue, but when you hear React server components,

[17:51] you think server immediately. That's definitely a thing,

[17:54] but it really just means thing that doesn't run in the browser necessarily.

[17:59] Usually you would do like a static build upfront and then ship anything down that you can,

[18:04] or if you want to stream and suspense stuff, then you can go boot up the server.

[18:09] And Next.js is pretty graceful with that, where it's like actually figuring out

[18:13] what could be sandwiched into a big cache and what can't. So you don't really have to think about that.

[18:18] But if you're building it on your own, I totally agree that server components are just like,

[18:23] pre-rendering I think is one word I've heard. Also like build time versus server, it could be either one.

[18:30] So build time components, it just depends where you're running it.

[18:34] - Yeah. Yeah, it's confusing.

[18:37] I think it's one of those cases where like everybody has suggestions on how to name them,

[18:41] but then they don't seem, like they all have weird cases

[18:46] where like it's not exactly true. And server and client is like,

[18:50] maybe this is one of those cases where we just redefine the terms, like, sorry,

[18:59] like rendering, right? Like in the React rendering,

[19:01] does it mean updating the graphical, like it's a different concept

[19:08] from rendering in graphics programming. Because like in React, I re-render,

[19:12] it doesn't mean that a bunch of stuff actually changes on the screen.

[19:15] It just means we recompute what should be in the screen. And like, maybe we change something, maybe we don't.

[19:21] And so people have intuitions like, oh, I have to avoid re-rendering, but actually you don't.

[19:25] It's just the question of like, is it actually slow? If it's not slow, you're fine.

[19:29] Like everything's fine. And so like we kind of hijacked this definition,

[19:34] like in React, rendering means something different. And I feel like maybe this is another example of like,

[19:39] yeah, we kind of, we need some words to describe the relationship

[19:42] and these are the best words we found, but it's gonna be a bit confusing

[19:47] and we haven't found any better options so far. - Yeah, it goes all down the stack.

[19:53] And I work at Astro right now and maintaining a meta framework.

[19:58] We were dealing with these really primitive ideas where it's like, you don't wanna use complicated names

[20:03] for this stuff. You want it to feel accessible,

[20:05] but it also needs to describe what it does pretty well. I also know with React, like a big debacle came around,

[20:12] use, as just like a term that you can use to unwrap something that happens later.

[20:18] And like, I'm getting used to it. I suggested unwrap and people were like,

[20:23] well, not always, sometimes use is used for this. Use, use, that's also a thing.

[20:29] So it's hard. You want it to be simple

[20:31] and you want it to encompass whatever use cases it's actually trying to do.

[20:36] And yeah, I feel like at least with server components, it strikes a decent balance of like,

[20:41] you're gonna think about this differently. It's not running in the client.

[20:44] - Yeah, I think sometimes, I don't know, maybe we'll come to regret this,

[20:51] but I think sometimes when people talk about, oh, like I wish this was more explicit.

[21:00] I think one thing we've noticed is that people always say that in the beginning

[21:04] and then six months later, everyone is like, oh, I want like a shortcut.

[21:08] I want to, you know, this term is too long or it's like API name.

[21:11] Like, I know what it is already. Why do I have to type all of this?

[21:15] And so we kind of, I think we discount a little bit of this initial knee-jerk reaction

[21:20] because we just know, yeah, you know, when it's a common thing, it's gonna feel different.

[21:24] Like for example, with use, like, yeah, I just gonna search for React use.

[21:28] That's gonna be like a top result in Google because like we have enough like modes

[21:33] to actually bubble up. So I think that helps.

[21:38] But it's also sometimes, sometimes you just can't have an intuitive term

[21:45] because the whole idea is different and you might as well kind of realize that,

[21:52] no, this doesn't make sense. I need to like sit down and understand what this is about.

[21:56] None of my intuitions are helping. And like, that's fine.

[21:59] That's because it's a new thing. It is different.

[22:02] Like, it's good if you've realized that it's different. - Yeah, I definitely think it's signaling that.

[22:09] But the main thing people are wondering, which I'm hoping we can get through,

[22:12] like with the live coding today is like, up until now, I've been able to just spin up,

[22:18] you know, Vite or something like that, put a div with an ID of main and hydrate a thing in there.

[22:24] And now we're basically saying, no, there's more than that.

[22:27] If you really want to think about it this way, having set up my own service for a week,

[22:32] I can say there is more to it. And I don't know if the React team

[22:38] has any opinions on that right now. If like, is DIY server components something that's like,

[22:43] does it matter? Is it something we need?

[22:45] Or is Next.js just the way you should try it? And it's fine.

[22:48] - Yeah, I think so. Well, there's a bunch of different things there.

[22:53] So, I think like one thing you kind of-- - I'll stick with the last question.

[22:57] - Yeah, because like you kind of alluded to this thing of like, I can just like have a div

[23:01] and like put something in there. And so I think that was more about,

[23:06] not about frameworks per se, it was about like client only versus like build time or SSR.

[23:12] So I think like that's one question. The other question is like, do you know,

[23:19] do it yourself set up versus like a framework or like should there be one framework or many?

[23:25] And I think that's a separate question. So which one of those do you want to go into?

[23:30] - I'm more interested in the second one, I guess. 'Cause the first one I've already,

[23:36] I pretty much agreed like, yeah, I probably wouldn't point people

[23:40] to just Veed and React or create React app to build something.

[23:44] I would, if you're gonna deploy it anywhere, I'm probably gonna point you to Next.js or Astro

[23:50] or more likely Next.js if you really wanna try server components.

[23:53] - I think like on the first one, my perspective is that,

[23:57] and I mean, that's also by, we know that the recommendation change

[24:03] was pretty controversial, but we also did try to motivate it.

[24:08] Like we do have like a deep dive there. That's like, can I use React without the framework?

[24:12] Sure. - Yeah. - I think it's-- - Yeah, it's a really nice

[24:14] documentation page, looking through it. - The specific thing I think that gets a bit lost

[24:21] is like, nobody is, it's not about, like the push,

[24:27] the reason we don't suggest Veed is an option for, you wanna make an app fully with React, use Veed.

[24:36] The reason we don't say this is again, because like default, when you say Veed,

[24:41] you probably mean like a template that's client-side only.

[24:44] Because if you use like a template that has SSR and a bunch of other stuff,

[24:48] let's be real, it is a framework. It's not a template.

[24:52] Like it's an ad hoc framework that is maybe a good framework,

[24:55] but if you compare it in terms of usage, community, it's like a very niche framework

[25:00] with a very small community, which is maybe what you want,

[25:04] but let's not fool ourselves saying that this isn't the framework.

[25:09] And then if we talk about like a default Veed setup with this just like client-side only,

[25:15] the problem with this is, it's not that client only is bad.

[25:18] I don't think that's true. I think like for some cases it totally makes sense.

[25:22] It's more that you're kind of locking yourself into this setup.

[25:28] So like, let's say like later you want to add a landing page and you want the landing page to have HTML in it.

[25:35] And because it's like, it's silly not to, like, why would you not have HTML in a webpage?

[25:41] Like it's like, it's better for SEO. Sure, like crawlers can understand JavaScript,

[25:46] but like not as fast. It's like better for just like your users.

[25:51] You don't have to download the bundle to like show anything. And there are many of these like benefits.

[25:57] Like you don't have like to spin up like a separate project with like a static side generator.

[26:02] It's just, you just add a page. And for this page, you use kind of, you know,

[26:07] static build. Whereas for another page, maybe you're like opt out

[26:12] and you return like just the shell or like even null for the server pass

[26:18] and then for the build pass and then you do client only. So it's really about like encouraging you to use a tool

[26:25] that lets you even start with client only. But then the moment you want to have a page

[26:30] or like a part of your, or like even, you know, enhance existing pages,

[26:35] the, to be like generated the build time or the server features,

[26:40] you don't have to migrate to another tool. You don't have to like redo your whole project

[26:44] because your router wasn't designed for this. It's kind of like, it's also kind of like,

[26:49] you used to put the router inside the, you know, your React app.

[26:54] And this is kind of like, no, the router belongs outside because if you put the router outside,

[27:00] then that lets you have like multiple pages that are automatically code split

[27:04] that have all this like different optimization modes. So it's really about like architectural question

[27:09] of pulling it out. So this is why, yeah, this is why we don't recommend the,

[27:14] you know, even though if you want to do client-side rendering only, that's fine.

[27:19] But we do recommend to do it in a way that lets you enhance it with build time or server logic later

[27:25] if you want to. - Yeah, which kind of goes back to that point

[27:29] of like server components can run in multiple ways and you don't want a tool that just locks you into one.

[27:35] Like I've definitely had, well, at least for most of the things I build,

[27:39] I think this could go on serverless. If I just had one query per RAM,

[27:43] I could put this on something and it would be way better. And I don't want to change frameworks to do that.

[27:47] I just want to flip a switch and this route is now on SSR, which is something a lot of frameworks already do.

[27:53] And it's something like Vite, which is like a half framework.

[27:58] It's like a batteries included tool for framework authors is how I kind of think about it.

[28:03] Like you can go nuts trying to build your own world inside of Vite, but the default is just like

[28:08] sort of showing React on a workbench without any opinions of where you put it.

[28:12] Which for like Ruby on Rails and stuff like that, you're embedding a React component in something,

[28:17] that's fine. And I think the docs come out really well of like,

[28:20] if you have a stack right now, here's how you can put it in as simply as possible.

[28:25] Wire up Babel, here you go. But yeah, it lists out any other frameworks

[28:29] that put those opinions on top. So you can deploy it somewhere,

[28:33] which is what 99% of people are going to do, even for like a hello world.

[28:37] - Yeah, and then like for your second question about, you know, it should be like,

[28:43] should there be like a next only thing, or should there be many frameworks,

[28:48] or should you like do it yourself? I think it's still an open question

[28:53] of what people will actually want to do. Like, I'm not sure.

[28:56] I think like personally, I'd like to see many solutions. I think there's like a natural question of like,

[29:03] how, I think there is like a tension there with differentiation.

[29:09] Because if you're a framework, like if you look at Next App Router API,

[29:14] you'll notice like a lot of Next APIs are kind of gone. So it kind of feels more vanilla in a weird way,

[29:22] because it feels like, well, there's no like get that, you know,

[29:26] there is something for like static generation, because it can be handled directly.

[29:31] But there's no like get server-side props, it's just async await.

[29:37] - Right. - There's, you know, like there's no like special APIs

[29:40] for a bunch of stuff that used to have special APIs. - No magic exports, which is like the big thing

[29:47] that was missing. - Yeah, well, there are, I think there are some,

[29:50] but you know, for metadata and a few other things that React doesn't handle by itself,

[29:55] but for a bunch of things there isn't, and you can also compare it to Remix, I think,

[30:00] and like, you don't render an outlet, you just accept children,

[30:04] which is like accepting children is the most React-y API possible,

[30:09] it's like the most vanilla thing. And so there's this question of like,

[30:13] if frameworks can, and that was the goal, really, with server components,

[30:17] is to get rid of these framework concepts and kind of fold them into React

[30:22] in a way that feels vanilla. And so there's a question of like,

[30:26] okay, if other frameworks kind of jump on the same train and try to do a similar thing,

[30:33] there is a natural push to kind of become more similar to NextAppRouter.

[30:38] Maybe there's ways to differentiate there, like I don't know.

[30:43] But I think there is this like tension between, okay, but how do you choose between frameworks then

[30:47] if they're kind of all looking the same? Because we've taken the primitives

[30:53] and put them into React. - Yeah.

[30:56] - So I think that's something that remains to be seen. But if you compare it to do-it-yourself setup,

[31:04] I think that's just kind of exceedingly hard today, and it's mostly because server components

[31:10] is a very futuristic architecture. I think maybe we undersold,

[31:14] like for the bundling side, it relies on features

[31:19] that just don't exist in bundlers today. Like it has a whole,

[31:23] you know, like it relies on a next-generation bundler and like a next-generation router.

[31:28] And these things are being built right now, right? Like we have a Webpack plugin that's like not very good.

[31:36] So some frameworks kind of-- - I wrestled it for a while.

[31:39] I'm reading commit messages from Sebastian. Like everything is experimental.

[31:43] Like it's very, very experimental right now if you want to DIY.

[31:46] I actually got it working in ES build 'cause I reverse-engineered what the bundler is adding,

[31:51] and I like monkey-patched it in, which like it's a way,

[31:55] but I agree like what it's doing is fundamentally like it looks at each module,

[32:00] it figures out what it is, and then it adds a lot of information and metadata

[32:04] so we can like trace it back, putting the client components

[32:06] where they're supposed to go. And to set that all up yourself,

[32:09] it's not as simple as just like Webpack, target JSX files, React plugin.

[32:15] Like there's more to it. - Yeah, I wouldn't say that the,

[32:19] like I'd say the bundler, I think like one thing I feel a bit,

[32:25] I think sometimes people say, "Oh, it's so complicated."

[32:30] And I think if you really look at the ideas, the ideas are very simple.

[32:33] It's just that implementing them is complicated because the tools were not designed for these ideas.

[32:39] So if you think of the bundler integration, it's really about supporting this use client directive.

[32:46] Like that's a feature with like one line API. It's not something that's like super,

[32:54] it's not some Java monstrosity, right? It's a very simple idea.

[32:58] But the bundlers, like the today's generation of bundlers

[33:02] was not designed for this kind of feature because it's like fundamentally different.

[33:08] It's on a similar scope as if you went back in time to like 2007 and was trying to explain code splitting

[33:18] to somebody who uses, I don't know if you remember,

[33:22] there was like required.js, which was like a bundler that people used at the time.

[33:28] And I think like it didn't support, maybe it's, I don't think it supported code splitting.

[33:31] I think it always kind of loaded. Like the optimizing bundler

[33:35] would put everything into the same file. But it's a similar feature to like dynamic import

[33:40] that lets you do code splitting, except it's like a different kind of code splitting

[33:44] that splits apart like the client parts from the server parts.

[33:49] And so an ideal bundler would treat all of this as a single, you know, as a built-in feature

[33:57] and be able to kind of process the server tree and the client tree as like a single pass

[34:03] with multiple bundle outputs for different targets. And that's not something that bundlers are great at today.

[34:09] So we can try to add it as plugins, which is what we've been doing.

[34:13] But really ideally you would redesign a bundler around this idea.

[34:16] And I think, you know, TurboPack is like one, you know, implementation that currently treats it

[34:23] as a first class feature. And I think with time, other bundlers will,

[34:27] and like I know that Devon from Parcel is also working on this.

[34:31] And I think with time we'll see this feature adopted more broadly.

[34:35] And then I think we'll see other libraries, now that the feature is in the bundlers,

[34:39] I think we'll see maybe Vue or Svelte or others taking advantage of that in like implementing

[34:45] similar architectures on top of those features. - Yeah, I actually saw a stream yesterday with Evan Yu,

[34:52] who hopped on with Theo to talk about what they're doing with Vite and Vue and all of that.

[34:57] And one part of that discussion was Vapor, which I believe is like an early exploration

[35:01] of like what could server stuff look like in Vue? And it doesn't mean Vaporware, by the way.

[35:06] I'm hoping it doesn't anyways. But it's definitely spreading right now.

[35:11] And if the creator of Vite is exploring it, that could mean it sort of, you know,

[35:16] spreads out to anyone else who's using Vite, which as far as I know is most frameworks

[35:21] that aren't Next.js or Remix. Even Remix is trying Vite as far as I know.

[35:26] So TurboPack for me is like a wait and see. I'm very curious about it

[35:30] 'cause I got to speak with Jared a little bit in person. And it's definitely about like build caching,

[35:37] being very focused on, you know, compiling everything down to the very function

[35:42] that you're trying to get and doing it efficiently. So I think there'll be sort of two competing threads

[35:49] of like Vite is using all the tech we have today and TurboPack is kind of adapting Webpack

[35:54] into something that could work better tomorrow. - Well, I think TurboPack is a completely new code base,

[36:02] or it's not related to Webpack. So it's a rethinking of, yeah.

[36:09] - It's complicated 'cause I heard the talk that said this is the successor to Webpack,

[36:13] even though it's entirely different as far as I can tell. Like I don't think it uses the same config or conventions,

[36:19] but I haven't tried to use any of it yet. - Yeah, I think it's successor just in the sense

[36:24] that like the bias is working in. So it's like, what did the bias learn

[36:30] from like, I don't know how many years of Webpack and... - Yeah.

[36:36] - Yeah, how do you design it again now that you know all these lessons?

[36:40] Which is kind of similar with like server components, that's kind of what we've seen.

[36:44] And I want actually to mention, because you were asking about the history and like influences

[36:51] and for server components, it's really many influences. It's like, it's our old XHP stuff.

[36:57] It's our native stack that works, let's just do native apps driven by server driven UI.

[37:06] It's really, so a lot of contributions to server components model came from Relay and Joe Savona

[37:13] and people on the Relay team. It was early exploration,

[37:18] like some of the earliest design drafts were collaboration with the Chrome team

[37:25] and with the Next.js team. So Next.js was kind of,

[37:30] because like get initial props was one of the inspirations for this kind of API.

[37:35] So that like we were kind of like talking about it with Next.js team a long time ago.

[37:41] And so it's really, it's unifying many branches and there's a lot that we were inspired by

[37:49] while working on it. - Yeah, and I kind of let that GraphQL point drop earlier,

[37:54] but it's a really, I never made that parallel, but it makes sense of like,

[37:59] it has that same goal of only send data to the client that is necessary in order to render what's on the page.

[38:06] And today, like if you want to render anything, you can optimize your API as hard as you can

[38:11] to make sure it only sends the data that you want. But people kind of realize GraphQL is hard to set up.

[38:16] Sometimes it's too heavyweight. So if there was a way that basically filters it out for you

[38:21] where you're writing your own backend to grab that data and just hydrate the little pieces you want down the chain,

[38:27] like that's oddly a successor to that idea of like making sure all the data you send down

[38:33] is actually lightweight. And I'm curious if we'll ever end up with DevTools around,

[38:37] I'm sure we will end up with DevTools around that, but it's something I've never really thought about.

[38:41] It's like, how big are my props? Like I'm probably sending a ton of props right now

[38:45] and I have no idea what it is. And the easiest thing is to just send all the props.

[38:50] But if there was a way to debug, like your props bundle is like 10 kilobytes of JSON.

[38:54] Are you sure you wanted to do that? Like, I think that would really make server components

[38:58] start to make even more sense. - Yeah, it's pretty tricky.

[39:03] I think like the whole kind of monitoring story, like the other piece of the puzzle there

[39:10] is you don't really have much, like you don't have a network timeline for the server,

[39:17] which I think makes people anxious. Like, oh, is it going to have so many waterfalls?

[39:22] And like, you can have waterfalls with something like Remix too.

[39:25] Like it's actually pretty trivial to have one, but it's not obvious.

[39:31] Like, I think if we had better to link for just visualizing what the hell happens on the server,

[39:37] how did your requests get processed? I think that would ease a lot of this anxiety

[39:41] and it would also be useful for other frameworks. Like it's not server component specific.

[39:47] So I think like we need a lot more, like I think the kind of the optimizations

[39:52] and developer experience would get like a lot better when we have better observability

[39:58] into what happens on the server and what crosses the boundary, like what gets...

[40:04] Yeah, and like, what is contributing to that? Like which components have really like a lot of output

[40:11] and then you're like, okay, let's make this one client component

[40:14] and then increases the bundle size a bit, but then we don't have to send the stuff

[40:19] it generates on like every navigation. But that's also the beauty of this paradigm

[40:23] is you can flip it back and forth. - You can flip it back and forth.

[40:27] - Yeah. - Yeah. I remember from that space, I was like,

[40:30] that's the one thing Astro doesn't do very well 'cause it's like you styling

[40:33] or you can do styling differently, which can get in the way. I also do wanna shout out Joshua who rated

[40:39] and apparently works at Code Academy as well. He was chiming in a bit.

[40:44] Oh, I tried to shout out, but it said it doesn't exist. Sorry, go follow Joshua, everyone.

[40:49] But he was saying like, yeah, definitely run into the big props bundle at Code Academy

[40:53] of like the slowdowns were really just slamming a bunch of data down the pipe that didn't need to be.

[40:59] And it was just delaying the mount because it had to get initial props, which was a lot,

[41:04] and then hydrate it all onto the page. And there was no way to sort of introspect that,

[41:09] like because you're on the client, you're not really introspecting what your server is doing

[41:13] when you're on that boundary. - Well, yeah.

[41:16] So the other thing that maybe is not obvious, but when I talk about server components,

[41:21] also including like 10 years of hard thinking about optimizations, it's also stuff like this, right?

[41:28] So like with server components, you don't actually have this kind of waterfall

[41:34] where like in traditional server rendered React frameworks, including all the Next.js, you would have this, right?

[41:42] Like you have to download all the code, then like enough to hydrate your page, right?

[41:48] Like the main chunk. Like you have to get all the data like inlined into HTML

[41:54] and only then you can start hydrating. So like server components doesn't work like this.

[41:58] In server components, you only need like enough to like get the initial shell to hydrate.

[42:05] So actually your components, your client component chunks, they're loaded asynchronously.

[42:12] And so React can start hydrating before all the data arrives, before all the code arrives.

[42:18] Like we actually want to start as early as possible. And then we kind of like make it free interactive

[42:24] as like chunks of code, chunks of data streaming. They're like separated.

[42:30] If you see like how Next kind of generates the stuff is like it emits separate script tags

[42:36] that add a little bit more data as it becomes available. And like we update the UI as it becomes available

[42:43] even before React actually loads, like we're able to update the UI

[42:47] to progressively show more output from the server. So like it's all designed to be very incremental

[42:53] so that you don't have these things where you have to do like the whole paths

[42:58] on like of one thing and then the whole paths of another thing.

[43:00] It's like you're just small bits here and there. So it progressively becomes more and more interactive.

[43:06] - Yeah, exactly. And I think that's a good segue

[43:09] into a little bit of code that I have to demo that's outside of Next.js.

[43:15] So it looks like you can still see my live share but I'll start by giving a little context

[43:21] on like what we might try to build today. It's meant to have multiple steps.

[43:26] So if we don't get to all of them, we at least have something at the end of the day.

[43:30] But let me also screen share for the lovelies out there. Guess screen share, cool.

[43:37] So this is just a basic mock-up that I put together of something you might try to build

[43:43] when you're building an application. I called it AbraMix as a pun on Abramov.

[43:48] I tried, I really tried here. - It's horrible.

[43:51] - Yeah, well, thank you. But this is like a basic song interface you might have

[43:57] where you just have a readout of all of your albums. You might have a search bar that filters

[44:02] which albums are showing on the page. And I'd love to talk about like, how would you do search?

[44:06] Where would you do that logic, client versus server? Since I've wondered that a lot.

[44:11] And maybe you have individual routes for every album where you click into one, it goes to slash album name

[44:19] and then it shows you more information. And that can be client-side routing.

[44:23] We've used Next.js for that. I think it's a pretty clear upgrade journey.

[44:28] But as a workbench, to try that out, I have a server running over here

[44:36] on what I called simple RSC, which is a repo that people can go try out now

[44:42] if they want to. It only runs on node version 18.13

[44:45] because I'm bad at testing things before I deploy. But if you want to try it out,

[44:50] it's just a node server that builds some React components using esbuild and lets you see a single route on the page.

[44:59] There's no routing. There's no opinions around really anything.

[45:02] All that's coded into this is a way to write a server component

[45:06] and a debugging view at the bottom of the page that shows you all of the stuff

[45:11] that is coming down from the server as the page is rendering in real time.

[45:16] And you can see a basic example of that off to the right, where we have our server component over here in our editor.

[45:24] There's some stale imports that we're not using right now, but all this is doing is it's creating a server component.

[45:29] It's rendering an H1 saying, welcome to server components. Oh, is the repo still private?

[45:34] Oh, dang, thank you for the call out. Let me hide my screen share and change it to public

[45:42] so I don't dox myself. And then I will show it again.

[45:46] If I go to settings, change visibility, change to public. I want to make this repository public.

[45:53] Please, please, please. I have to send an SMS to myself to make it public.

[45:58] Oh, my God. (laughs) There's three dialogues and a text message.

[46:03] That's crazy. 605, 043.

[46:07] Okay, now it should be public. If anyone wants to click on that link,

[46:13] you can go try it out. And now I have to go back to code, hold that up,

[46:20] and send in the chat. All right, but yeah, I heard your opinions earlier

[46:26] of like, you're probably not gonna do this to do anything production-ready,

[46:30] which is why I only set this up with the dev server. I only set it up with a panel of everything that's going on.

[46:37] And there's no way to actually deploy this to production right now,

[46:40] because that's not really the intended use case. But yeah, off to the right is the most user-friendly feed

[46:47] that I could create. And it is literally showing you all of the stuff

[46:51] that is coming down the wire when you stream something. So here, what we're rendering on the page

[46:56] is just some instructions, as I would call them, from the server to go make some JSX DOM elements

[47:02] and then append them to the page as we're seeing here. And there's no hydration or server rendering going on.

[47:07] It's just like a client that fetches a server component and shows it to you.

[47:11] Yeah, first, do you have any like initial questions on this setup and everything that I have going on?

[47:18] 'Cause there is a lot under the hood. - Are you asking me or the viewers?

[47:24] - A little bit, just to slow down for a second. - No, no, I'm saying, is it a question to me?

[47:30] Do I have questions or are you asking somebody? - Yeah.

[47:33] - Yeah, okay. Yeah, maybe one thing I'm not sure about

[47:37] is how did you get the build set up? Like, you said you did your own like bundle plugin?

[47:46] - Yes, I did. So the build is actually pretty interesting.

[47:52] It's inside of this handler.js file, and this is going right in the weeds,

[47:57] but I don't really mind it, where I set up a simple request response handler.

[48:03] That's all this is. It just takes in a web standard request, sends a response.

[48:07] And in order to get the server, I set it up to import a built server.

[48:14] And the bundle map is something that's generated separately.

[48:17] As it crawls through the page, it discovers client components

[48:20] and puts them into this map that it's able to match up at the end of the day.

[48:24] That gets into client components, which I guess we'll explore in a moment.

[48:28] But that's all it really does for that. The more interesting file,

[48:32] actually, I just remembered that I moved the build step out over here.

[48:37] I can jump over here, but this is using ES build to do everything.

[48:42] So not necessarily plugins, but it's got a two-step build process right now

[48:47] where it looks for that server component and it will output it just using a JSX transform.

[48:54] It's not gonna resolve any modules or anything. It's literally just gonna output it

[48:58] with the JSX transform, leave everything else alone. And the one weird piece is this part right here.

[49:04] Anyone watching at home, don't do this, but I am reading the file

[49:09] whenever it discovers a client component. I'm checking for the use client directive

[49:14] and I'm doing this wild line right here that inserts a few things that Webpack looks for

[49:21] in order to decide if something is a client component. So it's sort of like imports it inline.

[49:26] It tells it that it's a client reference, and then it returns that in order to import onto the page.

[49:33] And I figured out it works. It's not using Webpack and it still does technically work.

[49:38] But that's an under the hood view. I'm sure you don't have pleasant opinions about it,

[49:43] but it works. - Yeah, I just,

[49:48] I think I don't fully understand the handler part. So this runs, like, what is the...

[49:55] - Oh, sure. - Well, why is there like a path?

[50:03] Oh, so this is the thing you fetch, right? I don't know if you see the thing you fetch.

[50:08] - Yeah. - Oh, okay. Yeah, so this is the server components endpoint,

[50:12] so to speak. - Yeah, and I couldn't think of anything.

[50:16] - It's a bit confusing because it was like, it looks like I'm fetching JSX

[50:20] and like, well, what is this about? - Yeah, I named it that thinking that's how it worked

[50:26] and realized that's not what I'm doing. I'm actually sending you the stream.

[50:29] I'm not sending you the file. - Yeah.

[50:31] - So that should probably just be cool. - Yeah, yeah, this is kind of more like RSC or, yeah.

[50:37] It's just like an API. It's like a GraphQL endpoint, I think,

[50:45] except instead of GraphQL, it's like React. But yeah, yeah, okay, now that makes sense.

[50:51] I get it. - Yeah, I should have explained that part

[50:54] 'cause I realized after the fact like, that's not what it is.

[50:57] And I also looked through some of the React docs and the content type of what this sends down is like,

[51:02] X component is one way to put it, it's special. It's something that React understands

[51:07] is the way that I would put it. - Yeah, okay, yeah, that sounds good.

[51:14] Yeah. - Yeah, no, I don't think I have any more questions.

[51:18] So we can maybe try to do something. I do want to clarify, though, for people watching

[51:26] that if I understood correctly what you're saying, like the architecture here essentially is that

[51:31] the browser will load like an empty HTML shell, which is kind of like a traditional CRA app, actually,

[51:38] like a web app, it's like it loads empty HTML that then requests the server component endpoint

[51:46] and like server component streams in what the server output is.

[51:50] So it's not super efficient because it has this like client server waterfall for the first load,

[51:56] whereas like a proper setup would actually do SSR as well. So it would do that on the server instead.

[52:03] So it would, like when it hit like index HTML, it would actually talk to the RSC endpoint on the server,

[52:11] turn that HTML, stream the HTML to the client, and that's how the initial page would be,

[52:17] like actually have content without like an extra waterfall. But this is much harder to do manually,

[52:24] and there's already enough of manual setup, so this is just the simplified version.

[52:29] - Yeah, and that's the call out that's definitely worth making.

[52:33] Because I'll admit, I tried, but I realized like doing that without blocking on suspense boundaries

[52:39] and like not just reading the whole stream, I was like, I can't,

[52:43] I don't know what I'm supposed to do here. I know Next.js knows, they figured it out.

[52:48] But yeah, it's a different problem. - It's doable, like we actually have example

[52:54] in the React repo, so we go to the fixtures/flight. It has like a super--

[53:00] - Oh, believe me, I've had every page visited at this point. - Yeah, so it shows how to do it, but it is confusing.

[53:08] - It's a lot. There's, oh yeah, we're a client emulator.

[53:13] This is the page that I was reading for a little bit of like, oh, wow.

[53:17] - I don't actually see, because I think you're sharing just the part of the screen, so I don't know.

[53:21] - Right, I shared an individual tab, which means I would have to visit it in this tab,

[53:26] and then it would work. It also might be delayed.

[53:30] - Right, yeah, this is gone. - Yeah, this is the weird part,

[53:35] and this definitely speaks to what you said about client isn't really like browser.

[53:40] Client is just whoever wants to consume that server component, and it could be the server itself

[53:45] in order to render it to HTML, or it could be the client when you're trying to do client-side routing,

[53:50] which is usually what you'd end up with here. Yeah, the initial load of, oh, I have to hit back.

[53:57] The initial load of this, that's not good. You wanna have the server rendered.

[54:00] But if I want to load this as another route coming in, then it actually makes sense.

[54:05] I actually wanna get this full stream and just render it onto the page in JavaScript.

[54:08] - Yeah, exactly. Yeah, I think another thing that's worth highlighting maybe

[54:13] is I think sometimes people have this wrong mental model of when they have a server component in the tree,

[54:22] like you go to the server, and it's like each individual server component

[54:26] is gonna render it independently, but it's really not like this.

[54:30] It's more like, it's just there's, I think in a simple setup, like the one that you have,

[54:37] the only server component that you talk to or render is the top-level one.

[54:43] So it's really about top-down rendering, the whole page. If you refetch, it's gonna go to the server component server

[54:52] and re-render the app, the top-level thing, and get the new output for that.

[54:58] And then that's, of course, not super efficient. So this is why with something like Next.js,

[55:03] you have nested routing where the granularity is to the sub-route level.

[55:09] So you can't update one small server component. That doesn't make sense in the model

[55:15] because they all have to be consistent with each other. But what you can do is you can invalidate a sub-route.

[55:22] So that would be like, for example, if you have a shell of the page

[55:25] and then they have some kind of tab interface, and you have about, photos, memories, whatever,

[55:32] then when you switch those things, it's just this part that gets independently

[55:37] kind of refetched from the server. But if you want to refetch something broader,

[55:42] like you want to change, there's a mutation that affected something else on the screen,

[55:47] you just refetch the whole thing. And this might sound like, oh, this is gonna be super slow,

[55:51] but let's remember that this is literally what happens if the user just opens the page in a new tab.

[55:57] So it's not like, it's not that different from traditional web model.

[56:01] - Yeah, it's not. And that is a real big thing of like,

[56:06] routes aren't necessarily full routes. They're layers of an onion or individual components

[56:12] that you can just slot into view. Like this server component that we've created here,

[56:16] this could be fetched from some other route on the page, and it could just add welcome to server components

[56:21] below like a navigation bar and other things that are being rendered.

[56:25] It's just a way to like officially fetch server stuff. - Yeah, but then for that, you kind of need a framework

[56:30] because like implementing this kind of nested thing in this demo, like that's yet another level of complexity.

[56:37] And that's why, you know, DIY is actually really hard today because you just don't have a router like this.

[56:44] That's, you know, there is no RSC router you can use off the shelf.

[56:48] But you can write one. - You can write one.

[56:52] I'm not gonna invite myself to do that. I've already sunk too much time into this.

[56:56] But yeah, that's why I guess the main goal of this project was like,

[57:01] I just want a way to workbench one server component and have a dev panel of the stuff coming down the pipe.

[57:06] And that's it. Like no opinions on routing 'cause as you kind of mentioned,

[57:10] like React is, I don't know if you said this yet, but React is more of an architecture and a library

[57:17] than it is a framework. And in order to have any opinions about like,

[57:21] where do the routes go? What is the nesting strategies that you probably want?

[57:26] Like that's immediately framework opinions. And that's already taking things to a new space.

[57:32] - Yeah. - Yeah.

[57:36] So with this, I'm thinking like maybe we can put some albums on the page and render them out to start.

[57:43] I have some really basic endpoints here and this is literally just fetching some JSON.

[57:49] And I say fetch, it's just an import with an artificial wait time to make it feel

[57:55] like it's a server, but it's not. It was just the easiest way.

[57:59] - Where should that be looking? I'm not sure.

[58:01] - Sorry. Right.

[58:03] I was just looking at this DB fetch file. - Oh, okay.

[58:06] - Which is, yeah. This part isn't too important,

[58:09] but I just made some JSON dumps of good albums that I like. That's why I actually mentioned to you earlier,

[58:16] like if you want to put an album on here, we can. 'Cause you put out those really good tweets

[58:20] of just like a random song on Spotify. Like, this is great.

[58:23] Like, you know what? You're right.

[58:25] It's really good. But yeah, that's all this is doing.

[58:28] I have a get all, which will wait 300 milliseconds and send you all the albums and get by ID

[58:34] where you can pass in an individual ID slug, whatever you want.

[58:37] So if you want to do routing, that's how you would get like an individual entry.

[58:42] - Okay. - But yeah, I hopped back over here.

[58:45] I think I have to keep like focusing you to bring you into the- - Yeah, yeah.

[58:49] - We're trying VS Code live share, by the way. So we'll see how it goes.

[58:57] Anything goes is the idea here. If we want to jump in and type code,

[59:01] either one of us can do it. But yeah, in order to render all of the albums

[59:06] onto the page, well, I've already kind of done it. I kind of spoiled it.

[59:12] Where in a server component, you can just say, wait, get all the albums.

[59:16] And then to put them on the page, I guess we could just do a map over whatever's going on.

[59:21] And ooh, there's one thing I asked about earlier, where I was wondering why you would need an ID prop

[59:29] or a key, that's what I'm thinking of. Because that's always been the thing with React lists

[59:34] that I forget, which is adding a key onto every entry. So is that still required?

[59:41] And if so, like what is sort of the benefit to that? - Yeah, so maybe I think like to answer that question,

[59:47] like do you know why it's required? If we put server components out of the story,

[59:52] like do you know why it's required on the client? - Yeah, I know why it's required on the client.

[59:56] Usually for like, if the list updates and you need things to reorient

[60:03] and you want it to re-render efficiently, then a key will actually tell React,

[60:06] this is the part that was removed. This is the part that got moved up.

[60:10] So if you want to like animate that transition of like the item with a key of four

[60:16] moved from this position to this position, React can track, oh, that's the thing with a key of four.

[60:21] I know how to animate that up if you're using some external library for it.

[60:25] Is that kind of right? I know there's more reasons.

[60:28] - Sort of. I think like maybe the focus on efficiency is a mistake.

[60:32] And I think we've kind of maybe explained it badly in the old docs where we explained it as,

[60:37] oh, if you want it to be fast, then you should use a key. It has nothing to do with being fast.

[60:43] It's, well, I mean. - Yeah, not fast. Yeah, it's not just to do it at all

[60:48] if you want to do a transition. - Well, I don't think it has to do with animations either.

[60:53] It's really about kind of identity across re-renders. So it's about state.

[61:05] And I don't mean just React state. I mean, even, you know, like input state in the,

[61:10] like if you just render an input that's uncontrolled or like focus or scroll position

[61:17] or like any of the things that are kind of stateful, it's about, like imagine you render a list of components

[61:28] and then each of those components has an input inside. And again, this input doesn't have to be,

[61:34] like it doesn't have to have like a controlled value proper or anything like this.

[61:37] It could just be, you know, browser input, React doesn't touch it, like you can do whatever with it.

[61:42] And so you type into each of those inputs and then suppose the first item in the list was deleted.

[61:50] And so there's a re-render and React now sees that there's, you know, the item, like you're rendering

[61:59] like two items instead of three, like the first one is gone. And so if you don't provide the key, React has no idea

[62:06] which of these items correspond, you know, how do the old items kind of match to the new ones, right?

[62:12] Because it could be like this, it could be like, but it could be like this.

[62:16] So like, it can't know which one was deleted because it just doesn't have the knowledge.

[62:25] And so if you get it wrong, so like, if it just tries to, you know, like for example, like it just matches up

[62:31] like this, so, you know, just go in and that's the default, right?

[62:34] It goes in the direction, so like it thinks this is the first one, used to be here, now it's here.

[62:39] This is the second one, it used to be here, now it's here. So the inputs will be preserved, right?

[62:47] And so if what actually happened is this, so the first item got deleted,

[62:53] then you're gonna see a wrong inputs at wrong positions. And that is really the issue is like,

[62:59] if you've already modified them, but then things shifted, you're just gonna see like, it's kind of the same.

[63:06] - Okay, imagine you're in the bus and there's like 20 people in the bus

[63:12] and everybody has, you know, everybody has a seat and you leave some stuff on your seat,

[63:19] like maybe you leave your headphones on the seat. I've done that once and they disappeared.

[63:24] And so imagine the situations, you leave the bus, when you come back to the bus, you wanna go to your seat,

[63:33] even if there's fewer people, even if some people got off the bus,

[63:36] you want to remember which seat is yours. You don't wanna like sit somewhere else.

[63:41] And so what happens if you don't specify a key, it's like you don't know what your seat is.

[63:48] So you can just, by default, you're gonna be seated in the order.

[63:53] That's kind of the default for the keys, just like index. So it's like the first people who gets on the bus

[63:59] goes to the first seat, the second person goes to the second seat and so on.

[64:03] And so if one of the people has left, then everybody else will get the wrong seat

[64:09] because the order has shifted. And that's why you need keys.

[64:13] - Yeah. - And so it's the same with-

[64:15] - You don't notice it all the time, but like, I've definitely run into that.

[64:19] Like, why can't you just use like the index in the array? It's like, well, if you do that,

[64:23] you actually get a clearer idea of why keys are bad, or like why you need a key.

[64:28] Where if you remove the first item in the list, now all of a sudden item zero became one,

[64:33] item one became two, item two became three. So it's like, they're all different people now.

[64:38] It's like everyone on the bus traded seats all of a sudden when that actually didn't need to happen.

[64:43] - And the thing is like- - You don't always notice it.

[64:45] But with animation libraries, it's like you do. - Yeah, so this is very interesting

[64:50] because you don't always notice it. And like one way to notice it is, yes, animations,

[64:56] because they make it obvious that, wait, a thing disappearing is a very different thing

[65:00] from things reordering and updating. But another way to notice it is,

[65:07] and that is the most insidious thing, is like initially you don't add a key

[65:11] because it seems to work fine. And then like five months later,

[65:15] somebody adds a little bit piece of state somewhere deep down in the item components,

[65:22] like even like five levels down. And this piece of state will get misplaced

[65:27] when they reorder because you didn't give the right key to the top level thing.

[65:32] So it's like if everybody leaves the bus, but nobody has headphones on the seat,

[65:36] the seats kind of don't matter. It's okay to sit anywhere.

[65:39] But if you start leaving your valuables, now it becomes important.

[65:45] So that's why, and sometimes index as a key is fine when that actually corresponds to the identity.

[65:51] So it's like when literally it's important, the first thing is the first thing,

[65:55] the second thing is the second. That's what, you know, like a list of words

[65:59] in a sentence or something like this, or like the first line of code, the second line of code,

[66:04] then it kind of makes sense that, yeah, the index is actually the identity of that thing.

[66:09] It makes sense that, you know, so. - Yeah.

[66:12] - Yeah. - I agree.

[66:14] - But I'll say specifically the server components part of this is, it's important for server components too,

[66:20] because server component output can be refreshed. So if you have, for example, like a refresh button

[66:27] that will cause, you know, the server component output to update,

[66:31] maybe you deleted that album from the database and they're all gonna like shift by one.

[66:35] And so this is again why you want to have a key. - Yeah, that's the part that I like,

[66:40] I don't know what it looks like, 'cause I've only played with server components

[66:44] in a read-only model where it's like, I funnel all my data down, it renders on the page

[66:49] and any mutations beyond that are handled with client. And it sounds like there are ways with server components

[66:57] to like sort of refresh, refetch, like the same fragment of components

[67:02] and actually have it re-render, like server only search or something like that.

[67:06] - Yeah, that's exactly the point. Like you're not supposed to be copying, you know,

[67:11] props from the server into state and then like updating that state.

[67:15] - Yeah. - Like the whole point is not to have to do that

[67:17] and to just be like, something changed, just like you refresh an API call,

[67:22] except here you refresh the output. - Yeah, exactly.

[67:27] And I do wanna try that. We might have to move to Next.js to try it, I have no idea,

[67:32] but we'll just see. But I think that also speaks to like

[67:35] what we're getting over here. So what I did is I just rendered out

[67:40] the album titles as list items. And the immediate thing that you sort of notice

[67:46] in that dev panel at the bottom is it's not passing down the entire list of albums.

[67:52] It's only passing down a set of like instructions to like write out the name with the ID and that's it.

[68:00] Like there's no images in here. There's no albums that we weren't searching for.

[68:04] Well, I guess we're getting all of them, but there's also a big list of songs

[68:07] that could have been sent down the wire. But because we're doing all these instructions on the server

[68:13] it's only gonna send this. We basically wrote our own GraphQL query in a way

[68:17] of like get album and just the title field and then render that into something.

[68:23] - Yeah, I would maybe slightly reframe what you're saying instructions.

[68:27] And it's kind of correct in a way, but it is a bit, I think like there's a way

[68:33] to misinterpret it where you think the server is kind of sending commands.

[68:37] Whereas the mental model is more like the server just sends a response

[68:42] that's essentially you can think of this response as it's almost like JSON.

[68:48] So it's almost like a big JSON tree that includes your kind of your HTML components,

[68:56] like your React components. You know, like things like div and so on,

[69:00] except formatted as JSON, kind of like the virtual DOM. As well as like, if you have client components,

[69:07] it will send also render this like like button with these props.

[69:12] And so these props are also gonna be kind of like JSON, right?

[69:15] So you can imagine the response as just like big JSON object,

[69:19] except that would not be efficient because then you would have to wait

[69:22] for that entire object before you can like start rendering it properly.

[69:27] And so what we have, like our protocol is just the thing that splits this JSON into parts.

[69:33] It's like JSON with holes. So it says like, here's a hole

[69:36] that's gonna be filled in later. And so they're sent as, you know,

[69:40] as they become available, it sends more and more. But conceptually, it's more like, you know,

[69:46] filling in the remaining content. It's not so much like, it's not imperative

[69:50] as like do this, then do this. It's just filling in the parts as they become available.

[69:56] - Yep. Yeah, I kind of say instructions where it's like,

[69:59] React is gonna take this blob and convert it to JSX, which becomes actual like DOM queries

[70:06] to render stuff on the page. But I agree, it's like, it's not just the data,

[70:12] it's the HTML in a different shape. It's actually filtering out what needs to be rendered

[70:18] based on, well, what are you trying to render? Like you're not gonna use,

[70:22] we're not gonna send the album image down the pipe 'cause you didn't render an image, you never accessed it.

[70:27] So it's not sending down like the album object, it's sending down the values that have been put in there.

[70:34] - I'm curious, do you want to kind of show what happens if we kind of split it into the components

[70:44] so that you can delay, so you can send, okay, yeah, let's, yeah, let's do that.

[70:50] - Let's see it. I mean, I can type it out

[70:54] since I think all we have to do is this. So now I'm gonna make a separate albums call

[70:59] and Perdo's curious, like, you know, the wait is always going to be a blocking thing.

[71:05] It's not gonna send this until this is done. So if you wanted to delay that or control when this runs,

[71:13] you can move the query somewhere else or even pass down the promise as a prop,

[71:16] which is something that I've seen the experiments with. And in here, I'm going to just pass down the list

[71:25] without the other stuff. And do you want me to put a suspense around this

[71:29] or just put albums? - Let's maybe start with just albums

[71:33] and then we'll add suspense and see how it changes things. - Okay, oh, it's thinking that's the thing.

[71:39] There we go, too helpful. And don't worry about the squiggle.

[71:46] That's just 'cause it doesn't know about async being a thing.

[71:50] I know that's like a patch you can make in Next.js. But yeah, what we get here--

[71:56] - I think you want to get rid of this line too, right? - Oh, you're totally right.

[72:00] - Yeah, okay, that's better. So now, yeah, everything comes down

[72:06] in one chunk, it looks like. And this isn't split perfectly.

[72:10] This was supposed to split out this part from this part. I'm still trying to figure out how to parse it

[72:14] 'cause sometimes things come so quickly, it's like part of the same message.

[72:19] But generally, what you're gonna get is you're gonna get the welcome to server components

[72:23] and then immediately, you're going to get the next chunk and you're going to load in tandem.

[72:30] - Yeah, so what I want to call attention to, can I, like, yeah.

[72:35] So what I want to call attention to is this protocol that you're showing in the dev panel,

[72:40] that's an implementation detail, so it's not actually something you're supposed

[72:43] to be able to read or care about, except for, I don't know, maybe some kind of debugging.

[72:48] But mostly, if you're debugging React, like if you're working on React, yes, that's useful.

[72:53] But it's not something we want you to think about and it's gonna change over time.

[72:56] It's not super optimized yet. But if we're using it as an instructional tool

[73:04] to kind of teach how this works, I think it's interesting to notice,

[73:08] yeah, I see your formatting is a bit messed up because you see it says like zero, colon, blah, blah, blah,

[73:14] and then it says one, colon, blah, blah, blah. I think those were supposed to be separate lines

[73:19] because like in the response, there are separate lines. But I want you to notice how it's structured.

[73:24] Like, do you notice it's like zero is like the first line and it says at one?

[73:32] And I don't remember the exact syntax, again. That's not the point.

[73:35] But it kind of references, like this is a whole. It says like the result of zero

[73:40] is gonna be streamed under number one. And then you see like number one says

[73:45] you need to have like a header with welcome to server components

[73:50] and then the rest is gonna be streamed under number two. You see it says like L2 is like,

[73:55] I don't remember what L means, it says that that's gonna be coming later.

[73:59] And then two is like the remaining response. And so these are these like,

[74:04] that's the key thing that makes it possible to stream parts because we just leave holes

[74:09] and we're like, yeah, this thing, number 42 is gonna be filled in later.

[74:12] And then we're able to like stream that part. - Yep, and yeah, I agree.

[74:18] Like, you're not gonna be looking at this. I didn't really care about the formatting

[74:21] so much as like what data is coming down and what's the order?

[74:26] Like this data came down a second later, why? And yeah, the dev tools are split up

[74:31] by like the order to stream comes in and I don't split it up by these like numbers,

[74:36] but that's the indicator. That's where the holes are,

[74:39] which is probably what you're looking for if you're thinking like first bit is this,

[74:42] second bit is this and you can see like two matches up with two and all that.

[74:46] - Oh, maybe if you add the, you know, the pre-wrap or, you know,

[74:52] whatever the CSS thing to preserve new lines, maybe then it will split zero.

[74:56] Because the zero and one are, I think they arrive in the same response chunk,

[75:02] but they are like separate lines. - But they are separate things.

[75:05] - Yeah. - Yeah. - But it doesn't matter, it's just.

[75:08] - It doesn't matter. And sometimes changes where it's like,

[75:12] ah, I decided this chunk should load with the next one. And sometimes it's like,

[75:15] no, it's more efficient to put it up here. So there's some optimization going on.

[75:19] But in this example, am I right that at least as the user sees it,

[75:25] you're going to see all of this stuff coming in at once? Like you're not going to see like one, then the next.

[75:32] And yeah, I see that there. - Exactly. Exactly, and the idea here is

[75:36] the way you structure your, like the way you decide which components

[75:45] do what kind of data fetching and like moving data fetching calls between them

[75:49] should not affect the visual output for the user, because, and I think that is like,

[75:55] I feel like there's a bunch of things we've learned that like we haven't communicated super well,

[76:00] but I think like this is one of them. Like you want to have the freedom

[76:03] to move the data fetching code around without any effect on the user experience

[76:09] or like the way the user perceives it. And then you want the people who are not necessarily

[76:15] super skilled in like how data fetching works, like a designer to be able to say,

[76:23] I want like this piece of JSX to have its own loading indicator,

[76:28] like its own skeleton, and to be able to do that completely declaratively

[76:33] just by putting it into JSX tree without worrying about how it's actually kind of streamed in.

[76:41] So the way the loading, the progression, the loading sequence that the user sees,

[76:50] like the visual loading sequence is completely decoupled from the streaming sequence,

[76:57] because for streaming, we want to stream as much as we can, as early as we can, as we discover things.

[77:04] But then to the user, we want to present them, like each visual state should be intentional

[77:09] and only correspond to what the user actually wants to see. - Yeah, and definitely seeing that here.

[77:16] And I know that as you sort of cascade down multiple fetch calls,

[77:21] it's really just going to wait for everything before showing to the user.

[77:24] If you aren't suspending, if you aren't doing anything like that,

[77:27] it's just going to bunch up all of those requests. And you can do a promise.all at the top level

[77:32] if you really want to be smart about like parallelizing each fetch.

[77:36] But that's exactly what we're seeing here. I'm like, even though it's in the second one,

[77:40] it's all going to come down in one big chunk. And I alluded to how you could avoid that.

[77:45] But, well, okay, I say avoid as if it's a bad thing. This is actually the behavior you probably do want.

[77:52] But if there is like behavior, when would you say like is a good use case

[78:00] for wrapping something in a suspense boundary? It's probably pretty nuanced,

[78:03] but I'm curious if you have thoughts about like where you found it.

[78:06] - Yeah, I would just say like, if it feels slow 'cause you have a slow data source,

[78:13] or there's a lot of logic that needs to be downloaded. It's like suspense also works for client,

[78:20] like it's integrated with everything, right? Like we're going to integrate it with CSS.

[78:24] We're already integrating it with images. So it's already integrated with code.

[78:29] It's like if you render a like button component that's a client component,

[78:33] and the suspense is going to wait automatically for that client code to load,

[78:39] even if it's code split. Big in like it is code split by default.

[78:42] Like if you import the client component from the server component,

[78:46] it's like there is no need to do code splitting. It's just code splitting is how it works.

[78:51] And so it's going to wait for that code and any data and in the future,

[78:56] like CSS or images to be ready. And then it flips, you know,

[79:00] it makes it visible when like all the things in that tree resolve.

[79:03] So I think pragmatically speaking, it's just you have something that loads

[79:07] that takes a bit of time. You don't know why it takes a bit of time,

[79:10] but actually it doesn't matter. You just wrap it in suspense.

[79:13] And that kind of lets you unblock the rest. It's like, here's the slow part.

[79:19] I have some, I asked the designer, like I am the designer.

[79:22] I designed some visual skeleton for that thing. I'm just going to plug it in here.

[79:27] - Yeah, I think that's really cool that y'all are just seeing as like any slow data source,

[79:33] no matter what it is. I don't know what it would look like to say,

[79:35] like wrapping a style sheet in suspense or something like that, but-

[79:41] - Yeah, that would be more automatic. So if you imagine, for example,

[79:47] a component imports like a CSS module or something like this,

[79:52] and or like some kind of static CSS and GS with like static extraction,

[79:59] then you could imagine a compiler or like a framework would put the link tag

[80:05] for that style sheet into component output automatically. And then the React would know to wait

[80:10] for that CSS to load before it can display the component. It would put the link tag into the head

[80:16] or something like this. So it would be automatic.

[80:19] It's not something you think about, but it's just better than the current best practice

[80:25] of like either you load all CSS in the beginning for like the entire app,

[80:31] or you do some kind of split in, but then JavaScript can't even start executing

[80:39] before like independently of CSS because like they're grouped together.

[80:44] And like you want to have this ability of start executing JavaScript even before CSS loads,

[80:50] but then hold back the rendering until we actually have the CSS

[80:54] so that the user doesn't see unstyled content. So this would be automatic.

[80:59] Or another example is like you have an image tag, for example, of like profile cover,

[81:04] and you might want to kind of hold back showing the thing until you have the image,

[81:10] you know, unless it's like super slow or like there would be like a way to opt out.

[81:14] So you would be, don't wait for this image. - Yeah, that's the clear one to me

[81:18] 'cause I would love to have an API that's like suspense, suspense, fallback, like blurred image.

[81:28] And then inside of this is like the real image that we're going to wait on.

[81:34] And that's conceptually what it's doing. I'm sure you wouldn't just pass in blurred image,

[81:38] but it would be like, it's that hook to not ship like the massive Gatsby image component

[81:45] to the client that does all of these fancy fetches. Like it's just telling the server,

[81:49] like stream in the blurred image, then stream in the regular image when you're done.

[81:54] - Yeah, that's one way to do it. But I think like it also,

[81:58] it doesn't necessarily have to do with blurred images. Like I think you can think of this,

[82:03] like a blurred image is a kind of a next level of optimization that you could do,

[82:08] but just the capability of being able to say, like, don't show until this image is ready.

[82:14] Like don't, like wait for it to pop in. And then that, you know, that could be a blurred one

[82:21] if you want to make it, you know, like faster or it could be that you actually wait for the whole thing,

[82:29] you know, with a normal image, but then you do have blurred one as like a placeholder.

[82:34] So it really depends on like how you put it. So we'll see.

[82:38] But the capability, like the important part is just like, it would be hooked up automatically to the suspense.

[82:45] So suspense would act as, you know, you declare it to the specify.

[82:49] This is what I wanted to see if something inside is not ready.

[82:53] And then something could be like data, it could be code, it could be images, could be stylesheets,

[82:57] it's like anything asynchronous can hold it back and you don't have to like do it in your head all the time.

[83:03] - Yeah. And that does feel like the message I've been getting

[83:08] from Next.js where it's like, you know, don't worry about deployment target.

[83:12] That's automatic with how you're doing your fetch calls. Don't worry about image optimization.

[83:17] Just use the defaults and it'll load in the correct, like WebP, AVIF, whatever.

[83:23] Because these are decisions like we can make when there's a problem,

[83:28] but a vast majority of the time, we don't need to make it ourselves.

[83:32] Like there is a default that the framework knows about and it can probably just go ahead and do it.

[83:37] - Yep. - Yeah.

[83:40] And I also never demoed what this actually does. And I'm realizing these annotations are completely wrong.

[83:45] I'm gonna revisit this. But the main thing that we're getting over here is like,

[83:50] we get our welcome to server components and then a flash of fetching albums

[83:54] until the albums come down. And then the only difference in the response

[83:59] is that now we have this like React suspense idea where what I'm assuming happens is like,

[84:05] if it is wrapped in suspense, it's going to say, all right,

[84:09] here's that hole that you mentioned. Here's that separate component

[84:13] that you're going to slot in when it comes down the pipe. But I have a fallback for you while you're waiting for that.

[84:18] Don't like block rendering the whole page to the browser. Actually go ahead and render everything before this,

[84:24] show this fallback, and then L3 is gonna match up with this three

[84:28] that comes down 300 milliseconds later based on how we have it set up.

[84:33] So it's just letting the server like, show something in the meantime and stop blocking

[84:37] if it was actually an issue. - Maybe you can increase the delay a little bit

[84:40] and then it would be more obvious 'cause it's kind of really fast now.

[84:46] - Yeah. (indistinct)

[84:48] - I know. And if your delay is that low,

[84:50] you probably don't need suspense. I don't really know what the threshold is,

[84:53] but you feel it out. So I set it up here.

[84:56] Let's see what that does. Did it not?

[84:59] Oh, I don't think it's watching. That's the issue.

[85:02] Yep, I think my file watcher is only looking at source. But yeah, there we go.

[85:07] Now we see like a full two second delay. Maybe it's getting from like the Discogs legacy API,

[85:13] which is slow. I've used it before.

[85:16] But yeah, now you get like fetching albums. Maybe it's a beautiful skeleton that you designed.

[85:22] And then the three is gonna become this three as soon as it's ready.

[85:26] But now we have a fallback so it doesn't have to wait on it.

[85:29] - Yep. - Cool stuff.

[85:33] So, I mean, that's a basic demo of like suspense and fallbacks.

[85:38] Well, one thing I can do is actually top this off with an image on the top.

[85:45] And then I was curious to get into how I could generate a search bar for this

[85:50] and what would be involved in that. And I'll go ahead and do,

[85:56] I think album.what I call it? Cover?

[85:59] Yay, autocomplete. Alt, that, album.title again.

[86:07] That should be good. Now, well, I'm gonna, oh God.

[86:12] There's no styling. Let me see here.

[86:15] I could probably, I tossed tailwind on top of this thing

[86:18] just to make us move a little bit faster. So let's say class name with like 20

[86:24] just so we don't have to worry about that. Let's see that.

[86:28] Oh yeah, way better. And also turn off the delay

[86:32] so we can start working on this more easily. There we go.

[86:37] Okay. And now in our server response,

[86:41] now we're gonna get the image, but before it's just not gonna serialize

[86:44] what you don't use, which is kind of the beauty of it.

[86:47] So yeah, from here, how could I set up a search filter that does it?

[86:54] Maybe server side, maybe client side? - Yeah, so that's really,

[86:58] yeah, that's really your choice. That's kind of the fun thing about it

[87:02] is like you can do it either way and there are different trade-offs.

[87:05] So for example, like if you have the entire list on the client,

[87:11] so like let's say the thing we're talking about is like it's mostly gonna have like maybe 50 albums

[87:18] or something like this. You wanna always load them all.

[87:20] Then maybe it makes sense to the client search because well, then it will be instant, right?

[87:26] So it would be, we could just filter on the client and show the results.

[87:30] And that's one way we could go about it. On the other hand,

[87:33] if you have like thousands of albums and they're like paginated or whatever,

[87:38] and you don't want to download them all to the client, then it makes sense to make the search driven by the server

[87:45] and just pass down the, like update the URL as you like actually do,

[87:51] like each time you write into the input, you do a router navigation to like a different query.

[88:00] And then on the server, you read the query and you refresh,

[88:04] you just send the new output. So maybe we could do it both ways and just compare them.

[88:09] How do you feel about that? - Yeah, we can.

[88:13] I don't know if the server way will work without like page refreshes.

[88:17] We have the Next.js escape hatch in this repo. I put a Next app right up here.

[88:23] So if we need to, we can just drag this in, I'm hoping. But yeah, I think starting with clients a good idea

[88:30] because we didn't even demo client yet or how it even works.

[88:34] So I can make a separate file for that. .jsx and try to call you in here.

[88:42] And at the top, you just put use client. And sure.

[88:50] No, but close. Well, this'll be a search box.

[88:59] So in this example, it would pass through like all of the album info as props,

[89:03] I'm assuming, right? Where it comes from the server.

[89:06] And this is just- - Well, what do you want,

[89:09] like what component structure do you have in mind? I think I'm not fully understanding

[89:13] what do you want to put where? - Yeah, so the typical way that I would do it

[89:20] is this is a client component. It receives the get all results from the server.

[89:25] So all the albums come in here and then it has a form input that will filter what's showing.

[89:32] - And then it would render what? - It would render either all the albums or the results.

[89:40] Like if your input's blank, it would show all of them. And then as you start typing,

[89:43] it would filter based on the title. - Yeah, I think I just got confused by the file name

[89:48] because it's got like album, but I think it's searchable list or something like this.

[89:54] - Yeah, I think that's a good idea. Searchable, yeah, searchable list is fine.

[90:02] You like short names. - I do, sometimes.

[90:05] I actually, I either go really short like search or really long like searchable album list.

[90:11] - Yeah, searchable album list is nice. That's not the way, like on the homepage of,

[90:15] I don't know if you've noticed like on the React homepage, we have kind of a progression of examples building up

[90:22] and like it starts with like video, then there's video list,

[90:25] then it's like searchable video list, and then there's like conf pages and like this.

[90:30] So it's actually like the canonical example we picked. So that's kind of funny that we're doing that now.

[90:37] - Yeah, I mean, it works. Oh, that's cool.

[90:41] It's called searchable. Yeah, I've never said searchable.

[90:44] I would probably say like album list search, but yeah. - But then it sounds like the search is the just,

[90:50] like I think the thing that's confusing about it is it seems like it's just the, yeah.

[90:56] - Yeah, and so it's so hard to name your Lego bricks, but this will work.

[91:03] So yeah, search is set search, that's fine. And we're not gonna use like an actual search library

[91:09] for this. It would just be, well, that's, yeah,

[91:13] you could just do it like this. And this is really good, actually.

[91:17] Dang it, Copilot, you took all the fun out of it, but that is it.

[91:21] That works fine. So-- - Well, no,

[91:24] that's actually not that good. It's not a very good version because it,

[91:29] it would search in the middle of the words, right? So if you--

[91:37] - Oh, sure. - Yeah, I can, let me copy and paste.

[91:41] Like I have a version that I wrote for the React homepage that I can actually just copy and paste it.

[91:55] So this is the, yeah, let me copy and paste it here, except that's gonna be filter albums.

[92:03] That's gonna be albums. That's, that you called this thing search,

[92:08] so I'll call this thing search as well. And then the, what is the, what is the,

[92:13] what is the, we care about title and about, what is the other thing that we care about?

[92:23] - Artists? - It's just the title. - That's another field.

[92:26] - Huh? - Artist, maybe?

[92:29] - Yeah, but does it have, does it have artists in the album info somewhere?

[92:34] Like what's the structure? - It should. Yeah, and I can, actually, I set this up with JS.

[92:39] - Oh, yeah, okay, yeah, it has. - So I'll just go ahead and do that.

[92:43] - Okay. - Yeah, sure.

[92:48] Wait, what happened? Oh, because you start--

[92:52] - I think we're, I think we're typing at the same time. Sorry.

[92:55] - Well, that should work, but, okay. Yeah, that should work now.

[93:00] Yeah, and it's empowering, cool. All right, and this is, this is a nice little function.

[93:06] So this is just searching. I guess I'm looking at the split here.

[93:12] So it's looking at each word. Oh, okay, some of the words start with a keyword, nice.

[93:17] - Yeah, it's not super efficient. Like it's, it has some nested loops,

[93:21] but, you know, not just some, it has like three levels of nested loops.

[93:26] So it's actually pretty slow, but it's fast enough for us. And it's-- - Exactly.

[93:31] Yeah, that's what I'm thinking. Yeah, and does this handle the empty state

[93:36] where it's like show all of them unless you've started typing something?

[93:40] - Yeah, yeah, I think it does. Yeah, yeah.

[93:42] Yeah, it's, yeah, you can just pass the, yeah. - I'll go ahead and just do this.

[93:47] Albums, search. Nice.

[93:51] And what now? Well, there's no input.

[93:57] - Yep. - And yeah, I've heard onInput is a little more reliable

[94:03] and it's what I use. - No, no.

[94:07] - Is that the wrong one? - No, no, in React it's onChange.

[94:11] - All right, nevermind. - Yeah, it's just a weird name in Quark.

[94:16] It corresponds to onInput in the browser. - Oh, it does?

[94:21] - Yeah. - Okay, that's what I knew.

[94:22] Oh, that's weird. All right, the more you know.

[94:25] So that's gonna be that. Yeah, this should all work.

[94:29] So the last thing to do is just put it on the page. So I'll hop back over here.

[94:34] - Let's add suspense again because it's annoying that I'm gonna do it

[94:39] because it's annoying that it waits so much. So I'll just do a loading state

[94:49] because it kind of looks like something's wrong with the server components,

[94:52] but it's actually just because we don't have suspense. - Okay, interesting.

[94:57] Okay. All right, so we have that.

[95:03] And so we would put the client component in here, right? - Yeah, yeah.

[95:09] - I'm doing, yeah, you have to do that. Let me just ask her where we can just do this,

[95:17] but you know. - Yeah, sure.

[95:20] We'll fix it someday. - Someday.

[95:23] - Yeah. - Okay, so everything exploded, sadly.

[95:27] That could be on the build tool. That is me.

[95:31] Let me double check on that. If so, the next ASSK patch looking great,

[95:36] but that is the response that you'll probably get from the server

[95:39] because now what we're doing is we didn't filter which props that our client cares about.

[95:44] Now it's passing down everything, including the song list, which is like that little uncanny valley I mentioned.

[95:50] If you're not aware, you can ship a lot of data to the client that you're not expecting.

[95:54] So we could filter it, but right now we're just passing down everything.

[95:58] - Yeah, which is what you were doing anyway in the single page app, so.

[96:03] - Yeah. - Can you show what's crashing?

[96:06] Because I don't see the-- - Yeah, I'll give it a look.

[96:10] This error doesn't make a lot of sense to me. - I just don't see the error.

[96:14] I don't know if-- - Oh, okay.

[96:17] - Does it not show? - Yeah, it's crashing in the browser, not the server.

[96:22] - Yeah, but I don't see, I think maybe your screen share

[96:26] doesn't show me the DevTools console, so I have no idea what the error is.

[96:29] - Oh, weird. Oh, I thought the screen share might actually show it to you.

[96:33] Okay, interesting. - No. - Yeah, it's being really selective,

[96:37] but you're right, it doesn't. It actually hides the DevTools.

[96:40] All right, let me, and this shouldn't be affecting anyone at home.

[96:44] This is just our crazy setup. If I do this, now it should work.

[96:49] Maybe, yeah. - Okay, yeah, now I can actually see it.

[96:53] Cool. - Yeah. So, okay, this time it actually doesn't show an error,

[96:58] which is interesting. It just says loading and it never actually resolves.

[97:03] I also made the dev panel a little too big. Let's see here.

[97:07] Well, yeah, on the key prop, but wait, that actually doesn't make any sense.

[97:14] (mouse clicking) Oh, I put the key on the list item

[97:18] instead of on the wrapping div. I can do that, but that shouldn't crash the server.

[97:22] - No, that shouldn't crash the server. - No, it shouldn't.

[97:26] Yeah, and it's also still, let me just reboot this.

[97:30] In worst case, I'm assuming we can copy paste. Oh, there we go.

[97:35] Okay, something happened in the live reloading, which happens sometimes. - Oh, okay.

[97:42] - But we'll just go with it. But yeah, it looks like it's still rendering on the page,

[97:46] which is good. And we have an input, but since it's tailwinded,

[97:51] it unstyles everything, which is a little too aggressive. But yeah, if I do, yeah, look at that.

[97:56] So now we have it interactive, searching for artists and stuff.

[98:01] And I can search by that as well. Oh, I did the fancy O.

[98:05] Yeah, it's working. - For some reason, I don't see your screen updating at all.

[98:13] - Oh, really? - Yeah, it's stuck.

[98:16] - Well, I try. I'm learning this setup as I go.

[98:19] - Maybe I should go back to the thing you shared before, because that definitely was updating in place.

[98:26] - All right, let's do that again. - You'll have to just read the errors to me.

[98:32] - Just narrate the error. - Yeah.

[98:35] - Okay. Now I'm trying to find which tab it is.

[98:42] I have too many tabs. Oh, I called it future of React, which makes me forget.

[98:48] Okay, but yeah, can you see that? - Yeah, yeah, now I see.

[98:53] - But it's not, okay, it's really slow updates. It's really slow, but it does work.

[99:00] So yeah. - Do you mean it's slow in the browser

[99:02] or do you mean the stream is slow? - Definitely on your end.

[99:05] On the browser, it's definitely, it's immediate, as we've mentioned before.

[99:10] - Okay, cool. So maybe one thing that would be interesting to show here

[99:15] is maybe what happens if you remove useClient? Like what does useClient actually do?

[99:22] Maybe we could talk a little bit about this. - Yeah, well, I'll confess, when you remove useClient,

[99:27] React complains that useState doesn't exist, and that's just a separate thing with bundlers.

[99:34] - Yeah, so it's, I mean, ideally-- - Oh, okay, it's actually pretty readable now.

[99:41] - So it's supposed to tell you that it's not, like useClient is not supported on the server.

[99:50] - Yep, that's what I'm saying. - Yeah, so it's, and like the way you would,

[99:55] I think like the mental model you would have, I don't know, can I draw in your Excalibur link

[100:01] that you sent to me, like that we will see it? - Sure, yeah, I can pull it up right here.

[100:09] - Okay, so let me try to open it. Looks like I just need to find the link.

[100:16] But I kind of just wanted to show what exactly. Okay, so I'll draw just below your diagram.

[100:24] So let's see, can you see? I drew a, I'm supposed to have drawn like a rectangle,

[100:31] just below your thing. - I think I need to click on the link myself,

[100:37] because if I just go to Excalidraw.com, it doesn't show it.

[100:40] - Yeah, yeah, you need to go to the same link. - Go to the DM with that, Excalidraw.

[100:47] All right, I think we're here now. Yeah, there we go.

[100:56] - Okay, cool. So if we kind of think about our structure right now,

[101:03] it's like we have this server root, and we have, so this is the, well, okay.

[101:12] So this is the module structure, right? So, well, okay, now first I'll draw the component structure.

[101:18] So we have the server root that renders albums, that itself renders this searchable album list.

[101:30] So this is the component structure. But then if we look at the, maybe I'll use like different,

[101:43] maybe I'll use like a different style, yeah. So if we look at the file structure,

[101:50] what we see is like there's the thing you call root.server.jsx.

[101:54] It doesn't have to be named that way. That's what you mentioned.

[101:58] Could have just been named like app or something. And so it imports the searchable album list.js.

[102:06] And so the way to think about it is like by default, we start with everything executing.

[102:21] So like by default everything starts, and like importing starts on the server, right?

[102:26] So like if you imagine like this is the server entry point, it means that each import will be followed,

[102:33] you know, like you would expect. And like all of this stuff would be on the,

[102:38] like in the server. When I say server, I mean React server.

[102:43] So like RSC, React server components. I don't mean, it doesn't, it's not about like being

[102:48] on the server in terms of location again, right? Like it's just the concept.

[102:52] So by default, all of this imports become part of the code that executes, you know, as part of your server response.

[103:01] And then like if we try to, if you try to use state here, it doesn't really make sense because this thing runs only

[103:11] on the server, and so it's never actually gonna be able to have event handlers or state because this code

[103:18] just never exists on the client at all. So it can't react to user input anyhow.

[103:24] And so what, when you say use client, and for some reason, undo doesn't work,

[103:29] so I have to wait seriously. - Oh, really?

[103:33] I can undo. - I can't undo this for some reason.

[103:37] So when we do, so I'll add use client again to searchable album list.

[103:44] So if I add use client there, that fixes it because that redraws the boundaries.

[103:50] Like when you say use client, you're essentially saying like, cut this off.

[103:57] You're saying like, you know, this like anything from here, like this could import other components, right?

[104:05] Like this could like import something else and so on. But you're saying this, anything that imports

[104:11] searchable list, this thing actually doesn't exist. So this should be on the client,

[104:17] and it's gonna client all the way down, which doesn't mean that like, it doesn't mean that the,

[104:23] it doesn't mean that all components, so we're talking about files.

[104:29] We're not talking, so we're talking about imports, not about components.

[104:32] You could still have components that are server, server components inside client components,

[104:39] and I'll get to that in a moment. But what I just want to show is like,

[104:43] you kind of, sorry, I just can't delete anything. Like I have to delete. - Yeah, there we go.

[104:52] - Yeah, but by adding use client, you kind of just like limited the server part to this.

[105:00] And so, and then the rest is what your bundler will be, will know to like, oh, this needs, you know,

[105:07] anything from here has to go into the client bundle. And so the server, like the server environment

[105:12] would not even see this. So from the server environment perspective,

[105:17] the searchable album list component, it doesn't even know what's in there.

[105:21] Like it can't, it doesn't try to render it. It doesn't try to do anything with it.

[105:25] It's just completely opaque. And then on the client, from the client perspective,

[105:29] like when they're actually on the client, it's really this part, it's like it doesn't exist

[105:37] because it's already executed. So the client is only aware of the output of this.

[105:43] - It's aware of the output, right. - Yeah, and so one of the things that gets a bit,

[105:49] you know, that always trips people up is like, okay, but does it mean that if I just need one component

[105:56] with state somewhere close to the top, then it can't contain any server components, right?

[106:08] And we can actually, they have like another data point that we can fetch from just to kind of illustrate this idea.

[106:17] So you have get by ID, maybe I can use that. Do you mind if I write a bit of code?

[106:25] - Oh yeah, please. - Yeah, so I just want to illustrate,

[106:29] maybe let's go back to the app. Can we make sure that the app is working

[106:33] so that, you know, it's not completely forked? - Yep.

[106:37] - Just to verify. - It's a good thing to check. Yeah, is this the screen share you're able to see?

[106:43] - Yeah, yeah, but I see it like as empty, so I don't know if it needs to be restarted or something.

[106:49] - Okay. Oh no, we just need to, well, actually this is on me.

[106:54] I only detect double quotes. Yeah, compilers.

[106:59] All right, that works. So, yeah. - Oh, okay, okay.

[107:03] Yeah, so maybe we can show like the problem you might run into is,

[107:08] so let's go back to, for example, index. Oh, you have a, can I use this Pokemon example?

[107:18] You have this Pokemon example in another file. - Yeah. - Can I like just pull in?

[107:21] Also, Primogen, oh my God, thank you for the raid. We have a lot of people pouring in here right now.

[107:28] Thank y'all so much. Thanks for stopping by.

[107:30] That is awesome, you're awesome. Yeah, we're live with Dan,

[107:34] playing with React server components and learning a ton of things along the way.

[107:39] And right now we are playing with loading things asynchronously,

[107:44] seeing the server client boundaries, and I guess in a minute,

[107:47] trying to render some Pokemon on the page, if you wanna go ahead and try that.

[107:51] - Yeah, so let's maybe import. Oh, you already imported Pokemon, so that's great.

[107:58] So maybe let's first just render the Pokemon above. Above the, code is so, I just can't get used to VS Code.

[108:09] - That's good. - I'm just trying to render the Pokemon above the, what is it?

[108:20] The album list. Actually, I'm gonna pull it.

[108:25] Yeah, okay, yeah, I'm gonna pull it out of this suspense because this suspense is super slow.

[108:31] Because we, let's maybe reduce the delay. I'll set the delay to something that's.

[108:37] - Oh, we changed the delay back to be really short. Yeah, that should be short now.

[108:43] - Yeah, okay, so we have a, if we go to root.server.js,

[108:47] you see there's like, we're rendering Pokemon, and we're also rendering this album list.

[108:52] And so suppose that we, for some reason we wanted, like Pokemon is a server component, right?

[108:58] If you go there, you see like it has async await. That's currently only supported on the server.

[109:05] So, but imagine that in our app, we want to render the Pokemon from a client component, right?

[109:12] Like, let's say we want to render it between the search bar and the list of items.

[109:17] So, if you just try to do it kind of naively, it won't work. So if I go to the,

[109:28] searchable album list, and I'm going to add an import for Pokemon.

[109:33] I'm going to delete the, I'm going to delete the Pokemon

[109:38] from root.server.js completely. So I will get rid of it here.

[109:45] And I will add it to our client searchable album list component between the input and the,

[109:52] and the list. And so if you run it now,

[109:57] I think it should crash. Like, what does it tell you if you try to run it now?

[110:02] - I'm so curious why, but it didn't crash and it actually ran.

[110:06] (laughing) That should not work.

[110:09] Hang on. What's going on here?

[110:11] Yeah, it's working. Wait a minute.

[110:15] - Maybe we, yeah, but is it between, can you style the input so that we can actually

[110:20] see the input? 'Cause I don't see the input at all.

[110:23] - Absolutely. - Oh, okay, it's here.

[110:25] - Yeah, it's right there. It's adding a focus ring to that,

[110:29] but let me, let me add border solid. - Okay.

[110:33] Yeah, maybe it's not. Oh, it's, I guess it's because it's using fetch.

[110:39] So maybe we already support it on the client as well. So yeah, ideally it would be something

[110:45] that would not be supported on the client. Like, you know, like a database call

[110:49] or something like this. - Right.

[110:51] - Maybe we can read something from a file to make this more, yeah, let's--

[110:58] - Make it more obvious? Sure.

[111:00] - Yeah, let's read something from the file so that we know definitely that.

[111:03] Yeah, can we do like, okay, instead of Pokemon, we're gonna do fs, let's see.

[111:15] I haven't used, can you write some-- - Yeah, I can throw that down.

[111:21] I've only been writing fs calls for the past, however long.

[111:26] - Yeah, can you do like read dir, like a list of files, for example, in your--

[111:31] - Yeah, fs, promises, read file. - Maybe read dir to kind of see the list of files

[111:39] in a directory or something like this? - Yeah.

[111:43] - Or I guess, yeah. - Or, that's a thought too.

[111:46] Yeah, I can read anything. - Okay, yeah, whatever.

[111:49] - Yeah, this isn't the best thing. Maybe if I tried to read from the db,

[111:55] that would make more sense. - Sure.

[111:58] - There's a thing you could do. Db data, data at slug there, which is a real slug.

[112:04] Yep, and that. - Yeah.

[112:14] - Yeah, and then you wanna do that. And turn, you know, a dump of information.

[112:22] - Sure, sure. - What's that?

[112:25] - Awesome. Yes, maybe let's see what happens if we're trying to do this.

[112:34] - Or it's already stringified, so let me. All right, so we do that.

[112:39] And then it says, can't resolve node fs. That does make sense.

[112:42] Yeah, it's built into node. Are you trying to bundle for node?

[112:45] This is an ES build specific thing, but this is what you would run into with a bundler,

[112:49] where it tries to bundle this into the client, and it decides, well, you can't import from node

[112:55] on the client, so I'm gonna fail that one. - Right, and then the way you fix it,

[113:02] like the way you kind of do this thing where, you know, I'll switch back to Excalidraw.

[113:09] Can I see the Excalidraw? - Yep.

[113:12] - Okay, so yeah, so the problem we have right now is like we're doing this, and again,

[113:19] this thing is, this is rendering like Pokemon, which is not actually Pokemon, it's a VRK album,

[113:26] but let's say it's Pokemon. And then this thing is actually like,

[113:30] it can only work on the server, right? So because it uses like node or something.

[113:35] So it actually, like this is why it errors. And so the way you would fix it is you can,

[113:45] but like you're, you know, the component structure that you want to have looks like this.

[113:51] So this is what you're trying to do. But the problem is like, this is a client component,

[113:59] and so you can't import the server component from a client component.

[114:02] But what you can do is keep the component structure kind of the same, except you render,

[114:13] there's not a great way to show it, but they kind of render it.

[114:18] Let me try to make this a bit nicer. I don't know why this didn't work.

[114:28] Let me just show it in code, and then I'll try to redraw the picture.

[114:33] So in code, what you do is you, so you go back to here.

[114:40] So we go back to searchable album list. We can't render a Pokemon here

[114:45] because it's a server component. So what we're going to do instead,

[114:49] we're going to make a hole in our components. So we're going to accept children as a prop from above.

[114:55] So now we, it's just like, you know, it's the same way, it's not server component specific thing.

[115:00] It's just how you make a hole in the component that the parent can fill in.

[115:05] And so we copy and paste Pokemon again. We go back to our server component.

[115:11] We paste Pokemon import here. And so we, this is not necessary.

[115:16] And so what we do is this. We pass Pokemon as a child to searchable album list.

[115:24] - Yep, let me get out of there. Yeah.

[115:27] - And so I think this should work. If you, I don't know, can you try it?

[115:31] - Yeah, let's give it a try. And also just for my own sanity,

[115:37] I just want to rename the component. - Sure.

[115:41] - If anyone's popping in, 'cause apparently there's 2000 people.

[115:45] If that's true, hello and thank you so much. But yeah, let's pass that in.

[115:53] So this is a file system call that we're passing down as a prop basically

[115:57] in order to slot it into our page. So I'll go ahead and do that.

[116:02] And hopefully that's everything working. If we head over here, we should see that.

[116:08] And then, oh no, things have happened. Okay, that's, it's just trying to fetch a file

[116:14] that it can't find. Yeah, that's just me getting file paths wrong.

[116:18] I'll head over here. And because it gets built to a dist folder,

[116:22] it's actually different. That's the issue.

[116:24] There we go. All right, so now we actually get the readout

[116:29] from the file system passed down. - Yeah, and it is easy, like the server component output.

[116:35] So like the, you know, the thing that in our case is just, it's reading from a file,

[116:39] but it's kind of stuffed into between, you know, the parts, the client parts.

[116:47] And the way we can maybe, like the way, let me try to update my diagram.

[116:53] So in this example, the, I'm using like blue for, so we've moved, you see, the way we import things,

[117:05] has changed, right? So the component tree is still the same.

[117:08] We, like the Pokemon is kind of rendered inside of searchable album list.

[117:13] But the way the imports are structured is that actually root.server.js imports searchable album list

[117:21] and it also imports Pokemon.js. Oh, sorry, it's not Pokemon anymore.

[117:29] It's your album. So yeah, I'm going to change that here as well.

[117:34] And so it, yeah, it imports this file as well. And the use client is only, let me, let me take this.

[117:42] Yeah, so now use client works because. - 'Cause I think I can just change this to like blue, right?

[117:48] Yeah. - Sorry, I forgot about the.

[117:51] - Yeah. - So it's kind of like an island, yeah, sort of.

[117:56] And then like anything it imports will also be like in the client bundle,

[118:01] but then the remaining stuff like that still executes on the server only.

[118:08] And so that's, that's why it works. - Yeah, exactly.

[118:12] And I mean, you're using all the terms that we've used at Astro.

[118:17] I was kind of freaking out a little bit when you said donut islands on a stream the other day.

[118:21] I was like, that's what we call them. Where what you're doing is like,

[118:25] you've created this, an island of client side logic and you want to pass something through a hole in the middle

[118:34] as a prop where like really anything can be a prop that's passed down.

[118:38] It can be data or it can be JSX. And in this case, that's what React is doing.

[118:44] Like Bjork album has become a prop that is going to render this stuff out on the server,

[118:50] get that data and then pass it into the client. So that's another thing about fetching too.

[118:56] We're like, what's gonna happen is it's gonna fetch all the albums in this setup right now.

[119:00] Then it's going to fetch the Bjork album with the file system call.

[119:05] And once both of those are resolved, it'll pass this guy down.

[119:08] Do I have that right? - Not quite.

[119:11] So in this example, I think if we specifically talk about the ordering,

[119:18] I believe it will try the, oh yeah, yeah, okay, yeah.

[119:24] Because await is above it, right? So await is above. - Yeah, exactly.

[119:27] - Yeah, so it's gonna fetch the list of albums and then it's gonna get here,

[119:31] it's gonna render the Bjork album and then it's gonna tell to the client,

[119:36] hey, here's the thing you should slot into the donut and here are other,

[119:42] because children is just another prop. There is actually no specific,

[119:47] it could have been called donut content equals this, right? And then you would also,

[119:57] because it's just a prop that you pass. And then with like server components,

[120:02] when it meets a client component with a bunch of props, it tries to serialize those props into JSON.

[120:11] And when it meets more JSX, it's like, oh, I guess I have more server things to do.

[120:15] So that's why it kind of steps into the Bjork album and tries to resolve that.

[120:19] And that becomes as part of the stream. So that's how it works.

[120:24] - Very cool stuff. And yeah, I was hoping these dev logs

[120:28] would kind of show you that, but I think these headers are completely wrong.

[120:32] The important part here is like, well, what's coming down the wire on this part?

[120:37] And I hope you can still see it. There we go, yeah.

[120:40] - Maybe we can make the, I think it's just confusing that it's such a long output.

[120:44] - It's such a long output, yeah. - Let's just slice like the first like 10 letters

[120:49] or something like this. Is that how you use?

[120:51] No, I think zero, 10, maybe something like this. - Oh yeah, we can do that too.

[120:58] - So maybe let's look for, let's have a look at what's happening in the dev panel.

[121:02] - Yeah. - Maybe also let's show just one first album

[121:09] so that we don't have so much to read. So I'm gonna make it like albums, album zero.

[121:16] So updated that you only see one. - Nice.

[121:20] - Okay, and let's now have a look at what's actually happening in the response from the beginning.

[121:27] - Yeah, so, I mean, what I'm seeing is it starts from showing you welcome to server components.

[121:35] Then we show our loading spinner and we're gonna wait for the next chunk to come down

[121:39] to replace that loading spinner. And that's actually here, interestingly.

[121:44] So the four and the three are a little out of order with what it decided, it can always change.

[121:50] But the client part is just gonna be an import. So this is gonna go import that file

[121:55] and we don't care what it does. We're just gonna import it

[121:58] and assume it's browser-ready JavaScript that we can throw on there.

[122:02] And the information-- - Yeah, so maybe the way I would describe it is

[122:08] if you scroll back up a little bit in the response, notice that in the protocol we have, for example,

[122:17] like H1 or, and there's names of the tags, right? So we kind of say, this is a React element,

[122:25] like this is a part of the React tree that's like H1. But then if we also want to be able to say,

[122:32] here's a React component you need to download from a script tag in the render.

[122:40] And so if you look a little bit, if you look a little bit below where it says later response,

[122:45] instead of H1, you see this like dollar sign L4, which is again, implementation detail.

[122:50] It doesn't actually matter. But this is a reference to the previous thing

[122:56] in the response. So instead of H1, you're rendering searchable album list.

[123:01] And so this instruction tells React, here's where to download this code.

[123:04] It exists in this script tag. So this is what I meant by automatic code splitting,

[123:11] because if we remove searchable, like if we edit our server with component, for example,

[123:18] to check your privileges and be like, if you're not an admin, don't show searchable album list,

[123:26] then the server will not send the instruction to download searchable album list.

[123:31] So you wouldn't even have it, you wouldn't load that bundle at all,

[123:35] because it's just not necessary. So this is what I mean by automatic code splitting.

[123:39] But yeah, other than that, it kind of says, and the later part of the tree is this module

[123:45] called searchable album list that exists in your bundle. In your example, it seems like it's a separate file.

[123:53] Like in optimized bundler, you would have them split into chunks

[123:57] that have more than one component, of course, in them. Otherwise, you'd be downloading too many script tags.

[124:03] But yeah, you can see it says, render this thing that's a client component,

[124:09] and here are its props. And so you see albums prop contains the album stuff.

[124:16] And then if you scroll down, it says children L5, which is like reference to some content chunk

[124:25] that arrives later. - It's actually the Bjork album,

[124:28] but we chopped off very few characters. - So yeah, yeah.

[124:32] - Might bump up to like 50 or something. Then it'll show you just a little bit.

[124:37] Well, actually it shows you a lot more, doesn't it? Oh yeah, right here.

[124:40] So this is the later, later chunk once that is resolved. And that gets passed in as a prop.

[124:46] It gets harder to trace the more components you have, obviously, which makes sense.

[124:50] 'Cause this is just a dump of what it's actually sending down.

[124:54] But I see what you mean. Like, oh, it would be right here.

[124:56] So the children of this component are going to be five whenever it resolves, and then here it is.

[125:03] Here is that dump from the Bjork album file, and we're gonna pass it into this component,

[125:08] which I think we can trace back up to, somewhere.

[125:15] Yeah, there's a lot. - Five is right at the end.

[125:18] Five is children, five is the last thing. - Yep, and that's being passed into searchable album list.

[125:24] Yeah, so the numbers correspond, where it's like, that's the data,

[125:28] that's the children prop that we're gonna pass in. And all of this corresponds to number four,

[125:33] which is the actual album list that we're rendering onto the page.

[125:38] - Yeah, and all of this is composable. So of course, if you put suspense around the Bjork album,

[125:46] now, so you do like, I don't know. Try to write something here.

[125:53] - I'm also forcing Dan Abramov to use VS Code. I'm sorry, people.

[126:03] Are you a Vim user? - No, no, I can't, no.

[126:07] But I'm a happy Sublime user. I don't understand why it keeps trying to close my tags.

[126:12] Like, it never does it the way that I want. - It's really aggressive.

[126:14] Yeah, yeah. It's a Prime Machine raid, so I have to ask about Vim.

[126:18] So it's neither. You use Sublime Text, interesting, okay.

[126:22] - So I'm also going to add like an artificial delay here so that we can, let's say, wait for,

[126:29] wait for like two seconds. Like imagine this like file system call is super expensive.

[126:37] So maybe let's have a look at what happens after this. - Yeah, let's see what happens.

[126:44] Okay, something failed with just parsing the file. Don't know what happened there.

[126:51] Let me double check. It might've tried to save at the wrong time.

[126:54] I know VS Code can get out of sync with that. Yeah, there we go.

[126:58] Okay, and yeah, now we have this out of order streaming setup

[127:02] where when you load the page first, it loads everything. Then it does the file system call

[127:08] and it slots it in here later without, while preserving the other markup that you have.

[127:13] - Yeah, and so they kind of, the cool thing about it from my perspective is like in,

[127:20] you know, if we pass some server stuff that still might be waiting for something,

[127:26] but we kind of unblock the rest of the, even like client stuff from rendering

[127:30] by just putting suspense in there. - Yeah, exactly.

[127:35] It's the easiest switch to slot into where the default is like wait for everything,

[127:39] which is usually what you want so you don't have laid out shift.

[127:42] And then it's like, well, actually I do have, or I actually have a way to handle layout shift.

[127:47] I have like a loading spinner that's a perfectly sized skeleton.

[127:49] So I'm going to say-- - Yeah, yeah.

[127:51] - Yeah, here it's not really ideal what we're doing where it like bops things down the page

[127:55] as soon as it comes in. Because, you know,

[127:58] if that's like above the fold on your hero banner, you probably want to have like a loading state

[128:02] that's matched up to it. - Yeah, yeah, yeah, yeah.

[128:07] So I don't know how much time do you have, like how deep do we want to go?

[128:13] 'Cause it would be fun to also, like I added a bunch of hacks just to kind of show the idea,

[128:19] but I think it might be fun to get rid of the, you know, the weird PR problem component

[128:24] and instead look at what it would look like to refetch. So like to do search on the server.

[128:30] I think that's like one of the things you mentioned. - That would be very cool.

[128:33] - Yeah, I mean, I only booked two hours to like be conscious of your time,

[128:37] but if you're good to keep going, I am as well. - Yeah, I think I have some more time.

[128:43] I don't have to run anywhere. - Okay.

[128:46] So to do that, I'm wondering if we can, should we hop over to the Next.js example

[128:52] to try server search, or are we still comfortable here? - I think we can try to do it here.

[128:57] Like if it doesn't work, we can do, you know, we can use Next.js, but now I'm kind of like,

[129:01] you seem to have a setup that kind of works. And I like the, you know, I like your--

[129:06] - I appreciate it. - I like your, it's no small effort

[129:10] 'cause like none of it is documented. So it's, yeah, it is, it is impressive.

[129:16] So I'd say let's keep going until your setup breaks. - I like it, it's gotten close.

[129:21] It's definitely gotten close, but the duct tape's holding. - Yeah, I don't really like your development panel.

[129:27] I like, I think I'm a bit conflicted about it because I'm worried that like people on the stream

[129:32] would be like, oh, this is so complicated, like this, this whole output.

[129:36] But it's really kind of like reading the network tab. So the point is not, you know,

[129:41] you wouldn't see this as a user, but I do see the value, you know,

[129:44] as an instructional tool of here's how it actually works. 'Cause it's not that complicated if you think, you know,

[129:51] about what it's trying to do. - Right, yeah, exactly. Yeah, the dev panel was really,

[129:58] I just intended it for like the first 30 minutes to show, oh, here's the data streaming down.

[130:02] And oh, now it waits for suspense. But it's like, it's also kind of useful to see

[130:06] like how much stuff is coming down. Like when we pass down albums as a prop,

[130:11] suddenly the response got huge. 'Cause now it's passing down like all the songs

[130:15] and stuff that you don't care about. So it's useful to just see like volume and time,

[130:19] not necessarily the details. So maybe just like showing,

[130:23] well, it's always dangerous to show kilobyte numbers 'cause they're lies, but there's probably a way to do it.

[130:28] - Yeah, yeah, I'd love to see them both. So let me just clean up.

[130:34] I want to get rid of this part that doesn't make sense because we just added it as a demo.

[130:39] So let me clean it back up to what we had that still made sense as an example.

[130:48] I'm gonna get rid of this children's pop as well. Yeah, so I think we should be back to our previous example

[130:58] and instant search. And yeah, do you want to try to add the,

[131:07] so what do we want to do, right? Like we want to refetch the server component tree

[131:16] when you type into the input, right? - Right.

[131:23] - So maybe we want to do like search on the server, maybe we show like just the first,

[131:29] like, I don't know, two results. You don't seem to have like much data here anyway, right?

[131:36] But maybe we just show- - Yeah, there's only three albums, yeah.

[131:39] - Okay, yeah. Yeah, so do you want to, do you want to drive edit it

[131:45] and we'll see where it becomes confusing? - I can try to do that.

[131:51] And one thing before we go, I'm actually going to make the dev panel

[131:56] just a little bit less tall in case we, no issues with that.

[132:01] I, oh man, I thought it would be an easy switch. Where did I put it?

[132:05] Yeah, okay, well, 72. Yeah, all right, and it scrolls for the rest, perfect.

[132:13] So in order to do something like that, well, the first thing I'm going to do, I guess,

[132:21] and this feels like a coding interview right now, I'm thinking, but yeah, we can remove that.

[132:27] We're not going to use that anymore, no use state. The filter album function is fine to keep around.

[132:35] And as you input things, I assume we're going to, well, if we put query parameters on the top of the page,

[132:44] it's going to refresh the browser on every input. But if we did like JSON requests,

[132:50] then we could avoid refreshing the page every time. I don't know, there's two ways to do it.

[132:55] - So I think the, maybe you're kind of approaching it from the perspective of like,

[133:00] how would I do this in a client-side application? So you're like--

[133:05] - Yeah, well, I'm thinking form request, I guess. Like literally just using form action

[133:09] and submitting it and using stuff. But I assume you have something else in mind

[133:13] that isn't just a form action. - Yeah, so the form action is usually used

[133:18] for stuff like posts, I guess, where like here we kind of just want to refresh the output.

[133:24] So I think I would probably use get. But also form action, yes,

[133:29] like default browser handle on the forms, like that would reload the page completely.

[133:34] So it makes sense that that's not quite what we want. I think the, so let me maybe think a little bit

[133:45] about this as well. So I think we still need state, actually,

[133:51] because we want the, well, not, okay. Okay, so there's a question of like how deep do we want,

[134:12] because like this is the stuff that Next.js or like an RSC framework is supposed to handle.

[134:17] So I think there's kind of two levels to this. Like we can do this with,

[134:23] like do we want to hook it up to the URL? Because one option is to hook it up to the URL

[134:29] and other options like not to. I think probably not hooking it up to the URL

[134:35] might be a bit less code. So maybe we, yeah, maybe that's,

[134:43] maybe that's what they should do. - Yeah, 'cause I guess what I'm wondering is,

[134:47] 'cause what we're trying to avoid is passing the whole album list as a prop

[134:51] and doing the filter logic on the client. So I assume that would also mean

[134:55] if we're not passing down the prop, where if we're doing anything client side,

[135:00] it's just gonna be the search box, but not the results. - Yeah, exactly, yeah.

[135:04] So maybe let's, do you want to like rearrange the code a little bit?

[135:08] Like, I think I would just move the, yeah, so maybe we do like a search box component

[135:15] and we make that a client component and then we extract it to like a new file

[135:20] and then we keep this file as it is. - Yeah, yeah, let's go ahead and do that.

[135:25] I'll make a search over here and pull that out. And also I'm actually just gonna undo my way back here.

[135:34] Won't save that 'cause I think that breaks everything. Okay, I'm in the search now.

[135:43] And in here, I will do input. Oh, it doesn't know about state yet.

[135:51] So let me introduce that. - This is so much fun.

[136:02] I'm really enjoying it. - I know.

[136:05] Oh, and it's got, oh, it remembered my styles. It remembered my styles.

[136:10] - Oh, that's so good. Okay.

[136:13] - I don't even understand, like you're using Copilot? Like, 'cause I've never used it.

[136:18] I don't even know how, you know, how, what is. - So I think Copilot, and actually the Prime Engine

[136:24] had a good video on this where like for migrations, it's really good at knowing context of like,

[136:31] it knows I typed a search box before and now it's picking up like,

[136:34] oh, you're probably extracting this to a separate component. Let me pull in those styles that you wrote earlier.

[136:40] And just- - So does it like stuff it into the prompt?

[136:42] Like how does it keep track of the context? - Well, it understands your code base as far as I know.

[136:49] And it is, I don't know how much of it is local versus network requests, but yeah.

[136:56] - We should have a dev panel to see what it sends and what it receives.

[137:01] - That would be nice to know because like, yeah, if it's sending your code base over to wire,

[137:07] that is a massive problem. - Yeah.

[137:10] - I don't know what it does. That's the scary part.

[137:13] I don't know what it says. - It's fine.

[137:16] Yeah, so let's, okay, let's go and let's get this working. - Yep.

[137:21] And everyone is searching for what my theme and font are. Just calm down.

[137:25] I'll make extensions someday, people. But I use monolisa font and the Houston theme made by Astro.

[137:31] And by using it, you get access to this beautiful little Houston floating guy

[137:35] in your editor anytime you want it. So, you know, go ahead and use that.

[137:39] Dan, you actually can't see that, sadly. - No, no, I see the default theme.

[137:43] - Yeah, dang. Yeah, we have this little Houston animation

[137:49] where it's just a Houston panel. If you wanna just have them watch what you're doing

[137:53] and he gets progressively more sad the more syntax errors you have.

[137:57] - Okay. Yeah, I have no idea what you're talking about.

[138:00] - Don't worry about it. Don't worry about it.

[138:02] I can send a screenshot later. - Okay, okay.

[138:06] But yeah, we have our search box here. And well, we can render that inside of our root server,

[138:14] I guess, we can hop all the way back. - Well, why though?

[138:18] Like, can't we just render it in the component you extracted it from?

[138:25] - That's a good point. - Like you already have it here.

[138:27] - I'll go ahead and do that. And I guess our filter code's gonna go over there too.

[138:32] - No, I mean, I don't think you have to change anything. Like, well--

[138:37] - Oh, wait, no, it doesn't go over there. It's the whole point.

[138:40] - Yeah, yeah. - Here is where it goes in.

[138:43] - Yeah. Yeah, so the problem right now is that you don't really have,

[138:51] yeah, like we don't really have filtered albums yet, but we'll add it back later.

[138:56] So I think for kind of the, you know, I would write it like this.

[139:03] (keyboard clicking) - Yeah.

[139:08] - And then the thing you want to render is this. So let's just verify that it still works.

[139:13] - Mm-hmm, yeah, it is working. - Yeah, but then like,

[139:19] yeah, but then typing into the input doesn't really do anything, right?

[139:23] - Right. - So I think maybe, again,

[139:27] there's like two ways we could go about this, either like with the URL or without.

[139:34] I think with the URL probably makes more sense because, you know, if we're going, you know,

[139:40] if we're going to show what frameworks do, we might as well just, you know,

[139:43] try to do it ourselves. So maybe let's make it so that when you type into the input,

[139:51] let's make the URL update using client-side, like history.pushState or--

[139:58] - Mm, okay. - We could use the history package.

[140:01] I think it's a bit more, but we could probably just use the browser API as well.

[140:07] Let's start with the browser API and then see if we need anything more.

[140:11] But let's try to make it so that when you type into the input, we also update the URL.

[140:16] - Gotcha. Yeah, for something like that,

[140:20] on change, sure. Basically that.

[140:26] But then we want to also, I have to think about this.

[140:31] So is it window.location? PushState?

[140:35] It's been a while since I've used this API. - I think it's history.pushState or something.

[140:40] - Yeah, I think it is. History.yep, yep, yep, yep.

[140:43] PushState, yes. I think.

[140:48] - I don't know if it, there's like pushState and a replaceState.

[140:51] I don't know if a search bar is like, you probably don't want to create, yeah.

[140:57] - You don't want history as we type. - Yeah, so maybe let's check if this works.

[141:04] I don't actually see your address bar, so I don't know if it works.

[141:07] You'll have to tell me. - Oh, it's really tiny at the top,

[141:10] but it's up there. When you bump the font size,

[141:14] it doesn't bump the size of that, sadly. - Oh no, I don't see it because it doesn't share.

[141:20] - Oh, it doesn't, ah, that's so silly. All right, well, it is working.

[141:27] I can tell you that much. It is working, just putting up search equals.

[141:33] - Okay, I'll have to believe you on this. So, okay, so maybe let's now go,

[141:39] I think I might have to drive this a little bit, if you don't mind.

[141:44] - Oh yeah, no, I don't mind. - But I will need your help as well, I think,

[141:48] because I can only do the parts that I know about. So I'm gonna go to the thing called root.client.js,

[141:57] and it's kind of interesting. You see, like, you do have kind of the server entry point

[142:02] and the client entry point, and it's a bit confusing because, like,

[142:06] conceptually, it's the server entry point that's the real root of your app.

[142:10] - It's the real root. - It's like where things start conceptually,

[142:15] but then, in reality, you do need this, like, bootstrapping thing that makes this real root

[142:21] appear somewhere on the page. - Yeah, what I really wanna call it

[142:24] is, like, bootstrapping an index. Like, that's what-- - Yeah.

[142:28] Yeah, I think that's what it is. And it's also kind of like, if you think about,

[142:32] okay, how would it work with nested routing? You would also, it would still, like, be,

[142:37] you would still have, like, the server be the root, but then it would also be possible to, like,

[142:42] start from the middle of, like, some nested route and, like, treat that as a root,

[142:47] and that's what happens with, like, navigations in Nextapp Router.

[142:51] And then this thing that you have here, this, like, bootstrapping thing,

[142:56] that would turn into the kind of client-side routing part that bootstraps the top-level thing,

[143:04] but also bootstraps these, like, holes and manages how to slot in the server responses into them.

[143:12] So this is hidden, like, in a framework. That's what, like, Next.js does, for example.

[143:17] But we're gonna do, like, a simple version of that where it only bootstraps them, like, at the top.

[143:22] But I'm just saying, you know, if you were building a nested router,

[143:25] you would have to do, you would have to have a very similar thing

[143:28] also managing, you know, it's somewhere, like, where, around your, like, route holes

[143:36] to kind of replace them if necessary. But yeah, so you have this thing where you,

[143:43] so these are internal APIs. This, again, like, this file is the kind of stuff

[143:47] that, as a product developer, you wouldn't touch or, like, do any of that.

[143:52] And I also want to make sure that, make clear that, like, all of this stuff below

[143:56] is, like, for debugging because it's, like, your def final component.

[144:01] So it actually has nothing to do with React. But then, as a framework developer,

[144:07] like, this part is kind of the bootstrap where you're, like, okay, here's where I know,

[144:13] oh, I'm gonna move this here 'cause it's unrelated. - Yeah.

[144:17] - Like... - Honestly, all of this is unrelated, too.

[144:22] This was me trying to do, but I never finished. - No, no, I might have to, wait.

[144:26] Show me what did you delete. - Yeah, this was some code I was writing

[144:31] to allow multiple routes. And all it was really doing

[144:34] is getting the current window location and fetching the file that corresponds to that location.

[144:39] - Okay, yeah, no, we don't need that. But we are gonna need something similar.

[144:43] But let's delete this for now. It's fine, let's delete this.

[144:49] So what I'm gonna do is I'm, so what it currently does, and,

[144:53] yeah, I don't love this. Can I just, like, rename this to /rc and--

[144:58] - I'll see what source code needs to be fixed to make that work, but yeah, that's what it is.

[145:03] - I think it's in the handler, right? - Yeah, I think it might just be this.

[145:08] - So maybe let's change this to rc. Let's verify that it still loads.

[145:14] I mean, obviously, it doesn't have to be called that way. I just kind of want to stress that.

[145:19] - Okay. - Okay, yeah, so there's just one endpoint.

[145:21] It's not like multiple files or anything. It's just one endpoint.

[145:25] And so I'm gonna make a React component that's like, I don't know, I'm gonna call it, like,

[145:32] boots, I don't know, client root or something like this, which is just this bootstrapping thing.

[145:40] And currently, yeah, I'm gonna move this a little bit. So I'll make it render strict mode,

[145:51] and I'm just gonna do this client root thing here. - Okay.

[145:56] - So this will be our component. And then I'm gonna, so again, this create from fetch,

[146:05] this is like an internal API for framework developers. This is the protocol reader.

[146:13] So we have a protocol writer that runs on the server. So if you go to, you know, to the,

[146:20] yeah, so if you go to the handler, this is where he wrote this logic for, you know,

[146:27] the actual handling of this endpoint that runs server components, you'll see you have,

[146:33] so you call this React server dom, which is maybe a bit confusing

[146:39] because people might think it's like React dom-server. - I didn't know what to call it.

[146:45] Yeah. - Yeah, yeah, I don't know either. - React server dom-webpack.

[146:48] And I thought, is that really what it is? But that's the package.

[146:52] - Yeah, I don't think we actually figured out like how to name this thing.

[146:56] But essentially, this is not SSR. This is not the, you know, React dom/server

[147:03] that like emits HTML. - Right.

[147:06] - This is the thing that emits, this is the protocol writer.

[147:08] So this is like the thing that executes your server components and emits this protocol

[147:14] that, you know, this streaming thing that you show in the dev panel.

[147:18] And so the, you see like it comes from this package. I don't actually think you need that browser here.

[147:25] I think this should just work. Can you check if that, oh, I guess I broke some other.

[147:30] - I think it'll, I think it'll try to import the node version and that uses pipes.

[147:35] And I was like, I think I can do it simpler. So I did it this way.

[147:38] - Okay, okay. Okay, cool.

[147:40] All right. And then, yeah, if I go to the correspondent,

[147:47] like this is the reader. So this is the thing that kind of reads the client protocol

[147:53] and really all it does is it turns it into JSX essentially. So it converts the product,

[148:00] like it streams the output from the server and it converts it to like a tree of lazy components

[148:08] that get kind of filled in later. So, and this is why like, it's kind of funny,

[148:14] like React, you know, the React library, it doesn't really have any code to support server components

[148:20] because it's like this, this ability to, you know, render a tree from the server,

[148:27] it relies on exactly the same mechanism that for example, React.lazy uses, which is just this built-in support

[148:34] in React to have a tree where some parts are not ready and then suspense will catch them.

[148:40] And so this is the thing that kind of translates from the protocol to a lazy React tree

[148:44] and then React knows how to deal with lazy trees. And so the, we could maybe like call this like this stream,

[148:54] like create from fetch and then you have like fetch from this RSC endpoint, I think that's how it worked.

[149:02] And I guess we can just say this is like, this is just JSX maybe, well, lazy JSX, I don't know.

[149:09] - Yeah, lazy JSX. Yeah, the best way is like, that's the interpreter

[149:15] that's going to take these instructions and turn them into JSX.

[149:18] And that is actually what we got. - Yeah, so maybe let's see if this works so far

[149:24] because I'm going to add a few things. - It looks like it does.

[149:27] - Okay, can I refresh it? - Yeah, it's working.

[149:31] - Awesome, and so the thing that we want to be able to do now is before we deal with like client-side navigations

[149:40] and stuff, I think what we want to do is just the, just to be able to pass something during the initial load

[149:47] to the server, right? Like that's like the easiest part.

[149:49] It's like, if you have some query in the query string and you refresh the page, at least like we should be able

[149:55] to ask the server to filter for that. It's like with manual refreshes for now

[150:01] and then we'll fix that. So I think what we want to do is we can look at,

[150:06] I don't actually remember how to do it, but maybe you, yeah, can you, okay, so here's what I want.

[150:15] I want to search equals, okay, so, okay, maybe let's actually start there.

[150:24] So I want to search for, what is it? What is, yeah, let's say fame.

[150:31] That's what I'm searching for. So this is my search query.

[150:35] So we're going to look for the album called fame. And then I will go to the server handler.

[150:42] So now we need to plumb that information into your root server components so that it knows

[150:48] what the search parameter is. And so I'll go to your server handler.

[150:57] Again, this is the framework part, that's like a framework.

[151:02] - And they have like path name. So can they make it so that we pass the query,

[151:08] like we pass all the query arguments as props to-- - Yeah, it should be right up here.

[151:14] So it's just a web-friendly URL, so we can just do search params and grab that.

[151:19] - I'm so bad at these APIs, I'm like, I don't remember. - I think it should be like has and get

[151:30] in order to access what we're looking for. - Okay, okay.

[151:33] Yeah, can we turn that into just plain JSONs so that we can spread it as props

[151:38] to the top level component. - How do you do that?

[151:41] I think there's a way to do it. If you do like, ah, there's a simple way

[151:48] and I can't remember what it is. Search params JSON equals, yes, that's it.

[151:56] Yeah, you convert it to an object and then JSON stringify it, thanks.

[152:00] Oh, that, well, okay. - Then you would have to parse it again, but hang on.

[152:07] No, just this, just this. - Yeah, yeah, just this, that's fine.

[152:10] Okay, is that really, okay. We'll see, let's see if it works.

[152:18] So now we want to, yeah, and now we want to, this is your app here is actually,

[152:24] this is the rooted-server.js-expert, so this is your, it's actually, what are you,

[152:31] oh, okay, you're calling it. I think that's, that's a bit wrong.

[152:35] I think what, I mean, it ends up working. - Yeah, I couldn't get it working without calling it.

[152:38] I don't know why. - Like, I think this is supposed to work,

[152:42] so I think you're supposed to, I mean, you're like server root,

[152:46] that's how you call it, right? That's just the expert of this thing.

[152:49] And I think you're supposed to be using, can I use just expert? - Yeah, no.

[152:55] There's no build process on this thing. You could use React Create Element, right?

[153:00] - Yeah, yeah, that's what I'm gonna do. So I'm gonna do, like, invert Create Element from React,

[153:07] and I'm gonna do Create Element for server root, and I'm gonna pass it, well, I'm just gonna pass

[153:17] the search params object as props, and then in the server root,

[153:23] I'm gonna try to read the, what did I call it? I call it search.

[153:30] - Which has nothing to do with Search API, it's just, like, our variable name.

[153:34] And I'll say, like, we are the bytes of keeping certain things in the wrong place.

[153:42] I'm looking for search. So let's see if that works.

[153:48] Like, try to load it with, like, /search. - Cannot destructure search of undefined.

[153:55] Okay, so the props aren't being passed, but I think we have to restart,

[153:59] 'cause it's not gonna, okay, ooh! Oh, my God, it's working.

[154:05] - Okay, nice, nice. - Whoa, oh, that's cool.

[154:08] - Okay, so now your task is to, I want you to do the, to take search into account

[154:16] and do the filtering, like, add the filtering back in. - Yeah, that's interesting,

[154:22] 'cause I would want to do it from here, right? 'Cause I need to trigger a new create from fetch.

[154:28] - Well, no, let's not think about this yet. So for now, I just want to do it for the first render.

[154:34] So it's not gonna respond to input, but let's just make it, you know,

[154:37] respect the initial URL. - Okay.

[154:41] - So for now, you just need to plump down, you know, we got it in the root component,

[154:46] so let's just connect the logic so it actually does the search on the server.

[154:50] - Okay, so we would need to pass this search down. - Yeah, I mean, ideally, like, a framework would make,

[154:59] so the way this works in Next is they make it available as, like, import,

[155:04] I don't know, import search for, like, I think there's some way to get it

[155:10] without plumping it down in Next. Maybe there isn't, maybe I'm confusing it with headers.

[155:17] I can actually check. - Yeah, 'cause you can't do hooks

[155:21] when you're passing down server contacts. That's still, like, an unexplored thing.

[155:26] - Yeah. Yeah, okay, page params are props,

[155:31] like, they become props to your page function, so it's, yeah, it's pretty much almost exactly

[155:37] as, like, Next.js would do it. So, yeah, let's keep passing it down.

[155:43] - So I do that, and we've done that. - Well, I don't think you've passed it

[155:49] to this album component, I think you missed it here. - Oh, did I?

[155:54] - Yeah. - Okay, I pass it down to searchable album list,

[155:59] and I pass it to search. - Yeah, but you don't pass it to album search,

[156:03] it's undefined. - Oh, yeah, that's actually good squiggles.

[156:08] - Yeah, these are good squiggles. Yeah, these squiggles are really annoying.

[156:14] I think it's, there's some kind of thing in TypeScript where we need a solution to allow, like, async await.

[156:23] - Right. Okay, and we have it in our input right here.

[156:29] - Okay, but we also want to have it in the, wait, what did you do, let me see what you did.

[156:34] - So this should, yeah, so that makes sure the input matches what's actually being passed to the server,

[156:40] and now we can also use it here, which I assume is actually what you're asking for

[156:45] to start with. - Yeah, exactly.

[156:47] - So we have filtered albums, and that can just be filter albums, pass in the search.

[156:54] - Yep. - Okay, it works.

[157:03] - Nice. - How much of it works?

[157:06] All right. - So it works for the first load,

[157:08] but then it doesn't, like, if you type, you know, if you type into the input, it--

[157:13] - Yeah, it's not refetching. - No, it's not refetching.

[157:17] Okay, so I'll try the refetching piece for a little bit. So I think for refetching,

[157:25] the way we would do it in the framework, it is, that's my, wait, let me open the right file.

[157:33] Okay, so I'm going back to this. I don't actually know, like,

[157:36] do you see where I am in VS Code? Like, do you, how do you know which file I'm in?

[157:41] Like, does it show you? - Or which part are you asking about?

[157:49] - Do you know, like, where, like, do you track where I am in the VS Code?

[157:52] 'Cause I don't do anything to kind of, okay, you see. - No, no, I can.

[157:55] Yeah, I'm in the file. - Okay, cool.

[157:59] So what we want to do here is essentially, again, this is the framework bit.

[158:03] Like, this is the bit that, like, a framework would do. But what we want to do here is we want to

[158:11] replace this thing with, you know, another create, like, another stream, essentially,

[158:15] and show, like, that JSX tree instead. So the way we could do this is,

[158:24] let me think a little bit. So I think the way we would do it,

[158:34] let me write a little bit of code. So I think we would hold the,

[158:41] so we need to create a cache. - Yeah, this is what I was trying to build a little bit ago,

[158:47] where I wanted to call createFromFetch inside of here, and be able to sort of store the lazy JSX

[158:55] in a state variable and return that result to force a re-render, or to trigger.

[159:01] - Yeah, yeah. So I think that's kind of what we want to do.

[159:05] And maybe we can make, actually, like, this client through it.

[159:13] I'm going to call, I'm going to have, like, a component called a router that renders client through it.

[159:20] And I think from the perspective of the client through it, I think I'd like it to receive the,

[159:29] what should it, should it receive the search params, or? - Hmm.

[159:41] I'll write, yeah, I'll just call it router for now, and I'll write it in line in the router,

[159:48] and then maybe I'll split the components. - Yeah.

[159:51] - But I think I want to have a cache. So it's just going to be a, just a regular map.

[160:00] So I want this, I want to, I think I want to keep a, this, like, createFromFetch,

[160:09] like, this is, this represents both the stream and kind of response you can use later, right?

[160:14] Because it's, you know, as long as we don't create it during rendering,

[160:17] it's going to be, like, showing the same thing. - Right.

[160:20] - So I think what we want to do is we want to, actually, I'm going to turn on the light,

[160:25] because it's getting really, really dark. - Yeah, true.

[160:29] - Oh, okay. So I think we want to keep it,

[160:33] keep a response cache per this stream. Right?

[160:40] Like, this is going to be the key of, you know, how we're going to cache it.

[160:44] So I'm going to have a map. - Oh, I was, yeah,

[160:46] you're already jumping ahead to caching there. Yeah.

[160:50] - Yeah, and so the initial version I'm going to do is, like, if the cache does not have anything for,

[161:00] yeah, so the router, okay, okay.

[161:07] So I'm going to, yeah, I'm going to, - Because I assume,

[161:10] I would assume that this is, like, an effect that's going to update as the window updates,

[161:16] and we're going to use that to trigger-- - Yeah.

[161:19] - For things in cache. - I think we're going to do that,

[161:22] but we're going to get there. - Okay.

[161:27] - Give me a moment. - Okay, we'll get there.

[161:29] - I wrote this kind of code, like, a couple of times, so I'm still not sure, like,

[161:33] what's the best way to, like, structure it. But I think, maybe I can call this component, like,

[161:41] you know, server output. That's kind of what it is.

[161:45] - Yeah. - And then this is kind of the URL.

[161:48] I'll use URL as the key. And so I think that is the part, yeah.

[161:53] And then the router will return server output, and I'll just hard code the URL here,

[162:01] so that will be the, kind of, the initial URL. And later, we'll make it, you know,

[162:07] we'll make it respond to the client-side routing. But I think what we want to do is, yeah,

[162:17] so I don't need this anymore. Instead, like, the router renders this thing,

[162:22] and this thing, I guess maybe I call this, like, server endpoint, server endpoint.

[162:34] Nah, it's gonna be a cold URL, sorry. So if it's not in the, if the URL is not in the cache,

[162:42] I think we want to put it, put this into the cache. Let me see.

[162:51] So this is gonna be URL. And then, I think we just want to return

[163:01] what's in the cache for this URL. And so, this might be, yeah, that's interesting.

[163:09] I don't actually use, like, set cache here, although there is a use case where--

[163:14] - It's a ref as it stands. That's what it's acting like.

[163:18] - Yeah, but I think we do need it for some, like, I think we would need this for invalidation.

[163:24] It's just, in our case, we don't have invalidation, so we don't have a reason to do this,

[163:29] because it's always, like, it's caching everything forever. But if we had invalidation where we want to, say,

[163:35] throw away the cache you had, because, like, something got modified,

[163:39] then we would model it as a set state, where we set state to a new map.

[163:45] So it would be, like, an empty cache. And that's why, like, conceptually,

[163:49] I think it should leave in state. That's why it's not, like, a ref.

[163:53] And maybe we can actually, like, also show it. Like, we could have, like, a small example that shows it.

[164:00] - Yeah. Also, sorry that-- - Oh, yeah, let's--

[164:02] - Yeah. - Yeah. - Sorry to disturb you.

[164:04] Can we do a quick pause for, like, a bathroom break, get some more water?

[164:07] - Yeah, yeah, sure. - I think I'm after this. Okay, cool. - Sure.

[164:10] - I also don't have a standby screen, so, yeah. - BRB.

[164:15] - Okay, one second. - All right.

[164:18] Am I still on the stream? Like, I don't know.

[164:22] Are people there? I guess, maybe.

[164:29] Yeah, I don't really have access to the, I don't have access to the actual server,

[164:35] so I have no idea if this code works, because I can't. For some reason, I can't, I can't,

[164:43] like, the VS Code tunneling doesn't work for me. I think it's maybe because of a firewall or something.

[164:51] But maybe if, yeah, maybe for now, I could just go over this a little bit.

[164:58] So, yeah, we render this router that, like, renders this, like, server output for this key.

[165:05] And then, this might look a bit weird, because this might look, you know, like,

[165:09] aren't components supposed to be pure? Like, isn't this a mutation?

[165:14] And so, the key thing here is that it's completely unobservable.

[165:19] So, it's, because, like, the state is, like, local to this component,

[165:30] and this lazily kind of fills it in the first time you ask for it,

[165:34] it kind of acts as, you know, it is going to give you, like,

[165:39] the same result for, like, multiple attempts, regardless in, like, which order you do them.

[165:45] And this is why it's okay to mutate in this particular example.

[165:49] - All right. - Hey. - Yeah, so, maybe let's see if this works at all.

[165:58] Like, can we, did I break it? - I don't know yet.

[166:03] This should, I mean, as it looks, it should be fine. But if we save it, we get something.

[166:11] Okay. Can't read properties of undefined,

[166:13] reading to lowercase, okay. So, hmm.

[166:17] Something's trying to render that shouldn't be. - Well, wait, are we currently,

[166:23] do you have question mark search equals blah blah in your URL bar?

[166:28] - I do. - Oh, actually, no, wait, no.

[166:30] We're not using that. We've hardcoded it.

[166:32] Create from fetch, fetch URL. - Yeah, it's happening server side.

[166:40] So, it's trying to, okay. I think it's because the dev panel

[166:45] assumes that you're fetching the same thing. So, if we just stop rendering the dev panel,

[166:49] I think it'll just go away. - Oh, no, that's, wait, let's just fix it.

[166:54] It's fine. I'll fix it.

[166:56] So, let's just make it so that the, so, since the URL is owned by the router,

[167:02] I'm just gonna, yeah, I'm just gonna render dev panel here myself.

[167:08] So, we can put dev panel, and I'm gonna make this URL a constant,

[167:17] and I'm gonna pass it to both things, so that, I guess I don't actually know

[167:26] how your dev panel works. Let me have a look.

[167:29] So, I'm gonna get rid of, oh, you have like a separate route.

[167:32] - It's just a separate route and separate call. I ideally wanted it to trace what was happening

[167:38] in server create from fetch, and I couldn't find a way to do it.

[167:42] So, I just do another fetch at the same time, and apparently I did two routes.

[167:48] - I see, I see, interesting. Yeah, right, 'cause you're,

[167:53] yeah, you're not hooking into the same stream. But, okay, that's fine.

[167:57] So, we'll do the same thing, except it would, you know,

[168:00] do it with a different URL, right? 'Cause if I just pass the URL here,

[168:05] and I also make it dependency of the effect, I think it would,

[168:10] well, I guess like our panel would behave maybe a bit weirdly

[168:14] if the URL changes, but maybe not. So, let's just see if it works.

[168:19] And then, can we, where's the HTML for your thing?

[168:24] So, that-- - Oh, yeah, that should be in a public folder,

[168:28] but I didn't have time for it. So, I think it's inside of this like templates index file.

[168:33] I'll bring it over here. But, yeah, it's very simple.

[168:37] This is all it's doing. - So, we can just,

[168:39] I can just remove it from here, right? And make it like a regular,

[168:43] okay, yeah. So, I'll just get rid of this,

[168:46] and then I'll, and so, this is not gonna be like a separate route.

[168:50] It's just, you know, it's just a React component that we're rendering.

[168:53] Does it have any styles that are, that depend on that ID?

[168:59] - I don't think so. - Oh, 'cause you're using Tailwind.

[169:07] There is no styles. - Right, yeah. - Great, love it.

[169:09] Love it. - Yep. - Okay.

[169:12] Thank you for everything. - Yeah. That's the amazing thing about Tailwind.

[169:15] You just copy and paste things, move them around.

[169:18] - Yep. - Works fine.

[169:20] - So, style files. - Yeah, okay.

[169:23] So, let's see if, okay, does this work?

[169:27] So, if you try it now. Did we fix it?

[169:31] - Yeah, we're, yeah, we got no errors,

[169:34] and we just get fetching from server, which I think is right,

[169:38] since we're not rendering anything yet. - Well, we are,

[169:42] no, I think we are rendering. Like, we're supposed to be rendering

[169:45] that JSX tree for that URL. So, this should-- - So, this should,

[169:49] oh, okay, that actually should work, huh? So, it does fetching from server.

[169:52] - Can you see if there are any errors in the console? - Yeah, let's see.

[169:56] There's no server errors. The client console,

[170:00] it looks like it's just getting the first one, but it's not reading the rest of the stream onto the page.

[170:05] And I remember that earlier, we removed the function call

[170:09] and changed it to createL. No, that was working.

[170:11] That was working. So, this is the part.

[170:14] - Yeah. Okay, maybe let's,

[170:20] okay, maybe let's go back a little bit and simplify it,

[170:24] and then see if it still breaks. - Yeah.

[170:28] - So, I'm gonna make a fake thing, and I'm gonna,

[170:33] instead of router, I'm gonna render this fake thing.

[170:35] It's a bit hard for me to debug, because I don't see the output,

[170:39] and I don't see, like, I can't actually check anything.

[170:43] But maybe, let's go back to like, I don't know if my URL,

[170:54] my thing equals, sorry.

[170:57] - Yeah. - I'm gonna name it in like weird ways.

[171:03] Yeah, so I'm gonna create from fetch for my URL, and oops, that's gonna be my URL.

[171:09] - Yeah, 'cause before-- - And we're gonna render this.

[171:13] - You've done that. - Okay, so can we just get this thing working?

[171:17] Like, does it still break? - This works.

[171:20] - Okay, this works. And then if I swap it out with the router,

[171:27] can you confirm that it doesn't work again? - Mm-hmm.

[171:33] - Okay, it doesn't work. So, let's switch it back to fake thing.

[171:36] - It is trying to resolve the client-side component import, though,

[171:40] which is interesting. But yeah, that's working.

[171:43] - Okay, so let's maybe now change this to just use this component

[171:49] to see if the problem is with this component. Try it again.

[171:52] - That is not working. - That is not working.

[171:57] So, that's where the problem is. - It's the cache bit.

[172:00] - Okay, that's good, though, because it means that it's something here.

[172:05] (sighs) What am I doing wrong?

[172:08] Okay. Cache, if not, cache has cache set.

[172:14] Cache is a piece of state. If it doesn't have this URL,

[172:22] put this thing into it and then read it. Yeah, I don't see a mistake in the code,

[172:28] but maybe let's keep, you know, let's keep-- - Well, I mean, we can log what this is.

[172:33] - Yeah, let's log what this is. But I'm not gonna see the log

[172:36] 'cause I don't see the console. - It should be the browser console,

[172:40] so I can at least bump up the font size on the screen share. - No, no, it's your tab share.

[172:45] - Oh, god, yeah, duh. You're right.

[172:48] All right, you get chunk pending, which is a familiar site.

[172:52] - Yeah, that seems legit. Okay, no, it's fine.

[172:54] I think, like, I have a way to debug it. Like, I have a methodology.

[172:58] I'm just gonna put it piece by piece until we'll find where the mistake is.

[173:02] - Sounds good. - Okay, so the next thing is I'm gonna copy and paste,

[173:06] like, this part into the fake thing. - It's also doing an infinite loop,

[173:12] which might be something. - Yeah, that seems good to know, if not, gosh,

[173:20] but I don't know why it-- - Yeah, 'cause I was getting infinite logs.

[173:24] - Interesting. - Yeah, yeah, yeah, yeah, yeah, yeah.

[173:31] - Interesting. - Very interesting.

[173:34] - Yeah, well, let's keep going. I think I should be able to figure it out.

[173:41] - Yeah, that should work. - Okay, just, well, okay, so the first thing

[173:47] I could maybe try is just, like, for now, I'll move this cache outside, maybe.

[173:53] - So I've had this issue in the past for when I tried to use use,

[173:58] and I didn't put any wrappers around it, I didn't put a cache, and it was calling

[174:04] my use fetch infinitely, because it was a awaited promise, and I don't know if that's why,

[174:10] 'cause this is definitely another case of returning a promise and passing it through.

[174:15] - Yeah, maybe that is, yeah, maybe, actually, maybe you're right, let me see, maybe that's not,

[174:21] let me check how our, kind of, our fixture does it, because maybe I'm just supposed to use use,

[174:29] and we don't have waterminks yet, so that's why, yeah, okay, okay, let's try this, actually.

[174:37] Maybe that's how it's supposed to work. So I'll import use from React, and let's,

[174:43] instead of fake thing, let's render the router again, and let's get this back, except this will be, like,

[174:51] just, you know, lazy, lazy JSX, and then I'll say return use lazy,

[174:58] because I think we haven't implemented support for this yet, but we also haven't implemented good error messages.

[175:04] - Interesting. - Let's see if that's better.

[175:06] - That's the same. - Now it's the same?

[175:10] - Yeah, we're still getting nothing back. - Okay, now let's, okay, let's try this thing next.

[175:17] Can you refresh? - Ooh, things are happening.

[175:21] - Okay, I don't-- Let me look here.

[175:26] Okay, we do have something on the page. - Okay, so this works.

[175:31] - This works. So what was the important bit?

[175:35] Wait, what changed? - Well, the part that changed is the--

[175:39] - No longer use state, okay. - Yeah, I don't understand.

[175:44] It definitely works, like, in the example I wrote a few days ago.

[175:48] - Yeah. - Oh, wait, maybe we can remove strict mode, maybe.

[175:52] I mean, I wouldn't necessarily-- - I couldn't get anything to work without strict mode.

[175:57] Oh, it works, okay. Nevermind.

[176:00] - Okay, if we remove strict mode and I put this back. Let's see.

[176:06] I think maybe we just have a bug there. Is it still broken?

[176:10] - Yeah. - Yeah, maybe it's like a different React version.

[176:15] - Yeah, I'm on an experimental 18 release because it's the only thing that worked

[176:21] with create from fetch, but yeah. - Okay, let me see.

[176:25] Experiment. Yeah, I don't, I think, let's try the,

[176:31] let's try to use a different React version. I will copy and paste the version

[176:37] that I think should work. Can we, can we, can we, like, yarn and whatever?

[176:45] - Hmm. It, like, upgrade to a new experimental release?

[176:52] - No, it's actually, it's a difference. Like, the next, it's like a canary instead of,

[176:58] because I don't know what's, like, experimental might have too many things enabled

[177:02] that, you know, could be broken. So, that could be the reason.

[177:08] - I mean, can't we just roll without the state variable, though?

[177:10] 'Cause I feel like-- - Yeah, we could.

[177:12] I just want to see if that helps. - Yeah, okay.

[177:14] - If it doesn't help, we'll just roll with it. - Yeah, I hear you.

[177:16] - It's just annoying because, like, I do have this working in literally, like--

[177:20] - I know. - It's written the same way in a different project,

[177:23] and I'm like, why, why doesn't it work if I have it working in another file?

[177:29] - Yeah, as a framework maintainer, whenever something goes wrong in Astra,

[177:31] I'm like, no, no, no, what is it? What version is it?

[177:34] That's the right issue. - Yeah, yeah.

[177:36] No, I already, I already did, you don't need to specify versions.

[177:38] I already put them in package.json. If you could just, like, rerun this.

[177:42] - Perfect. Okay, so, oh, you just found it.

[177:46] All right. That'll do.

[177:49] So, these are next releases instead of experimental. - Yeah, these are a bit more kind of stable.

[177:56] - Okay. And yeah, this is where you get

[177:58] funny peer dependency issues, but-- - Yeah, yeah.

[178:01] - It'll work. Right?

[178:06] And it's the same thing, I think. - Interesting.

[178:12] Yeah, so it's-- - Yeah, it's running infinitely.

[178:19] - Can we wrap this with the actual cache helper from React? - No, we don't use that anymore.

[178:32] Okay, yeah. Yeah, screwed.

[178:34] Okay, yeah. Okay, let's, okay, let's forget about,

[178:39] I mean, it doesn't matter that much 'cause we're not doing invalidation anyway.

[178:43] So, let's just, I'll add back the strict mode and I will, yeah, I will remove the state variable.

[178:51] I'm not sure why it doesn't work without it, but maybe we just broke something.

[178:56] So, yeah, I'll just keep it global. But I think at least like this,

[179:04] this is actually supposed to, well, I don't need use here in that case, I think.

[179:09] So, I think this is supposed to work. - I know, we definitely need use.

[179:16] - What the heck's going on? - Oh, we do?

[179:19] Okay, I can edit that. - Yeah, objects.

[179:21] Okay, it's saying promise is invalid. - Okay, yeah, so we-- - That's a child.

[179:25] - We didn't implement this yet, so let's-- - Yeah. - Okay, let's put it back.

[179:29] - If anyone at home is wondering like what's going on, we've kind of graduated from exploring Rack server components

[179:35] to like how do they really work within a framework if you're trying to build one.

[179:41] So, this is going more in the weeds for sure. But one interesting fact is like

[179:45] when you want to unwrap asynchronous stuff on the client, use is basically in a wait for the client, right?

[179:52] But it can also do other things beyond a wait. - Yeah, yeah.

[179:57] Okay, so, okay. I think that that actually shouldn't be enough for now.

[180:01] I don't think we need something more fancy. So, let's just hook up the router to the actual routing.

[180:08] Right, so let's-- - Yeah. - Maybe you can drive this bit.

[180:11] So, what we want to have, you know, like in the router, we have like the URL variable.

[180:16] So, let's make that initialized to, you know, window.location.

[180:23] Like let's take search, like the search query from the actual location

[180:28] and let's make it update as the location updates. - Yeah, so for that, well, I'm wondering where it would go.

[180:40] But first I'll just do window.location. We want it as a prop yet.

[180:47] Let's just do search, do that. And we want, oh boy, I don't really want all of that.

[180:57] But yeah, that's fine. Clean up, I don't know yet,

[181:04] but to do abort controller for create fetch. Oh no, you don't need to do this part.

[181:11] We already have this part down below. Like all we want to do is-- - We already have this part.

[181:16] - Yeah, all we want to do is like we want to have something that gives us window.location.search all the time.

[181:25] - Okay. - Which-- - So, literally that.

[181:28] - Yeah, but-- - Yeah. - Okay, so we're gonna build this in later

[181:32] 'cause right now it's not gonna be reactive to anything. It's just gonna render the initial cache.

[181:37] - Yeah, so I think maybe I can try to do this. So what does window.location.search return?

[181:43] What kind of file? Is it like a string or?

[181:45] - Yeah, that'll just be the string. So question mark, yeah, that.

[181:48] So it's a key that we could use. - Okay, so we do need this thing.

[181:53] Do we need to encode the URI component or is it already encoded? - Yeah, if we want.

[182:00] Yeah, I think we can put this in the create from fetch actually.

[182:04] Might make a little more sense, I don't know. - Yeah, yeah. - But yeah,

[182:07] this would be right. - Okay.

[182:10] - You could also just do window.location.pathname if that's what we're looking for.

[182:15] - Okay, okay. - Or actually, no. That's the query we're making, so this is right.

[182:19] This is right. - Okay, let me just see.

[182:23] Yeah, I think we can just, so we don't need this. I think that's the URL we want to get.

[182:28] And I think we, I agree, maybe this makes sense to actually put here.

[182:33] But maybe let's just do a use effect thing that is gonna be, so I think this,

[182:41] we're gonna model this as a state. So this is the, kind of the initial state.

[182:48] And then when we have a, so I think it's window.addEventListenerPopState.

[182:58] I think that's the thing that-- - Oh, yeah.

[183:02] - That's the thing that's supposed to be doing this. And then this is where we,

[183:15] I don't know if this will work, but maybe it does. So let's, can we see if this works?

[183:29] - That should do it, I think. - So, yeah, is this actually gonna log anything?

[183:37] So this is going to re-render. - Oh.

[183:40] - Yeah, this might actually do a lot more. So as I start typing, nothing is changing yet.

[183:46] - Does it-- - Let's see handlePopState.

[183:52] Well, only I can see it, sadly. - But as, okay, it's not doing handlePopState.

[184:03] - It's not calling it? Maybe I miss, is that the wrong?

[184:07] 'Cause I think we're calling the replaceState, right? - I think you're right.

[184:13] - WindowPopState-- - I think, okay. I don't think it's gonna fire,

[184:17] navigateSessionHistory, right? It changes from the currentHistory entry

[184:25] to that of the last page of the, right? So it might require pushState instead of replaceState

[184:30] in order for it to work. - No, that doesn't sound plausible to me.

[184:37] - Okay. - I think replaceState should trigger

[184:42] popStateEvent in the browser. - I would think so.

[184:46] - Is this, okay, maybe, I'm just, sorry, I'm just gonna debug this locally

[184:57] in like Chrome. - Yeah, I know. - I don't see anything that's happening.

[185:01] It's very hard to do anything if I don't have the console. - I can do one last try

[185:07] on just sharing the browser window instead and see if it actually--

[185:10] - Yeah, let's try sharing the browser window. - Yeah, I can do that.

[185:18] ShareScreenWindow, there. - All right, and I'm gonna start typing.

[185:25] It is working, I think. Oh, but then it stopped.

[185:30] - Okay, no, I see typing. Okay, so does it, do I understand correctly

[185:35] that handled never runs? - Yeah, handlePopState's never running.

[185:41] - HandlePopState is not, but we do have-- - We do have it. - It's so weird.

[185:48] Let me just try this, let me try this locally. Like, I'll just try to do window,

[185:54] addEventListener, popState with some block. - Sure. - AddEventListener,

[186:04] and then I'm gonna try to do window.history.replaceState with some-- - Do the bad thing.

[186:13] - Oh, yeah, that doesn't run it for some reason for me either.

[186:19] Let me try pushState, maybe you were right. No, pushState doesn't do this either.

[186:24] EditPopStateEvent, does anyone, can you ask somebody who knows how browsers work?

[186:36] Like, why is this not doing anything? - Yeah, I'm sure there's a lot of people in chat

[186:41] who know how browsers work. I can also, well, there's people I can message.

[186:47] There's people I can message. - Because, like, the MDN, I'm looking at MDN examples.

[186:53] - Yeah, it's right here. - They show the exact same thing, right?

[186:57] - It's the exact same thing. - So what is different in what we're doing?

[187:00] Oh, interesting. - Yeah, notice that the pushStates don't do it,

[187:07] but back and go will log. So that's not good.

[187:11] - Oh! - Yeah. - I forgot that's how it works.

[187:15] This is so confusing. - Because this API was invented

[187:19] before client-side routing was common sense. - Yeah, so there's a new transitions API,

[187:24] which I don't know enough about, but that could be one way to talk.

[187:28] - Yeah, well, let's see. I think I saw something like this recently.

[187:32] So, replacement for history. Yeah, that's why people use this history package.

[187:38] I think that's-- - Oh, yeah, that too.

[187:40] - New API for, how do I search this? Like, mgn-history-api-replacement.

[187:50] I don't remember the new name. Like, what is the name?

[187:56] Can I ask Chad to do it? Maybe he doesn't know what's the new name.

[188:01] - We can ask. - What's the name of the spec

[188:05] that supersedes history API for browsers? - I've definitely read about--

[188:15] - Yeah, the view transition is going to assume a navigation is happening,

[188:20] and it's going to slide in a new page, which is actually not what we're trying to do.

[188:24] - A view transitions? No, I think view transitions has something to do with like,

[188:31] I think that's different. It's about making it kind of look nicer, right?

[188:40] It's about like-- - What?

[188:44] - It's meant to be different than like, doing a manual push state and changing parts of the page,

[188:49] where you can say start view transition, get a snapshot of what's on the page right now,

[188:53] and then replace the DOM here. But it assumes DOM's being replaced.

[188:58] - Yeah, so I found it. The new thing is called navigation API.

[189:01] It's window.navigation. So let's see if that's, that even exists.

[189:04] - Oh, wait, is that different? Okay.

[189:08] - Yeah, so maybe a window.navigation. Let's see if I can, navigation API, blah, blah, blah.

[189:17] Navigate. Okay.

[189:23] - How do you replace? I actually don't see that.

[189:26] - Navigate. - So if I go to navigate, options,

[189:34] the current state info, history replace. Okay, you can do that.

[189:41] - But where is that? - I'm looking through.

[189:45] Oh yeah, and it's add event list or navigate. This could work.

[189:49] So what you would do instead of history, is inside of search, just search,

[189:57] it should be window.navigation. Oh, I'm actually not getting the API.

[190:04] Is it too new? I'm just gonna try and navigate.

[190:08] - Yeah, it's too new, it's experimental. - Yeah, that's fine.

[190:12] So yeah, we navigate to that. And then options, you can say, not replace true.

[190:20] It's history replace. - Okay.

[190:27] - That'll do it. - And let's try to listen to,

[190:34] what is the event handler on? - Just navigate.

[190:38] - Okay. - And it's also suggesting a event.intercept.

[190:43] I don't know why. - I don't know what that is.

[190:45] Let's for now ignore whatever that is. - Yeah, let's ignore that.

[190:49] Yeah, that's intercepting. Yeah, I don't know.

[190:53] 'Cause you're already intercepting if you're listening, I guess.

[190:55] - Okay, so I'm gonna try to, I'm gonna change this to handle navigate.

[191:00] And let's see if that even gets triggered. Can you check?

[191:05] - Let's check. All right.

[191:12] Reload here. And as we type, it's actually not,

[191:19] it's not letting me type. - Let me see here.

[191:24] It's not letting me type. - It's not letting me type.

[191:30] - Uh. I just.

[191:39] - I wonder if it's refetching the page when I type, it's losing the context

[191:45] and then it's all gone. - I-- - That's not what's going on.

[191:49] Maybe we need to disable some things that are happening just to be sure.

[191:58] - Yeah, just don't do this part, but log it. - Yeah, okay, yeah.

[192:02] Let's do this. - Oh, now I get actual errors.

[192:09] Navigate is not defined. What?

[192:11] - Okay, okay, let's, okay. This is all, like, we're going down the rabbit hole.

[192:16] Let's do it completely differently. I'm just going to-- - Okay.

[192:19] - Like, this is too much. We're gonna do this.

[192:23] - Yeah, I wanted to know about the browser APIs, though. It's a shame. - Yeah, we're--

[192:26] - I just forgot how I thought of it. - The browser API,

[192:29] we're gonna invent our own browser APIs. - Yeah.

[192:32] I was thinking send custom events or something. We can do this.

[192:36] - Yeah, we're just gonna be, like, window on URL change.

[192:41] That's gonna be our custom. I'm adding this to.

[192:44] I mean, this doesn't make any sense, but I don't wanna, you know, that's,

[192:49] I think my patience is a bit, yeah. - Oh, boy. - We're just gonna have--

[192:54] - Yeah, that'll do. - Let's do that.

[192:56] - That's, you know, go backs. - Yeah, I was gonna do it a little bit more politely.

[193:03] This is fine. - Yeah, we're just gonna do this,

[193:07] and then we're gonna, we're just gonna do, like, go backs.

[193:11] Push, and it'll navigate. And then this is gonna be something like go backs.

[193:20] - Yeah, just pop it off or slice. (keyboard clicking)

[193:27] - Oh, yeah, that worked. - Turn something maybe like this.

[193:33] - I think that's right. - Can we see that the disk is called?

[193:38] - Let's see. Handled, yeah.

[193:43] - All right, nice. Okay, so now let's try to update the state as well.

[193:53] - Oh, it's filtering. - Is it working? - Oh, my God.

[193:58] Okay, it hides the search box while we're searching because we put it behind the wrong suspense.

[194:04] But, oh, my God, it works. - So, wait.

[194:07] This is actually the part that we can fix. So, the issue is that,

[194:13] can you, like, demonstrate the problem? So-- - Yeah.

[194:16] Yeah, I can follow you, perfect. No, I mean, like, can you show the,

[194:24] I guess I don't see it because the stream is not fast enough.

[194:27] I don't know if people see it. - It's not fast enough?

[194:29] - Like, the problem is, let's increase the delay so that it's, yeah, okay.

[194:35] So, the search bar disappears because we actually need to get the server component output

[194:41] and the server component output is, like, waiting, right, for, you know, for that filter or whatever,

[194:47] like, to, like, fetch the data before we can even know, like, what to show.

[194:51] And so, it suspends. - Yeah.

[194:54] - And so, the way, like, the way you handle it in, so, it's, like, one way,

[195:00] one thing we could do is, like, maybe restructure it a little bit

[195:03] so that the, I think, like, search input isn't kind of blocked or on anything.

[195:08] But the idiomatic solution in React is router changes.

[195:16] So, again, like, this is primarily if you're developing the framework, right?

[195:21] Like, I think this is, it's something like, like, if you're making a framework for,

[195:25] you know, server components, this is something you should probably know,

[195:28] is that the route changes, so, the set states that lead,

[195:34] the route changes should be wrapped into transitions. So, what I'm gonna do is I'm gonna import

[195:40] start transition from React here. - Ooh, yes.

[195:45] I wanted a transition demo. Okay.

[195:48] - So, I'm gonna wrap this set state into transition, and so, this tells React that,

[195:54] actually, it's okay for the screen to be inconsistent. So, like, even though we know we're, like,

[196:00] fetching something, we're waiting for something to happen, it's okay to let that, you know,

[196:05] we don't need to immediately, like, show the spinner. We can actually wait for that thing

[196:10] to be, like, complete enough that-- - Wow.

[196:13] Ah, I've been wanting to understand transition for so long, and I get it.

[196:19] I see the use case there. Okay, and everything works.

[196:23] - Yeah, and so, what should also work now is-- - Cached ones are faster.

[196:28] - Yeah, so, now if you type the same thing again, because you've cached the server component with responses.

[196:34] - Ooh. - Yeah.

[196:36] - Oh, this is mind-blowing. I love that cache was involved, too.

[196:40] Yeah. - The other thing we can try,

[196:43] which I don't know if it's gonna work, because we had a bug related to this,

[196:47] but I think maybe it works, is I'm gonna go to search.jsx,

[196:51] and I'm also going to, yeah, so, okay, yeah, that's, yeah, okay, I'm also going to add the useTransition here,

[197:03] so if you only want to start a transition, you can just start a transition,

[197:08] but if you want to show visual feedback in the component tree itself,

[197:12] where, like, something is being refetched, and, you know, like, you don't want it to be just,

[197:17] like, the user doesn't know what's happening, you can have useTransition here,

[197:22] so, and that gives you this, like, let's go startTransition, useTransition,

[197:30] so that gives you this, like, isPending Boolean, and so what it can do is, like, I know that,

[197:36] you know, this is, I'm actually gonna, like, I'm gonna rename this, I'll call this, like,

[197:46] like, well, okay, that's what I'm gonna do, I'm gonna call this window.router.navigate to here,

[197:54] and I'll just, like, that's supposed to be, that's, like, the route, like, your framework,

[198:00] I mean, you wouldn't put it, like, on the window variable, of course,

[198:03] but it'll be, like, yeah, but that's, we're gonna go back through the client,

[198:11] and I'll just, this is gonna be our toy router that has, like, navigate the URL,

[198:17] and so this is the part that actually does the, this is the URL, it does the state,

[198:23] and then it calls, it calls the callbacks we registered, so I think--

[198:32] - Window.router.navigate.replaceState URL, okay. - Yeah, and so this is-- - I'm still getting it.

[198:41] - Um, say again? - We're hitting the client error.

[198:49] - What is the error? - Yeah, the user, no, no, no, not that.

[198:53] Callbacks is not defined, okay, it's just a-- - Typo?

[198:57] - Yeah, it's just a typo, probably. - Where is it? - Or a con--

[199:00] Oh, and I also-- - Oh, I think I deleted it accidentally. - No, there we go.

[199:04] Yeah, we just deleted it. - Okay, let's try again.

[199:08] - Okay, that's working. - Yeah, so now let's, let's go back to the search,

[199:13] and let's say-- - Oh, and look at this, we can actually see

[199:19] all the requests coming down the wire, too. It's gonna keep doing this.

[199:24] - So let's add a little bit, I mean, this is gonna be-- - Yeah, that's a new--

[199:29] Can I add this back? - This is gonna look a little bit ugly,

[199:34] but I'm just gonna add, like, a, well, also, like, if is pending,

[199:40] then I'm gonna add, like, a little, you know, like, a little,

[199:46] I don't know, margin left to, or something. I don't remember how to do it.

[199:59] - Sure. - Italics and element, but let's see if that works. - Yeah.

[200:03] Yeah, I think italics are what we want here. That should work.

[200:09] So can we see if that does anything? - It looks like it is.

[200:14] Yeah, we get a little loading flash, but if we do something and it's cached,

[200:21] ah, not emojis, it's pretty much instant. It shows a little flash of it

[200:27] while it fetches from the cache, or just reads the cache. - Yeah.

[200:30] Yeah, so the way you deal with, like, you know, so what we kind of want to do here is, like,

[200:36] we want to show, you see, like, this you are looking for, like, label that we have?

[200:44] It doesn't quite make sense. Well, so this is the thing that will be updated later,

[200:51] because, like, we need to go to the server, and, like, that part is, like, on the server,

[200:54] and we could have moved that to the client and, like, show it in the search box instead.

[200:59] So I think it just depends on, like, what kind of UI do you want?

[201:03] Like, do you want, you know, like, other patterns could be,

[201:08] you could make the search results gray, like, grayed out while the,

[201:15] while you're refetching it. So that's another kind of common pattern.

[201:21] - Yeah. - Maybe, do you want to try to do that?

[201:26] - Sure, yeah. - Could be fun.

[201:30] (computer mouse clicking) - It's a little bit,

[201:37] it's a little bit trickier, like, to figure out how to do this.

[201:40] - Yeah, okay, I'll be honest. I was reading something from chat

[201:43] and missed the last 20 seconds of what you said. Can you say that again?

[201:47] - Yeah, I was saying, now, like, we can kind of,

[201:52] I don't know, maybe we should just, should we go through the code and just kind of recap?

[201:58] Because, like, we have a working solution now. So it seems like a good time.

[202:03] Like, we built a tiny framework that does a little bit of routing

[202:07] in a way that, like, works with server components. So maybe it's a good time to recap, like,

[202:12] what's going on in our setup. Do you want to try to do that?

[202:17] - Let's do it. Yeah, so I will try to trace it from the top.

[202:23] But basically what we built is a search box that's able to have

[202:30] just a little bit of client-side JavaScript in order to store a state

[202:35] of what you're trying to search for. And then anytime you put in an input,

[202:38] we're updating the URL bar up here at the top. And anytime that you update the URL,

[202:44] we want to re-render the parts of the page that depends on that URL.

[202:48] Here, the part that depends is the amount of albums that we're showing.

[202:52] So when we say search post, we want to go to the server,

[202:55] figure out which albums actually have the word post in them, and then send that new result down to the client,

[203:02] all without actually having to render all of those albums with client-side JavaScript.

[203:07] So if we head over to our root client, where we're doing this slight hack,

[203:11] but you could formalize this into a framework, as Dan mentioned.

[203:15] In here, the client is able to trigger navigate, or any client component is able to trigger

[203:22] a navigate command, which will tell it the URL it wants to go to.

[203:26] We're going to use the web standard history API to update that state,

[203:30] and then pass in a callback here that's going to trigger actual navigation events.

[203:36] So we mentioned it a little bit earlier, but we had a, and now I'm actually losing where it is.

[203:42] But yeah, way down here is where we're actually going to fetch the server component and render it onto the page.

[203:48] But up here, we're using an effect to say, anytime that you navigate on the page,

[203:54] first off, we're going to start a transition, which I'm still wrapping my head around a little bit,

[203:58] but it's basically saying like, keep the DOM that you already have

[204:03] until all of the other async stuff has resolved, and then replace it once all of that is settled.

[204:08] Is that kind of what it's doing? - Yeah, I would maybe, and again, just to clarify,

[204:14] like this file we're looking at, that's not good. Like that is the part that's like the framework part.

[204:19] That's not the part-- - This is the framework part. - This is not the part that you're supposed,

[204:22] like you don't need any effects here as a server components user or something like this.

[204:27] So this is like the framework router part, really. Actually, I just realized that we made one omission,

[204:33] which is I think we still need to handle pop state because we want the back button to work, right?

[204:39] So we want the back button to also update the, so I think that should give us the,

[204:49] well, I guess we replaced it. So it's, you're not gonna see it, but like--

[204:53] - Yeah, you're not gonna see it. But yeah, this is another thing that frameworks deal with,

[204:58] where if you don't wanna have like a full page refresh every time,

[205:01] 'cause if you did this fully server side, we could, anytime you type in the input,

[205:06] send a form request, refresh the page, and send that new stuff down.

[205:10] But here we wanna say, don't refresh the whole page, keep it where it is.

[205:14] We're going to handle those changes to the URL bar ourselves and we're going to make sure like,

[205:19] when you do all your web standard back buttons, they still work.

[205:23] And when you actually navigate, we don't wanna blow away the app

[205:26] and re-render it top to bottom. We wanna keep it where it is

[205:29] and trigger anyone that cares about the transition to also like show little loading states.

[205:35] - Yeah, so just to clarify, like the start transition stuff here,

[205:39] it doesn't prevent, like, it doesn't have anything to do with like

[205:42] reloading the page completely because React wouldn't reload the page, right?

[205:47] Like we're just setting state, there is no reason to reload the page.

[205:51] What happens here is it just prevents React from hiding content that was already visible.

[205:59] Like if you're interacting with like a search input, you don't want that input to get hidden

[206:04] 'cause like we're waiting, you know, our new state is this response from the server

[206:09] that's still streaming in. So start transition just says,

[206:13] this state update is not urgent. You don't have to, like React doesn't have to,

[206:19] like React can wait until we have something meaningful to show.

[206:25] So in reality, like what that means is like, it wouldn't wait, like it will wait long enough,

[206:31] not so that it doesn't have to hide any existing content. But for example, if you, you know,

[206:37] if your server response includes like some new suspense boundary

[206:41] with a bunch of stuff inside, it's not gonna wait for that

[206:44] 'cause there is no reason to, you know, we can show it immediately.

[206:48] But it's just like start transition is this opt-in into saying, this is not urgent.

[206:52] So you don't have to like hide a bunch of stuff while we're waiting, like keep things as they are.

[206:58] And then we can keep track of them inline in like the search component.

[207:04] It has like inline indicator that it's like, it's parent is actually like refetching.

[207:09] But yeah, yeah, so this is kind of what it is. So that's what happens inside the framework.

[207:15] But you know, if we forget this file exists and we just approach it from,

[207:19] like I think it's helpful to describe it from the server components point of views.

[207:24] Like as a user, you don't even have this root client.js file.

[207:27] It's like somewhere in the framework. Like as a user, where do you start?

[207:32] You know, where does the story start for a user? - Gotcha.

[207:37] Yeah, 'cause that's the boundary that we set with suspense, right?

[207:40] Where anytime you edit, well, we can't see it anymore, but it used to like, it'll sort of show that fallback

[207:48] and then show the whole result. But what we've done is we put the search box

[207:52] alongside the stuff that's loading. So in order to make sure all of like the stuff

[207:56] you're looking at in the search box itself aren't, as you mentioned, like, you know, removed from the page

[208:01] or changed in some way, transition is the way to do that. And I'm assuming like use transition

[208:08] is a pretty global thing. Like if you start transition, is it based on parents?

[208:14] Where like, if a parent starts a transition, the child picks it up here?

[208:17] - No, it's really about the state updates. It's like, whatever you,

[208:23] whichever like set state goals happen inside of a strategic goal,

[208:28] they are kind of marked as this stuff is not urgent. And, you know, React will display the output

[208:35] when the stuff is ready. - Yeah, but what I meant more like,

[208:39] I think if we ignore like all this wiring and we focus on how you approach it as a user,

[208:44] the entry point is really like root.server.js, right? That's where the story starts from the user perspective.

[208:52] And so you kind of just see it as, you know, you have a root component, like in this case,

[208:56] server root that accepts the search. And it doesn't matter if it's the first time it loads

[209:01] or if it's like a refresh, the way you think about it is the same.

[209:05] It's like, you got a response, you got a request, you're gonna hand, you know,

[209:10] you're gonna re-render the tree. And so you think of it, about it as like,

[209:14] I received some search query, I'm gonna pass it to albums,

[209:18] albums passes it to, it's like searchable album list, which is also, also runs on the server.

[209:25] This is where we actually do the filtering. And then we render the search box and the list of albums.

[209:32] And so the search box is kind of, this is where it, you know,

[209:37] this is where like this other side of the flow triggers, where it's like, when I tap into the search,

[209:44] I want to navigate, you know, I, as a user, I say, just, I just want to navigate here.

[209:50] And then that's, that's the whole story, right? Like, because now it's the server,

[209:55] like we're again in the server, in root.server.js, and we just kind of render again using the new search value.

[210:04] So you don't really think of it as like state management. - Right, yeah.

[210:09] - In fact, we could even, just for fun, we could even delete the state here.

[210:13] So we could, I believe we could get rid of the state completely.

[210:18] And this could just be uncontrolled input that has like default value equals initial search.

[210:26] And it has this unchanged handler that just does the navigation, doesn't do anything else.

[210:31] And I think it should still work. - It actually does.

[210:35] - Yeah, so there's like no state management here. There's no like managing caches yourself,

[210:40] or you just, you know, you want to change some data, you just re-render the page,

[210:47] but then it doesn't, you know, it doesn't recreate the DOM. - It doesn't recreate the DOM, yeah.

[210:52] And the boundary that was like, if you don't have a transition,

[210:57] it will use the suspense fallback. So one thing I'm wondering inside of like root server,

[211:02] if we remove the suspense wrapper, what will happen? Do we need transition anymore?

[211:07] - Let's try, I don't know. I think maybe it would work without a transition, I think.

[211:17] But it's, well, I guess like depends on where you want

[211:24] to remove the transition. 'Cause we currently have two, like we have,

[211:28] they're nested just to be able to show the spending. That's why like we,

[211:33] because the routers should always navigate in transitions, but we can also like wrap it in extra time to get this,

[211:39] like, is it happening for feedback? - Yeah, and so how does it know when is pending is done?

[211:48] Is that when like everything down the parent chain of components is now rendered?

[211:54] And now it's been resolved? - Not quite.

[211:56] It's, I think conceptually, like it's, you know, the way it's implemented doesn't,

[212:05] like there are different ways to do it. But I think conceptually, you can imagine it as,

[212:09] it kind of spawns like a new kind of parallel universe sort of where the state is, you know,

[212:17] like if we go to root.client.js and you see that, you know, it does this like set URL call.

[212:26] So traditionally like this would mean, you know, the state changed, get the new thing

[212:33] on the screen immediately. And so if we get rid of start transition in like both places,

[212:39] we would see traditional React re-rendering behavior where it's kind of, yeah, just, we changed this.

[212:46] Now it has to update the, you know, to reflect what's in the state.

[212:50] We don't have the JSX tree for what's in the state. So that's why it's like,

[212:54] it's showing us the closest suspense spinner, which, yeah, you would need to add.

[213:01] And the analogy that I like to use for this is Git. So if you work on main, you know,

[213:07] like if you only work on main and then you, you know, you make a change that like you start refactoring something

[213:17] and you like change, you know, like one file. And like, it's not done until you finish refactoring,

[213:26] right, like your project is kind of like in the loading state, like it's not ready.

[213:30] It's like, and the users would see, like, imagine you refactored in production, right?

[213:35] Like your users would see that you're doing that. And that's why we don't do it this way.

[213:40] Like we start the branch, we work in a branch. And then when we think like, okay, this is enough to ship,

[213:46] we merge it into the main branch. And so transitions are kind of the same concept.

[213:50] It's like branches. It's like, you're telling React, here's a set state.

[213:55] I want you to do, but actually start working on it. Like, you know, in background, sort of,

[214:02] so like start preparing it. You can almost imagine, like,

[214:05] imagine you had two screens and like one screen was like what the user sees.

[214:10] And the other screen is like, it's like background stuff. And like on the screen where the,

[214:17] that with the background stuff, like you would see like a big loading indicator

[214:22] because like nothing is ready yet. And then it would kind of gradually refine to get,

[214:26] you know, with the server data. And at some point you have enough server data

[214:31] that you don't, you don't, you wouldn't need to hide anything to show it.

[214:36] It's like, you wouldn't need to hide any existing content. So this is where React commits the transition.

[214:41] So React is like, okay, we have enough of the tree that we wouldn't need to hide anything.

[214:47] Like nothing would like disappear under here. And this is like, it's automatic.

[214:52] We don't, you know, you don't think about this as a user, but that's the heuristic we use is we're gonna,

[214:58] we're gonna show you the output as soon as we have enough that, you know, it doesn't, it doesn't feel disruptive

[215:05] because like nothing disappears from under you. - Right.

[215:10] Yeah. And I'm playing with transitions off to the side of like, what if I delete it here?

[215:13] What if I remove it here? What if we remove the suspense boundary?

[215:17] And I think it'll, it'll still take some time to like really feel it out.

[215:21] Cause I'm sure you use it in a lot of different contexts, but for the search box, it makes sense to me

[215:27] where you definitely want to start transition here because we want to be able to track like, okay, this,

[215:35] we we've started something. We've started a window navigation

[215:38] and there's no await here. We don't know when it's done.

[215:41] All we want to do is show that it is pending. And then as soon as React has figured out like everything

[215:48] or it's resolved all of the components down the tree, I'm trying to find like the perfect vocabulary here.

[215:52] And I don't think I have it yet. - I wouldn't say, well,

[215:55] I wouldn't say like it doesn't need to resolve everything because maybe you have some new components you're showing

[216:00] and there's no reason to wait for them. So as soon as you have enough,

[216:05] that would be not embarrassing to show. That's kind of how I explain it.

[216:10] It's like, as soon as you have a decent loading state, like as soon as, and it's determined automatically.

[216:17] So you don't need to kind of think about it. - Yeah, it's contextual where it's like,

[216:23] we know you called this from the search box. So we know like what this search box depends on,

[216:28] the parents that it has in order to render that search box again.

[216:32] So. - No, no, no, that's not how it works.

[216:35] It's not, it's not, it's not conceptual. I think that's kind of the cool thing about this.

[216:39] Like it really doesn't care about, because you could be navigating to another page, right?

[216:46] Like you could be navigating from a feed page to a profile page.

[216:50] And then let's say on the profile page, you have profile cover,

[216:55] and then you have timeline, like profile timeline inside of suspense.

[217:00] So what that means, and then that's why start transition

[217:03] is built into the router. So it's not just for this like search box.

[217:09] Even like here, we could completely remove start transition. - Yeah, well here we're tracking it.

[217:13] Like we just want to show a state tracking what's going on.

[217:17] - Yeah, so here, here it's not essential because it's, we only added it here

[217:20] to get this access to this is pending. - Exactly.

[217:24] - Where it's important is, is only like at the router level.

[217:27] And so what this does, what this does here, for example,

[217:32] if we're moving from feed to profile, and then profile has like a cover

[217:38] and a timeline wrapped in suspense, is what's going to happen is that if profile cover

[217:43] needs to load some data, for example, profile name and your avatar,

[217:48] then the router will wait for that to be ready. Like it won't, you know,

[217:53] teleport you to this empty profile page that doesn't have anything

[217:57] because we don't have a decent loading state for it, right? Like we don't, we don't have something to show yet.

[218:04] But then as soon as like the profile cover is ready and the remaining stuff is wrapped in suspense,

[218:09] it will be like, oh, now I can actually move to this page

[218:12] because I can show the cover and then the rest will have a spinner.

[218:17] So this is what it does is it just opts you into this. It doesn't have to, it doesn't have to happen right away,

[218:24] but we're going to wait enough until we have something decent to show.

[218:28] And it's based on this heuristic. So it doesn't really care from which component you,

[218:32] because like you see like here, it's really at the root level.

[218:36] It's like in the router. - Yeah, this is at the root level.

[218:38] - So it doesn't even know you're calling it from search input.

[218:40] It doesn't care where you're calling it from. - Yeah, I guess in the other example,

[218:45] I was trying to figure out when is pending resolved. And it sounds like there's more heuristics involved

[218:51] than just like everything down the tree has re-rendered. Like there's a lot more to it.

[218:56] - Well, it's not a lot more. It's a very simple heuristic,

[219:00] but it's very non-intuitive because like, we only figured it out like in the initial design,

[219:07] it didn't work like this. And this is the most natural kind of,

[219:11] it's a bit weird because like understanding the heuristic is pretty difficult,

[219:16] but then the way it works is like very natural. So you don't have to think about it.

[219:20] It's like, you don't need to know about it as a user, but you know, if I'm explaining,

[219:24] like if you're curious as kind of like a framework author, how it works, then it's really,

[219:28] can we, if like every time, you know, we're about to like,

[219:37] we got some new data, right? Like we got, we could maybe make some progress

[219:41] on like rendering the tree. And then every time we're like, okay,

[219:46] for now it seems like we're done. Like, you know, we've done everything we could

[219:50] with like the data we have. And we make a decision like,

[219:53] is this enough to like show this to the user now? Or do we have to keep waiting longer?

[219:59] - Yeah. - And the way we make the decision is pretty simple.

[220:03] It's if we have rendered it now, would we have to hide any existing content?

[220:12] So this moment where like search bar disappeared because like something there was not ready.

[220:17] And there was like a suspense boundary above. It kind of means like we're resuspending it, right?

[220:22] Like it wasn't here, but it's like, it has to disappear because some part

[220:27] of the tree is not ready. And so if we have to do this,

[220:32] we're not gonna commit it. We're gonna, no, like let's keep waiting a bit longer.

[220:36] But if we have enough of the tree that we don't need to hide any existing content,

[220:41] it's just maybe we have some new content that's like not so efficient.

[220:46] In that case, we would be like, yeah, sure. Let's go ahead, let's show it.

[220:50] - Okay. Yeah, I think I'm getting it then.

[220:53] It's definitely based on like what you have now and what you're trying to get.

[220:57] And if you have enough of a match in what you're trying to get

[221:02] that you're not gonna hide anything, then we'll go ahead and resolve it.

[221:05] - Exactly, yeah. Yeah, that's how it works.

[221:09] It's a very simple thing, but it's also like it's hard to wrap your mind around it.

[221:13] But like, I find it kind of fascinating because it solves, like it is a solution to the,

[221:20] if you ever developed a router in traditional kind of JavaScript ecosystem,

[221:26] there were always like, you always have to make this trade-off between

[221:32] how do I know when to show the route during navigation? And different routers solve this differently.

[221:41] So for example, in some routers, I think maybe Ember router, I'm not sure,

[221:48] but in some routers, they always, they wait for all data for the new route to be ready.

[221:56] And then they transition you to the new route. And so the benefit of this is that the user doesn't see,

[222:03] you know, like this immediate, like big spinner that's like you're pressing a link

[222:06] and you have nothing to show yet. But the downside is you have to wait for everything to load,

[222:12] which could be slow. So ideally, you know, you wouldn't have to.

[222:16] And then the other extreme, which I think like most kind of React solutions,

[222:21] at least for some time, it depends on like how we configure it.

[222:25] But at least it was very common that, no, routing happens immediately.

[222:29] So like you press the link, you immediately rerender, like you rendered a new page,

[222:34] but maybe it's not ready. And so you have the spinner or whatever,

[222:37] because you just don't have anything to show. And so I think the beautiful thing about this paradigm

[222:43] is it lets you draw the boundary exactly where you want, just by placing suspense around it.

[222:50] - Exactly. - Because like the router uses transitions by default,

[222:54] so you don't have to kind of, it's like by default, everything is like sticky.

[222:59] So like until everything is ready, it doesn't do it. But then suspense lets you say,

[223:05] no, actually this part of the tree, that's okay to wait a little bit.

[223:09] Like it doesn't have to wait for this. So that's, it's kind of like inverse await,

[223:14] where you say like this part, it's independent. I wrap it in a loading state,

[223:19] now transitions won't wait for it anymore. And I think that's maybe like a natural way to explain it.

[223:24] It's like by default, everything is sticky and like suspense is what like unsticks it.

[223:30] - Yeah. Oh yeah, that's a wild way to think about it.

[223:35] Because yeah, there wasn't really a convention for this before.

[223:38] You were just going to grab whatever the tree is and plop it on the page.

[223:43] You can't use heuristics to know what was there before in the new thing.

[223:47] It's not really like diffing, but it is figuring out like,

[223:50] you don't really want to suspend again. Like we don't want to keep suspending

[223:53] every time we type in the search box. We've suspended before

[223:57] and we don't want the user to see it. So if we do a start transition,

[224:00] we can still get the new state. That's how we're getting like the new text

[224:03] inside the search box, but we're going to avoid blowing it away

[224:08] while we're doing it. - Yep, yep.

[224:10] - Very cool. Okay, I'll also admit that I'm like,

[224:16] I'm running on fumes. I had breakfast like eight hours ago at this point.

[224:20] I didn't think we would go this long. I definitely thought we were going to go for like two hours,

[224:24] maybe two hours 30, but super generous with your time.

[224:27] But I'm going to push this up while we were working on like a separate branch,

[224:33] just in case people want to see co-authored by Danny Ramone.

[224:36] Absolutely. We'll call it,

[224:38] hoo boy, router toy. It's what I kind of liked.

[224:43] RSC demo also. RSC stream demo.

[224:46] If anyone's wondering what the Twitch stream demo had. Yeah, we'll do that.

[224:51] And if anyone wants to play with this, I'm tired from just following along.

[224:56] Man, thanks for sticking through here. I saw y'all at the beginning of the chat.

[225:00] Thank you. But I shared it just above.

[225:02] If anyone wants to play with this toy implementation of React server components,

[225:08] we never actually got to look at a framework. We built our own.

[225:11] But this is simple RSC. It doesn't even have a readme at the moment.

[225:15] I was very undergone trying to get it in for the stream today.

[225:18] So I'll try to add some docs and maybe explain the dev panel a little bit more.

[225:23] But the goal is to not add any more features to this. - Maybe delete the files that we don't use.

[225:29] So that like, I think you have like a bunch of files that we didn't end up using.

[225:33] - Yeah, I think the Bjork album's gone. The like button was never pulled in.

[225:38] Counter was never pulled in. That should be it.

[225:42] Oops. And I'll double check on this

[225:48] in case it was floating around somewhere. Yeah, it still is.

[225:50] - Yeah, maybe let's rename like root.server.js to something like server root.

[225:56] And then the root.client.js to something like router. Or I don't know, like ideally we would maybe like make a,

[226:03] like I'd like to see some separation so that it's clear. This is the framework part.

[226:08] This is not the part you're supposed to be writing. - No, exactly.

[226:12] Yeah, I definitely prefer to, oh, did we actually get an index file?

[226:15] Where did this come from? I think this is just like an old thing.

[226:19] - Yeah, this is not being used. - Yeah, that's not being used.

[226:23] I wanted to call it like, we decided on index and bootstrapping as like loose names.

[226:29] I don't mind it, but index feels right for that because that's like the index route.

[226:35] And this is just, yeah, there's a few ways to put this one. - Well, maybe not the index, maybe like page or something.

[226:44] - Oh, page is good. Well, I've got an XJS style.

[226:48] Yeah, this can be, yeah, route handler. Well, it does a lot of things.

[226:54] It mounts it onto the page. So client app.

[227:00] - I think, can we like move it out of the source directory and like put it like closer to like the handler?

[227:10] I think like conceptually it's related to this like handler.js, right?

[227:15] Like in a way, it's like the client part of it. - I hear what you're saying.

[227:23] Or maybe you could like move to a source, like make a directory called framework

[227:27] and then there would be like server.js and client.js. - Yeah.

[227:33] - Router.server.js, router, I don't know. Up to you.

[227:39] - Yeah, I went back and forth so long, I landed on the remix names and I still don't like them.

[227:45] So. - Yeah, I just think it's important to like make sure

[227:49] that people don't think that this is the stuff you're supposed to be writing.

[227:53] 'Cause like the actual application code is just page.js, search.js and searchable album.js.

[227:59] - Yeah, we could call it like underscore internals. - Yeah, that's it.

[228:07] - So like bubble it up. - Sure.

[228:09] - Yeah, and the only thing left to do is to track down a couple of hard-coded things.

[228:14] I think I was pretty, I wasn't great about this. So that would be page now, I'm hoping.

[228:20] - Also, this is not the client part anymore. - Yeah.

[228:26] - Wherever we did root.client, we did that. - Okay.

[228:34] - Yeah. Oh, so let's rename search to search box

[228:40] 'cause that's how you named it in the-- - Oh yeah, I noticed we were a little inconsistent.

[228:45] - Okay, I renamed it. - Okay.

[228:50] And I'll move the filter albums function down so that it doesn't obscure the component.

[228:56] - Built successfully. I think everything works, what?

[229:01] Awesome. That's search box, that's that.

[229:08] This index file is just not a thing. I don't know why it keeps coming back actually.

[229:13] Why does it keep coming back? - I don't know.

[229:16] - Nice, maybe stick it in support. I hear you, I don't know about that.

[229:28] I don't know. Yeah, I think internals is still where I'm sitting.

[229:33] I've also seen engine as a convention but that's a little more, eh.

[229:37] - You can also call it underscore raw there. - Yeah, that's fine.

[229:44] It does kind of indicate you can have multiple routes but it is a router.

[229:51] - It's like toy router. - Toy router.

[229:56] Yeah, I mean the whole thing's a toy so I'm not gonna call it that.

[230:01] - Yeah, no, that's good. - Yeah, that'll work fine.

[230:13] - Okay, I'm feeling good about these names. And the only squiggles we have should just be,

[230:20] yeah, we're abusing window and async is not part of like the built-in TypeScript JSX thing.

[230:28] It's kind of funny that JSX has been hijacked as like this standard that can be highlighted

[230:32] the same way for everyone because you can use it different ways

[230:36] and you end up with funky situations like this where some people support promises and some people don't

[230:41] but it's still JSX. - Yeah.

[230:43] Why does it keep showing client part? I think I deleted this comment before.

[230:50] - Yeah, sometimes live share gets out of sync and luckily we've been pretty in sync this whole time.

[230:57] Perfactor new naming. All right, that's up.

[231:09] - Beautiful. - Beautiful.

[231:13] Yeah, well, I'll go back to our big faces, I think. Your lighting's gone down a bit.

[231:19] I have some more time, but yeah. Let me make sure of the branch before we sign off.

[231:26] Or okay, my computer's chugging. Y'all can find the branch.

[231:29] Don't worry about it. But hey, if you enjoyed the stream,

[231:34] I try to do Twitch streams every week, Thursdays at, what is it now?

[231:41] It should be 3 p.m. Eastern, but we bumped it forward a little bit

[231:44] for this special edition stream. But I've been doing React server components a lot.

[231:48] I've been going really deep on it 'cause I'm also someone who works on Astro,

[231:52] which is a meta framework. It would be cool to support some implementation

[231:55] of server components, if not for the migration story. So I'm gonna be playing with it a lot more,

[232:00] see what we can do to bring it to more frameworks. And yeah, drop a follow if that interests you.

[232:06] You can also, of course, follow Dan. If you're not, I don't know why.

[232:10] But he's around Twitter, Dan_Abramov. You can see the title of this stream.

[232:15] I think that is the Twitter handle. Is there anyone else anywhere else

[232:20] that you want people to find you, or any closing thoughts? - No, I don't think I want people to find me.

[232:27] - All right, fair enough. (laughing) - Not enough of them have found me.

[232:31] But yeah, I just want to say I really appreciate here offering for me to be on the stream,

[232:39] and also, you really did the homework on, I mean, the only reason we were even able

[232:47] to build a mini-framework is because you've already built 80% of it.

[232:52] So really appreciative of doing the homework so well. It's really impressive, considering there aren't,

[233:01] there isn't that much documentation around it. But yeah, thank you so much for creating this opportunity.

[233:09] It was really fun. - Yeah, yeah, I mean, thanks for just saying yes

[233:13] on a random Twitter DM. I wasn't sure, but I thought like,

[233:17] 'cause I saw the stream you did with Kent C. Dodds and others, and it was like, this stream was great,

[233:21] but I wanted to see what was being talked about, 'cause there's only so much you can do

[233:25] with waving your hands around and trying to draw boxes. It's like, can we actually draw a flow diagram

[233:31] and see some code? Because conceptually, there's a lot going on.

[233:37] So yeah, I think this went over really well. And the replay will be on YouTube also.

[233:42] I'll share the link in the chat again, but I'll try to upload this live stream over there.

[233:47] It might go up by tomorrow, because downloading four hours of stream from Twitch

[233:51] and uploading four hours of stream to YouTube takes time. I also do wanna chop it down a little bit

[233:56] to see if we can get like the let's build a router part separate from the let's understand server components,

[234:02] because one's more intermediate and advanced than the other. But yeah, all right, okay.

[234:09] Yeah, well, good having you. Thanks for stopping in.

[234:14] And, oh, let's actually find someone to raid before I hop off.

[234:18] Does anyone have suggestions we should join? - What does it mean?

[234:25] - Well, what is raiding? I don't understand.

[234:29] - Oh, it's something you can do on Twitch to take your audience and push them

[234:33] into another stream that's active. - Oh, I don't have to be like forced to do that?

[234:41] - Well, I mean, you can just stop watching if you don't wanna do that.

[234:43] - Oh, okay. - It's kind of like YouTube autoplay,

[234:45] but you'll get to choose the place. Yeah, yeah, but it hosts inside of yours,

[234:50] which is kind of interesting. So it feels like you didn't leave.

[234:53] It's, I don't know, it's a fun system, but I'll raid Cassidy because she's great

[234:58] and does a ton of React tutorials and everything. We still had a ton of people sticking around.

[235:03] Thank y'all so much. Drop a follow for the next stream,

[235:07] obviously, do all of that. But yeah, see y'all around.

[235:12] - Bye. - Okay.

[235:18] [BLANK_AUDIO] 
