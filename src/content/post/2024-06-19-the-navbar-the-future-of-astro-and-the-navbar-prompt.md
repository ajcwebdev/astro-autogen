---
showLink: "https://www.youtube.com/watch?v=_lpf5MTcQu8"
channel: "Navbar"
channelURL: "https://www.youtube.com/@the_navbar"
title: "The NavBar — The Future of Astro (and the NavBar) 🚀"
description: "In this episode, the hosts discuss recent developments in the Astro web framework, including zero-JS view transitions, content layer improvements, and server-side islands."
publishDate: "2024-06-19"
ogImage: "https://i.ytimg.com/vi/_lpf5MTcQu8/maxresdefault.jpg"
---

## Episode Summary

This episode of The NavBar podcast focuses on recent developments in the Astro web framework, as announced at the Astro Together 2024 meetup in Montreal. The hosts, John and Simon, delve into three main topics: zero-JavaScript view transitions, improvements to the Astro content layer, and the introduction of server-side islands. They discuss how these features enhance Astro's capabilities for building content-focused websites with minimal JavaScript. The conversation also touches on Astro's philosophy of optimizing for content sites rather than complex applications, and how it differs from other frameworks like Next.js. Throughout the episode, the hosts share their personal experiences with Astro and discuss its benefits for various use cases. The episode concludes with a lighthearted discussion about keeping chickens and other animals as pets, highlighting the hosts' casual and friendly dynamic.

## Chapters

### 00:00 - Introduction and Astro Updates

The hosts begin by discussing the recent Astro Together 2024 meetup in Montreal, Canada. They highlight the event's significance in showcasing Astro's progress and future direction. The conversation touches on the unique aspects of the meetup, including the venue and some interesting details like a custom coffee printer for attendees.

Simon introduces the main topics they'll be covering from the meetup: zero-JavaScript view transitions, improvements to the Astro content layer, and the introduction of server-side islands. They emphasize that these features represent the future direction of Astro, with some already available and others still in development.

### 09:28 - Zero-JavaScript View Transitions

The hosts dive into the first major update: zero-JavaScript view transitions in Astro. They explain how this feature allows for smooth, app-like transitions between pages without requiring JavaScript. Simon describes the technical details of how this is achieved using CSS properties and selectors.

They discuss the benefits of this approach, including improved performance and accessibility. The conversation also touches on the current limitations of the feature and how it compares to Astro's existing view transition component. The hosts highlight that while this feature is cutting-edge and not yet fully supported across all browsers, it represents an exciting direction for web development.

### 25:58 - Astro Content Layer Improvements

Simon introduces the second major update: improvements to Astro's content layer. They discuss how Astro has evolved its content management capabilities, moving beyond just local file system support to potentially include remote data sources and databases.

The hosts explain the technical details of how the new content layer works, including the use of LibSQL for improved performance and scalability. They compare this approach to other content management systems and discuss its potential benefits for developers building content-heavy websites. The conversation also touches on how these improvements might affect build times and runtime performance for Astro sites.

### 38:58 - Server-Side Islands

The discussion moves to the third major update: the introduction of server-side islands in Astro. Simon explains the concept, drawing parallels to Astro's existing client-side islands architecture. They describe how server-side islands allow for dynamic, personalized content within otherwise static pages.

The hosts discuss the potential benefits of this approach, including improved performance and a more flexible development experience. They compare it to other server-side rendering techniques and discuss how it might be implemented in practice. The conversation also touches on the current experimental status of this feature and its potential future development.

### 63:56 - Conclusion and Personal Updates

As they wrap up the discussion on Astro updates, the hosts transition to more personal topics. Simon shares his excitement about an upcoming in-person gathering with his colleagues at Thinkmill. They discuss the importance of face-to-face interactions in remote work environments and the benefits of team-building activities.

John then shares his recent experience of getting chickens as pets. He describes the process of building a chicken coop and the unexpected joys of keeping chickens. This leads to a lighthearted discussion about various pets and farm animals, including ducks, goats, and pigs. The hosts share anecdotes and facts about different animals, showcasing their casual and friendly dynamic.

## Transcript

[00:00] We are live. Are we live on Twitter? I feel alive, me too.

[00:08] Simon, how's the week been? You good?

[00:11] Yes, very good week. Lots to talk about. It's going to be a fun episode.

[00:17] I kind of hijacked the whole topic this morning at 6am, as you do.

[00:23] That's alright. The first time I see your messages is five minutes after we were meant to go live.

[00:28] So, it's fine with me.

[00:31] Fun fact, it was 9.31am this morning and I'm being Swiss, like, "Where is John? He's always late."

[00:38] And then I was like, "Oh, I haven't opened the interview thing that allows him to join."

[00:43] And so as soon as I turned it on, it just rang because he had been ringing like 17 times already.

[00:49] I was sitting there waiting and I was ready. I was primed, ready to remind him how late he was.

[00:55] Yes, you did.

[00:56] Terrible.

[00:57] You indeed did.

[00:59] Does anyone...

[01:01] Oh, wait. Switzerland invented clocks, right? They are like the clock people.

[01:08] I don't know if they... Oh, no, don't do this.

[01:10] I don't know if they invented clocks, but they're very clock sharp. Yes.

[01:17] Actually, over the weekend, I did like a trivia thing with a bunch of the parents from the kinder that my kid goes to.

[01:29] And one of the questions was who invented, like, which country invented the cuckoo clock?

[01:36] Cuckoo clock?

[01:38] And I was like, it's definitely... Well, what do you think it is?

[01:43] Well, it's not Switzerland because otherwise you wouldn't be surprised. Austria?

[01:48] Oh, close. It's Germany.

[01:51] Germany.

[01:52] And like I said, it was Germany and I pushed really hard and my team...

[01:56] Everyone trust me, I got a friend, a Swiss friend.

[01:58] They did not listen and they went with Switzerland because they were like, Switzerland is like clocks and stuff.

[02:04] And accuracy of time is definitely, definitely Switzerland.

[02:07] And I was very upset when the answers came out.

[02:12] You lost credibility with the team, I guess.

[02:15] Don't listen to John. It's like chat GPT that's overly confident.

[02:20] It was probably the other 10 questions that I was super confident that we got wrong.

[02:25] That was probably what made them think they couldn't trust my answers.

[02:31] I have a question for you.

[02:33] Do you know how to figure out if we are live on Twitter?

[02:38] I think I'm streaming on Twitter, but I've never done it before.

[02:41] If anyone's in the comments, in the YouTube comments, let us know.

[02:46] I can confirm that we are live on Twitter.

[02:50] So what did you do? Click on my profile?

[02:52] Well, it just gave me a notification that you were live.

[02:57] But yeah, I guess if you go to your profile...

[03:00] I can see on the top right, live on AX.

[03:03] Look at that.

[03:04] The future of Astral and the Navbar.

[03:07] What? 17 people? 21 views.

[03:11] Oh, it's just like impressions on people's feeds on Twitter.

[03:16] Hi, Twitter. Hi, YouTube.

[03:18] I guess that's everything.

[03:20] LinkedIn, Facebook, Instagram Live, TikTok.

[03:24] We need to work out a way to stream to TikTok in one-minute chunks.

[03:31] So it just streams a one-minute video to TikTok,

[03:33] and then another one-minute video, and then another one-minute video for like an hour.

[03:37] I feel like I've seen that tweet from Steve.

[03:41] I don't know the last name. Toneuro, maybe?

[03:43] Maybe I mixed up. That works with Aaron Francis.

[03:46] He worked out you can take screenshots from the terminal with a command,

[03:51] and then he just made a little set timeout, whatever,

[03:55] that takes a screenshot every n seconds,

[03:58] and then it makes a time lapse when you put them all together.

[04:01] I'm sure you can stream and say, "Clip, upload."

[04:05] But yes, so I was in Ecamm Live, and in the settings, I was like,

[04:09] "Oh, I can add multiple stream destinations,"

[04:12] because I've recently moved to a better Internet with NBN fiber.

[04:16] So I thought, "Oh, now I've got the horses to just gallop in different streams."

[04:21] And I thought Twitter is the most obvious one to try to stream to,

[04:25] to get more roast exposure.

[04:28] But yeah, I could add LinkedIn, Facebook, Instagram, all of that,

[04:32] but I don't really see a value yet.

[04:36] You let us know.

[04:38] Let us know. Let us know if you want to see it on all those other platforms

[04:41] while you're watching it on the other one.

[04:45] Should we start the episode, Simon?

[04:47] We probably should. Yes.

[04:50] Welcome to another episode of The Nav Bar.

[04:53] My name's John. This is Simon.

[04:55] We're going to talk about probably not that much tech stuff,

[04:58] probably not that much content creation stuff.

[05:00] Actually, no, we are talking about tech stuff this week.

[05:02] We are. We've got a heap of tech stuff.

[05:04] So the grand plan was to, John and I, talk about the future,

[05:08] the very near future of The Nav Bar

[05:10] and how we want to start having guests coming on and having fun with us.

[05:14] But then I remembered that last week I was catching up

[05:17] with some Astro recent happenings in the community,

[05:23] and I was like, scrap that.

[05:25] I'm going to take over this episode

[05:28] and just talk a little bit about the future of Astro.

[05:32] And I am super excited about this

[05:34] because I watched a little bit of the keynote

[05:37] and I've been meaning to come back to it.

[05:39] And so I have like a very surface level understanding

[05:43] of what's been happening in Astroworld,

[05:45] but I am very excited to learn more about it from you.

[05:48] So you'll get all the dumb questions. It'll be great.

[05:51] Well, I'm sort of surface level as well,

[05:54] in the sense that I work with Next.js on a day-to-day basis.

[05:58] But yeah, I've been catching a whole lot with that conference.

[06:01] I watched most of the talks and then read most of the blog posts

[06:04] and there's some cool stuff happening.

[06:06] First thing to frame is everything I talk about.

[06:10] We always say link in the show notes.

[06:12] Basically, you go to Astrow.

[06:15] Oh, the show notes.

[06:17] The show notes, in quotes.

[06:19] Yeah, you go to Astrow.build, the website,

[06:22] and then on the blog, the first four posts

[06:25] is the things that I'm going to talk about.

[06:27] Essentially, in May, end of May, I want to say,

[06:31] I've got little notes here, I think the 28th of May,

[06:33] so about a month ago, three weeks ago,

[06:36] the Astrow core team held a "meet up", again in quotes,

[06:41] because it looks to me more like a really polished conference

[06:44] with a beautiful stage, beautiful screen,

[06:47] conference settings, but it's a meet up.

[06:50] If you've seen Tailwind CSS Connect event,

[06:54] it's something very similar, but for Astrow.

[06:56] So it's kind of like, hey, the core team is going to present

[07:00] the vision and the future.

[07:02] And I guess it's called "meet up" because it's probably free access.

[07:06] That's what meet ups kind of usually infer.

[07:09] I actually don't know.

[07:11] Anyway, it was in Montreal, Canada.

[07:14] And I didn't know that bit, and I saw the French transcripts,

[07:17] live transcripts on the screen.

[07:18] And I was like, why are they translating to French?

[07:20] Is it for me?

[07:23] The final explosive strain.

[07:26] Yeah, I encountered this whole meet up through,

[07:31] I think on YouTube, some recommendation.

[07:34] One of the talks showed up and it was Astrow.

[07:37] So I clicked and then I was, oh, they're on stage.

[07:39] I wonder where it was.

[07:41] So yeah, I saw this French transcript and then I worked,

[07:44] I reverse engineered where it was.

[07:46] So it was in Montreal, in Canada,

[07:48] which is in the French speaking part of Canada, in Quebec.

[07:52] And I've been to Montreal.

[07:55] You can pronounce it correctly, but I'm going to,

