---
showLink: "https://www.youtube.com/watch?v=HjmLLlHd7ms"
channel: "Ben Holmes"
channelURL: "https://www.youtube.com/@bholmesdev"
title: "React Server Components deep dive with @JamesQQuick"
description: "Ben Holmes and James Q. Quick explore React server components and compare them to Astro's server-side rendering capabilities."
publishDate: "2023-03-13"
ogImage: "https://i.ytimg.com/vi_webp/HjmLLlHd7ms/maxresdefault.webp"
---

## Episode Summary

Ben and James dive into React server components, discussing the mental model, similarities to Astro, and building a demo outside of Next.js. They compare how React handles streaming, suspense, and loading states versus Astro's default streaming behavior. The pair also touches on their preferred tech stacks and course creation.

## Chapters

00:00 - Introduction and Technical Setup  

Ben and James discuss the stream setup and their excitement to explore React server components.

02:06 - James' Current Tech Stack and Course Plans  

James shares his current favorite frameworks (SvelteKit, Next.js, Astro) and his upcoming Astro course.

13:01 - Walkthrough of React Server Components Demo  

Ben walks through the demo he built to understand React server components outside of Next.js.

29:42 - Exploring Data Fetching in React Server Components  

Ben demonstrates loading data asynchronously in server components and discusses implications.

38:11 - Comparing React Server Components to Astro  

Ben sets up a similar demo in Astro to compare the mental model and developer experience.

50:49 - Discovering Astro's Built-in Streaming Capabilities  

Ben and James realize Astro has automatic streaming built-in when using SSR.

## Transcript


[00:00] (laughing) - I am good.

[00:03] Yeah, all good. Excited to learn about React server components.

[00:08] - Yeah. Well, we already have a big crowd coming in

[00:11] of a bunch of server component lovers. But yeah, thanks for all the technical support in the chat.

[00:17] We got it working. But yes, I'll be DMing the ping people.

[00:21] We're gonna see what we can do to improve some usability here.

[00:26] But yeah, we're just here to casually explore something that has been in the Zeitgeist for a long time.

[00:33] James, I don't know how long you've followed the React journey,

[00:35] but I remember hearing about concurrent mode, then suspense, then servers, and all of this stuff.

[00:42] And I just said, that's a conference talk thing. That's not a real thing.

[00:46] And now apparently we're close to having something to play with.

[00:49] So, I'm curious about it. - Yeah, it always, or especially early on,

[00:56] I felt like one of those things that was far off. And then now it does seem to be more real

[01:01] and able to be included in projects, which is why I'm here to learn.

[01:07] - Yeah, yeah. It's something that Next.js has been pushing for a bit.

[01:13] And up until now, people have sort of said like, okay, React server components are just a Next.js thing.

[01:20] So, I'm only gonna pay attention through that lens. But it's been promised forever.

[01:25] It's like this thing that anyone could use and any framework could use, including Astro, I don't know.

[01:31] So, that's really what I wanted to play with. What I ended up building was a starter project

[01:37] that is completely outside of Next.js, trying to figure out what server components does,

[01:42] the mental model around it, how similar it feels to Astro.

[01:46] So, I don't know, gonna try screen sharing it, see what we can learn and definitely what we can break,

[01:52] since I've only made two components and I made sure those two worked.

[01:55] (laughs) And I just assumed, well, you can build anything now.

[01:59] I'm sure everything works now, as any good weekend project goes.

[02:03] - I know, right? - Yeah, for sure.

[02:06] But I'm a little curious also, like what you've been building stuff with,

[02:10] since I know you use Astro now, but was there like a go-to stack for you over the years?

[02:16] And has Astro kind of replaced anything you used to use? - There's a few different things.

[02:22] I'm a huge SvelteKit fan. I'm a big Next.js fan,

[02:25] although I haven't like spent time with Next.js in a little while.

[02:28] And then I've definitely been doing a lot of Astro recently. So I migrated my site.

[02:34] I was actually migrating from Gatsby to Next.js and then in the middle of it,

[02:37] I heard of Astro and tried it out. And I was like, this is way easier for Markdown

[02:42] and a few other things. It's just like tailor-made for that sort of website app.

[02:47] And anyway, so I've been doing a lot of that and I just decided on my next course topic, which is Astro.

[02:53] I don't have the landing page up yet, but I'll be creating a course on Astro

[02:58] over the next four or five months or so. So keep an eye out for that.

[03:02] - Nice, that's intense, yeah. So it'll be like a self-hosted course platform

[03:08] sort of thing? - It won't actually.

[03:10] So I use Podia and you'll, like there's lots of people

[03:15] who build their own course platforms. I think that's like, it's doable,

[03:18] but it's such a big thing that I don't wanna invest that much time in,

[03:21] especially when you get down to like adding a bunch of features.

[03:23] And it would be cool to do that over time, but I'd rather just lean on something that exists for now.

[03:29] So I use Podia for my course content right now. - Yeah, I feel like building a course platform

[03:34] is just like an excuse to write code while you're writing a course.

[03:37] Just to like sanity check you like, yeah, I'm doing. I know like, well, I think of Westboss

[03:43] and I think of Josh Komu. I know Josh has his own course platform built in React

[03:47] and now he's building a React course. And I guarantee there's gonna be examples

[03:50] of the tutorial was built using this and here's a blog post and here's a newsletter

[03:56] and here's the full like content tool chain. But if you're already building your own stuff

[04:02] like personal sites and it doesn't really matter and I wouldn't use Astro for a tutorial platform anyways.

[04:08] - Yeah, well, it's funny like Astro, I feel like still holds on to that brand of,

[04:13] it's obviously like made for like a blog is the common example and obviously it's optimal for that

[04:19] but you still could do all the other things, right? Like there's nothing really stopping you

[04:25] from doing anything really, I think that Next.js could, it just may not have as many niceties around it probably.

[04:32] - Yeah, like Astro assumes that like, you want total control over routing and everything else

[04:42] or if you do like an Astro SSR app, it's basically just an express endpoint

[04:47] that returns HTML and you're just writing HTML with Astro. And it's like, yeah, you could bundle React router into that

[04:54] and you could build a little home inside of an index.astro file

[04:57] if that's what you're trying to do. Or you could just not do that

[05:02] and use the basic file-based router and just make everything have page refreshes

[05:06] or whatever library you're using to block page refreshes, which some people do.

[05:11] So yeah, you can totally just build a, you can build a framework inside the framework

[05:17] if that's what you're trying to do. It doesn't assume that you're trying to build an app,

[05:21] which is like more work, but also more flexibility. Depends what do you wanna do.

[05:26] And at some point it's, you know, diminishing returns. - Well, I just think about like,

[05:31] the fact that you have access to the server gives you the ability to do a lot of things