[07:57] I'm going to pronounce it Montreal.

[08:00] It was incredibly cold when we were there.

[08:03] That's actually, I guess it's the coldest place I've ever been.

[08:06] Cause it was minus 30 Celsius.

[08:09] I don't know what that is in Fahrenheit for the U S folks, but yeah,

[08:14] it was, it was so cold that like, yeah, you just,

[08:18] you just put on as many layers as you possibly can of like snow gear.

[08:22] And then you just try not to stay outside for too long.

[08:26] Yeah. Well, yeah.

[08:28] I have a Swiss friend with Swiss temperature standards.

[08:31] Switzerland is not that cold.

[08:33] I mean, it's got a long winter, but it's,

[08:35] it's never goes much below zero, like minus three, four is like the,

[08:39] the cold days. Anyway, he,

[08:41] he and his family went to Montreal for two years and he was like, dude,

[08:45] it's so cold. You have no idea. So I, I, I totally believe you.

[08:49] Like the, even the Swiss people standards were like shocked,

[08:53] like with kids and you have to wrap them and then they need to change the

[08:56] nappies and you have to unwrap them.

[08:58] Oh yeah. That'd be the worst. Yeah. Thankfully it was,

[09:00] it was well and truly pre kids. But yeah,

[09:03] they have this like old Montreal city,

[09:07] which is like the, the, the first iteration that they tried,

[09:11] like you think iterating on software is, is challenging.

[09:14] They built a whole city.

[09:15] They realized it was too cold being that close to the water.

[09:19] And so they kind of just like left it and moved to like,

[09:22] just started again a bit further back. So there's this beautiful,

[09:24] like old,

[09:26] old Montreal is just like beautiful cobblestone streets and,

[09:30] and really, really nice, but even, even colder, like the, the,

[09:34] the breeze off the water is just.

[09:36] You add humidity to the cold and you've got a recipe for madness.

[09:40] Yeah.

[09:42] Yeah. So Montreal, that's all you know about it so far. It's not,

[09:46] it's not a very important point to mention according to the,

[09:51] to the photos that I've seen the,

[09:52] so the blog post has like a photo gallery.

[09:55] They had this really cool coffee machine with a printer thing.

[09:58] You know how you can do latte art with the,

[10:00] you pour a little heart or flower or something.

[10:03] They had this, they has,

[10:06] they had this concept of like a,

[10:10] like an icon picker. Like you have 16 choices.

[10:13] One of them was Houston, the little Astro logo.

[10:16] And then it would just drop a milk froth,

[10:19] like print of this design.

[10:21] So you can see people with this cup with the perfectly crafted.

[10:24] And first I was like, oh my God,

[10:25] what barista was able to pour the milk that way.

[10:28] But then I realized, oh no, it's like a,

[10:30] a coffee froth design printer, which is very important detail.

[10:35] Actually one more, one more fact about Montreal.

[10:38] One more thing I know is delicious maple syrup coffee.

[10:42] I had, I had maple coffees the whole time I was over there,

[10:45] which was very, very nice. Those flavors go very well together.

[10:49] And poutine, lots of, lots of poutine.

[10:51] When you're freezing cold in.

[10:56] Oh, do you know, I'm sure I'm mispronouncing it,

[11:00] but you don't know what poutine is?

[11:02] Well, it's very close.

[11:03] It doesn't sound appetizing, does it?

[11:05] No. And it's very close to a very bad French word.

[11:07] And we talking about French culture.

[11:09] So I was like, I'm not going to go there.

[11:12] It is, it's just like chips,

[11:15] like fries or chips or whatever, deep fried potato chips,

[11:19] with gravy and cheese on top.

[11:21] And so it's just like this melty, delicious, carby, fatty food,

[11:26] which is fantastic when you're freezing cold and definitely not good

[11:29] when you're, you know, not good for the health system.

[11:33] Yeah, but exactly.

[11:34] That's what your body needs to, to survive the cold.

[11:37] Just build like a layer of fat and just like isolate me from that.

[11:41] Yeah.

[11:42] All right.

[11:44] So we know about Montreal, Canada, about poutine.

[11:49] I think I'm out of Quebec and Montreal facts.

[11:53] Yeah, that's a good start.

[11:55] And the printing machine.

[11:56] So on that event, as you can imagine,

[11:59] the keynotes of any company, like when it's Tailwind CSS,

[12:03] it was Adam keynoting.

[12:05] And then if it's Next.js, it's Guillermo.

[12:07] And Fred was the one opening the keynote.

[12:10] I haven't watched all the talks in the order,

[12:12] but they kind of drip fed them to YouTube in a very specific

[12:15] and not chronological order, which was really interesting and fun.

[12:19] But essentially, they talked about what they've done up to now

[12:22] and the celebrated successes.

[12:25] And then they talk about the future of Astro.

[12:28] And there's like three main points, like three big announcements.

[12:33] You might have seen on Twitter they had these three icons,

[12:36] like there's a pencil and then a little beach island with a palm tree.

[12:40] Like, what do you think that could be?

[12:43] And then people took wild guesses.

[12:46] What do you think that could be?

[12:47] I'm going to guess something to do with islands,

[12:51] given that we're talking about Astro and island architecture.

[12:54] If you're not super familiar with Astro,

[12:56] I think they coined the term island architecture, right?

[13:00] That's where I heard it first.

[13:02] I don't think Fred and the team is very big on claiming land grab of like,

[13:07] we coined this term.

[13:09] But I do think that's the first places where I heard it.

[13:12] And then people said, oh, islands are cool concepts.

[13:15] And people refer to it outside of the Astro ecosystem.

[13:18] Right.

[13:19] So the concept, to explain if you're not familiar,

[13:21] is these little isolated islands of dynamic-ness.

[13:28] And so you can have a fully static site,

[13:30] and then you can have these little islands of dynamic interactivity

[13:33] that you need.

[13:34] So if you need the user to be able to click on a button

[13:36] to increment a counter or something,

[13:38] then you can have a little isolated piece of the UI that could be written

[13:43] in just raw JavaScript, plain old JavaScript,

[13:47] or you can use a framework of your choice.

[13:49] So you can write it in Svelte or React or others supported.

[13:54] What else is there?

[13:55] Vue, I think.

[13:56] Oh, Vue, Solid, Svelte, probably a few more.

[14:00] Basically anything, any JavaScript framework should work.

[14:04] But keeping these kinds of little bits of where you need dynamic front-end,

[14:08] client-side JavaScript, keeping them isolated on little islands,

[14:12] and then having the rest of your application be either server-rendered

[14:16] or static.

[14:17] Did I get that right?

[14:18] Is that close enough?

[14:19] Yeah, that's exactly how it works.

[14:20] And it's even like if your island is below the fold,

[14:24] something like a newsletter sign-up that you have to scroll to,

[14:28] you can make it wait and only load if the user happens to go down there.

[14:32] So it's not going to just hijack your page load and say,

[14:36] "Hey, hang on, we need JavaScript for this."

[14:38] It's like, "Oh, I see you're about to reach this thing in the viewport.

[14:41] Let me now just quickly load it."

[14:44] There's incremental adoption of when to load.

[14:48] There's a client directive, and then you can say client-only.

[14:53] So if you only wanted client-side and never, ever tried to server-render that

[14:57] because it's like a dashboard for logged-in users or whatever,

[15:00] or you can say client load,

[15:04] and there's a few different tiers of how early you need this.

[15:08] That's really cool.

[15:10] Yeah, you were right.

[15:11] The icon with the island had something to do with islands.

[15:16] So I'll go through the three steps,

[15:17] and we will go through some of that that you've already covered.

[15:19] The first one is view transitions, which was already a thing for a while,

[15:24] but zero JS view transition.

[15:28] Hear me out, CSS view transitions.

[15:31] That's awesome.

[15:33] So can you give us a quick one?

[15:35] How about I try and do the explanations of things

[15:38] and see how well I go?

[15:40] Go for it.

[15:41] View transitions are a way to basically transition between two different pages.

[15:47] So we're used to fully client-side apps,

[15:50] so single-page applications where everything's happening in JavaScript.

[15:55] So you just send a big JavaScript payload,

[15:57] and it contains every page that you might visit,

[15:59] and all of the transitions and everything are happening client-side

[16:02] because it's a client-side router,

[16:04] and the browser already has all of the information.

[16:08] And then this moved to more server-rendered,

[16:11] server-side, multi-page applications

[16:14] because that bundle grew too large.

[16:18] And so it was like, how do we split that up into the different pages?

[16:20] There's no point sending a whole bunch of pages

[16:22] if the user doesn't even visit them.

[16:25] And so you had these server-rendered pages,

[16:27] but then it kind of felt like we were going back to the '90s

[16:30] where every single transition was like this long server load

[16:35] of a full-page load from the server.

[16:38] And so now single-page or view transitions are a way to,

[16:43] I'm guessing, preemptively load the page from the server

[16:49] and then have it in the browser and do a client-side nice transition

[16:53] where you can share some of the UI.

[16:56] So if you have a title, like a list of blogs,

[16:59] and each one has a title, and you click on one of those,

[17:02] you can animate something that's a shared element on both of those pages

[17:07] so it feels really client-side and reactive.

[17:12] How did I do it?

[17:13] Yeah, it feels very app-y.

[17:15] Like on mobile, typically if you look at a list of things

[17:19] and you tap on it, the thing you tapped on is going to zoom up

[17:23] and become the page title, and it's exactly what it is.

[17:27] There's the view transitions API,

[17:30] and it's technically called cross-document view transition

[17:33] because it's like you're loading two different documents

[17:35] and then there's this kind of reconciliation of what should be what.

[17:40] And yeah, typically the headline, if you have a blog,

[17:44] there's like the headline and the cover image

[17:46] is the two things that are likely to also be on the individual templates.

[17:51] And so these, instead of just disappearing and reappearing,

[17:54] you can like nicely transition them.

[17:57] Up to now in Astro, because of the platform,

[18:02] you needed some JavaScript to pull it off.

[18:05] So Astro had this view transition Astro components

[18:08] that you put in your document head somewhere,

[18:11] and it would load a script that handles the things to make it work, yeah?

[18:15] Yeah.

[18:16] Now, the zero JavaScript view transitions are following

[18:21] what the platform is bringing,

[18:22] which is a @viewtransition CSS property or selector.

[18:28] And so you can declare in your CSS @viewtransition

[18:32] and then set navigation to auto.

[18:35] And this is the way to declare CSS brings so many

[18:40] of these awesome features that required JavaScript before.

[18:43] And now it's cutting edge and it's only I think now in Chrome and Edge.

[18:49] So Firefox doesn't have it, Safari doesn't.

[18:52] Maybe I'm wrong there, but it's not like go and start using it.

[18:55] But the team, so, okay, there's like two major browsers who implemented it.

[19:00] Let's strip down basically our Astro view transition component

[19:06] and use what the platform gives us.

[19:09] So before in Astro, you had this view transition components

[19:12] inside your document head.

[19:14] If you want to try it out and you don't care about browsers

[19:17] that don't support it, you can remove this

[19:19] and simply in your CSS declare that @viewtransition navigation auto

[19:27] and it should just work TM.

[19:30] - That's magic.

[19:31] And yeah, it's like the other browsers don't have it yet,

[19:34] but this is something that everyone is pushing a lot.

[19:38] And I think like, yeah, it will be in Firefox

[19:42] and everything else very soon.

[19:44] - Yeah, that's one of these things that has been agreed on

[19:46] and is being implemented.

[19:48] And then it just, at some point, like CSS has been,

[19:51] like historically you would wait three, four years

[19:54] for features to land.

[19:55] And these days CSS has accelerated so much

[19:59] and browsers kind of talk together and like,

[20:01] yeah, let's ship this.

[20:02] We've agreed on this and go all out.

[20:03] You've seen that with the CSS grid.

[20:05] When it came out, it came out pretty much everywhere

[20:08] at the same time.

[20:09] And all these new features that come,

[20:12] very people talk about it and get excited.

[20:15] And then the next thing you know, it's shipped,

[20:17] which is really cool.

[20:19] Something to note, there's some specific,

[20:23] and I've experienced that building the NavBar website.

[20:26] Sometimes when you do view transitions,

[20:28] you have to actually hint to the browser,

[20:31] hey, that weird paragraph tag here,

[20:33] it's actually that thing up here on the other page,

[20:36] something that it can't really auto-detect.

[20:39] And so with the view transition component in Astro,

[20:43] you were able to give like an attributes name,

[20:46] I think the name of the transition,

[20:48] and then if it matches on both pages,

[20:50] it would reconcile this and make the transition.

[20:53] That's not currently supported with the CSS only version.

[20:57] So if you were doing fancy stuff like this,

[20:59] you basically have to continue with what's currently

[21:04] the Astro way with the view transition component.

[21:07] - Right, so it still attempts to work it out.

[21:11] - Yes.

[21:12] So it's not full feature parity yet,

[21:15] but it's very cool that it's there really early on

[21:17] seeing, hey, that MDN page explains very specifically

[21:21] how you can do this, and it kind of works.

[21:23] Like if you have basic needs, like typically the H1 tag,

[21:27] there should only be one H1 tag per page,

[21:30] so it's going to find that match pretty easily.

[21:34] So if you have simple needs, it might already work.

[21:36] And if it doesn't work, it just does a normal page.

[21:39] It's not like going to 500 server error,

[21:42] blow up in your client's customer's face.

[21:46] It's just going to do a normal traditional page reload.

[21:49] - Nice.

[21:50] And I guess like the focus,

[21:51] like what we're talking about here is the future of Astro.

[21:54] So this is like the first level of like this works

[21:57] and it's also what they're going to be focusing on.

[22:00] And so like, if you do choose to use it

[22:03] and it's not perfect right now,

[22:05] like it's likely it will be a lot better in a week

[22:09] and a lot better in a month and much better in six months.

[22:12] - Totally.

[22:13] Yeah, something worth reiterating is the meetup,

[22:18] the Astro Together 2024 was like a,

[22:22] first let's celebrate the things we've built

[22:24] and the community and the community people that help us.

[22:27] And then that was like, now let's talk about the future.

[22:30] So these three things I'm talking about is like,

[22:32] they're here, you can kind of play with some of them now,

[22:35] but it's really like a window into the future.

[22:38] And the third one I'll talk about,

[22:39] it's just an idea, it's like discovery mode,

[22:42] but like, hey, let's talk about this already.

[22:44] And there's like a GitHub discussion going,

[22:47] you can join and like pitch in if you're interested.

[22:50] - Nice.

[22:51] - Nice.

[22:52] - So what's icon number two?

[22:54] Can you describe what it looks like?

[22:56] - It is like a pencil that goes on a little book,

[22:59] something like this, pen to paper.

[23:02] - Something to do with editing content,

[23:06] creating content, something contenty.

[23:09] - Something very contenty indeed.

[23:11] So this one future again is called the Astro content layer.

[23:16] So you were spot on.

[23:18] If you've been using Astro before,

[23:20] you might know that they've already for a while

[23:24] since Astro 2.0,

[23:25] they've been kind of ahead of the pack

[23:27] in terms of content management,

[23:29] like within the framework,

[23:32] they had that thing called content collections,

[23:34] which one of the things that drew me to Astro really strongly

[23:38] because it solved a really, really common problem

[23:42] where everything comes out of the box is,

[23:44] oh, I want to have some markdown file

[23:46] or maybe JSON or YAML file somewhere.

[23:49] And I want to have a way to query,

[23:52] like just grab this data from my front end

[23:55] without having to do some file system glob stuff.

[23:59] I just want to put files there.

[24:01] And then if there's seven files in this post directory,

[24:05] I would love to be able to have an array of seven blog posts

[24:08] without having to do like manual gymnastics,

[24:12] if that makes sense.

[24:13] - Yeah, those content collections were also

[24:16] what sort of drew me in and got me excited about Astro.

[24:19] And I rebuilt my personal blog to use Astro

[24:22] and it was just, yeah, it's so nice.

[24:25] It's kind of like,

[24:26] I think we're about to solve this

[24:31] in what you're about to talk about,

[24:32] but it felt like a really nice like Gatsby layer

[24:37] of content stuff, but only for MDX.

[24:40] And so, or like local files

[24:42] or something that was on the file system.

[24:44] And so, yeah, it felt like you define all of this stuff,

[24:49] you feed it into something,

[24:50] you feed it into this content collection,

[24:52] but then you can query it in all of these different ways.

[24:55] So you can use it across different pages

[24:57] because it's all kind of this like defined schema

[25:00] of content.

[25:02] And so if you just want to grab out all of the blogs

[25:06] and you just want their titles and the slug

[25:08] that you can navigate to or whatever,

[25:11] then you can just pull that out

[25:12] from that content collection.

[25:14] And then on the actual page for each of those blogs,

[25:16] you can use that same content collection,

[25:18] but pull out the title and the body

[25:20] and the date it was published

[25:21] and all the extra bits of data.

[25:23] So it felt to me like that really nice

[25:26] kind of content layer that Gatsby had,

[25:30] where you kind of define everything once

[25:33] and then you're able to query it like it's a database

[25:35] throughout the rest of your application.

[25:37] But it only worked for a couple of local files.

[25:41] Has that changed with this new content layer?

[25:46] - Yeah.

[25:47] All right, so like you said,

[25:48] the essence of content collection

[25:51] was basically a convention decision

[25:55] like Astro claims the lens of SRC/content.

[25:59] It's like, you shall not have a folder

[26:02] could name content in SRC when using Astro,

[26:06] unless you're using how it's intended.

[26:08] Otherwise it's going to say,

[26:09] hey, you should not have a HTML file

[26:12] or an image or whatever in this.

[26:14] This is reserved for content collection.

[26:15] So Astro kind of like land grabs the SRC/content folder.

[26:20] And the convention was if you have a folder called blog

[26:23] and then markdown file in there

[26:25] or MDX or markdoc or JSON or YAML or whatever,

[26:29] it would be like, ah, I understand what you're trying to do.

[26:32] You want a collection called blog.

[26:34] And then on the front end,

[26:35] you could say they have these really nice querying APIs

[26:39] like get collections.

[26:40] So you import get collections from Astro.

[26:42] And then you want, you say, await get collections

[26:45] and you pass blog, the name of the folder.

[26:48] And it's like, ah, I understand.

[26:49] I can work out what you need.

[26:52] And not only that,

[26:53] but then there's a really nice way

[26:54] to make all of these type safe, markdown type safety,

[26:58] which is very cool.

[26:59] Like the front manner data,

[27:01] they have a Zod schema definition.

[27:04] Again, a convention,

[27:05] it's a config file inside this content folder.

[27:08] And then you can define the schema

[27:10] that should be representing every entry in your blog

[27:14] or your pets or your drawings

[27:16] or whatever collections you have.

[27:19] And that means in the front end,

[27:20] you can query that and have autocomplete type scripts

[27:25] or IntelliSense goodness.

[27:27] But also if you create a file that is missing

[27:30] or has the wrong type for one of the properties,

[27:32] it's going to like literally bomb out on the,

[27:35] it's going to say, hey, this file is missing.

[27:38] The image is expecting a string,

[27:41] but you passed an object with a height, width, whatever.

[27:44] So it gives you type safety

[27:46] with a markdown content collection,

[27:48] which is super cool.

[27:51] - That's awesome.

[27:52] - Yeah, but as you said,

[27:53] this was only in the SRC content

[27:56] and only with local file system,

[27:59] which is already very, very powerful.

[28:01] And me personally working at ThinkMill

[28:04] and working on this key static thing

[28:06] that also works with the file system,

[28:08] we were like, oh, cool.

[28:10] Like we can tell key static

[28:11] to put stuff in the content directory

[28:13] and then Astro takes over with the querying

[28:15] and it just worked really well.

[28:18] - Very nice.

[28:19] But Simon, what if I have something hosted remotely?

[28:23] What if I need something from a database?

[28:26] What if I want something from Superbase?

[28:28] How would I do this?

[28:31] - Well, until now you could,

[28:35] but you would have to do everything manually, right?

[28:38] You could always do a server rendered page

[28:41] and then go await Superbase fetch, whatever,

[28:44] or use the SDK.

[28:45] Like you could do all these things,

[28:47] but the content collection query,

[28:49] that's get collection ergonomics,

[28:52] was only reserved for this.

[28:54] Now you can, basically the content layer

[28:57] is like an evolution of this content collection idea.

[29:02] When you define the collection,

[29:03] you could only say the name of the folder.

[29:05] And I think if it was contents as MDX

[29:09] or data like just a JSON file.

[29:12] But now define collection lets you do a lot more things.

[29:15] You can, if you want the file system like it used to be,

[29:18] you can use a glob function

[29:20] and just pass like the path

[29:22] or like the path glob that you want to include in your query.

[29:28] But you can also pass file,

[29:30] a file function that has just one file

[29:32] and that kind of assumes

[29:34] this is going to be an array of data.

[29:37] And then you can have custom loaders.

[29:40] So they're working on an API

[29:42] that is something that external parties can use.

[29:46] So if you work for Superbase,

[29:47] you could convince your team,

[29:49] "Hey, we should build like an Astro content collection loader."

[29:54] And then it's a function

[29:56] that kind of supports a specific API.

[29:59] And then you can create this kind of glue

[30:02] where you're going to be able to return the data

[30:05] that it wants in an Astro friendly way,

[30:08] which is really nice.

[30:09] Or you can just have a data function

[30:11] and then just await fetch, whatever,

[30:14] and just do it manually,

[30:15] like drop to the just fetch layer to the middle

[30:19] and then do like you would do things normally.

[30:22] So it's much more flexible than just content collection,

[30:24] but it still supports the use case of file system,

[30:27] which is super cool.

[30:29] - That's awesome.

[30:30] And I just did a quick scan of the blog

[30:32] and it looks like this is now using LibSQL under the hood.

[30:37] And so pretty recently Astro announced Astro database,

[30:44] so Astro DB,

[30:45] which is basically a wrapper around a LibSQL database,

[30:49] which is like a file-based database.

[30:51] It's an evolution or a fork of SQLite,

[30:55] if you're familiar with that.

[30:57] But the thing that makes me very excited about that

[31:01] is that this might,

[31:03] I haven't confirmed this,

[31:05] but I'm going to hypothesize that this might unlock

[31:08] being able to query into that content layer at runtime

[31:14] rather than build time.

[31:15] So this was a big thing

[31:16] that I always ran into when using Gatsby.

[31:18] I used to love Gatsby,

[31:20] used it for heaps of sites.

[31:22] My original blog was written in Gatsby.

[31:24] And the thing that I always ran into

[31:25] was once I needed to actually query something at runtime,

[31:28] so I needed to go and grab something from that content layer

[31:33] when the user is actually visiting the page

[31:35] rather than when I'm building a static version of my site,

[31:38] it didn't exist

[31:39] because it just scaled up this content layer

[31:41] during the build step

[31:43] and gave me access to that through very nice APIs.

[31:46] But then once the application was built,

[31:49] it kind of just tore all of that down.

[31:51] And so I suspect that by using LibSQL

[31:55] and building an ephemeral database

[31:57] or something that it can just build up

[31:59] this file-based database for this one version of your website

[32:03] and then trash it