[05:37] if you're doing like page refreshes on every page. So there's definitely some things that are more complicated,

[05:42] but I think people will sometimes have the misconception of like, it's only good for markdown content, for example,

[05:48] but you can do a lot more. - They totally do.

[05:52] Yeah, I'm actually trying to work on a little meetup talk right now about like opt-in design,

[05:57] what that means where it's like, everything's flipped off. And then you slowly like turn on hydration here,

[06:02] turn on routing over there by importing routing library. And like, that seems to be the vibe

[06:08] that all these frameworks are going down is things are turned off instead of things being turned on

[06:14] so that you are intentional when you start flipping on switches

[06:17] and you start bringing in all of those tools. But until then, it's just gonna be, you know,

[06:23] HTML or an RSS feed or whatever basic stuff that you're trying to put on the web or markdown.

[06:29] I definitely think like there's, people have argued in the past,

[06:33] like Astro needs to figure out the app thing. We need to have like a cool router

[06:37] and we need to do all of that stuff. But the other avenue is like,

[06:40] we're already good at marketing and blogs, just dig in really hard and make markdown,

[06:45] not just like a little better than Next.js, but like 10 times better.

[06:48] So if you're doing that use case, that's the goal,

[06:52] at least with like content collections and stuff. I don't know if you've played with that.

[06:55] - I have, I migrated or updated to V2 and then I did the content collections

[07:01] and Zod typings and everything and then enabled SSR. So I could do, I have a API endpoint

[07:08] that I generate all the skeleton for my newsletter each week.

[07:11] So it grabs like my recent YouTube videos, it grabs content from my discord,

[07:15] grabs my recent podcast episode and like spits it out. Then I can just copy and paste that HTML

[07:20] into my newsletter, which is in Podium as well. Then I add in like the extra bits.

[07:25] But anyway, yeah, all that's been super smooth. - Nice.

[07:30] Yeah, that newsletter thing is a really cool idea. I've thought about it.

[07:33] And it's the reason I haven't updated my newsletter in a few months.

[07:38] It's just like, if you're already doing videos, like a newsletter is this other thing

[07:41] where unless it's so automated, it takes me five minutes, I'm probably not gonna do it.

[07:45] And right now it's like manually copying images in a tiny letter and at least have them ready to go.

[07:50] But it's just, I hate this. - Yeah, and that's what like,

[07:54] my endpoint grabs images and stuff for videos. So I literally just copy and paste all this stuff in

[08:01] and then add like the description of, like the kind of the theme for the newsletter

[08:08] and then all the rest of the content is basically automatically created for me, so.

[08:13] - Yeah. Oh, that's so cool.

[08:15] - It makes it a lot easier. - Yes, before, I need to make sure I shout out the raid.

[08:20] I still have like nothing set up on the stream to announce cool stuff.

[08:23] So thanks for the raid, Julian. Welcome in.

[08:27] Are you the one that works on cool Astro libraries? I wanted to make sure,

[08:31] because I'm gonna shout out all your cool stuff if you are. But anyways, welcome in.

[08:36] - Love that. - I know.

[08:38] Yeah, there's so many Astro community members that just like join like video calls,

[08:43] chats for random web dev stuff. Anyone who's using Astro is a nerd, which is cool.

[08:49] We're not at that stage where it's like mostly people at companies that are using it

[08:52] 'cause their manager told them to. It's like hobbyist devs and agencies that are like

[08:58] just using it because they already like it. There's no like a corporate-y or bureaucracy-ness around it.

[09:06] I've definitely felt that way about libraries in the past. - I don't know if you have mods

[09:13] or if you want to look at it, you got a spam comment in the chat.

[09:17] Also, AJC, I just subscribed to your newsletter. - Nice.

[09:24] Oh yeah, AJC. Oh wait, AJC, I already modded you.

[09:29] I thought, hang on. Did I not mod you?

[09:34] - No. - Oh, how do you elevate someone to a mod?

[09:40] - Somewhere on their name, I think you can. - Yeah, I thought it was on the name.

[09:46] - Or no, the mod command. Yeah, /mod and then username.

[09:49] - Thanks. Yeah, I thought I had.

[09:57] I'm gonna mod someone else too. Let's get a few mods in here.

[10:05] Yeah, yeah, thanks, Dev. Good job.

[10:09] I actually was typing that, so. I trust you to police.

[10:14] Today, Ben learned Twitch. I re-learned Twitch.

[10:18] I re-learned Twitch with every stream. - That was the initial focus.

[10:22] - Yep. I also might have emotes if they were approved.

[10:26] They weren't. What the heck?

[10:27] I submitted emotes for approval last week and they're still not available for y'all to use.

[10:31] Maybe I have to do something on my end. I didn't have time for.

[10:35] Yeah. This stream is, yeah,

[10:36] for someone who has streamed for like half a year, I don't have emotes.

[10:40] I don't have announcements for subscribers. Yeah.

[10:43] But I have a good camera now. So that's something.

[10:46] - What do you have now? - It's a Sony A6300.

[10:52] - Nice. I've got the 6400, I think.

[10:55] Sweet. It looks great.

[10:58] - Yeah, well, thank you. I've done nothing to it.

[11:00] I just took it out of the box. - Just turned it on, yeah.

[11:03] - Yeah, I plugged in the HDMI and it was just going. And I thought, oh, there's no downloads.

[11:07] There's no setup for, 'cause I use the cam link or whatever it is.

[11:12] And yeah, it just works. It was straight off of Facebook Marketplace,

[11:15] which made me a little worried, but it works. - Oh, nice.

[11:18] That's a good idea though. I feel like, especially if it is obviously

[11:22] in decent condition, getting it used is a good idea. - Yeah.

[11:27] Yeah, I mean, I guess you have to know. And I also don't know what I'm looking for in a camera.

[11:32] So I just brought the cord and made sure it plugged in and it did without any scratches or anything.

[11:38] That's good. Yeah, I've also been,

[11:42] I guess I've been stalling a little bit 'cause I'm worried my screen share

[11:45] is gonna break your audio. - Oh.

[11:47] - Let's try once again. - Do it.

[11:50] We could also, if that didn't work out, we could do like a hypothetical conversational

[11:55] thing about it. - We can.

[11:57] Okay, you're still here. - Can I though?

[12:02] - Apparently you're still here. So that's good.

[12:05] - I wanna pretend to like my audio go away, but I won't scare you like that.

[12:09] - Yeah. Oh God.

[12:11] And I'm back. I'm messing with you.

[12:19] - Oh, okay. I was like, no.

[12:21] - It worked. - I was like, you've been wondering

[12:26] if you were messing with me and I was scared. I was like, no, it actually turned out that way.

[12:29] All right, good. Totally messing with you.