[32:04] and then build up another one next time you build your site,

[32:06] I imagine that means

[32:08] that it gets deployed with your application

[32:10] and you might be able to query it at runtime.

[32:14] Is that correct?

[32:15] I don't know about this,

[32:16] but that sounds like a valid assumption to make.

[32:21] Basically, content collections as of today,

[32:25] they just load everything in memory.

[32:26] So it's like it looks at the files and stores everything.

[32:30] So if you have 60,000 blog posts,

[32:34] it might start performance-wise be a bit slow

[32:38] and especially don't do much serverless

[32:42] and cold starts and stuff.

[32:43] But there's concerns about scalability

[32:45] of reading from the file system.

[32:48] Whereas now, like you said,

[32:50] they're using LibSQL, which is that fork of SQLite.

[32:54] If you heard of Terso, the company,

[32:56] basically they kind of bet on this whole thing.

[32:59] It's kind of like a globally distributable SQLite file

[33:03] that can be replicated, which is super cool.

[33:05] And so Astro is now having internally this LibSQL file.

[33:10] And I'm not sure I understand it completely correctly,

[33:13] but I think if you were to query data from an external CMS

[33:17] or from a folder or from whatever source,

[33:21] it's going to grab all this and then put it

[33:24] in the local LibSQL database.

[33:26] And then this can be cached.

[33:28] And that means that it becomes like way faster to build

[33:32] and also, yeah, much more scalable.

[33:35] Like there was these concerns about SQLite.

[33:39] How does it scale?

[33:40] And then people push the boundaries

[33:42] and they were like, hang on,

[33:43] you can go to like literally millions of records

[33:46] for reads before it's even--

[33:48] Further, I think Aaron posted something that it was like,

[33:51] yeah, in the like multiples of billions of, yeah.

[33:57] Yeah, I was at Epic Web Conf and I'm blanking on his name,

[34:04] but the founder, CEO of Terso, did a talk about like,

[34:09] how is SQLite a toy or how far can we push it?

[34:13] And he was showing, basically the answer was like,

[34:16] unless your Facebook or Twitter,

[34:18] like a giant thing that has billions of requests

[34:21] all the time, you've more than likely never going

[34:25] to be anywhere close to where the limitation.

[34:28] So arguably like the writes are a bit slower,

[34:31] but even then like you could, he was doing tests,

[34:34] like DDoS attacking stuff with like write queries

[34:39] and like it holds up way beyond.

[34:42] Like people building with Astro,

[34:46] I've never heard of someone building

[34:48] like a multi-planetary scale gigantic thing

[34:53] and using content collections and things like this.

[34:55] It's content sites and yes, you could have three posts

[34:58] or 200,000 posts because it's like a very granular,

[35:02] like something like Wikipedia.

[35:05] There's a lot of entries.

[35:07] I feel like SQLite is still going to hold that really well.

[35:11] And so instead of having everything in files loaded

[35:14] in memory, you can just grab all of this

[35:16] and put it in the, I guess at build time,

[35:18] when you start the dev server

[35:20] or like when you build the site for sure,

[35:22] it's going to create this local SQLite file.

[35:25] And then I imagine, like you said, it's deployed

[35:28] and it lives in the same place.

[35:30] So it doesn't have to travel across the network

[35:32] somewhere else where the server is to get this data.

[35:35] Again, it's a future thing, but it's super exciting.

[35:39] - Yeah, I did just do a quick scan and it does not look

[35:41] like what I was talking about is launching with this.

[35:44] Definitely not.

[35:45] It looks like it is being used for like,

[35:48] it looks like it might be used for caching over builds.

[35:52] So to speed up the builds of massive content sites,

[35:54] you already have a lib SQL database.

[35:57] Then you're just kind of changing the bits you need

[36:00] to change rather than needing to just throw it away

[36:03] and start again.

[36:04] But I reckon this unlocks some pretty cool stuff

[36:08] for the future.

[36:09] Once again, the future of Astro.

[36:12] - The future, yes.

[36:13] We should have really put the future experimental badge

[36:17] on this stream.

[36:19] So people keep that in mind.

[36:21] Especially for the third,

[36:23] and that's the icon you guessed before,

[36:26] this little island, like the round island

[36:29] with the palm tree and the little beach volleyball.

[36:32] When I saw the three icons, there was like a little servery,

[36:36] like a little stack of things,

[36:38] and then a pen and then an island.

[36:40] And the question was like,

[36:41] what do you think is coming?

[36:42] And my assumption was like,

[36:47] spin up a template project.

[36:49] Cause that was a stack of repeating stuff.

[36:51] I was like, spin up a template,

[36:52] write some blog posts and retired on an island.

[36:55] Basically that's the Astro progression path.

[36:58] I was close.

[37:00] - It's actually Fred stepping down as CEO

[37:02] and retiring to the island.

[37:04] Live out the rest of his island architecture.

[37:07] - Yeah, a lot of people commented saying,

[37:09] I've done the first two steps

[37:10] and I'm still waiting on the island retirement.

[37:14] That said, it's a trap.

[37:16] Like everyone who wants to retire on an island

[37:18] and you can see people who got successful

[37:20] and they sold the company and they retired on an island.

[37:23] Typically two years, two to five years later,

[37:26] they come back, they're like, I'm bored.

[37:28] I got to build stuff again.

[37:30] - I want to talk to people.

[37:32] Where is everyone?

[37:33] This island deserted.

[37:35] - I never verified that assumption,

[37:37] but yeah, humans are meant to mingle

[37:41] and be focused and do stuff like that.

[37:43] Like never work again is good on paper,

[37:47] but you get very bored very quickly.

[37:49] - It's more like unlock financial freedom

[37:51] to be able to work when you want to,

[37:54] on what you want to,

[37:55] rather than just like throw it all away

[37:57] and just don't do any work anymore.

[37:59] - That's the dream, man.

[38:00] Financial freedom and the ability to choose

[38:03] what you work on and when you work on

[38:05] and how hard you push and when to take a break.

[38:07] That's probably like the nice goal

[38:11] and realistic place to set instead of,

[38:14] I don't want to work, I'm retired.

[38:16] Although surfing every day

[38:18] and then coach basketball and Volante,

[38:19] but that's also work.

[38:20] You work on your body and on teaching children stuff.

[38:24] - Totally.

[38:25] - Anyway.

[38:26] - So we've got an island icon.

[38:30] We've got the existing island architecture of Astro,

[38:35] which is all about client side,

[38:36] choosing when you want to load JavaScript

[38:39] and how much interactivity you want.

[38:41] What's different about this island icon?

[38:44] - Are you reading my notes

[38:46] or are you just like reading the blog post?

[38:48] - I may have the blog up in the background

[38:51] for smooth transitions.

[38:52] - Yeah.

[38:53] So this icon represents server islands.

[38:58] - Oh.

[38:59] - So the blog post mentions in the headline,

[39:03] I'm going to read word for word.

[39:04] What are they?

[39:05] Static city-encased HTML pages shells

[39:09] with injected dynamic content.

[39:12] Hmm.

[39:13] - Hmm.

[39:14] - So as John has explained very elaborately,

[39:18] Astro has for three years now had these Astro islands.

[39:23] It's little islands of JavaScript.

[39:25] So if you have like a search combo box stuff,

[39:29] comment palette,

[39:30] like think of Raycast or like the Mac Finder.

[39:33] I forgot how it's called.

[39:34] The lights, whatever.

[39:36] That little palette that comes.

[39:37] - Spotlight.

[39:38] - Yes, spotlight.

[39:39] If you wanted that,

[39:41] typically that requires JavaScript

[39:43] and Astro Islands lets you have that encapsulated

[39:47] in a React or Svelte or whatever component

[39:49] and the rest of your page is completely HTML and static.

[39:53] And so these islands trip out

[39:55] even if you use something like React,

[39:58] but you don't use any state or effect,

[40:01] you could build your page in React as an island

[40:04] and then Astro would be like,

[40:06] hang on, we don't need JavaScript at all.

[40:08] It's literally just a template.

[40:09] And then it would turn this React component

[40:12] into static HTML with no runtime,

[40:14] which is freaking awesome if you think about it.

[40:16] You can still use React as a templating language

[40:18] because JSX is amazing.

[40:20] Although that's what Astro components are.

[40:22] It's like basically JSX without any of the complexity.

[40:27] But so all of this was front-end concerns,

[40:31] front-end islands.

[40:33] And so this new server islands

[40:35] basically brings islands to the server.

[40:38] And so if you use Astro Islands,

[40:42] the way you would tell Astro,

[40:46] hey, this is a little island

[40:47] that you might need to load some JavaScript.

[40:51] The classic thing is you would have a React button,

[40:54] which is like the typical counter,

[40:56] you know, the counter demo

[40:58] that you click a button and it increments.

[41:00] And so you would build this React component

[41:02] like you always do,

[41:03] use states and then on click like set states,

[41:06] count plus one, whatever.

[41:08] And then you would load it in your Astro page

[41:10] and it would render.

[41:11] And when you click the button, nothing happens.

[41:14] And you'd be like, Astro sucks, it doesn't work.

[41:17] Until you realize, oh no,

[41:19] Astro is protecting me from without knowingly,

[41:23] from putting JavaScript on my site

[41:25] without like me opting in.

[41:28] The Astro philosophy is like only use JS when you need,

[41:31] and you have to like explicitly say,

[41:34] I do want JavaScript here.

[41:36] So you would have to add the client loads

[41:39] or client only, or like add this client directive

[41:42] to say, hey, this needs JavaScript at some point

[41:45] on the server or on the clients or whatever.

[41:49] Server components, server islands work exactly the same.

[41:52] - Ooh, he said server components, watch out.

[41:56] - Server islands work the exact same way.

[41:58] So you have my components

[42:00] and then you have to say server something

[42:03] and defer is a typical one to say like,

[42:06] hey, I need that server side stuff,

[42:09] but I don't want you to block any static HTML

[42:12] for this to happen.

[42:14] So really think of it as the reverse Astro islands

[42:18] where you have little pockets of interactivity

[42:21] that you want to not block anything

[42:25] and just load when they can or need.

[42:27] This is the reverse.

[42:28] You have like static page

[42:29] and if you need to do something on the server

[42:31] where you have to query a database

[42:33] or like get the user data,

[42:35] then you can still have a completely static page

[42:38] and then have that little island that say,

[42:40] oh, I'm going to defer

[42:42] and let the whole page load completely statically

[42:44] and have like a placeholder, a skeleton,

[42:46] whatever you want, or like a fallback UI.

[42:49] And then when it's all loaded,

[42:51] I'm like, ah, now I'm going to do my thing on the server

[42:53] and then just come back and update the UI

[42:57] with whatever is coming back from this request.

[43:00] - Right.

[43:01] So you can still have the majority of the page,

[43:03] like the heading

[43:05] and the content of the blog or whatever,

[43:07] all this stuff that is static anyway

[43:09] can load immediately

[43:11] and probably be CDN.

[43:14] - Yeah, that's the whole idea.

[43:16] - Host at the edge and cached and all of those things.

[43:19] But then these little bits

[43:21] that require a little bit more dynamic stuff.

[43:24] So let's say that, yeah,

[43:25] like you have a signed in user

[43:26] and they're only allowed to see

[43:28] like let's say the analytics for the blog post.

[43:32] So you can see all the content for the blog post

[43:34] that loads immediately.

[43:36] But then in the background,

[43:37] it kicks off a server request to say,

[43:40] this is the user.

[43:42] Are they allowed to see these analytics stuff?

[43:46] And then it can kind of like lazy load

[43:49] or kind of appear on the page

[43:51] after the rest of it is loaded

[43:53] once that server request has completed.

[43:55] So rather than waiting for the full page,

[43:57] because I think this is what this kind of architecture

[44:00] is trying to address,

[44:01] is that in the past,

[44:02] it was like you kind of needed to choose 100% static

[44:05] and something that can be completely pre-rendered

[44:08] and built at build time

[44:10] and hosted on a CDN.

[44:12] Sites like Gatsby really pushed into this

[44:14] of static sites and static site generation.

[44:17] You kind of needed to choose at a route level.

[44:21] So for each page,

[44:22] is it completely static

[44:24] and we can pre-build the entire page

[44:27] or is there one or more little pieces of it

[44:32] that are dynamic

[44:33] and therefore we have to just switch completely

[44:35] to the dynamic SSR server rendered version of it.

[44:40] And so it sounds like this allows us

[44:42] to like slice off those bits,

[44:45] those tiny little bits

[44:46] that are usually just like one tiny UI component

[44:49] in the whole page

[44:51] that actually needs to be dynamic

[44:53] unless you're talking about like a dashboard

[44:55] or something that's highly,

[44:56] highly reliant on the user being signed in.

[44:59] But the majority of the time,

[45:00] it's one tiny little piece that needs to be dynamic

[45:03] and in the old world,

[45:05] we would need to opt that entire page.

[45:08] I've frozen,

[45:09] but that's because I'm really excited.

[45:11] You would need to opt the entire page

[45:14] into rendering on the server,

[45:16] whereas this allows us to just say,

[45:18] well, just this one piece

[45:19] needs all of that extra stuff to happen,

[45:21] but everything else,

[45:23] just like render it immediately from this static page.

[45:27] - Exactly.

[45:28] I don't know if you remember even before this,

[45:32] at the page level,

[45:33] I think the first iteration of this

[45:36] was like for the whole site,

[45:37] you could decide this is a static site,

[45:40] everything is a static HTML

[45:42] or this is a server rendered site.

[45:45] And I remember when Next.js came with this,

[45:47] like you can choose one page

[45:50] that is like personalized with server content

[45:53] or the opposite.

[45:55] The whole site is like static HTML,

[45:57] it's a blog,

[45:58] we don't care.

[45:59] But then there's like something user info

[46:01] and this page,

[46:02] we would like to be server rendered

[46:04] and you could say just this page

[46:06] becomes like server rendered.

[46:09] And that was like,

[46:10] oh my God,

[46:11] you can choose incrementally at a page,

[46:14] at a route level,

[46:15] if it's SSR or static.

[46:19] And then yeah,

[46:20] now so that exactly like you said,

[46:21] before that there was the whole site,

[46:22] then per page

[46:23] and now it's per.

[46:24] Really the concern is how much of my page

[46:27] needs to be personalized,

[46:30] just like the front end islands.

[46:32] If it's just the combo box search UI

[46:36] that is JavaScript

[46:37] and everything else is static,

[46:38] you don't want the whole page to be SPA for that.

[46:41] And here you get the exact opposite.

[46:44] You don't want the whole page to be,

[46:48] uh oh.

[46:50] - What's up?

[46:51] - Are we still live?

[46:52] I just had a something ISO error.

[46:55] Oh no,

[46:56] it looks like we're still live.

[46:57] I just had a big model coming on top of the UI saying,

[47:02] like it basically closed my window

[47:03] and said ISO error.

[47:05] But it looks like we're still live

[47:07] and you can still hear me.

[47:08] You can't move,

[47:09] but I can hear you.

[47:10] - Yeah, you can hear me.

[47:11] My camera battery has died,

[47:12] but I'll sort it out

[47:15] while you're talking about interesting things.

[47:17] But this sounds like it's similar to suspense in React.

[47:21] The ability to say,

[47:22] stop rendering here.

[47:24] Like I want to render the rest of the page.

[47:25] I don't want to worry about rendering this bit

[47:27] because it's going to take a little bit longer.

[47:29] So just continue rendering the rest of the page

[47:31] and we'll stream this in

[47:32] or we'll append it to the document.

[47:34] - Very interesting point you just make

[47:36] or the word stream.

[47:38] And I recommend you check out the blog post

[47:41] about these server islands.

[47:43] And then there's a link to the RFC discussion.

[47:46] And basically it's very similar to React suspense

[47:49] where you have suspense

[47:51] to defer the loading of the stuff.

[47:53] And then you have a fallback inside that might change.

[47:55] Again, this one specifically is very discovery,

[47:59] early days,

[48:01] like designing the API.

[48:02] So it might completely change.

[48:04] But the idea,

[48:05] and they use the example,

[48:06] there's a little GIF in the blog post

[48:08] of the user avatar.

[48:10] So you have a completely static page

[48:13] or you just have the logged in user

[48:15] and you want to show their face

[48:16] on the top right in the circle.

[48:17] Like it's very common.

[48:19] And that's a good example

[48:20] where if nothing else on the page is personalized,

[48:23] you're not going to server render the entire page

[48:26] just for the user avatar.

[48:28] And they show the shell,

[48:30] the page shell loading instantly,

[48:33] 21 millisecond they claim on Vercel deployment.

[48:37] It just loads.

[48:38] But instead of the user avatar,

[48:40] there's just a gray placeholder circle

[48:42] and you could have a loading thing.

[48:44] You could have some interesting fallback,

[48:46] like a little quirky joke,

[48:48] something that it can be there from the start.

[48:51] And then when the whole page has loaded,

[48:54] your deferred script that goes

[48:56] and fetches the GitHub API

[48:58] and gets the PNG from the profile of the user,

[49:01] whatever,

[49:02] once this arrives,

[49:03] it's going to not stream it in,

[49:06] but it's going to replace the UI

[49:08] with a separate HTTP request.

[49:11] And so the blog post is interesting.

[49:14] They mentioned like how Next.js

[49:16] typically streams in the response

[49:18] and replaces the UI.

[49:20] And they explain why it's great,

[49:22] but also why it makes things more complicated with CDNs.

[49:26] And so they've intentionally decided

[49:29] to make this a separate HTTP request.

[49:32] So it's like there's a cleaner separation

[49:35] between the static initial render

[49:38] and then whatever needs to be changed

[49:40] comes in a different request.

[49:42] - That is super interesting

[49:45] because one of the difficult things

[49:48] when you introduce things like auth,

[49:52] something that gets very complicated

[49:55] is when you're streaming,

[49:57] or not necessarily auth,

[49:58] but anytime you're dealing with cookies

[50:00] or anything where you are trying

[50:02] to kind of share state between the client and server,

[50:05] because that initial response

[50:07] has already been sent in the streaming version,

[50:10] you can't actually append new headers

[50:12] or do things like set a new cookie

[50:14] or anything like that.

[50:16] Whereas if you're doing a completely separate request,

[50:18] then that actually addresses that exact issue.

[50:22] So that sounds awesome.

[50:24] - Yeah, that's probably one of the reasoning.

[50:27] And again, go check the RFC

[50:30] because it's this specifically one,

[50:32] I think view transitions will come fairly soon.

[50:35] The content layer, I don't really know,

[50:37] but this one is more,

[50:38] I think Fred, during the meetup conference thing,

[50:42] said there was something 20 to 25.

[50:45] So it's like next year,

[50:47] it's very early

[50:48] and it's going to take a lot of research

[50:50] and pros and cons.

[50:52] But yeah, if you read this post,

[50:54] there's very smart, bright minds

[50:56] that discuss the differences

[50:57] and why do it differently than next year's streaming.

[51:00] Hey, and John is back with the camera.

[51:03] So yeah, it's very interesting read.

[51:06] I just want to say one more thing on server islands

[51:09] and front end islands.

[51:11] Think of it as the seasoning

[51:13] or the salt you put on the meal.

[51:16] Like you create a main dish

[51:18] and that's your page.

[51:20] And then you add a little bit of sprinkle

[51:21] of salt and pepper and herbs.

[51:23] And these are like your little model

[51:26] or dropdown menu

[51:27] or a little user avatar server island.

[51:30] If you want everything to be personalized,

[51:33] you're not just going to pour the whole jar of salt

[51:35] on your three little spaghetti

[51:37] because it's going to be disgusting

[51:40] and unhealthy for you.

[51:42] So at that point, you're like,

[51:44] no, I don't need server islands.

[51:45] I need a SSR page,

[51:47] traditional server rendered stuff.

[51:50] And then if I need to,

[51:51] I sprinkle some front end interactivity.

[51:54] So just like if you wanted a completely rich,

[51:58] if you build linear

[52:00] and you want everything to be interactive

[52:04] and server SPA-like,

[52:07] you're not going to go for astro islands everywhere.

[52:09] You're just going to go into SPA mode

[52:12] and do a rich interactive stuff.

[52:14] Again, think of it exactly like the astro islands

[52:17] on the front end, but for the back end,

[52:18] if you have little sprinkling needs

[52:21] of adding a bit of salt

[52:23] to give some more taste to your page,

[52:25] then reach for that.

[52:26] Just SSR and do it the traditional way.

[52:28] If you fall further out on the spectrum

[52:31] of how much dynamic content from the database

[52:35] to personalize for the user.

[52:37] - Yeah.

[52:38] And I love that idea

[52:40] is so ingrained in all of astro.

[52:44] It's all about,

[52:45] you have one kind of default

[52:48] and then if you need to break out of that,

[52:50] if you want an entirely static page,

[52:52] that's what it is by default.

[52:53] But if you want a couple

[52:55] of server rendered dynamic pages,

[52:58] then you can go into hybrid mode.

[53:01] And then if you want,

[53:02] if the majority of your site

[53:04] is server rendered and dynamic

[53:06] and then just little bits of static pages,

[53:09] then you can go into server mode

[53:11] and then declare the little pages.

[53:12] So you can determine right at the top layer,

[53:16] how much of your site

[53:19] do you want to be completely static?

[53:20] How much of your site

[53:21] do you want to be completely server rendered?

[53:23] And then you can opt out page by page

[53:26] where you need to.

[53:27] And these islands

[53:28] are just like another layer of that

[53:30] where you can do the same thing

[53:31] for JavaScript interactivity.

[53:33] And now you can do the same thing

[53:35] for server side actions

[53:37] and things that are happening server side.

[53:41] It's just an awesome free framework

[53:46] to build apps the way that you need

[53:48] and for the requirements of what your page needs.

[53:51] And that's totally right.

[53:53] And Astro from day one made the bet

[53:57] or they were like,

[53:58] we optimize for content website.

[54:00] There's amazing application frameworks.

[54:02] Next.js is amazing to do

[54:04] super crazy rich interactive stuff.

[54:06] And Astro was like, cool.

[54:08] But a lot of people build websites

[54:11] that are just mostly read only

[54:13] and they might have some interactive features.

[54:16] And Astro at the beginning was almost like

[54:19] a static site builder like Eleventy

[54:22] or something that takes data

[54:24] and turns it into templates.

[54:25] And then progressively said,

[54:27] oh, we understand this always need

[54:29] for server rendered stuff.

[54:30] And they added in Astro 2.0

[54:32] this like SSR mode

[54:34] and then moved to hybrid.

[54:36] But they always kind of bet

[54:38] on the fact that

[54:39] the majority of the websites

[54:41] that people build,

[54:42] unless they build really complex application

[54:45] or either completely server rendered

[54:48] personal stuff or completely...

[54:50] I'm showing my hands outside of the window,

[54:52] but most of the stuff people build

[54:56] fall in this,

[54:57] you're really just building a content site,

[54:59] a marketing site with read heavy stuff.

[55:04] And so we're going to optimize for that.

[55:06] We're going to give you stuff

[55:07] like content collections.

[55:08] We mentioned that content collections

[55:10] gives you this way to query markdown files,

[55:14] but not only that,