[12:32] Okay, also I4O, thanks for the sub. Really appreciate it.

[12:36] Thanks for coming through. And I think you're a first time chatter too.

[12:40] Yeah, welcome, welcome, welcome, welcome. And we are gonna do some code at some point,

[12:46] but if y'all know this stream, we start coding either 15 minutes in

[12:49] or an hour in if fluctuates. But I also wanna be respectful of your time.

[12:54] So let's see what we have going on. Can you see my VS Code window at all?

[13:01] - Inside of here, yep. And I should make it bigger, which is this button.

[13:07] - I think there's a full screen. - It's not like super full screen, which is interesting.

[13:14] - Oh yeah. Oh yeah.

[13:15] I know what you're talking about. - But it's not.

[13:19] Oh my, I can make it a little bit bigger. So yeah, I mean, I can see enough.

[13:23] Yeah, this is good. - Okay.

[13:25] Yeah, 'cause I can bump up the font size. I'll do it one more just for fun.

[13:29] Yeah. Let me know if you can make out the text, I guess.

[13:34] - Mm-hmm, yep. - Okay, cool. - I definitely can.

[13:38] - Nice. Well, some of this is also like demoing for all of y'all

[13:42] because last stream we were trying React Server components with a wacky starter project called Wacowork

[13:50] that someone found, Jay Larkey in the audience. He said, "Someone stitched together React Server components

[13:58] "with Webpack and Vite and one other tool. "And it couldn't do production builds,

[14:05] "but it worked and it showed you things." Which was cool.

[14:09] It's very early. - That's a good start. - Yeah, I had to install experimental versions

[14:13] of every package because React hasn't even put out an experimental branch.

[14:18] I didn't realize it was this early. I thought we were like,

[14:20] 'cause if Next.js is already putting this in beta, I thought, "Oh, I can go try it."

[14:25] And no, there's commits like yesterday. (laughs)

[14:30] So- - Oh, I didn't even think about. So I was thinking like Next.js saying it was in beta

[14:36] meant like Next.js wasn't fully settled yet. But does that mean like there's still active work

[14:41] being done on React Server components at the core, I guess? - Yeah, the core is very active.

[14:47] I- - Okay, okay. - Yeah, just when I hear beta,

[14:50] that usually means like our features are done, our features are ready, and we're just stabilizing.

[14:55] That's how we try to do it at Astro. And React, it's like, no, they have two major RFCs

[15:01] that no one has agreed on yet that are still being worked out.

[15:04] - Oh. - Yeah. - Okay.

[15:06] Well, that's good to know. I did not know that. - These are very in flux.

[15:09] Yeah. But they have settled on this cool model

[15:13] to do stuff server-side, which I've set up a very basic demo here.

[15:20] So I can walk through some of it, but a lot of it's just like technical details

[15:26] that I need to go hide somewhere so that it's a more user-friendly demo.

[15:30] But some of this will be familiar to people who were watching my stream last week.

[15:35] This is my code to fetch a server component and render it in your browser,

[15:41] because I don't know how to render a server component server-side.

[15:44] Don't worry about that. But it will be a cool demo, and it'll make sense in a second.

[15:50] And I also have this little thing stapled on to tell Webpack to use web standards,

[15:55] because Webpack is weird. So as a user, you don't write this,

[15:59] but I think Next.js does something similar. But yeah, this whole thing is--

[16:04] - So this is just a regular React project, not Next.js? - Right, yeah, there's no Next.js involved.

[16:11] I've just set up a basic HTTP server with Deno, or Dino, and yeah,

[16:20] it's a lot like a serverless function, actually. I don't know if you've ever played

[16:23] with Netlify functions or Vercel functions. But yeah, it's the same principle of you got a handler,

[16:30] takes in whatever you're trying to request, and you can just do stuff with it.

[16:34] - Cool. - Yeah. So that's all I'm doing here.

[16:37] I have a little watcher to refresh our browser whenever we change files,

[16:41] and a lot of very hard-coded things of what a component would output.

[16:45] So that's a separate thing to do with client-side components.

[16:51] But some of this is telling React, this is literally spoofing Webpack.

[16:56] I copied it off of what that other project was doing. It's all a very interesting setup,

[17:01] but it comes down to this, where we import your component, which is,

[17:06] where is that coming from, actually? Let me double-check on this.

[17:11] 'Cause I should have set this up. Oh, yeah.

[17:15] So every route is a server component. I set it up with file-based routing, kinda, sorta.

[17:19] It's like when you go to the homepage, it shows this component here,

[17:23] similar to the pages directory in Astro. And it's a default export

[17:28] for whatever component you're trying to render. And then our server is going to import that.

[17:33] Oh, over here. Our server's gonna import that.

[17:38] That's scary code. Where's the good code?

[17:40] Here's the good code. It's gonna import that component on the route.

[17:44] It's gonna render it to a stream, which is a cool concept I just learned about.

[17:49] And then it's literally gonna stream the server into your browser, is a way to put it.

[17:53] It says it's HTML, but it's actually like a proprietary React thing

[17:59] that is being pulled off here. But it's best explained by running it.

[18:04] But yeah, what questions do you have? - Well, I was gonna, and you may have answered it by,

[18:09] like, we should run it and talk about it. But I was gonna ask questions

[18:12] about the streaming aspect of that. But if it makes sense to just run it

[18:17] and talk about it, do that. - Yeah, well, I guess I'm curious.

[18:21] Have you worked with streaming before, or do you know what that means?

[18:25] - I understand the concept. I've never done anything specific.

[18:28] Like, I've done server send events, or socket IO, or something like that,

[18:32] where you open up the socket connection, front end to back end, and you can send data both ways,

[18:37] which is, like, basically the idea, I believe. And then there's also, like, the observable,

[18:44] observability idea in different frameworks, where you just kind of listen for updates

[18:49] to a certain piece of data, and then you can do whatever you want,

[18:51] which I assume is kind of what the stream piece here is. But I don't know exactly how it factors in with,

[18:57] in this case. - Yeah, no, that's it, where you, like,

[19:02] you have a continuous connection between back end and front end.

[19:05] And instead of, like, you know, having your whole app ready to go,

[19:09] smash it through render to string, and just sending a big string of HTML.

[19:13] It's literally what it is. I remember setting up old servers,

[19:17] where you just do react render to string, and you, like, hydrate the whole thing on the other side.

[19:21] It's easy to understand, and definitely easier to set up. But, yeah, this is breaking apart that React tree,

[19:29] and slowly sending parts of the page as soon as they're ready,

[19:32] and then booting them up on the other side. So it's a stream that will end

[19:37] as soon as the whole page is rendered. - Okay, so that gives you, I guess,

[19:42] the most relevant piece of that is, I don't even remember what the name of it is,