[55:15] but it gives you the renderer

[55:17] and it gives you syntax highlighting

[55:19] and pagination and all the stuff

[55:20] that when you build a site that has content,

[55:23] you're like, oh crap.

[55:25] Now we have 50 posts.

[55:26] That would be nice to show the first 49

[55:28] and then switch to the next page.

[55:31] Gives you a pagination and stuff.

[55:32] So it tries to solve the problems

[55:35] from a content science perspective.

[55:38] And so the Astro islands on the front end

[55:40] and on the server

[55:42] are also from the lens of,

[55:44] we understand you're building that content site.

[55:46] You have a blog with lots of articles

[55:48] and a pricing page and all that stuff.

[55:51] But then you need a little bit of personalization here

[55:54] and a little bit of JavaScript interactivity there.

[55:57] And you have the islands for that.

[55:59] And they're very clear from day one.

[56:01] Something I really respect about Astro

[56:03] is if you go to the docs

[56:04] and you've never learned Astro,

[56:06] you go, why Astro?

[56:08] Within the first one or two minutes

[56:10] of your discovery,

[56:11] they're like,

[56:12] if you want to build a rich interactive application,

[56:15] stop, go check out Next.js.

[56:16] It's awesome.

[56:17] And they're not trying to make,

[56:19] this messaging might change

[56:21] with the whole things that they bring in,

[56:23] but they really said like,

[56:24] no, no, we want to optimize

[56:26] for people who build the sort of sites

[56:28] that we know people build.

[56:30] And it's not pretending to be

[56:33] the default application framework for anything,

[56:36] although it's very capable.

[56:38] And it really narrows down

[56:40] on a different problem space,

[56:41] which actually if you build content sites,

[56:43] you're like, hell yeah,

[56:45] like I'd rather have pagination

[56:46] and islands and content collection

[56:48] with syntax highlighting

[56:50] instead of spinning Next.js

[56:51] and have to have like re-hype.

[56:53] And like, I don't know if you've tried

[56:55] to set up MDX block with Next.

[56:57] It's not that complicated,

[56:58] but you need to bring this like,

[57:02] like kind of like confusing things

[57:04] to get syntax highlighting

[57:05] and pass this like,

[57:07] I forgot how they call this,

[57:08] they re-hype and there's a few others

[57:10] where you stream like the past AST

[57:13] to give it syntax highlighting.

[57:15] And it's Astro,

[57:16] you just get it out of the box.

[57:18] If it's a code block,

[57:19] it's going to say,

[57:20] hey, which you can configure

[57:22] what theme colors you would like,

[57:24] but by default,

[57:25] it's going to look great

[57:26] without doing anything.

[57:28] - Yeah, yeah.

[57:29] This is the exact pain I went through

[57:31] when I was rebuilding my blog.

[57:34] And so I actually built a version entirely

[57:37] in Next.js and jumped through all of those hoops.

[57:40] And then I thought,

[57:42] I'll just like,

[57:43] I'll just try out what,

[57:45] like I'll do like a spike

[57:46] on what this would look like

[57:47] if I tried to build out this page in Astro.

[57:49] And I was like,

[57:50] oh, it all just works.

[57:53] Like I've kind of like opened up the whole day

[57:56] to spend on just like hacking on this one thing

[57:59] and try and get it to that point

[58:00] and see which one feels nicer

[58:03] from a DX perspective.

[58:04] And it just worked straight away.

[58:06] And so I was like,

[58:07] all right,

[58:08] I think I'm going to rebuild my site in Astro.

[58:10] And I find that's just like something

[58:12] that keeps happening

[58:13] when I'm building side projects

[58:15] or little like simple tools for myself

[58:19] is that I like,

[58:22] I feel like I default to being a Next.js dev

[58:25] because I spend so much time building with Next.js.

[58:27] But then when I actually go to build something

[58:29] that's just a hobby project or something for me,

[58:32] it always is just so much faster

[58:34] spinning up an Astro project.

[58:36] And if I want to write some server side bits,

[58:38] then I just put it in between the three tildes.

[58:41] And if I want some,

[58:42] like if I just want to render stuff on the server,

[58:44] I just like write some HTML

[58:46] and that appears on the page.

[58:47] - Yeah.

[58:48] - Yeah.

[58:49] - If you copy an SVG,

[58:50] it's like,

[58:51] you don't have to change all the camel case,

[58:54] clip rule stuff to like,

[58:56] because it's HTML,

[58:58] like an Astro component is literally HTML

[59:01] and then it adds JavaScript like expressions inside the,

[59:06] just like JSX does and props and stuff

[59:09] and TypeScript support.

[59:10] So, but any HTML is an Astro component.

[59:13] You can copy and paste any HTML.

[59:15] It's, it works already.

[59:16] You don't need to have export default.

[59:18] It's just the HTML with nothing else works.

[59:21] And then you can add the triple tildes,

[59:24] like dash, dash, dash, like front matter.

[59:27] And this is kind of like where you define your types.

[59:29] And if you want to do some data massaging, whatever.

[59:32] Yeah, it's really cool.

[59:34] There's, I want to say one more thing.

[59:37] This, of this conference meetup,

[59:39] it's not free future announcement.

[59:41] It's something that's available now.

[59:43] I have not played with it at all,

[59:44] but in 4.10 Astro, I think,

[59:47] they've released the ability to embed Astro

[59:51] in any server side application that doesn't have to be.

[59:57] So imagine like there's a lot of conversation,

[59:59] how Laravel is kicking JavaScript,

[60:03] but in terms of like maturity on the server side,

[60:06] like the, for application frameworks.

[60:09] And technically they have an example there.

[60:11] I haven't played with it at all,

[60:12] but I really want to put Josh Siri

[60:14] and a couple of folks on that train.

[60:16] Basically you can have a Laravel app in some way.

[60:21] I imagine at the controller or router level,

[60:25] you can render Astro and Astro is going to be embedded

[60:29] and inherit the props from the PHP server side, whatever.

[60:33] And so technically you could write your front end

[60:35] with Astro components, which I love, love, love Laravel.

[60:39] And I want to get better at it, but I'm like,

[60:41] I love Astro so much as well.

[60:43] And I would love both too.

[60:45] I mean, Laravel has its own like blades template

[60:48] which is incredible.

[60:49] And then you can use inertia and use react

[60:51] and view, which is incredible.

[60:53] And you can use live wire, which is incredible,

[60:56] but it would be also super cool to say,

[60:58] hey, I want a monolith, which is Laravel,

[61:01] but Astro on the front end.

[61:03] And it looks like this is opening this possibility.

[61:07] It's very raw at the moment, but in the blog post,

[61:10] you can see they're like,

[61:11] we a hundred percent trust that people

[61:13] will build really nice abstractions.

[61:15] That means that you can now bring it

[61:17] to your favorite framework.

[61:18] And I am maybe already now Laravel and Astro

[61:22] like wrapped in a nice little glue together

[61:26] is already a thing.

[61:27] And if it's not, I'm going to get Josh Siri,

[61:29] who recently joined the Laravel team.

[61:31] And he's a JavaScript guy who moved to Laravel

[61:34] in the past couple of years.

[61:35] I'm going to put him on this train

[61:37] so he can do the weed-whacking work for us.

[61:41] - Yeah, that's such a cool idea.

[61:43] And it's like, it's kind of inverting

[61:45] what has been the kind of philosophy of Astro

[61:48] where, you know, they're not a front end framework.

[61:52] It's just like, you know,

[61:53] you can write some JavaScript if you want to,

[61:55] or you can use whatever UI library you want.

[61:57] And so they have these really nice integrations.

[61:59] And like, if you want to use Tailwind, for example,

[62:02] you just like add it as an integration.

[62:03] And so it's really interesting, like flipping that around

[62:06] and being like, okay, cool.

[62:07] Now you can build an Astro application

[62:09] within any other framework.

[62:11] And that idea that like,

[62:12] it's still like feeding the props through

[62:15] from PHP into this Astro component is,

[62:20] this is very exciting.

[62:21] I want to play with it.

[62:22] - That's the thing.

[62:23] You could from, for a long time,

[62:25] you could already use Laravel with Astro,

[62:28] but you would do a SSR.

[62:31] You would go in, not hybrid, but like server mode.

[62:34] And then on, in your triple tick,

[62:37] you would use Laravel as an API

[62:39] and you would query that API and you can,

[62:42] I've never built a Laravel app this way,

[62:44] but I think there's a really robust authentication layer

[62:47] and you can still access a lot of stuff,

[62:49] but you still have a separate deployed API somewhere

[62:52] and you have to do this call from the front,

[62:54] like from the server somewhere,

[62:56] you have to do that dance to get the data.

[62:59] And what this seems to be is something more

[63:03] like what's inertia or turbo,

[63:07] like Rails has that thing, stimulus or turbo.

[63:10] Like I don't exactly know,

[63:11] but the idea is like you skip the whole two separate thing

[63:15] and you keep the monolith approach

[63:17] and you have a way to magically get

[63:20] all your server stuff in the templates

[63:22] and hopefully the other way.

[63:24] And that's why LiveWire is so cool

[63:26] is because you can do front end stuff

[63:29] and you can do increment, decrement button

[63:31] and sync with the database

[63:32] without having any fetch requests or API calls.

[63:36] It's like literally the front and back

[63:38] is talking to each other in a very solidified way.

[63:42] If that's the case,

[63:43] if Astro can almost like become an other approach

[63:47] to using blades or LiveWire or inertia,

[63:50] it's amazing.

[63:51] - Very exciting.

[63:53] Yeah, I'll have to give it a try.

[63:56] Now, we have been talking for too long again, Simon.

[63:59] I thought we were gonna get to other topics,

[64:00] but I don't think we are.

[64:01] I think we're gonna jump straight into some sick picks.

[64:04] And so I'm super excited to see

[64:07] not only might you have a sick pick,

[64:09] but you've actually added it to the list.

[64:11] You've got a sick pick prepared ahead of time,

[64:15] ready to go.

[64:16] - Which I'm not going to use 'cause I forgot about it.

[64:19] Have I done that?

[64:22] I did, I remember adding a sick pick

[64:25] to the open bar stuff.

[64:27] - Yeah, that's where they go.

[64:29] - It's probably at the bottom of the list.

[64:31] Oh yeah, but now it's been so long.

[64:33] See, we didn't do last week and now it's kinda...

[64:36] I'll keep that for next time it happens.

[64:39] It happens a lot.

[64:40] I have a sick pick prepared today.

[64:41] - Do you have a sick pick on the spot for me?

[64:44] - Yeah, it's very meta because it hasn't happened yet,

[64:47] but I'm going to sick pick in real life,

[64:51] hanging out with people and work colleagues.

[64:54] So this afternoon at 5 p.m., I am flying to Sydney

[64:59] and Thinkmill, the company I work at,

[65:02] has organized a whole two-day gathering,

[65:05] called gathering, literally.

[65:08] And we're going to do one day of sort of work-y,

[65:12] sharing experiences and skills and asking questions

[65:15] and amplifying each other's ability to do things

[65:18] and tap into each other's minds and skill sets.

[65:22] And then the next day, we go to the Blue Mountains

[65:25] and we're going to do a hike.

[65:27] There's three different hikes for three different levels.

[65:30] Unfortunately, I have to come back on that afternoon,

[65:33] but then they go on to do some board games and dinner

[65:36] and lots of cool stuff.

[65:39] The date that was chosen doesn't work for me

[65:41] because I have non-negotiable Saturday morning commitments

[65:45] here up in Coffs.

[65:47] - Surfing doesn't take a break.

[65:50] - Exactly.

[65:51] Sorry, guys, I got us.

[65:53] No, I really tried to get out of it,

[65:57] but it involves basketball and coaching,