[19:46] but the await, basically, where you can, like, stream, you can stream an initial render of a page without data

[19:54] while you're asynchronously requesting the data, and then when it comes through,

[19:57] you can pipe that in and just render it. - Yeah, pretty much.

[20:00] But without having to, like, fetch it client side. That's kind of the big thing

[20:05] that server components are built around. - Yeah, where it's like,

[20:08] 'cause I remember at my last company, we did a bunch of GraphQL Apollo,

[20:14] where we were fetching data from over here with query hooks, and we were fetching, like, CMS data over here

[20:19] with more GraphQL, and it ended up sending, like, a huge bundle of JavaScript that requested everything

[20:26] as soon as you visited each product page. Instead of, like, you know, doing it server side,

[20:30] so you don't have to ship API keys, and I think the Apollo library's like 50 kilobytes.

[20:35] It's heavy, so it was a lot to set up, and it would've been cool to, like,

[20:40] sort of have this pattern of only load some things, but server-driven.

[20:45] - So do you, I guess, do, what's the comparison, the high-level comparison

[20:53] that you do with Astra? So Astra will do things on the server

[20:57] before rendering the page, but it doesn't have a streaming concept.

[21:03] Do you align that to, like, Astra Islands, where you only send JavaScript to certain pieces of a page

[21:11] that specifically need it and asynchronously? - Right, yeah.

[21:16] So fun fact, Astra does have streaming. We just don't talk about it.

[21:20] Like, whenever you use SSR, we are streaming all the HTML through,

[21:24] and it's just the default. We turned it on one day,

[21:26] and I thought, this is gonna break people, right? And no, no, it's just a good default,

[21:32] and we also, yeah, I think we use the stream helper for React, as well, but we, like--

[21:36] - Huh, so you have the ability to stream updates? - Yeah, it's, I mean, the way streaming works with Astra

[21:45] is, like, if you do a wait inside of all your components, it's gonna run all of these awaits

[21:49] before sending anything down the stream, so you're still gonna get, like,

[21:53] the whole page in one big chunk, and you, yourself, have to, like,

[21:57] write yield functions, I think. It's a pattern that one of our engineers,

[22:00] Matthew, showed me, and I haven't, I just need to go back to it.

[22:04] Generator functions are this, like, side of JavaScript I never use.

[22:08] - Same. - I know. - Never, I've heard people talk about them,

[22:12] and every time, I'm like, I don't know what you're talking about.

[22:14] - I know, it's, the basic concept is, like, it's a function that can keep returning stuff over time.

[22:19] Like, it doesn't just return once. It can, like, return the first item,

[22:22] then it does a request, returns the next item, does a request, returns the next.

[22:26] And if you, like, write out that loop, you can get Astro to, sort of, like,

[22:30] stream things and see it pop in your browser in order, like, over time. - Okay, interesting.

[22:35] - But that, it's very manual, and React has this one special thing, React,

[22:40] that Astro doesn't have that I'm interested in to, sort of, like, pick and choose

[22:44] what streams and what doesn't. So I'll go ahead and run it to see what we get.

[22:50] And you also see, when you use demo, you have to allow everything explicitly

[22:54] when you, like, run a command. So it's, like, I'm allowing it to start a browser.

[22:58] I'm allowing it to read from my file system. I'm allowing it to-- - What, is there no better,

[23:03] like, is there a config file or something? - There actually is, and I have, it's the demo.json.

[23:09] And I bet I could do it from here. But I just set it up as a task,

[23:13] which is, like, scripts in your package.json. So I say demo task serve, and it just, like, does this.

[23:22] I'm sure I could list it out somewhere, like permissions, is that it? - Yeah.

[23:26] - That's not cool. - Permissions. - You see that, you see,

[23:29] CodePilot thinks that's a good idea. I sometimes use CodePilot to see, like,

[23:34] I'm designing a new Astro API, what should it look like? And it just comes up with stuff.

[23:39] I'm like, you know what, that's a good idea. Maybe we should ship that.

[23:42] I don't know if that's how it works, though. But if we pop this up, we see hello from the server.

[23:49] Very exciting. So the way I have this set up right now

[23:53] is I have this route that, well, I have the heading hard-coded down here.

[23:58] It's just sending an HTML file. It says, hey, and then it mounts React inside of here.

[24:03] And that's all it's really doing. There's no server rendering as it's set up right now.

[24:07] I'm still figuring that out. But yeah, it's gonna mount React inside of there.

[24:12] And this is what's making a request to go get that server stream and put it on the page

[24:18] as soon as it's ready. And you saw a little delay there.

[24:22] That's because I'm literally like, there's no bundling involved here.

[24:26] I'm just shipping, let me try to zoom in as much as I can. But I'm just shipping React as imports in the browser.

[24:34] There's no bundler. So it's gonna be slower than your app probably would be.

[24:39] But it's a really nice way to just get a demo out there where there's no build step to wait on.

[24:45] Like what this dev server is could be deployed to production without any modification.

[24:50] It's just kinda nice. - Yeah.

[24:53] - Yeah, but you can see there it's appearing. - Yeah, so it like, it ships,

[25:02] it ships the original skeleton and then like loads the, or streams in the hello from the server.

[25:15] Like when and how does the hello from the server get rendered?

[25:19] Does it ship to the client? The client then opens up the stream

[25:23] and then it streams in the hello from the server? - Yeah.

[25:27] And it's a little better when you're like using a router, like a single page app router.

[25:32] Like the first load we got here, ideally the server would already have this.

[25:36] Like we wouldn't have to send something to the client to go fetch this,

[25:39] which is kinda how we're doing it right now. But if you imagine like a route change,

[25:43] like now I wanna go to the about page, go just fetch the about server component.

[25:49] And then, yeah, now you're gonna do a fetch call. You're going to render it to JSX.

[25:55] And then you're going to let that stream on all those updates onto the page.

[25:59] So it's kinda nice to ship JavaScript to like, go load the thing for the next route

[26:04] and then put it on there. - So if this was like in Next.js, for example,

[26:09] it would have done a server render of hello from the server before actually going to the browser.

[26:15] And then if there was like updates, 'cause you're loading data asynchronously,

[26:18] then it would stream those. - Right, yeah, that should be how it works.

[26:23] And at least with this, we get a better idea of, maybe not how quickly things would load,

[26:28] but what JavaScript ships. Because when you load a hello world in Next.js,

[26:33] it ships 120 kilobytes of JavaScript, which is nuts. - To the browser?

[26:37] - Yup. - Is that before React server components?

[26:40] - Yeah, before, it's just a baseline for the Next.js router, React,

[26:46] and whatever else they're using. I'm really not sure.

[26:49] But it was a problem when I was trying React server components before,

[26:52] 'cause I was like, I don't know what the cost of these are. Like, we're pretending it's like Astro,

[26:58] but you're shipping all this JavaScript. Surely I'm missing something.

[27:01] 'Cause I thought the promise was like, don't do that. - The promise was not shipping.

[27:06] - Yeah, the promise was not shipping. - Yeah, I don't know if there's,

[27:11] I mean, there's gotta be like optimizations that they would be doing, right?

[27:13] Like based on, well, I don't, I don't actually know, but if they're,

[27:19] like if you have a page that's all server components that don't actually need any asynchronously loaded data,

[27:25] in theory, they'd be doing optimizations on the front end to not load additional JavaScript when it's not necessary,

[27:32] but I really have no idea. - Yeah, it's confusing to me that seems they don't,

[27:37] not sure, because one interesting thing about like the network activity here

[27:42] is that while we have all of the React resources loaded up their production bundles,

[27:47] but they're still like separate. So these could be smaller, but we load React DOM,

[27:51] which is the big guy, that's 45 kilobytes. And when you're using React,

[27:54] you're gonna be loading React DOM. Like that's the big daddy, that's the virtual stuff.

[27:59] Like that is a baseline cost, I think every React app has. But this index.tsx file doesn't appear

[28:08] in our browser at all. It's not gonna load anything that this loads.

[28:12] If this imported Apollo or something to like fetch data, Apollo would not ship to your browser,

[28:18] which is kind of neat. It's just instructions of what the server should do

[28:22] before it sends stuff to your browser. - Okay, and that makes sense.

[28:25] So you'd have less JavaScript than obviously if you sent it from,

[28:31] did it from the client. But then there's also like SSR,

[28:36] like just regular SSR and Next.js would have the same performance benefit, right?

[28:45] 'Cause SSR would load, like getServerSideProps would load data before sending it

[28:49] to the browser to get rendered? Is this just like a syntactical way to do this?

[28:57] - You are right. Like anything done inside of getServerSideProps

[29:00] is gonna be split out. But the interesting thing about server components

[29:04] is they work exactly the same as Astro Front Mapper, where you can fetch inside of any component you want to.

[29:10] So instead of like trying to prop drill and do everything inside of one big ServerSideProps function,

[29:15] every little component can fetch its own data. And you can like parallelize it.

[29:20] You can choose whether to put a loading spinner or not. You can be really flexible about it

[29:24] in ways that like getServerSideProps, you couldn't. It was like this one god object with everything.

[29:29] - 'Cause getServerSideProps is just for the page, not for the individual component.

[29:32] - Exactly. - Okay, that makes sense.

[29:35] - And I can at least write something here to show what's going on with that.

[29:42] But this is what server components let you do is React functions can now be asynchronous,

[29:50] where you can say this function is now async. I'm gonna wait for some data to come back,

[29:56] and then I'm gonna send to the browser. And just for fun, I'm just gonna console.log here.

[30:02] Hello server, do that. And it should pop in a little bit later.

[30:10] And you get a hello from the server log over here that does not fire over here.

[30:15] So it's like, see the one second delay? And then it pops in.

[30:20] If I change it to two seconds, it should be like a two second delay.

[30:25] And then it comes in. So you have that kind of flexibility now.

[30:29] - So if you're leveraging loading data asynchronously to send, to actually render on the component,

[30:36] do you have to use a specific like syntax? Or is it, does it just know if you're using a wait

[30:43] and then waiting for data to come back that's in reference in the component

[30:46] to stream it automatically? - Yes, so the thing about like choosing,

[30:54] is it a server component or not? Is that kind of the question?

[30:56] Like, how does it know I'm able to do this? - Well, it would be like in,

[31:02] I think in the app directory in XJS 13, if you choose to use it, it's server component by default,

[31:08] unless you tell it like the, the use client or whatever it is,

[31:12] to tell it, it'll be on the front end. But like, so right now you're doing something asynchronous

[31:17] that is not loading data that then the render method is dependent upon.

[31:22] Like if you were to say const data equals await load data, and then reference data inside of the component,

[31:30] does it automatically stream that? Like it knows just when it hits an await,

[31:33] like go past that, do a render, and then stream any updates after that,

[31:38] or is there a specific syntax to know this component needs to stream when the data is available?

[31:44] Does that make sense? - Yeah, like, is it blocking or not?

[31:48] - I assume, well, based on this, it doesn't seem like it's blocking

[31:52] because it like, it returns the HTML to the browser before it logs the thing.

[31:59] But does it, like if you just, if you just did a fetch request in there,

[32:03] like to the Pokemon API or something, and then like use that data inside of your render?

[32:11] - Yeah, you can totally do, so inside of your render, what are you referring to with that?

[32:23] - Like inside of the JSX. - Okay, inside the JSX, got it.

[32:27] - In square or curly brackets, you just logged out like Pokemon.length or something,

[32:33] like whatever. - Yeah, whatever this is.

[32:36] I honestly don't know what this is. So let's do that.

[32:40] Add a pre-tag, JSON stringify it. We can do that.

[32:51] - Yep, the old JSON stringify. - And then it'll come in as soon as the data's ready.

[32:56] But before that, you won't see anything. - Okay.

[33:01] - So it is blocking in that way. - Can you, can you do an await timeout thingy above Pokemon?

[33:09] Like if you just move the new promise set timeout thing above?

[33:18] - Yeah, so yeah, let me do that in a more interesting way. So this will be about the same.

[33:27] But if I did something like this, I split it out to a new function.

[33:33] Not even close, Copa. We want, we want this.

[33:38] So we're gonna render Pokemon. We're gonna put it inside of a sub-component.

[33:44] - My dog is freaking out looking at the window, looking out the window.

[33:50] I don't know if, well, now the other one is too. - There's nothing out there.

[34:01] It's just the mailman. - Yeah, I mean, I think like a dog walked by or something.

[34:05] - Okay, does this, oh. Oh, you have to put on the same line.

[34:13] Okay. So here's an interesting setup.

[34:16] And I think this will, okay, Pokemon load too fast. That's the issue.

[34:20] So I'll juice it to just pretend that it takes one second. This is just like pretending

[34:27] something takes longer than it does. But with this setup, okay, it will wait to do both.

[34:33] That's what it should do. So what this is gonna do is it's going to find

[34:40] that it needs to wait two seconds. So it'll do that.

[34:43] Then after waiting two seconds, it'll see, oh, there's a Pokemon component.

[34:46] Let me try to render that. Oh, this needs to wait an additional second

[34:50] to load more stuff. All right, so I'm also gonna wait on that.

[34:53] And then once all of that's done, so three seconds total, it's gonna do the two seconds

[34:58] and then the one second query. Once all of that is ready,

[35:01] it's going to stream the whole thing in one go to your browser.