[66:00] and I'm coaching my daughter's team,

[66:02] but my wife takes my son to another location,

[66:05] so we need two parents,

[66:08] and I'm also kind of committed to the team.

[66:11] I tried to find that we couldn't make it work.

[66:14] Anyway, I'm still picking this

[66:16] because as much as I love remote work,

[66:19] and I would never consider a full-time in-office job again,

[66:23] I think,

[66:25] this gave me the opportunity to move up the coast.

[66:27] You can't see it, but I have a really big space

[66:30] with kangaroos at the back,

[66:31] and I have an amazing lifestyle,

[66:33] which is enabled by remote work,

[66:35] but even me, who wants to be left alone,

[66:38] who's introvert,

[66:39] I feel super isolated from my work colleagues

[66:42] because we just see each other on Zoom every now and then,

[66:45] and I feel like everyone in the team is the same.

[66:48] The extroverts are absolutely dying to see everyone.

[66:52] Thinkmill has an office in the city,

[66:54] and you can go there,

[66:55] but there's a lot of people living around Australia

[66:57] and a couple in New Zealand and Tasmania,

[67:00] which is part of Australia,

[67:01] but it's still that little island.

[67:03] There's a lot of separation,

[67:05] and everyone is gathering together for a couple of days,

[67:08] and it's just, I can tell already,

[67:11] it's like going to a conference.

[67:13] You get so inspired and energized,

[67:15] and when it comes to your work colleagues,

[67:18] I know I felt gradually more and more distant from the team,

[67:21] and even sometimes, like, do I enjoy working there?

[67:24] I don't really, and then I know you do this,

[67:27] and you're like, holy crap.

[67:28] I remember why I joined these people

[67:30] and why it's a special place,

[67:32] so I'm very much looking forward for this to happen

[67:35] and hanging out in real life with my work colleagues

[67:39] and not do work stuff.

[67:40] It's not just go and sit at a desk and put my headphones.

[67:43] It's like do quality,

[67:45] like you talked about the thing you did in Thailand,

[67:48] and we're not going to Thailand, but we're doing something.

[67:50] The location doesn't really matter

[67:51] as long as you get to hang out.

[67:53] There's people I've never met that joined the company remote

[67:56] since I've came back two years ago,

[67:58] so everyone's going to be together,

[68:01] and it's awesome, and I stick with that.

[68:04] Yeah, yeah, I can totally relate.

[68:06] It was really nice actually meeting

[68:08] all of the people that I work with

[68:10] because, yeah, Superbase is a completely remote,

[68:13] all-over-the-world company,

[68:15] and so I had only actually met like three, four people

[68:18] from the company, and I've been working there

[68:20] for almost three years,

[68:21] so that's a very, very different, strange thing

[68:26] in terms of my career.

[68:27] It's always been working in the office

[68:29] and knowing everyone you work with,

[68:30] and so, yeah, feeling that isolation

[68:34] of not really knowing people,

[68:35] and as you said, as new people join the company,

[68:38] like you might catch up with them

[68:40] and like welcome them into the team or whatever,

[68:42] but then if you're not working directly with them,

[68:44] you might not see them again.

[68:45] You might not have a reason to kind of cross paths again,

[68:49] and so, yeah, at Superbase,

[68:51] I was employee number 15 or 16 or something,

[68:54] and now they're up to 80 people or something,

[68:57] and so there's like this,

[68:59] the huge majority of the company that I've never met,

[69:03] and so it was really nice meeting them all in person

[69:06] and having that kind of focused time

[69:09] where we're all just in a place together

[69:12] doing fun stuff, yeah.

[69:15] - Yeah, so Thinkmill doesn't have that growth

[69:17] in terms of hiring, but we, most people are,

[69:22] it's an agency at the end of the day,

[69:23] like we do a lot of open source work

[69:25] and community stuff,

[69:27] but it's the core business model

[69:30] that makes money is to have clients

[69:31] for who we build application websites and stuff,

[69:34] and so while the team is near 30,

[69:38] I don't even know these days,

[69:39] it went from when I joined,

[69:42] there was just kind of like 15, 16 people,

[69:44] and when you went all the way to 50

[69:45] and then kind of back down,

[69:47] we're 30-ish,

[69:49] and everyone is in a project stream.

[69:54] Most of my time, I'm in the key study,

[69:56] like open labs research,

[69:59] dev role sort of kind of stream,

[70:01] but most people are working on X client

[70:04] or Y client or Z client,

[70:06] and so they're a little avatar in Slack,

[70:08] and we have a really cool, vibrant Slack

[70:11] internal community,

[70:12] but it's still just, like you said,

[70:14] we don't really work day to day with them,

[70:16] and every now and then,

[70:17] like I pause and reflect,

[70:18] I'm like, man,

[70:19] I work with these really cool, bright people,

[70:21] and we never really get to chat or do anything

[70:24] because we're all in our little bubbles,

[70:26] so yeah, it's going to be awesome,

[70:28] and of course, I would feel closer

[70:31] if I worked with these people,

[70:33] but the idea that we're not going to work,

[70:34] we're going to do like some,

[70:36] it's not like the trustful, cheesy,

[70:39] like team bonding stuff.

[70:40] The team is already bonding.

[70:41] It's just like,

[70:42] let's spend quality time together

[70:44] and really just hang out,

[70:45] and I'm really looking forward to that.

[70:47] - And it's really nice

[70:48] that they've broken it up

[70:49] into like a little bit of work time,

[70:51] a little bit of like physical outside time,

[70:53] and then like board games,

[70:55] so like a little bit of just like strategic fun stuff,

[70:58] like I feel like there'll be different people

[71:00] that will engage really well

[71:02] with each of those different activities.

[71:04] It's a very good way to break it up.

[71:06] - I think they've put a lot of research and effort,

[71:09] and yeah, I'm pretty bummed out.

[71:11] I can't do the whole thing,

[71:12] but I think I'll do the most of what I can

[71:15] while I'm there

[71:16] and hug everyone the whole time

[71:17] and then just be like,

[71:19] I got to go catch my plane.

[71:21] I'm going to be late and jump on the train.

[71:23] What is your sick pick, mister?

[71:26] I always have sick picks in my phone.

[71:28] - Well, I've got a whole massive column of sick picks,

[71:31] and I feel like I need to revisit them

[71:33] because some of them are like,

[71:34] yeah, I would have sick picked that,

[71:36] but not anymore.

[71:37] But the one I am going to sick pick this week

[71:39] is getting chickens.

[71:41] I don't think I've sick picked this yet,

[71:43] but we may have lost Simon.

[71:45] He wasn't expecting this.

[71:47] - No.

[71:48] - We recently got four chickens,

[71:52] and they are awesome.

[71:54] So for the last like six months,

[71:57] me and my wife have been trying to build

[71:59] this like chicken coop,

[72:02] and like fox-proof structure in our backyard.

[72:06] And the reason that it's taken so long

[72:08] is just like it is so hard to find time

[72:11] when both of us are not like working or parenting

[72:15] or when the kids are like happy

[72:17] to just kind of be outside

[72:18] and doing something

[72:19] while we're like focusing on an activity.

[72:21] It's very rare for us to have that time.

[72:24] And so we have been very, very, very slowly

[72:27] building up this fox-proof structure.

[72:30] And we finally finished it like a couple of weeks ago.

[72:33] And so if you don't know the like foxes eat chickens,

[72:37] they like to eat chickens.

[72:38] And foxes are very, very clever.

[72:40] And so even if you have like a fenced enclosure,

[72:43] they'll actually like dig at the bottom of it.

[72:46] And then if they don't get underneath,

[72:48] like if the wire is too deep in the ground,

[72:51] then they'll dig somewhere else

[72:52] or they'll try and get in through the roof.

[72:54] And so you need to be like incredibly careful

[72:57] with every single part of the entire structure.

[73:00] - Fairly point, yeah.

[73:01] - Yeah, and you can't just bury,

[73:03] like if you went deep enough,

[73:04] I'm sure it would be fine.

[73:05] But it's recommended that you don't just bury

[73:07] the chicken wire like just in a vertical line underground.

[73:11] So you don't just dig like a trench

[73:14] and then put the chicken wire in it.

[73:17] You need to go down

[73:18] and then like out away from the chicken coop.

[73:21] - Yeah, 'cause they'll try,

[73:22] like you said, they'll just backpedal

[73:23] and dig another hole.

[73:24] I can go under if I just dive a bit deeper.

[73:27] - Terrifyingly clever.

[73:29] And so, yeah, we like,

[73:31] it just took so long to build this massive structure,

[73:35] but we finally finished it

[73:36] and we finally got chickens.

[73:37] - Chickens.

[73:38] - If you're a chicken person,

[73:39] we got two Australorps and two Brahmas

[73:44] and their names,

[73:45] let's see if you can guess who named them,

[73:48] but they're called Big Hen,

[73:50] Pants,

[73:52] Ballerina,

[73:53] and Chickie Lickie.

[73:55] (laughs)

[73:56] - Your children named them.

[73:58] - Yeah, these were not named by the parents, obviously.

[74:02] But yes, they have been awesome.

[74:05] They're fantastic for just like kitchen scraps

[74:08] and things like they eat everything.

[74:10] And so it feels like we're like wasting a lot less

[74:13] and they're just like amazing to watch.

[74:15] It's actually like,

[74:17] you can't actually understand unless you experience it,

[74:20] but just watching chickens as they just like,

[74:23] look around like forage for food

[74:25] and like peck at the ground and stuff.

[74:27] It's just like, it's really soothing.

[74:30] It's like a, yeah.

[74:32] - It's the country vibe.

[74:33] Like I'm not in the city,

[74:35] I'm like hanging out with chickens and yeah.

[74:37] - Yeah, it's really therapeutic.

[74:39] The way that they move

[74:40] and like I can just sit there and watch them for hours.

[74:42] And I just like, I feel calm.

[74:45] They're amazing.

[74:46] - Yeah.

[74:47] - And the kids absolutely love them.

[74:48] Like they just chase them around and every morning like,

[74:51] it's the best thing to get them up out of bed

[74:55] at the moment is like,

[74:56] should we go and feed the chickens?

[74:57] And they just jump out of bed and they're ready to go.

[74:59] And so it's been awesome.

[75:01] - That's awesome.

[75:02] Tony, my son has a friend at school who's at their house.

[75:08] They have eight or nine chickens

[75:10] and I don't know the brand or breed that you mentioned,

[75:13] but one is like a fluffy white long hair

[75:16] and one is a black one and one is like multicolor.

[75:18] Like they're all completely different in size as well.

[75:22] Some are huge.

[75:23] One is called big beastie boy.

[75:26] And he's like, he's very big.

[75:28] Like you can carry them.

[75:31] And like you said, they're more fun than I anticipated.

[75:34] - Yeah.

[75:35] - But I'm glad that they have them

[75:38] because my wife, since we moved up here,

[75:40] she's into all the little like country stuff.

[75:44] And she's like, Oh, we should have chicken

[75:46] and the goat and stuff.

[75:47] And I am completely mentally deranged

[75:51] with recording audio and not having noise.

[75:54] And I already have noisy corgis

[75:56] and every neighbor around me has dogs.

[75:58] They all bark all the time, the cicadas and all the stuff.

[76:02] And I'm like, I don't want chicken.

[76:05] - Chickens are super quiet.

[76:06] As long as you don't get a rooster.

[76:08] A rooster would be a bad idea

[76:09] because then you're going to be woken up very early

[76:11] and throughout the day.

[76:12] But chickens, they just make like adorable,

[76:15] like that's all you get.

[76:19] And if it's like outside the room,

[76:20] you're definitely not going to hear them.

[76:22] - Yeah, okay, fair enough.