[35:05] That's the default behavior. So it's not gonna--

[35:08] It's kind of like what Astro does. Okay, so it's not gonna stream anything before,

[35:15] it's not gonna stream anything before all those awaits are done.

[35:19] Right, which is the default, but you can use this old tool that,

[35:26] you know, I haven't had a use for until now. - There we go, okay.

[35:30] - Suspense is here, yeah. And your fallback is, you know,

[35:34] loading Pokemon like that. You need to wrap the thing that's querying,

[35:41] but we should see in the browser. Oh, not found, that's not good.

[35:44] (laughs) What happened there?

[35:47] Oh, no. We're getting error.

[35:50] - It's hiding Pokemon for some reason. - Oh, it imported from a weird place.

[35:53] So when you're using Denno, it really does not get imports right anymore

[35:58] 'cause there's no package JSON, separate thing. We're still getting an error.

[36:03] What am I missing? Okay, this is not highlighted.

[36:07] What's going on here? Oh, okay.

[36:09] It does a 404 if you have like a syntax error. I should probably detect this, but there we go.

[36:15] So you get hello from the server, then loading Pokemon now.

[36:18] - Okay. - It's going to stream the result as soon as it's ready.

[36:21] - So that was my original question was, is there a syntax you have to use

[36:25] to be able to wait that specific thing? And in this case, this is suspense.

[36:30] That's what suspense is for, specifically to target like this thing.

[36:34] This thing is going to be asynchronous. I need to wait for it.

[36:37] And then the fallback could be a component, right? So you could render not just a piece of text,

[36:41] but like a full component of some sort, a paragraph tag that says like loading.

[36:46] - Right. - Okay.

[36:48] - Yeah, and what's interesting is it's not sending anything to the client to wait on stuff.

[36:53] It's just how streaming works. So that's the part that I did,

[36:57] 'cause I know it's suspense. I think like, oh, client-side stuff.

[37:01] I'm going to use suspense to like wait on a query and show a loading spinner.

[37:06] But here it's just sending the result as like some JSX that we can throw in the browser.

[37:13] And I think it's a little interesting to just see what the stream looks like,

[37:19] 'cause I was staring at this for a while. But it does this.

[37:22] It just streams that, and then that, and then that. So it's like this big object

[37:28] that React is able to like parse and understand once it gets to the end.

[37:33] And this syntax is like super proprietary. I understand nothing about it.

[37:38] But I at least know-- - But it's there. - Yeah, and I don't know why the numbers are out of order,

[37:42] where it's like zero, one, two, one. I don't know what that means,

[37:48] but it does make sense that it's like literally delaying responses in the browser.

[37:53] And your network also reflects that, where it's like does this, and then that, and then that.

[38:00] And it's one big request that gets fulfilled as soon as everything is done streaming.

[38:05] - Sweet. - Yeah. - By the way, in Astro you were saying

[38:11] that's how Astro works. So by default, when you load data

[38:14] in your front matter in Astro, before you enable SSG,

[38:18] like that stuff is, it's all done at build time, right? For a static page?

[38:23] And then when you enable SSR, then it works like this, where it's gonna wait,

[38:28] load the data, load the data, then send, like render the component.

[38:32] - Yeah, and I bet we could do a little side by side here. I might also message Matthew about generator functions,

[38:42] 'cause I'm trying to remember how we could do that suspense thing,

[38:45] 'cause it is very fun, but yeah, I'll do a template. Do we have an SSR template?

[38:51] I don't think so. We just do basics, Astro SSR.

[38:56] Find any excuse to say hi to Houston. What's up?

[39:02] How you doing? - Houston's the best.

[39:06] Have y'all, is there any update on swag store? - Ooh, good question.

[39:12] Did we launch that? - I don't know.

[39:15] It sounds like we have it. - Is there?

[39:18] - I know that it was, now I'm wondering how much I can say,

[39:23] because I have seen like previews of it. It was looking real good, looking real nice.

[39:28] And it's not on our homepage yet, so I'm assuming we're still like putting finishing touches

[39:32] before we release it, but it's there, it's ready. We're ready to buy it, yeah.

[39:39] - I love it. - I'm gonna ask the team, because if it's live,

[39:43] I'm gonna tweet really loudly, and see if I can send you a free swag among other people.

[39:50] - I'll pay for the swag, but either way, I will be excited. But I'd love to do,

[39:56] I don't know if this is in the ideas for swag, but a Houston plushie, like a Houston plush toy thing,

[40:03] that'd be cool. - It would be cool.

[40:08] Yeah, just a little guy. I don't know what he would, yeah.

[40:15] 3D, it's pretty easy to do. He would just be a box.

[40:22] - Yeah. - Let me turn off this server.

[40:28] I don't know if anyone saw, but it said like refreshing 200 times.

[40:31] There's something wrong in that code, and I don't know what it is.

[40:34] - Could be anything. - Yeah, it was my first time running my own web socket

[40:40] to refresh a browser. It's surprisingly, someone wrote a blog post about it,

[40:45] and it was really nice to follow. I haven't read a blog post tutorial in a year, I think.

[40:51] I just don't learn through blogs. - Just about finding the right one, yeah.

[40:55] - Yeah, it was like an old-fashioned Dev2 blog, just learning a thing.

[41:00] It was nice, it's peaceful. Let me add Node.

[41:08] I don't know, that'll do it. Add Node.

[41:14] - I like the Node plugin. - Yeah, this will bootstrap a Node server.

[41:19] And these days, if you run preview, it'll actually like boot up the Node server correctly,

[41:24] so you can debug it locally. It was a time where we didn't even do that.

[41:28] So it's really nice to work with Node now. Could have done a Deno server, but I'm too afraid.

[41:35] I don't know if I trust that. So I guess we can do the same code that we had here.

[41:42] The one thing we don't have is suspense, like how do you block certain parts of a page?

[41:47] And that's something that's like, maybe there's a pattern. I just need to find it.

[41:52] - Would islands not be very similar to that? - It's like, if you shipped an island to do this,

[41:59] it would be a client-side fetch to delay it and go get the stuff.

[42:04] There's no way to do it server-side. - Right, but it would have like similar impact of...

[42:10] Like, understandably, you may not want to do that, but a similar concept of when the data gets there.

[42:16] So not all the data is there at first, and then it comes in when it's ready,

[42:19] but it would be loaded on the client versus in the server. Okay.

[42:23] - Yeah, which would be like a more traditional React app, or any app, really,

[42:32] where you're just sending down the server result, and then you're hydrating on the other side.

[42:36] That's another thing I have no answer for, is like, what is the hydration story?

[42:40] Does it even exist with server components? What is going on?

[42:44] And yeah, I don't know. - Well, and that would potentially save...

[42:47] Wouldn't that potentially save a lot of JavaScript being shipped, too,

[42:51] if it didn't have to do hydration? - Yeah, I mean, you saw in the stream thing

[42:55] that it was doing. It's like, that's kind of what hydration looks like.

[42:59] Like, if you inspect JSON, it's roughly that object, but instead of sending massive blob

[43:06] that has to get parsed in your HTML, it's like, make a request when you're ready,

[43:11] and then we'll slowly send you parts of that tree as we render them.

[43:15] So you'd save some of the-- - So instead of doing all the hydration,

[43:19] you still have 'em like, suspensed. - They are suspensed, yeah.

[43:26] And it sort of takes all the props, and it puts that in that big tree,

[43:30] so it really is the same as what the hydration object looks like.

[43:34] It's just, now it's streamable, which is just a weird concept.

[43:39] I haven't worked with streams before, and they're, I guess they're not sockets, technically.

[43:44] I don't know if someone in the audience wants to be actually about it,

[43:48] but it feels like they're the same. It feels like they are.

[43:52] A stream is like, you know when it ends. In a socket, you have to explicitly say,

[43:56] I'm done listening to you. I feel like that's the difference I've found,

[44:00] but I don't know if I'm right. - I would imagine either side can terminate a socket.

[44:07] You can stop listening, or someone could shut down the socket that created it,

[44:12] which I would think. I actually don't know the answer to this,

[44:14] so if somebody wants to correct, please feel free. But a stream, when you were saying, you know when it's done,

[44:22] that's someone terminating the stream, right? The same way you could send a socket end message

[44:28] to a socket. So I would think--

[44:29] - Most likely. - It's probably the same type of thing out of the hood,

[44:32] but I'm, again, not 100% sure either. - Yeah.

[44:37] Okay, AJC sent something in the chat. I have no idea what that means, but here it is.

[44:42] Yeah. I thought, I'm immediately like,

[44:45] I thought WebSockets did TPC stuff. I'm thinking back to one networking class I did in college

[44:50] that I did not do well in. But okay.

[44:55] Streaming transport, message-based. Streaming feels like one continuous message to me,

[45:01] but I don't know. Yeah, they're reassembled in full before delivery.

[45:06] WebSocket, okay, I don't know about full duplex. I've lost.

[45:10] I don't know what that means. Does this mean anything to you?

[45:15] - The definition of WebSocket is being bi-directional. I don't know about duplex, but, and long-lived.

[45:20] Totally makes sense. Like, that's kind of--

[45:22] - That makes sense. Yeah, I totally agree with that.

[45:23] - The stereotype. But I, unlike TCP, streaming is a message-based transport.

[45:30] Limited reassembled, yes. Yeah, but I don't know where,

[45:35] like to me, streaming is still WebSockets 'cause they, streaming would be bi-directional,

[45:40] or at least could be, and long-lived. - Yeah.

[45:43] - I'm not, I'm not sure. - I think you're right about that.

[45:47] - And then AJC, LinkedIn article, WebSockets versus HTTP, which I think is still different.

[45:54] Like, I don't think HTTP in that case represents, like, streaming.

[45:58] Like, I think the WebSockets would still be the streaming part.

[46:01] - I think so. - Who knows?

[46:07] - Yeah, just for fun, 'cause this is also kind of preparing

[46:12] for a meetup talk that I'm giving, but if we write the same thing side-by-side,

[46:16] if we loosely can here, minus the suspense,

[46:20] which we still have a little question mark on, it's the same concept of, like,

[46:25] put async stuff above your markup, and then you can access it below your markup.

[46:31] It's just one has triple lines, and one exports a function.

[46:35] It's, you know, two sides of the same coin. The only difference is that use client stuff

[46:38] that sounds like you've already seen. Like in Astro, you put it on the component,

[46:43] but in React, you put it where you're declaring the component.

[46:46] So it goes in, yeah. - Which is gonna cause

[46:50] all sorts of migration problems for libraries. People have already been asking about that.

[46:54] Like, so does that mean every library ever needs to add use client?

[46:58] And the answer is yes. - Yeah, interesting.

[47:01] - So, ooh, yeah. - And again, the big distinction,

[47:06] just to kind of reiterate for myself, of what we would see in Astro in this example

[47:10] versus the suspense part that we just saw, is Astro, if you use client-side,

[47:16] if you use Astro Islands, you'd be getting the Pokemon data from the client

[47:21] versus you'd be getting it from the server with suspense in React, but--

[47:30] - Yeah, if you need that delay experience. - But what you're doing now

[47:35] is you're loading everything on the server before actually rendering the page.

[47:38] - Yeah, yeah, just to start. See what that looks like.

[47:42] This should, that's not our app. How is it doing that?

[47:49] Wait, is it our app? Do we stream?

[47:55] - Wait, refresh that? - Hold on, hold on, hold on, hold on.

[47:59] No, this is the, this isn't it. How is it, okay.

[48:06] - Well, update something like on the text. Hello from the server dot question mark or something.

[48:10] - No, we don't need this. Here we go.

[48:14] Yeah, I did. And one, two, one.

[48:19] Oh my God, it streams. Oh my God. - It's coming through

[48:22] delayed for me, so I couldn't actually see it. Like the video that I'm watching is delayed,

[48:26] so I couldn't see it, but it like loads hello from the server first?

[48:30] - Yeah. I am wrong about how Astro works.

[48:35] Well then. - Wait, but is it? - Yeah.

[48:40] - Have you already SSR enabled this? - It's streaming.

[48:46] Yeah, I have. - But you set it in the content or whatever?

[48:49] Okay. - This is SSR.

[48:51] - Whoa, what? - Okay, Astro.

[48:54] We're cooler than I thought. So there's no way to prevent that behavior also,

[48:59] unless you flip off stream, which I think is an internal flag.

[49:02] But yeah, you can see right there. It's a long two second,

[49:06] and then a three second waiting on content download. Look at that, crazy.

[49:12] - Can, wow. - Okay, all right.

[49:16] There you go. That answers that.

[49:23] So if you wanted to prevent this, you would have to be really explicit,

[49:29] and like, no, I need to do everything up here, and do that.

[49:36] So if you wanted to delay everything, you gotta make sure it's like there,

[49:40] and then pass it down. - So how did it know to stream?

[49:48] Was it just 'cause that was in a separate component? - Yes.

[49:55] - That just happens automatically? So now if you refresh it,

[49:58] it'll load everything at the same time? - Yep, and now we're seeing a five second delay there.

[50:02] You can't see it because it's not gonna unload the page. You just see like about five seconds of loading here

[50:08] before it comes down. Yeah, five seconds.

[50:14] - What? - Uh-huh.

[50:16] I knew we had streaming, but I didn't know it just worked like this.