[76:23] So yeah, but one bullet I dodged

[76:28] is my wife wanted ducks as well

[76:30] because one of my daughter's friend has ducks,

[76:33] but we went to visit them.

[76:35] And the very first thing the mom of that friend said,

[76:39] "Oh, I'm so sorry, ducks are really like dirty.

[76:44] "They just poop everywhere.

[76:45] "And we haven't cleaned it today.

[76:46] "It's like a huge mess."

[76:48] And we go in there and it stunk.

[76:50] And there was like,

[76:51] they were like literally full of poo over them and everywhere.

[76:53] And there's hay everywhere and absolute chaos.

[76:56] And as a joke, I said, "Oh, how often do you clean?"

[76:59] She's like, "Mate, every single day, once a day.

[77:02] "It's like this place is turned upside down."

[77:05] And my wife was looking at me, she was like,

[77:07] "Nah, I don't think I want ducks anymore."

[77:09] - We're done with ducks.

[77:10] - And you try to pat them and they're scared of everything.

[77:12] So they run in the corner.

[77:13] And if you want to carry one,

[77:15] you kind of have to tackle it and pick it up

[77:17] and hold the wings and it freaks out.

[77:19] And you're like, "This is not..."

[77:21] The chicken were really chill and we could hold them

[77:23] and they were like, "Okay, I'll stand on your shoulder

[77:25] "and just you balance me."

[77:27] - Yeah, I was surprised how social

[77:29] and chilled out chickens were.

[77:31] I always thought of them as that same thing.

[77:33] You'd need to corner them and pick them up

[77:35] and hold their wings down if you need to

[77:37] move them into the coop or something.

[77:39] But yeah, no, they're super chill

[77:41] and they come up and they like getting patted.

[77:44] And yeah, they're very cute.

[77:46] - Yeah, okay, I think chicken is definitely...

[77:48] I'm not getting ducks.

[77:49] - And a goat, get a goat.

[77:50] Goats are so cool.

[77:52] I would definitely, if we could...

[77:54] Well, yeah, maybe we could...

[77:55] Yeah, I'll get a goat.

[77:56] Let's both get goats, we'll do...

[77:58] - I want to have the corgis.

[77:59] Goats and corgis are like the growth,

[78:03] hacking, following.

[78:05] You can put your little goat on Twitter

[78:07] and gain lots of followers

[78:09] and I can do that with my corgis.

[78:12] So with the chicken,

[78:13] I feel like the dogs and the cat,

[78:15] because I have a cat as well,

[78:16] it's less known fact,

[78:17] but I wonder how...

[78:19] Although our cat is like,

[78:21] no matter what dog comes and visits,

[78:23] she's always like, "Yeah, cool, I live with dogs."

[78:25] So she might be fine with chickens,

[78:27] but I have that.

[78:28] What if the cat is like,

[78:29] "Oh, I'm a fox and I can eat this chicken

[78:31] or some weird dynamics."

[78:33] Does the cat go outside?

[78:35] Oh, yeah.

[78:36] She lives outside.

[78:37] A normal place where we live.

[78:39] It's illegal to have cats outside

[78:41] because there's too many like...

[78:43] There's endangered species of lyrebirds

[78:47] up where we are.

[78:48] And so cats like to murder birds

[78:51] for protective reasons.

[78:55] I grew up with cats

[78:57] and most cats would like...

[78:59] I can remember vividly

[79:01] every one of my cats growing up,

[79:02] one day bringing a bird inside

[79:04] and everyone was like,

[79:05] "Oh no, what have you done?"

[79:07] This cat we have now never did that,

[79:09] but it's like the PhD degree level

[79:14] of catching mice.

[79:16] And there's a lot of mice up the coast,

[79:19] which fun fact is also why

[79:21] there's a lot of snakes

[79:22] because snakes eat mice.

[79:25] Anyway, apparently having mice

[79:28] is a sign of a kind of healthy ecosystem.

[79:30] Did I not know?

[79:32] But the cat is like,

[79:33] "Oh, that's a present for mom and dad."

[79:35] And she brings it inside.

[79:37] And she has a special way of going,

[79:39] "Meow, meow."

[79:41] She has a special meow.

[79:42] And we're like, "Oh, that's a mouse."

[79:45] And then you look at her

[79:46] and she runs in the way

[79:47] and you follow her

[79:48] and she goes show you the dead mouse.

[79:51] This is not as nice as a present

[79:54] as you think it is.

[79:56] Would you grab it

[79:57] and then throw it over the fence

[79:59] into the bushland like a snake?

[80:01] Yeah.

[80:04] Well, yeah, your cat

[80:05] will definitely murder the chickens.

[80:06] So you need to make them

[80:07] that you have a very fox-proof

[80:10] and cat-proof structure.

[80:13] Or yeah, maybe the goat

[80:15] would protect the chickens.

[80:17] I would let you experiment with the goats,

[80:19] but goats are awesome, yeah.

[80:20] Especially if you get the faint goats,

[80:22] you know that you scare them

[80:23] and they go all stiff

[80:24] on the, have you seen?

[80:26] Okay, everyone who's listening,

[80:28] if you don't know

[80:29] what a faint goat is,

[80:30] go on YouTube

[80:31] and search faint goat.

[80:33] It's basically a normal goat,

[80:34] but if you scare it

[80:36] and it's very easily scared,

[80:38] the whole body gets stiff

[80:39] and they can't come

[80:40] for like five seconds

[80:41] and then they recover the ability.

[80:43] And so you see their owners

[80:45] just like,

[80:46] some of them are funny,

[80:47] they just go, "Boo,"

[80:48] and the goat falls in the grass.

[80:50] But there's others

[80:51] where the goat is like on the rock

[80:53] and it's like,

[80:54] "Oh, watch this,"

[80:55] and it scares the goat

[80:56] and it turns into this,

[80:59] I don't know how it's called,

[81:00] when an animal is dead

[81:01] and you fill it with,

[81:02] like you can make it--

[81:04] - Oh, yeah, like a stuffed--

[81:05] - Stuffed animal, yeah.

[81:06] But like the thing that, yeah.

[81:07] So it turns into

[81:08] this completely rigid body

[81:10] and just the mouth is like,

[81:12] "Meh, I'm stuck."

[81:13] And then it slowly recovers

[81:15] and shakes it off.

[81:17] - Okay, Simon should not get a goat.

[81:18] I take it back.

[81:20] - I would not, no.

[81:21] I wouldn't do that.

[81:22] It's worth YouTube,

[81:24] the little rabbit hole discovery,

[81:25] like faint goats are a thing.

[81:27] - There's a goat like halfway up,

[81:30] we have like a big hill near us

[81:32] and there's a playground at the top

[81:33] and halfway up the hill,

[81:34] there's a house that has a goat

[81:36] and my kids just absolutely love it.

[81:39] And yeah, it's actually like,

[81:42] it's used for like weed management.

[81:44] And so the goat just like walks up and down

[81:47] and just like eats all of the weeds

[81:49] and like basically they don't need a lawnmower

[81:52] or to do any weeding in the garden

[81:54] because the goat just goes and eats everything.

[81:56] Of course that follows through to like,

[81:58] you know, if you have a veggie patch

[82:00] and like, you know-

[82:02] - I'll do the cherries too.

[82:04] - Yeah, nice flowers and a hedge

[82:06] or anything like that,

[82:07] it will also just tear through all of that.

[82:09] But if you have a section of your garden

[82:11] that's, you know,

[82:12] takes a lot of high maintenance,

[82:15] you can just get a goat

[82:16] and kind of section them off in that area

[82:18] and they can just go to town.

[82:20] - That is cool.

[82:21] Yeah, goats are cool.

[82:22] - Also a pig.

[82:23] I want a pig.

[82:24] Pig would be awesome.

[82:25] - Yes, they're very intelligent.

[82:26] Do you know that in Brazil,

[82:27] they have pigs as pets?

[82:29] Like we have, not everyone,

[82:30] but you can find people

[82:32] that have a pig instead of a dog

[82:34] and they're very leveled intelligence

[82:38] and ability to be trained.

[82:39] - Yeah, and super social.

[82:41] Again, like not something you think of

[82:43] as like an animal

[82:44] that you think of as being really social,

[82:46] but they love people

[82:47] and they love being around.

[82:48] - Yeah, yeah.

[82:49] Like it's the closest thing to a dog,

[82:51] but yeah, you can see videos

[82:53] where people just go,

[82:54] they snap their finger

[82:55] and they sit at the red light

[82:56] and then they like walk on the leash

[82:58] just like a dog

[82:59] and everyone's like,

[83:00] "You got a pig, it's so cool."

[83:01] And you always hear this like,

[83:04] "Oh, you're eating like a pig."

[83:05] Or like this concept

[83:06] that pigs just rolled in dirt

[83:08] but they're actually very,

[83:09] they never pee or poo where they live.

[83:12] They always just go find a spot

[83:13] and they're like,

[83:14] "I don't want to sleep in my own pee."

[83:16] Like what do you mean?

[83:17] Like they just,

[83:18] they're very clean animals.

[83:19] They just like mud

[83:20] and they roll in it,

[83:21] but yeah, you can train.

[83:23] It's not,

[83:24] a friend of mine had a sheep

[83:26] and sheep, even adult sheep,

[83:28] like you have to,

[83:29] if you want them indoors,

[83:30] they can be social,

[83:31] but they have no concept

[83:32] of like toilet training.

[83:34] So adult sheep with a nappy inside the house

[83:37] because at any time

[83:38] they're just like,

[83:39] "I'm just gonna let go here,

[83:40] "right here, right now."

[83:42] Where a pig, a pig,

[83:44] so no sheep, no ducks.

[83:46] - I'm sensing a theme here.

[83:49] Simon is done with cleaning up poo.

[83:52] - No, but I think genuinely

[83:55] if I wasn't recording audio professionally

[83:58] for like make money out of this skill,

[84:01] I would be so much more open

[84:03] because we live in a beautiful place with space

[84:05] and yeah, like have a goat,

[84:07] a horse, whatever.

[84:08] Like it's awesome.

[84:09] It's just, you leave the city

[84:10] and you live with animals.

[84:12] I love animals probably more than humans.

[84:15] But like everything in my brain

[84:18] is skewed towards the lens

[84:20] of how much noise and chaos

[84:22] will it add to my life

[84:23] that has too much noise and chaos already.

[84:25] - Yeah, for sure.

[84:27] All right, we're gonna wrap it up here.

[84:29] Thank you so much for listening

[84:30] to another episode of The Farm Bar

[84:33] and we will see you again next week.

[84:37] - See you again next week.

[84:39] I just wanna say this.

[84:40] We are going to try to become professionals, podcasters.

[84:44] We wanna talk about things like having guests

[84:46] which means we need to agree

[84:48] on a maximum duration window

[84:51] and start time and sort of stuff

[84:53] that when you bring guests,

[84:54] you can just show up

[84:55] and we'll just keep the day open

[84:57] and we'll talk randomly for the whole day.

[84:59] - We'll call you when we're ready.

[85:01] - I think next week would be interesting

[85:03] to have a chat about

[85:05] what sort of process we wanna put in place,

[85:07] how we wanna do this

[85:08] and yeah, that's gonna be interesting

[85:11] and we might become professional podcasters

[85:13] but we are not going to lose

[85:15] the cool vibe of relaxed and unrehearsed

[85:18] and although we'll prepare questions for guests

[85:20] but we are not making the mistakes

[85:22] of putting stress on our shoulders once again, do we?

[85:25] - Yeah, love it.

[85:27] All right, thank you so much.

[85:29] - See you later.

[85:30] - Hope to see you next week.

[85:31] - Bye.

[85:32] - Bye.

[85:33] Bye!