[50:22] Okay, nevermind. - I feel like that's really powerful,

[50:31] especially to not be like-- - It's really powerful. - Is it documented like that?

[50:35] - I don't know. I really don't know.

[50:40] Docs, Astro, streaming. I know, I hope we say we do streaming somewhere.

[50:47] I don't think we do. Streaming.

[50:52] - Question. - Yeah, right there, right there, right there. - On the front page.

[50:57] Oh, the video for me is so delayed, and I-- - Oh, I'm sorry.

[51:02] - No, it's all good. Does it say, is this streaming on the docs though?

[51:05] - I found the word streaming in one place on our docs. - Okay.

[51:10] - I mean, especially with the height. - Astro uses HTML streaming to send each component

[51:14] to the browser as it renders them. This makes sure the user sees your HTML

[51:18] as fast as possible, but it means Astro runs your component code.

[51:21] It is already set. Yeah, this is where you get into response header territory,

[51:26] 'cause you can do so much stuff inside an Astro component, including like put a cookie up there,

[51:31] set your meta tags, all that stuff. So you have to be careful with like,

[51:36] did you send it to the browser before setting the cookie?

[51:40] Well, then it's not gonna be able to set the cookie 'cause you can't do it midstream, I'm pretty sure.

[51:45] So it's kind of warning you like, be careful because it might,

[51:48] you need to do it at the top level if you're gonna do this.

[51:51] - Right. Wow, I feel like this definitely deserves

[51:55] some like branding and talk about it. - It sure does, yeah.

[52:01] Yeah, 'cause I remember this was a silent thing as part of 1.0.

[52:04] This was pre 1.0 that we added streaming, but we just never talked about it since.

[52:08] - Okay, interesting. Also, some people are mentioning

[52:11] that the streaming would be unit directional instead of bi-directional,

[52:15] that it'd just be a server streaming to the client, which makes sense.

[52:20] - Mm-hmm, yeah, you're right, you're right. - Which I didn't know,

[52:26] but I guess they're still referring to like HTTP streaming versus WebSockets.

[52:33] - Yeah, WebSockets, the bi-directional one, right? - Right, I guess I would have thought

[52:38] they were kind of the same thing, just one was unit directional and one was bi-directional,

[52:43] but maybe there, I didn't realize it was like associated. I didn't realize it was specifically HTTP streaming,

[52:49] but again, not something I actually know details about. - Yeah, but yes, this is unit directional

[52:56] the way we're using it. I can definitely say that,

[52:59] where the server's just sending stuff down and the client is not requesting a stream

[53:03] and the client's not sending a stream of information. - Since you asked that, commenter,

[53:10] I'm curious what use case you have to like, when would a client send a stream back to the server?

[53:16] Like when would I do that? 'Cause I can't think of use cases other than like WebSockets,

[53:21] but apparently it's a separate thing, so I don't know. - Yeah, yeah, definitely.

[53:27] I mean, anything like real time back and forth, like a chat app would use WebSockets

[53:32] and send and receive updates. - Mm-hmm, yeah, exactly.

[53:38] So I guess it is interesting. We've got different defaults here.

[53:43] They're not as similar as I thought, where like React, you kind of opt in

[53:47] and you also have a fallback. That's something Astro doesn't have.

[53:50] There's no way to put loading spinners as any of these things are coming up.

[53:54] They're just streaming because they're streaming. And in React, you can flip that off

[53:59] and actually block everything if you wanted to. So yeah, there's more app-like stuff you can do.

[54:06] Astro's never thought about loading spinners because we've never needed 'em.

[54:10] But if there's one thing I associate React with, it's loading, so.

[54:14] - So in theory though, how would you handle showing a loading state for this?

[54:19] - For Astro? - Yeah.

[54:22] - Well, you gotta flip to that client island, I would think, or a client-side script, because there's no way to like,

[54:32] send, well, now I'm curious, hang on. Can you like modify a stream as it's coming through?

[54:37] Like how is React able to tell it, render a loading spinner? No, no, no, wait, actually render this.

[54:43] Like how is it telling it to replace when it comes back through?

[54:47] - It's probably just like some unique identifier for that section, like for that component.

[54:51] And then it, like the stream message just says like, here's the new version of that thing, I would assume.

[54:57] - I would think. Yeah, that looks like it's what it's doing.

[55:03] - It's lowers, so fallback loading, children L3, and this is three, so maybe that's what this is doing.

[55:11] I've learned that this is like the type of component. It's like, it's trying to make it as small as possible.

[55:18] Oh wait, no, these are the symbols. That's what it's saying.

[55:22] So it's like, when I say two, I mean this. I mean suspense, maybe.

[55:28] These are like machine instructions. There's no reason to get into this.

[55:31] But yeah, it's saying like a component is a suspense component,

[55:36] and the child is the thing to replace with. So like this is rendering a suspense

[55:43] that has this content until it's ready, and then it does this.

[55:48] And I'm sure there's some client-side JS that's like interpreting that

[55:51] and rendering a suspense component because it's part of React core.

[55:55] It's already there. You might as well go reach for it.

[55:58] So yeah, it's a little bit of JavaScript that like knows what to do with this instruction

[56:02] to turn it into this. Yeah, and Astro is Node.js, so.

[56:07] - Yeah, that's cool. I actually need to run.

[56:13] - Oh yeah. - But that was super interesting,

[56:16] especially to have the revelation that Astro does streaming. - So it's not as special as I thought it was.

[56:24] It's just, it's a web standard. You can stream stuff whenever you want.

[56:29] It's just React streams components. - Being able to interpret it.

[56:32] - Yeah. - And replace is the big part, yeah.

[56:36] - Yeah, like React is streaming this proprietary object and Astro is streaming HTML, like straight HTML.

[56:43] So closer to standards. But yeah, I won't keep you.

[56:45] This was super fun though. - Yeah, same here.

[56:48] - I know it was kind of deep, but I hope it was.

[56:50] I hope some people got something out of this. We got some that's so cools.

[56:53] - Yeah. - So that's always a good sign.

[56:55] - And they clicked our reactions to the Astro streaming stuff.

[56:57] (laughing) - It's nice being surprised by the thing you built.

[57:03] - I know. - It's like, oh, it does that already.

[57:04] - In a good way. Surprising in a good way is the important part.

[57:06] - Yeah, in a good way. - Yeah, absolutely.

[57:08] - It's a really good way. - Cool.

[57:11] All right, I'm gonna run. Thanks for letting me join and ask questions.

[57:14] Thanks everybody in the chat. - Yeah, thanks for hopping on.

[57:18] Just through a little Twitter message. - I know.

[57:21] - We're out here. - Yep.

[57:23] All right, I'll catch y'all later. - All right.

[57:25] Take care. Have a good one.

