---
showLink: "https://www.youtube.com/watch?v=Jstqgklvfnc"
channel: "Ben Holmes"
channelURL: "https://www.youtube.com/@bholmesdev"
title: "Building with Astro x Wordpress - feat Jeff Everhart!"
description: "WordPress and Astro can be integrated to create a fast, flexible headless CMS setup."
publishDate: "2022-10-27"
ogImage: "https://i.ytimg.com/vi/Jstqgklvfnc/maxresdefault.jpg"
---

## Episode Summary

Jeff Everhart, a developer advocate at WP Engine, joins Ben to demonstrate integrating WordPress and Astro to create a headless CMS. They fetch data from WordPress using the WPGraphQL plugin, display post content in Astro components, and set up dynamic routes. Different hosting options and rendering strategies are discussed. The future of headless WordPress, including more structured ways to work with Gutenberg block data, is also explored.

## Chapters

00:00 - Introduction and Beginning of Episode  

Jeff Everhart is introduced as the first guest on the BeHomestead stream to discuss Astro and headless WordPress.

02:56 - Overview of WordPress and headless CMS options   

Jeff provides an overview of WordPress and different ways it can be used as a headless CMS. The WPGraphQL plugin and differences between wordpress.com vs. self-hosted options are discussed.

17:41 - Setting up Astro and fetching data from WordPress  

Ben and Jeff begin setting up a basic Astro site and fetch WordPress post data using GraphQL. They display the post content in Astro components.  

28:36 - Setting up dynamic routes for individual posts  

They set up dynamic routes in Astro to generate individual post pages using the WordPress post slugs.

49:01 - Discussion of future headless WordPress improvements  

Jeff shares details on WP Engine's efforts to provide better tools for headless WordPress, including more structured ways to work with Gutenberg block data.

56:58 - Deploying the Astro site and exploring rendering options    

Different options for deploying the Astro site, including static generation and server-side rendering, are tested and discussed. Environment variable configuration is also touched on.

## Transcript

[00:00] live on Twitch. Hopefully you can see us. This is my first time using StreamYard in order to host something. Had a little technical hiccup and had to switch over to this last

[00:08] minute. But I am joined with my first guest ever on the BeHomestead stream, Jeff Everhart. How are you doing?

[00:15] I'm doing all right, Ben. How are you? Thanks so much for having me. I'm really pumped to be here talking Astro and headless WordPress.

[00:23] Yeah. This stream definitely came to be on a... Not because we have a lot of crossover. I personally have never used headless WordPress to build anything. I played with WordPress

[00:35] head full a couple of years back. Oh, okay. Okay. That was going to be my question is like, so what's your experience with WordPress?

[00:43] But it seems like you've used like traditional WordPress, right? Yeah. It's been a long time. It was definitely with the drag and drop, but not... Anything

[00:53] that I listened to on... But really the only way I keep tabs on WordPress is ShopTalkShow. Just hearing them like ruminate on, "Oh yeah, you set up a Gutenberg block to insert React

[01:03] components." And I think, "Okay, that's a stack. That sounds interesting." I haven't tried it myself. I just know that even the old Guild developers like Chris Coyier and

[01:13] all the rest still have a fond spot for WordPress. So it must be the thing to keep an eye on. It is. And I think at least with Chris Coyier, maybe Astro too, I remember him tweeting at

[01:24] one point in time like, "I just want WordPress and like Astro to live together in some capacity." So maybe we can make his dreams come true today. But yeah, I mean, WordPress as a project,

[01:34] there's a lot going on and a lot of different ways to use it, which is one of the things that I think is so cool about it. It's kind of like this weird web development Swiss army

[01:43] knife that lets you do a bunch of stuff really fast and really flexibly. So that's sort of my pitch for that. But yeah, so I think today we're going to sort of walk through the basics

[01:55] of hooking up WordPress and Astro. And maybe I could kind of kick us off by just sort of walking you through the resources that I've got, and then we could jump into Astro a little

[02:06] bit. And if while I'm going, you have any questions about, I'll throw some context about WordPress in there just so that everybody who isn't familiar with using WordPress as

[02:18] a headless CMS kind of gets some background and we'll see what's going there. So I've got a couple of stuff put together before the stream, right? Just to prepare.

[02:27] So really I've got this repo here and I think that's just like the basic starter template without TypeScript. It's not the blog, not the portfolio, really just the basics. And

[02:37] so from there, we can start pulling in some data and stuff. Let's see what else I've got open. I got the Astro docs open. So I figure we'll be diving into that stuff a lot. And

[02:51] then I got a couple other tabs. So this one is our user portal for our Atlas hosting platform at WP Engine.

[02:58] Yeah. Well, and I'll come back to this. I just wanted to give some context for how this is all working. So Atlas as a hosting platform gives people who are doing headless WordPress

[03:12] a sort of complete solution to do this type of work where it provides hosting for both sort of like the Node.js based front end and your WordPress backend. So in this one platform,

[03:22] you can get to everything that you need to manage a project that is using that development paradigm and it's hooked up to this GitHub repo. So later as we start making changes,

[03:31] we should see them deployed, not instantly, but pretty quickly to this URL. And then over here on the left is where I've got my WordPress backend set up. This is just

[03:40] like a demo content hub site that I use. And there's a couple of things that I can walk through here. So I've got just some posts set up, took some hipster ipsum, created just

[03:52] some sort of basic posts with pretty basic content, images, headings, stuff like that. And then I also, in the Astro theme, created some custom content types using a plugin we

[04:05] can walk through later. Yeah. So we've got some space launches that we can pull into our site. And I built that using a tool called Atlas Content Modeler, which is an open source

[04:16] tool created by WP Engine to help us model different types of data in WordPress. So the out of the box types that you get like posts and pages just aren't enough for a lot of

[04:28] scenarios. So this gives you a really flexible way of doing that, defining your types, your fields and things like that. And then what it does as well is a lot of people may not

[04:38] know this, but sort of like the crux of using WordPress as a headless CMS, I think, is being able to connect with those via different APIs, right? And so the WordPress Core has a REST

[04:53] API baked in. So if I just snag this URL and do wp-json/wp/v2, that's going to bring me back just like a bunch of data about all the different routes and endpoints we have available

[05:08] to us. So that's, they're out of the box. But then using a plugin called WP GraphQL, we can also turn your WordPress database into a GraphQL database, GraphQL API. And this

[05:22] gives you access to GraphiQL right in the back end. And I can open up my query composer and compose my GraphQL queries here and then copy them into my app and use all that stuff

[05:33] really easy. So lots of kind of powerful tools in WordPress. I'm sure we'll dig a little bit deeper as we get going. But okay, so here's our basic Astro app. I mean, where do you

[05:46] think we should start, Ben? Yeah. I mean, first, because you introduced a lot of things, I did want to ask a little

[05:53] bit on... No, no, totally. So my background, at least using any CMS, has been mostly Contentful in the headless space. And what you showed there, it seemed like something very similar

[06:06] to that. I don't know if you use Contentful, but I know there's a concept of you create content models, which are the structure of your data. And then when you create entries,

[06:16] you're saying, "I want to create a space launch." And a space launch has these three keys with this rich text field, this Boolean value, et cetera. Is that kind of what we're looking

[06:26] at? Yeah. That is exactly what we're looking at. So let me, if you want, I'll dig deeper into

[06:29] the content model or plugin and sort of show you what that looks like. So yes, that's exactly it. Like I come in here, I create a new model, which is what it's called in this context.

[06:38] WordPress's under the hood data type is called a post type. So sometimes in the WordPress world, you'll hear that used as well, right? So this boils down to, we're creating a custom

[06:48] post type. This plugin calls it a model. But if we click into this space launch model, yep, we have all those individual fields on there that we can define. And if we want to

[06:57] add another one, we've got a bunch of different options. And then say we wanted to edit one ... We can even open that up. Each one has its own options. Like, so right, do we want

[07:07] to make this required? Do we want to add a description to help our content editors? Just depending on your use case, right? With WordPress, a lot of these things get built and then passed

[07:16] over to somebody who's a content marketer or a writer or something like that. It's their responsibility to do that. So you can make this interface as prescriptive as you want

[07:28] with some of that stuff. Gotcha. Yeah. So I honestly thought like Headless WordPress did this sort of thing. So is WordPress

[07:37] Engine making that more friendly or does Headless WordPress not even give you a model interface? Well, and so what do you mean by Headless WordPress as a thing?

[07:50] Me not understanding Headless WordPress as a thing. I thought it was like a Headless CMS. And I guess that's not true. It's just like WordPress exposes an API and you could

[07:59] build a Headless CMS on top of that, like this one, if you wanted to. Yes. I think that is essentially what Headless WordPress is. There's not really a SaaS solution

[08:09] out there to do Headless WordPress, right? I think at the end of the day, what you get when you're doing Headless WordPress is you have sort of a WordPress site like you would

[08:19] any other. Maybe you've got some robots.txt stuff in there to not have parts of it indexed, but essentially it is just using the regular sort of run of the mill WordPress with those

[08:31] APIs sort of bolted on in the same way that you would. And I think the benefit to that is like so many people are comfortable using regular WordPress that for them to go and

[08:41] learn a Contentful or some other CMS, there's a learning curve there. And we see lots of people wanting to use that because they want to use WordPress, but might want to do something

[08:51] different on the front end. And you'll see that happen a lot, right? Where somebody has like a long live WordPress site, they've got tons of content and they want a better front

[08:59] end and they want to move away from doing theme development in WordPress. And so using it headlessly is a good next step.

[09:08] Gotcha. Yeah. So if I had like a ton of WordPress posts, they would appear maybe in the content modeler. I'd wired that up and then I'd have like a new interface.

[09:18] Yeah, pretty much. Right. Right. So like if I come down here and say, I've got my posts that I've already published and like, you know, let me see, we can do this real quick.

[09:28] And this is just the API. And so if I slap on slash posts, you know, that's going to bring me back all of the data on, on my posts that I could use in whatever fashion I want.

[09:39] Or like over here where I have a GraphQL, I can kind of compose the same thing. So if I want to, you know, come down here and say, I want to query for my posts. Yeah. We get

[09:52] all the different, you know, data that's on top of that. So what do we want here? I don't know. We'll just go content title for right now and run that, you know, we get that back

[10:04] in, in this, this JCP format. Yep. Yeah. Strapping on GraphQL is always really nice for CMSs. I feel like it's definitely

[10:14] a heavy thing for if you're building a bespoke API, but if someone's already giving you all this data, it's so nice to have a playground of just like, I know what to expect.

[10:24] It is. It very much is. And that's what we see is like, and this graphical interface is really nice for people. Like I'm, I'm definitely more of like a rest API person. So I've spent

[10:34] a lot of time doing this where I'm somewhat newer to GraphQL. And so like having this here as like, you know, guardrails or whatever is fantastic for me where I can just go like,

[10:43] say, I want this, this, and this, and it's like picking from a menu and then it generates this query. And I don't have to think super hard about actually writing this out, you

[10:53] know? Right. Yeah. And also, sorry, I was checking a couple of people saying it's a little blurry.

[10:59] It looks like we're outputting to 720p, which sadly is not 1080. So hopefully we're good because it looks okay on my screen. Can y'all at least read the text that we're, that we're

[11:10] displaying? Or is it just a, is it just not readable? I'll see if anyone in the chat responds. Otherwise we can, I assume we can keep going.

[11:20] Well and what I might be able to do, let me, I wonder if I can share, can I share different sources? I know I'm sharing my screen right now. Could I share an app in here? Just the

[11:33] browser? Yeah, just the browser, that might help.

[11:35] Y'all want me to try that? So I'm going to stop, stop the screen share real quick and see if I can get a better source.

[11:45] Let's see. See, it looks like it's just slides, video file, or screen share. So let me see this.

[11:52] It's easier with two monitors, window. All right, we'll have to do a little bit of switching here. Tell me, is that any better for, for folks?

[12:03] Let's see here, hide it back. Oh, it's bigger. I hope that does help. Yeah. Getting creative with the aspect ratio.

[12:13] Yeah, it's still, still does look a little blurry though. Yeah, it's, it might be more blurry on your end than mine, is my guess.

[12:23] Okay. Because it's bigger, so better, but still blurry. Okay. All right. We might have to

[12:29] keep going because there are only so many knobs that StreamYard gives you. Yeah. Let me, let me see if I'm a-

[12:34] Yeah, I'm a hosting guest. I wasn't expecting to use StreamYard. So this is a little strapped together.

[12:38] Give me one second. Chrome tab. Yeah. I don't think we're going to get anything different there. So, I don't know. All right. I'll go back and we'll just have to, you'll have to

[12:48] keep me honest about what's on the screen and what I'm talking about. Cause I'll try and share the individual app windows as I go.

[12:55] Okay. Sorry. Cool. I think we're talking about GraphQL, right? Yeah. Yeah. That's where we left off. Let me add this back in. Okay. So yeah, we were,

[13:11] we were poking it. It's very extensible. I, I will say I don't really understand much of any of those fields. I do understand Space Launch. It does populate that one pretty cool.

[13:21] Yeah. It does.

[13:23] And that's the nice thing. It's WordPress nitty gritty.

[13:25] It is. It is a lot of it is WordPress nitty gritty and some of it, you know, yeah, you, you might not need. But that is the nice thing about this, this particular tool, right? Is

[13:36] as we add content models, automatically add those ads, those types to the WP GraphQL data schema for you. So like that, that's, that's fantastic as you go. Okay. Cool. You got any

[13:52] other questions or things you want to take a look at while we're in the WordPress backend? Yeah. I mean, I guess my one other question is I thought this would be a URL on like wordpress.com,

[14:03] but we're inside of demo hub.wordpress engine. So is this kind of self hosted? Do you set up an account?

[14:10] That's a great question. Yeah. Yeah. So WordPress obviously is just like an open source piece of software, right? And the benefit to that is you can, I mean, there are tons of different

[14:21] WordPress hosts out there who will host stuff for you. Now, what WP Engine has worked on is like, obviously we're building all these tools to enable people to develop WordPress

[14:30] headlessly. So like this WordPress site is just another WordPress site hosted on our platform. And so, yeah, that is sort of the flexibility too, is like you do have a lot

[14:42] of, you're not locked into a particular vendor, like if you decide to use WordPress. So if you don't like your hosting or your service on one platform, like you can move to a bunch

[14:50] of other ones. And wordpress.com obviously is like, you know, a big player in that game, but you know, there's WP Engine, like GoDaddy has WordPress hosting. There's lots of options

[15:04] out there. Gotcha. So it's kind of like, I don't know, Android where you have the Google phone, which

[15:09] is wordpress.com, but you can also throw Android on any other device and make it a different flavor.

[15:15] Yeah. I think, I think that's a really good, yeah, that's a really good, that's a really good analogy. Yeah. And then each platform can, you know, optimize its own specific things.

[15:25] And so you'll have, you know, like your 10, $20 hosting for like your mom and pop websites all the way up to like, all right, we need load balancers and sharded SQL databases.

[15:37] Like, you know, the sky's the limit on that end with the enterprise stuff. So yeah, it's a very, very wide space, lots of variation and price and what you get for that price

[15:47] and like different features that different hosts offer. So yeah, that's a, that's a fantastic analogy. I'm definitely going to steal that. Cause that is sort of how it feels. Yeah.

[15:59] And there's a lot of confusion there too, because right, WordPress is like its own open source project. You have wordpress.org and then you have wordpress.com and wordpress.com

[16:09] is run by a company called automatic. And there's a lot of like conflation there between the two. Yeah. That's like, you know, like what's open source, what's this company who

[16:18] sort of like still gets to use the trademark to WordPress. So you're sort of like, that doesn't surprise me that there's like confusion out there about that. Gotcha. But if you're

[16:27] using WordPress engine, you're like going off of, if you were on wordpress.com and using their setup, you would be migrating to WordPress engine, but you're bringing everything over.

[16:38] If I kind of, or it doesn't matter. You're just trusting WordPress engine to host it, but you can pull in the data from the same place. Yeah. I mean, technically you could

[16:49] probably do headless WordPress stuff with wordpress.com because like I said, I mean, this is, this is a part of the core software, this API, as long as you can, as long as your

[16:57] hosting environment lets you install plugins, that's, that's totally cool. Yeah. And so that, that, that is what migration looks like. Right. It's like, you have this kind of core

[17:07] piece of software that we call WordPress core. That's, you know, just a stack of PHP files. And then like most of your stuff is stored in the database or like the uploads folder.

[17:17] And so you're essentially just migrating that database and a set of files over and just running it on a different, a different server. Gotcha. Yeah. That makes sense. That's pretty

[17:30] much what I assumed. Okay. Yeah. I think I understand where this thing sits and what WordPress engine is trying to do. So if you want to jump to Astro and I can explain a

[17:41] little on that side. Yeah, sure. Sure. So let me stop this. Let me see if I can open up BS code and if it'll let me do that. All right. Yep. Cool. All right. And we should

[17:56] be seeing index.astro, right? Hopefully. Yeah, we're seeing it. Okay. Okay. Very cool. Yeah. All right. Maybe just bump up your font size by like one or two. We should be good. How's

[18:11] that? Yeah. Perfect. Perfect. Cool. Cool. Maybe I should have done that in Chrome too. That'd have been a decent idea. It's readable. Yeah. All right. Okay. So cool. Yeah. So now

[18:23] like, and I've messed around with this just a little bit. So, and you all do have a really good tutorials. I'll make this just a little bit bigger. So we get all the texts in here

[18:33] about connecting to WordPress as a headless CMS and the Astro docs that I definitely use as sort of orient myself. So that was cool. But what I figured we could do is just like,

[18:45] I don't know, maybe get started with this index page and swap out these card components for those posts that I have in the backend. Yeah, that's exactly. Okay, cool. It should

[18:57] be good. All right. So let's see, what would be the first step of that? I guess maybe we want to make a file to fetch our data. Yeah. I mean, I guess to start, we can like fetch

[19:11] all of the entries and make a little homepage here and then we can make URLs for each of the posts that they would link to. Okay. And to do that, you don't even need a separate

[19:22] file really. At the top of this, we can put a fetch request, assuming it's just a REST API we can grab. Yeah. Well, and I think that we can do that or we could. Yeah. Yeah. But

[19:35] I think either or. So let's, yeah, if you don't mind, let's do GraphQL. It just tends to be a little bit cleaner. Yeah. All right. So let's see. All right. So we'll open this

[19:53] up. I'm going to hop back out here, get my URL. And normally I would probably pass this in as an environment variable. But I feel like for right now we just get started and

[20:07] hard coded. So that's our GraphQL endpoint. What'd you say? I mean, it's pretty easy. If you make a .env file, it'll just exist, but you know, that's just me advertising every

[20:20] little feature. Well, yeah. Well, I think that's, that's part of the reason why I'm here. So let's, so we'd just make .env and then we'll say, you know, WordPress URL, and

[20:36] pop this over here. And do we need like a package to read the .env file or? Nope. Should be good. So the format, yeah, the format to grab it would be, you do import.meta.env.

[20:52] This is a, mention of our build tool. Oh no, inline. Inline. Oh, okay. Yeah. It's a import.meta is a sort of new thing with ESM and some have extended it. Okay. So with that, you can say

[21:06] .name of the thing. Oh, nice. Yeah. And you saw that there were a couple of defaults that we give you for like, are we in development or production? Okay. Yeah. That should exist

[21:18] now. And you might need to restart the server for it to take effect, but. Okay. I don't think I'm actually running yet, so. Oh, well, perfect. We're good. But yeah. Okay. All right.

[21:30] And then yeah, we're going to fire up a post request. What do we need? We'll see if we need to do the content type editors. Let's see. Oh yeah. I assume there's like a token

[21:48] or something, right? Or is it just public? No. Yeah. This is just public. That's really up to you as a developer. Sure. You know, so we'll just snap that. I've got, I've got

[21:59] some stuff that I'll mess around with on the other end. So nobody has to watch me type everything. And then we'll do body, right? And then we're going to want to stringify

[22:11] something. Something. See the formats. Braces, query, and then the query. Yeah. Yeah. Okay. So cool. Yeah. And so let me, let me pop back just one second. Cause you asked about whether

[22:27] or not this was public. So let me hop back into our, my Google Chrome real quick. And I'll just sort of walk you through that. Cause we do have a lot of people who, you know,

[22:45] take a different approach there just depending on how their architecture works and what security preferences they have. So all that stuff is stuff that you can control in this graph Q

[22:53] L WP graph QL plugin. You can, you know, like limit the execution of graph QL operations to authenticate a request. Right? So you've got to have some sort of token in place there

[23:03] to do that. And then what I will mention too, about both the WP graph QL API and the rest API is that it enforces like the same authorization capabilities that WordPress core does. Right?

[23:19] So if I'm not logged in as an administrator or like an editor, if I don't have the authorization to edit posts, it's not going to let me do that through the API either. So that's, what's

[23:28] really cool is like all those things are still protected via the same mechanisms that they would be in here. And that means that public people can't, you know, really mutate your

[23:37] data at all. So really they're just reading it. Which is why a lot of people tend to keep that open. So cool. So I'm going to hop back into this graphical IDE and I guess what do

[23:48] we want to do? Just kind of grab some posts. We got nodes, content, title. Let's see. Let's do excerpt. Ah, but thank you for correcting my bad spelling. What else do we want to get?

[24:03] And then we'll get the slug, which is just going to help us sort of construct the URL and I'll just fire off that query and just make sure that looks the way we want. And

[24:13] that seems like, yeah, cool. We get all the stuff back. All right. Yep. So I'm just going to snag this. Copy that. And then we'll head back into our Astro file. Okay. And then right

[24:37] here, we're going to do an object in here. And I think we do, like you said, we just do query, template literal, and then we'll just paste that in. That's it. Yeah. Kind

[24:47] of pretty that up a little bit. Sure. Cool. Yeah. All right. So that's going to get us back our post data. And then I guess maybe we're going to need to traverse that a little

[25:01] bit. So we got. Yep. Don't forget to put in a wait. Yes. Thank you. I was just going there. Yeah. Well, I know, but I forget. So. Just wait for the right time. Okay. And this is

[25:17] going to be data. We can do, you know, this. Yep. It's probably complaining because there isn't a variable yet, but. Oh, you're right. You're right. You're right. I'm going to call

[25:31] this posts. I do that all the time. They're like, why do I have to name this? It's just a variable. I just want to use it. Yeah. Posts. Nodes. All right. Cool. Doesn't seem to like

[25:49] that. Yeah. We probably need to. Type script. If you just put dot then res json. Oh, good call. Yeah, yeah, yeah. You're right. You're right. I'm speaking code out here. Yeah. Okay.

[26:12] Nice. All right. So we got our posts. Okay. So now, yeah. So what would be our next step here, I guess, swapping out these cards and is there a way we can repurpose these cards?

[26:35] I think so. So every post has a title body and a link, right? Or the link will generate in a bit, but we can definitely set up a title and body. Okay. Yeah. So are you familiar

[26:49] with JSX? A little bit, a little bit. Yeah. I'm definitely more of view person, which is part of what drew me to Astra was I could get out of, you know, kind of react land,

[27:00] but yeah. Yeah. So walk me through, walk me through. But yeah, you're gonna, we use JSX just for like a templating. So like making arrays or like for loops and conditionals

[27:14] would use like expressions. So here you could do curly braces. All right. With post dot map. Okay. So we're going to map over our posts array. Yep. Okay. And then the return

[27:31] value would just be a card. So you can just say in here, like post arrow and then put a card in there. Okay. It's just drop that. Should be good. Yeah. I think syntactically

[27:47] I need to do there. I don't think so. I think we're good. And yeah, you can do like a curl is post. Yeah. Title for the title or actually what was the field that was title. And then

[27:59] this is going to be post excerpt. Nice. Yeah. And then when I was messing around up, sorry, that was a little typo. That's why maybe TypeScript would have been a good idea. And then I think

[28:23] for this, right, we could just pass in this slug, which if we wanted to use that to generate the URL. All right. So let's give this a save. And then I'm just going to come over here

[28:36] in my terminal and run this. Oh, and maybe since we're doing that, let me do that in the BS code. Oh yeah. So we can see it. Yeah. And that way I don't have to be hopping around.

[28:53] Cool. So I'm going to hop over here. Preview. Okay, cool. All right. Yep. And so I think, yep, that's working well. So I'm just going to sort of preview that for everybody. And

[29:14] I think this will be another little next step on our learn Astro journey. So what gets returned with that excerpt is HTML. Oh yeah, that's easy. It's easy for us to handle. Yeah. Okay.

[29:34] So that's what it looks like right now. And so I know like, yep, yeah, exactly. Yep. Fantastic. So I know in like react land, right. We'd use like dangerously set in our HTML. Yeah.

[29:46] It's not dangerous for us because it's server side. So in a less dangerous way, that's less dangerous. Sounds fantastic. Yeah. So let's hop. And I think you can, you can try sharing

[29:59] the whole window if you don't want to keep switching apps or is that what you're doing? Yeah, I am. Yeah. Let's do that. Let's, let's try the entire screen. And now that we've

[30:07] sort of, let me see if I can bump up the font in the browser too. And then maybe that'll help make it all just a little bit more readable. Okay. Less dangerously set in our HTML. That

[30:19] would have been a good name. Less dangerously set. Okay. And so I think, right, we're going to need to make a change to the actual component because like, right, we're just passing this

[30:30] into this body. Yeah. Yeah. And then, yeah, this was like set HTML, right? Yep. All right. Okay. And I don't want to duplicate that. So let's refresh. See what we get. Okay. Very

[30:55] good. All right. That's looking nice. Yeah. We got our disrupt kale chips and our kin folks since DIY. So, all right, fantastic. So that's looking nice. I guess let me hop

[31:08] back into this index file and let's do away with the rest of our cards. Okay. And that saved. Okay. Cool. So I guess next step would be adding in some dynamic routes, right? Like

[31:27] so if this, yeah, I'm going to get a 404 here. Yeah. So there's, there's two ways to do this actually. So you can do the static route of creating a get static pads that generates

[31:45] all of the routes for you, or you can go to Astro SSR and turn it into a whole server endpoint. I'd probably suggest doing it statically. Okay. This is a static site builder, but at

[31:56] least sharing like there is an option if you want to like dynamically update without ever rebuilding your site. Okay. Yeah, that'd be cool. And if we could get it, I would definitely

[32:05] learn be down to learn a little bit more about the SSR stuff. I spent a little bit of time I think before this looking at like the node adapter. And so, yeah, if we could, if we

[32:15] had, there's time at the end and we can work up an example of that. It's actually easier to do with SSR, so let's do it. So in your Astro config, we just need to flip on one

[32:25] switch. We don't even need an adapter. You can actually say, yeah, inside of define config, you can say output colon server, and that will give you the dev experience of a server

[32:37] and you can wire up the adapter later. All right. And this is a string or just, yeah. Okay. Oh, wow. All right. Yeah. And restart your server when you update your config. Yay.

[32:58] It was a big deal to get that in. I want to change to reports. Maybe I didn't quit. Oh, it's already running. I guess you have it running twice now. Yeah. Yeah. All right.

[33:09] Well, we'll swap to a report. So I guess you should kill the VS code one. Yeah. Or kill one. I could call. Yeah, that's what's going on. There we go. I was like, oh, what's happening?

[33:25] I was so used to just working in one window that I forgot about that entire. Yeah. Let's just get that out of my way so I don't do that again. Okay. So yeah, we'll kill this

[33:34] NPM run down. Oh, you didn't have to. All right. Here we go. So everything will look the same because a dev server is a server. But now we'll be able to do dynamic routes

[33:49] without having to specify all the build paths because it'll just do a fetch call every time you visit like a wildcard. All right. Very cool. So we use file based routing for this.

[34:02] So inside of pages, you can do brackets, post slug, or whatever we want to call it. This will be a variable name. Yeah. Dot astro. Okay. All right. I'll just copy some stuff

[34:19] from here and we'll get the layout and everything. Yeah. Okay. So this will mostly be the same actually. Now we'll just do a separate query for an individual post. Okay. So anything

[34:38] inside of these brackets is going to become that dynamic route segment. So I'm guessing I can access that using something in this. What do you all call this? Is this front matter?

[34:50] What is this? Yeah. We call it the front matter, but it's so much more than front matter. It's just a bunch of JavaScript that runs on the server. If you come from Next.js and you've

[35:00] used like get static paths or get server-side props, it really is that. There's a lot less syntax to get going and you can put front matter in any component that you want. So

[35:13] you could have a component that's nested like five levels deep and that component can still have its own data fetchers, its own logic. Oh, wow. That's really cool. Yeah. It's kind

[35:23] of like PHP actually. I guess that's the closest parallel of like, you got your server at the top, you got your HTML. Yeah. And when we had Fred on our podcast, that was like one

[35:33] of the things we talked about. And obviously, WordPress is built on PHP still. So I think there's a lot. That's part of the reason why I was so hyped for Astro. I was like, oh man,

[35:45] there's like this nostalgia here and the simplicity in all of it that makes me feel like that. I'm just like, oh, I can do this and just upload it to a server and I'm good. Okay.

[35:56] So I guess we don't need to rename this variable. This is going to stay the same, right? We will need to sort of rework our query and then we should just be able to swap out some

[36:07] of this stuff, right? Okay. Yeah. Just under an individual post. So yeah. How do you query for a post by slug? Yeah. So well, and how would I, so maybe that's a question for you.

[36:20] How would I extract that param from? Yeah. So the global Astro object is where you'll find a lot of things that are injected or passed in. So it's just, yes, slug is a Astro

[36:38] dot params. Okay. Or I guess I could destructure this part too. You can do either or. All right. We'll rock that. Okay. So the global Astro, is there anything else available on that object?

[36:55] Like what, what else would we use this for? Yeah. It's really like all the Astro features. So it's like half the docs, I guess. There's a, like if you pass props to a component,

[37:07] you would access props. Since we're in a server, you have access to the request and response objects. So if you want to parse out query params, it's a web standard request object

[37:18] that you can work with. And then you also have access to the response. Ah, Astro dot request, Astro dot response. Oh, redirect. Oh, very cool.

[37:28] Yeah. Redirects is our first sort of like helper to generate a nice response that just generates like an actual redirect response. But yeah, the cool thing about the front matter

[37:40] is you can return responses from it. So if you want to like return JSON instead of HTML, if something's bad, you have that option. So that's why we opened up Astro dot response.

[37:52] Oh, that's really cool. That's like, that's a good feature to know about. That's really neat. Okay. So cool. So we got our slug there. So yeah, let's hop back into graphical and

[38:04] I'm just going to obliterate this query and we'll pop this open right to this. All right. So what do we want? Yeah, it's really nice. I've never seen the query composer. Is that

[38:18] new? Uh, it's been in this plugin for a while. Um, and so I don't know. I also know that there's a lot of development going on, um, with this plugin in particular. And so like

[38:31] they've added some ways you can plug in to the, you know, the graphical IDE in here to extend this to, so it's a really kind of, this is like a, you know, a fantastic resource

[38:41] for people doing WordPress stuff. Um, so, all right, so we're going to get, let's see. We definitely want the title, I guess. Right. And probably also want the content. Um, and

[38:53] then we'll get the date. I'm not sure we need it, but all this stuff is in alpha order. So, all right. And so let's come back up here cause we'll need to, uh, I guess parameterize

[39:04] this query just a little bit. Okay. So we've got our ID and we're going to pass in there and that's going to be our slug. And then if we select this ID type toggle right here,

[39:13] we can basically tell it what type of ID, uh, we're going to use to kind of query this. Yeah, it is really neat. So we're going to select slug. Um, and I don't know if this

[39:24] is the same way in other GraphQL systems, but it's a quirk about WordPress that I might as well, uh, say here. So we've got two ID fields. Uh, and this sometimes trips people

[39:35] up and we've got also sort of slug and URI. And like, there's a lot of, a little bit of overlap between some of these things. So like database ID, like under the hood, WordPress

[39:43] uses a SQL database. So like you have your auto incrementing IDs for post types and stuff like that. Um, but part of that is obviously, you know, you might have, you know, something

[39:53] be something, some type have ID one and you know, the other one, another type have ID one. Right. So that's referencing the database ID is whatever WordPress thinks of this thing

[40:05] in its database. The ID is like a unique ID that WP GraphQL assigns to the item so that it makes those queries easier to run. Um, so if you're ever tripped up and you get a

[40:18] numerical ID, that's a database ID. You know, if I'll just throw this on here real quick because we might as well show people, um, I know it's up in the DS already. I get database

[40:31] ID. Yeah. If I do database ID and ID just sort of show you what those look like. That's interesting that y'all provide your own layer of ID over it. So is that kind of

[40:42] like a way for me to specify, Hey, my post slug is going to be the ID for this. Always map ID to my slug.

[40:50] Uh, yeah, I think in this, in this querying scenario, you're talking specifically about like, you know, the, the unique ID. I guess so. Yeah. Cause I was surprised when you said,

[41:02] Oh yeah, the ID is just the slug. I thought, Oh, I thought you were going to query for like a super crazy ID based on a slug, but it sounds like you can do whatever you want.

[41:12] Yeah. And I think it's, it's, it's pretty flexible. Um, do you slug, let's get this back. Yup. And then, yeah. Yup. And see, that's sort of the difference. Like this is

[41:23] the post, you know, the 10th post basically. And then this is that, you know, unique ID that WP GraphQL assigns to it. So when I first started using this, cause like, you know,

[41:32] I would say most of my experience with GraphQL is through the context of, you know, WP GraphQL, it was something that sort of tripped me up. So for those folks just getting started, just

[41:42] kind of something to be aware of. So you said ID is more performant than database ID. Cause I would think, Oh, I can use a day

[41:50] ID for everything. Uh, that I'm not, I'm not positive on. Um, like I do know that the uniqueness does make

[41:58] like the queries more efficient, right. Because it can just go get this thing instead of, you know, having to really check, you know, like all of the things with maybe the database

[42:07] ID 10. And so, um, that I'm not 100% sure on, but I'll see if I can dig up some resources on why that's the case.

[42:15] Um, yeah. I mean, that's really deep. I was just, yeah. Digging into how you ID things and all of this, because it is like an abstraction over what WordPress gives you.

[42:25] Yeah, absolutely. It is. It is. Right. And I think sort of, that might be the same way with some of these other things too. Like slug is a default thing that's in the database

[42:33] where, um, you know, it's possible this URI thing is a little bit derived. And I'll also say that for people who are trying this, I tried using URI instead of returning the slug

[42:45] and had just some issues with it. So that's why I'm choosing slug here as well. Um, and I think that's about, like, if I look at, uh, and I kind of wonder if this is how Astro

[42:58] interprets the params. So like when, when I'm pulling this and I'm at this page, maybe you, you, you know, the answer to this, uh, I guess this doesn't, it's not going to pull

[43:10] in this forward slash, right. That will not be a part of the forward slash. No. Okay. So I think that was maybe whatever's in the brackets, whatever's in the brackets. Okay.

[43:21] Cause I think I did, uh, where was I at? Sorry. I was over here. Let me just throw slug and URI on here to show you all the difference. Um, cause I was playing around with it earlier.

[43:31] Yup. I tried to use this URI. And so I think, and it kept like, I was doing it with get static paths and I thought I was doing it right. But now I'm kind of realizing like

[43:41] it was probably what, what was in params was this and, you know, was it wasn't necessary or maybe this and wasn't necessarily matching what was the actual URI on the object when

[43:54] I fetched it. Um, so I don't know. And maybe I'm wrong and we can, we can take a look at it later. Uh, but yeah, so we'll keep that stuff and there's no real harm in just taking

[44:06] this query as is, I don't think. So we'll just grab this and I'll slap it back in here. And then let's, yeah, let's space that out just a little bit. Okay. And so we're not

[44:23] going to get tattooed for loco off the get go. So let's pass in our slug. Okay. And then I guess we can still use post data and that's still a relevant variable name. We'll change

[44:39] this to post. Let's just see what we need to do here. So data dot post, and then we're not doing nodes. So that should be the end of that. Data dot post should be our post.

[44:53] Okay, cool. All right. So I'm going to obliterate these instructions and I guess we can just come down here and start using this stuff in our, our template. Right. So title and

[45:13] we'll just trash this and we'll do an article tag. And what was our, so we're going to do set, yep, set HTML and post dot content. Yeah, that's good there. And then, I don't know,

[45:33] I can do like a, maybe just an H2 up here. That's the date. Yeah. Or you could use a time tag maybe.

[45:42] Ooh, a time tag. Yeah. I learned about it recently cause I was, you know, trying to make my blog as semantic

[45:49] as possible. I was like, oh wow, there's all sorts of tags these days. Oh yeah. Well, I know, it's nice though. It's very nice. And where do we need to like, you

[46:00] said parse out a little bit. Do we need to do anything? Well, I don't know. I don't know what the date looks like. If it's just a string and

[46:07] we're good, then great. Okay. Okay. That thing. Yeah, it was just like a new date in too low, too low.

[46:20] I think you have to do like new date, post date and then do it. Or, oh, you don't. Oh. Yeah. I think, oh, well, what's it saying here? Okay. It's expected, expected. Okay.

[46:33] I guess you do have to do that where it's like you do new date and then dot to locale string.

[46:40] Okay. Well, do we need to like assign this to a variable? Can we do that?

[46:54] No, that should just render it. Okay. Okay, cool. All right. Well, stop complaining. So that's always a good sign.

[46:58] Yeah. I'm just going to trust that. Oh, yeah. Delete post out date from the, from the function the two.

[47:08] Oh yeah. Good call. Good call. Good call. Let's see. All right. Yep. Stop complaining. That's, that's all we can, that's all we can hope for. All right, cool. So that's, that's

[47:17] a little better. And I'm sure we could go back and, you know, play around with that a little bit and make that more. I don't know that we need the time. Like nobody cares when

[47:27] I wrote down gentrified, gentrified tacos. Exactly.

[47:31] Yeah, exactly. Gentrified tacos? What are these words?

[47:34] So, so this is, I don't know if you've ever heard of hipster ipsum. This is kind of my go-to whenever I've got to do stuff.

[47:42] I get it now. You're artisanal, artisanal filler and I'm baby vinyl, quinoa gluten free.

[47:48] There it is. So if you're ever looking for-

[47:50] Like why is it no my Trader Joe's receipt? This is a problem. Yeah.

[47:56] Yeah, kale chips are delicious. Disrupt kale chips. Cool. So let's just, yep. And all this stuff's working. Image is kind of, kind of loading a little slow. Get it in the CDN.

[48:08] Yeah. I mean, we can, well, we can't. Well, we have a shiny image component now, but it's a, it's a component. So we have to get creative with it since we're using set HTML. I actually

[48:20] don't think we can do it with our current setup. Yeah. Well, and that, that actually leads me into a little bit of a deeper dive into

[48:27] like the WordPress data stuff, right? Because right now we've been doing it kind of the quick and dirty way, which is we get this, you know, HTML content back from the server.

[48:40] And we just pipe that into whatever our container is using set HTML or, you know, whatever framework sort of mechanism you're using there. But, so there are other ways that we could get

[48:52] this data back and like a more structured way. So like if I go back into the post editor and this is, this is just kind of a preview of some of the cool stuff we're working on

[49:01] at WP Engine. So we've, we've invested a lot of time into, and if you don't mind, I'll take us on sort of a side track. We've invested a lot of time into building sort of a headless

[49:13] WordPress framework based on Next.js. It's called Faust. And they're working on sort of like a second version, like to this that adds a little bit more functionality. And

[49:25] one of the things that we hear from people a lot is like, they want to, they want a better way to do exactly what you just said, right? I have these image components or I have these

[49:33] react components that I've created on my own. I want a more flexible way of getting this data from the block editor out and into those components. So like, instead of getting back

[49:44] just raw HTML, maybe I get back like a, you know, an array representation of objects, you know, that here's like a paragraph and here it's attributes and here's its content.

[49:56] Here's an image, here's its source. And so that's something that, that we're working on right now are ways, ways to get that back out through GraphQL so that you can sort of

[50:05] decide what you want. Do you want like the data and you want to sort of reconstruct that in your own frame or do you just want the HTML and pipe it in there? But we're also

[50:14] working on a way to like reverse that as well. Because I know you mentioned a little bit like in the beginning about hearing about Gutenberg and the block editor and sort of

[50:23] how all that works. And so this is just a really sort of, I mean, a ton of time and energy has gone into developing a block editor. And that's essentially what it is. It's like

[50:34] smallish sort of React components that you can, you know, inject into the page and then store data about the component inside of it. And so that's sort of what this team is looking

[50:47] at is not only how do we get the data out in a structured way, but how could we say in like a Next.js project or something or in this, you know, framework, create React

[50:57] components that then we can push to this WordPress backend so that we can sort of use them in both places. And that's, I think, like, sadly, I don't have a demo for that, but it's one

[51:09] of the things that we hear about a lot from people trying to do this is like, hey, we want easier ways to do that. And there are plugins that'll give you the data sort of

[51:17] right now. So. Gotcha. Yeah. I didn't even know there was a full page builder around this. I thought

[51:25] it was a generic like rich text element, but it's cool. There's like a block concept going on.

[51:32] Yeah. And that was, that was called the classic editor. And that sort of got phased out over the last couple of years in favor of this block editor. And it does like offer some

[51:42] really great experiences. Like they're doing lots of stuff around like reusable block templates and things like that. So there's a lot of innovation happening here. And it's just sort

[51:52] of like, I think the sticking point is that like, as an open source project, like headless WordPress isn't necessarily prioritized. So a lot of it is like these community driven

[52:03] efforts to say, all right, we need to figure out a way to do X, Y, and Z. And that happens through either open source projects like GraphQL or like larger companies like WP Engine sort

[52:14] of sponsoring the development of this framework or other tools like that. So hopefully if anybody here is watching this and is excited about that, just pay attention

[52:27] to like our stuff over the next couple of months, because we'll have some announcements. We'll probably have some demos on how that's going to happen. And it'll be really cool

[52:37] because it'll enable sort of exactly what you said. It's like, we can take it, pass it into this image component and have it in a more flexible way. I think most like front

[52:46] end people want. Yeah. Because I mean, the beauty of Astro is like, if you want to render a node with

[52:54] a React component from material UI, a Svelte component from somewhere else, or an Azure component you homespun, you can import that and put it into the template and it should

[53:04] work as well as you want to. It's not even just React. So yeah, assuming it keeps headless, it would be very cool if it gave back like a big JSON blob where I can map image to component,

[53:16] pass through to source and all, and I can sort of get going. Yeah, yeah. And I think that's sort of exactly the intention there. And just to speak about

[53:25] the flexibility of the Azure framework stuff, that is one of the things that I was so excited about. WP Engine, and my job now is a lot of React, right? Where we're using Next, we're

[53:36] doing stuff like that. So most of my time is spent in there. And before that, I'd spent like four or five years really doing Vue and Nuxt and really loved that development environment.

[53:47] And so we all had a get together one day where I was like, "Let's all get together and let's just pair program some Astro stuff." And I was working with a couple of our other dev

[53:57] advocates and added on Vue and started using Vue and they were like, "Jeff, I've never seen you smile as big as you're smiling right now." Because it was just so pleasurable.

[54:07] Like Astro was so simple and then I was getting to use the framework that I wanted and wasn't being forced into one or the other. And so it was really cool.

[54:16] Nice. Yeah. So props to you all for that flexibility. Cool. Cool. So maybe, I don't know, let's hop

[54:25] back in here and I guess- Where we're at right now. So I guess by-

[54:28] How much time we got left? So I got to stop at 3.30, so we got a half hour left.

[54:34] Okay. Okay. Yeah. We should have filled up a whole stream building website, but it's just so easy. What

[54:39] is- Yeah.

[54:41] So there's a couple of things maybe we could do in 10 minutes or so. I mean, we could definitely, we have the space launch content type that we could make. I can also talk about this

[54:54] sort of hosting platform if that'd be of interest. I haven't done anything there. So like I said, this is all tied together and let's give it a live try. So if I add some of this stuff

[55:09] to Git. Public typing is like difficult. So kudos to all you streamers. It's the worst.

[55:20] Yeah. I get it.

[55:22] It's like anxiety inducing. What did we do? I don't know. Added posts. Added posts. Nice.

[55:32] GitHub, and then this should kick over a new build over here. Yeah. Oh, well, I mean, we are using Astro SSR without an adapter. So I don't know how,

[55:48] I don't know what to expect. Good question.

[55:50] So- That's, oh, yes.

[55:52] We can make the static. We can make the static very easily. Yeah. And so, and I think it's 100% going to break and I will tell you why. And this

[56:01] is maybe like, so, so our platform is just a little bit different than like, I think maybe Netlify or Vercel, like where it's not serverless. Oh, there we go. Yep. Killed it.

[56:08] That's cool. And that's to be expected. And I will tell you why audience here in just a second. So it is built around kind of like this long running node process idea, right?

[56:19] That's what this environment is. And so since Astro is SS, or sorry, is static site generator, everything gets populated in the disc folder. And so what I did to make that available on

[56:30] the platform, just sort of using the static method was I made a couple of changes to this package.json file. So I added this HTTP server package and then changed the NPM start script

[56:42] to basically just run that server and point at the disc folder, which made all the static site generation stuff work awesome. And big shout out to our solutions architect, Jordan

[56:53] Maslin, for helping me get that, you know, ideate on how to get that piece working. So that's absolutely why I failed. So what a demo. Wah, wah.

[57:05] Yeah. I mean, I can turn this back into a static build for us. We just need to add one thing to the slug.astro. Okay. It's probably worth demoing the stack. Because anyway.

[57:16] To me, that's what a lot of people want. And so like even, and this is just anecdotally seeing people build headless, you know, headless sites on our platform, like they default to

[57:30] wanting to statically generate everything. Right. And so even with like some of these new rendering methods, like ISR and things like that, like they're still sort of stuck

[57:38] in like, let me pre-generate as much as I can. Even though maybe something like Next gives you all this flexibility to like determine how and when it re-renders and stuff like

[57:47] that. So yeah, I think it'd be worth talking about that too. So I know we got to do some getStaticPaths, right? I think we export a function here.

[57:58] Yep. You can export from anywhere in the file and it'll just be hoisted up. And if you're at home and you've used Next.js getStaticPaths, it's identical, I think. We've been inspired

[58:09] by Next.js for a lot of the APIs, like the page routing, but this is the only one I know of that's like, we really did just kind of use it, but we also added a helper for pagination.

[58:19] So we got that. We got a little pagination. Okay. Okay. Very cool. But yeah, for this setup. So we need to return an array, right?

[58:28] Yes, return an array. Eventually. Okay. And you can probably copy the same query from your index.astro in order to get all the post

[58:35] slugs or, yeah. Okay. Because we can do it two ways. We can, yeah, let's do it this way. Let's pass through all

[58:43] the information. Okay. Well, and that was maybe, yeah, because I know you said too, we could get props as well. Would that be like, if we return additional

[58:54] information from getStaticPaths, is that what then is available via props? Or is that a little bit different? Yeah. So let's get creative. This would do

[59:02] two GraphQL queries instead of one. So it's honestly worse, but if you just query for the slug, you would get an array of slugs that you could return as params, and then

[59:12] we could keep the rest of the code that we have. I probably wouldn't do that, but it is one way. Okay. Wait, so sorry, say that again. My brain

[59:20] just blipped for a second. I get it. I get it. I said a lot of things. So if you, well, this is good. So postData has slugs. You can probably just remove like

[59:30] excerpt content title. Okay. And then this would just query for slug. And then in the return body, you could say postData.posts.nodes.

[59:43] I think that's what it was. Oh yeah. PostData.posts.nodes. Yeah, that. And then you can map that over to an array and in a return object. So parentheses

[60:08] around the curlies, I'm just going to warn you, or that, yes, that, that you're there. Curlies and then params colon node.slug, or hang on. Params colon slug node.slug. It's

[60:25] one more nested object. Oh, okay. I got you. Okay. PostData. Okay. I'm just making sure that's in that scope. Okay. All right. And so question, do we need to now go and remove

[60:45] our output from this config? Ah, yes. Okay. Yeah. That build error you got was probably

[60:52] Astro saying you set output server, but didn't have an adapter. So it would just be a static build.

[60:59] Yeah. And that was the other thing I looked at. Cause before, before, you know, I had the suggestion where there was somebody who was like, well, just run this and you know,

[61:07] this will work on our platform. Just pointed to this folder. That was my next go-to was to try and get the node adapter to work.

[61:14] Yeah. I'm just thinking like, if Matthew were here, our resident adapter creator, we could probably get that going in 10 minutes, but I don't trust myself to set up a node server

[61:25] that quickly. I, but if you're using HTTP server, I can guarantee it. Yeah. I think that's what, well, and sorry, I'm just going to take a side track. I don't

[61:33] think it was, it didn't seem like, yeah, yeah. We got, we got to, uh, where would that be at? Server-side rendering? Uh, maybe? Yes. We go to node. Okay. So it looked like we

[61:50] just add this adapter, right? We install an adapter and then it just seemed like you could add a file here using HTTP and probably just, you know, say no, whatever that is. Yeah.

[62:03] Node. Exactly. Yeah. That's what, that's what I was going to do before I came to this. Cause like, obviously, you know, with our platform, like there's a CDN layer. So I was like, okay,

[62:12] well, some of this stuff will get cached as long as there's decent cache control headers, but I'd much rather, much rather statically generate. Oh, you want to try it? Oh, I want

[62:22] to try it. The one, the one beauty of my stream is I'm not like trying to make beautiful snippets. I get messy on here. I'm totally game with breaking stuff. Well, so let me, uh, before

[62:36] we do that, so should this, let's, let's test, let's test what we got there and then let me push it back to, yeah, yeah. Push it back live. Just to make sure we've done get-sag-pass

[62:45] correctly. Yeah. Okay. So that looks all right. There we go. That was my fault. Uh, we'll just be janky for right now. Uh, oh yeah. This is a, a really bad gotcha would get static

[63:07] pads. You can't access variables outside of it. Okay. It does work. Okay, cool. Yes, it does work. All right. So let's, all right, let's, uh, let me just. Yeah, this might actually

[63:26] build perfectly. Let's see. Yeah, I hope so. I mean it, it did, it did fine in the little tests that I did. So let's see. Um, okay. So that's, that's, that's going to build and

[63:41] while that's building, uh, I just want to kick it off and just make sure it's not immediately run again. Yeah. All right. So at least it's not, this is a small site too. So it shouldn't

[63:53] take super long for us to know if it failed or not. Yeah. Got like five pages. Okay, cool. So now let's hop back and where are we? Astro docs. Okay. So, all right. What do we need

[64:07] to do here? NPM install. So we've got to install this package. Yes. Uh, it doesn't tell you the new flow. There is a cool way to do this. Did Astro add? It is. Okay. Yeah. Oh, it is

[64:21] at the top. Okay. I was making sure we actually. Oh, you're right. It is. I'm sorry. Yeah. Yes. No, no, no. Very nice. You're just looking at the big green text on the page. Yeah. Yeah.

[64:30] I mean, having that, I was just like NPX Astro add view. And it was just like, ding, like, Oh, I'm, I'm a happy Jeff, you know? So it's fantastic. Um, all right. So we've got to

[64:42] import just be lazy, copy and paste. And this is in our config file, right? Yes. Yeah. Perfect. All right. And then adapter up. I'll just take the whole thing since we, yeah. The way

[64:56] the other object adapter server node. Okay. So then I guess we would just, so we're not going to, let's not, yeah, not, not express probably. So let's snag this. Let's see what

[65:18] that is. Yeah. I see listens on 80, 80. I don't know if that's going to work. Uh, yeah, I think it'll, does it work? Yeah. Let's see. Okay. Um, all right. So I guess we would just,

[65:30] this would need to be a whole new file, right? Just somewhere down here in the server.js or something. Yeah. Copy paste. Okay. And then package.json will be, uh, yes. Node slash

[65:50] server.js. All right. Yeah. So I guess if you do a build. Okay. Well, we would want to run build and then start, right? Yes. Okay. All right. All right. Gave us our, our dist

[66:17] folder. Oh yes. Cause you, and I'm just double checking my own understanding, right? Cause we've got a build for it to create this, that this file, this dist server entry.mjs. Okay.

[66:29] All right. Cool. And so then npm run start. I don't think it logs anything. We don't get any output. Okay. And then, so this is going to be on localhost 8080, right? Yes. All right.

[66:54] Some things are missing. Okay. Okay. Well, that should not have happened. Okay. Finalizing server assets. Yeah. If you, if you don't mind popping open the inspector, I want to

[67:08] see if we just have like 404s. Hmm. It looks like we might. Yes. We got some 404s for some resources, some CSS resources. Ah, odd. Yeah. Let me, it seems like they're not wired up

[67:26] correctly. Okay. Cause I noticed they're looking for assets. And I guess that would be a dist publish client assets. Yeah. It's in client assets, but it's separated client from server.

[67:45] And I feel like, okay, I'm not sure. Well, so all we get in this server folder is this entry.mjs. Okay. Yeah. It's one big, uh, request handler from what I know. Oh, okay. So it's

[68:03] grabbing that, but yeah, the assets just don't. Hmm. Yeah. I don't even know how you would fix that. Configure here in here. I mean, shouldn't touch that. Yeah. Yeah. Yeah. Right.

[68:21] I mean, there's really nothing. I feel like you have to serve the assets folder separately, you know? Okay. Or something like that. Yeah. This might be too much to dig in. Well, it

[68:34] does say this right here. I mean, it's serving static assets here. Maybe. Yeah. Okay. I think the answer is definitely on that. So yeah, you do it here for sure. Yeah. Okay. Uh, note

[68:49] for our docs, tell you how to do that. Yeah. So I'm just SSR handler. We get the request. Uh, cause you could air. Oh, it's tough. I don't know how you do it actually. Oh yeah.

[69:04] Okay. Well, I'm, I'm glad that I figured out the other way then and not this. Yeah. You probably have to go off your assets and, uh, serve them up. Yeah. Okay. I don't know. Well,

[69:15] here's another package to spin up a server. Here we go. And maybe that's, maybe that's why I don't know. Cause I was looking at this and I was like, Oh, I guess you could use

[69:26] express and you know, maybe you could, Oh, there you go. And like, look at how that would be easy. Okay. So you've just sort of got to replicate whatever to this. Yeah, let's

[69:38] do it. Um, all right. So we're going to kill this. Does this need, so no, the node adapter is the same, right? Whether we're using express or anything else. Okay. So really all we should

[69:54] need to do here is install express. And yeah. Assuming it'll let you do that. It doesn't need like cost require in whatever environment. Oh yeah. Good call. I don't know. Uh, this

[70:14] is node 16 from my experience. So that's what we've got. Let's run it. It should work locally. Okay. Do we need to build again? No, we don't. Right. I don't think so. Yeah. Okay. We need

[70:28] to start it up. Yeah. I guess it's not going to log any output. Express doesn't either. Oh, okay. All right. Very cool. Click on a link. Very cool. Neat. All right. So a couple

[70:48] different ways to do that. And if somebody, somebody out there watching, if you're an express person, here you go. Or yeah, like a node JS, node JS person come back here and

[71:00] help us. I mean, it's, uh, it's pretty helpful if you're, um, trying to strap Astro onto an existing server. Like I know Next.js has that express output. You can mash them together

[71:09] if you want to make like all of your homepages with Astro and use a caching layer on top of it and use Next.js or well, Astro is replacing more and more of Next.js features, but if

[71:20] you're using Next as a migration layer, you could put them in the same express server and that would work. Yeah. Cool. So let's check out how our build went. This is, oh,

[71:30] I'm able to be deployed. What did I do? So let's check our build logs. Okay. That worked. Yeah. Oh, it says success too. Maybe the UI just did an update, which is. That's funny.

[71:49] Maybe that's a, huh. I clicked this, right? Last successful build. Yeah. Let's see. Weird. Build successfully. Okay. We're on the internet. Yeah. Let's purge this real quick. It's a

[72:14] good, it's a good guess, but yeah, that is an old build. Something worked. Yeah, it is. So I have to come. Oh, okay. I might've opened the wrong one. It shouldn't have. Yeah, 310.

[72:30] Let's look at these build logs. Failed. Okay. That's what we want to see. Oh. Illegal. Oh, wow. Static routes. Invalid response body while trying to fetch. Okay. Invalid response.

[72:48] Okay. I think it's trying to do the GraphQL query and it's failing. Okay. Oh, that's a shame. I'm going to guess it's our environment variable not coming through. I've seen that

[73:00] happen on Netlify. Oh my gosh. Yes, Ben. That's exactly what it is. Okay. Nice. Well, cause right, we switched to it and I had it hard-coded in the other one. It has no GraphQL end point.

[73:14] Okay. So let's do that. And then let's hop back into, I'm just going to close out some of these things. I guess we had that in index. What did we call this thing? WordPress URL.

[73:27] That's 100% what it is. Awesome. And that is not something I tested either. So let's see. I mean, I guess it should be fine after we do this. Save. And then yeah, I'm out to

[73:46] clean rebuild it. Cool. But my guess is that's 110% what that was. Nice. Cool. So we'll let that churn for a second as we wrap up. So now we only got 10 minutes left, but yeah.

[74:02] Anything else you think we should talk about or maybe like a headless WordPress person would want to know about Astra? Yeah. I mean, trying to cover as much ground with Astra

[74:12] as I can. I guess you all know at least you can SSR and statically build, you got fetch, you got environment variables. You can use whatever component framework you want. The

[74:21] only things we didn't talk about are local content because of course, headless WordPress is managing that for us. But yeah, if we had like local markdown or MDX files, you can

[74:31] use those as components and pages. So yeah, that's kind of the real power of if you're like self managing a blog, we have a lot of scrappy people in the community that just

[74:41] have a source folder with all of their markdown, all of their images, and they just want to use Astro as a way to glob them all and put them onto a site. So that's where we put a

[74:52] lot of our time, is making markdown MDX really nice. That's really cool. And like, I'm just thinking about that as like a potential for us. Cause

[75:00] like, I'll just sidetrack us a little bit. And like, this is the website that we run as a part of like the DevRel team at WP Engine doing headless stuff, right? This is a Next.js

[75:10] site, headless WordPress, but we've got this kind of conglomeration of stuff that's served by headless WordPress. And then down here, we also have like our platform docs and stuff

[75:20] like that, that are generated by markdown. But like, we get all that stuff from GitHub. So I don't know, it's just kind of interesting to like see, you know, like thinking about

[75:29] serving with Astro, like you could just have some MDX files in here and like, it'd just be a part of the website, not like its own separate repository, which I think is really

[75:38] neat. And then to be able to do that, have that stuff live alongside content generated in any one of those other ways, it's really cool.

[75:47] - Yeah, totally. And I guess the one thing I should say about MDX, and someone said straight MDX, it is framework agnostic as well. So you can use the same client directives, you

[75:59] can keep using Vue for everything. It's not locked down to React, which was my understanding of MDX going into it. Oh, MDX is the React thing for markdown, right? And the answer

[76:09] is no, they're a very flexible layer that could use any component framework you want. So we at least made sure that worked. But yeah, there's all sorts of fancy isms in here

[76:19] that you can read up on, like remark and retype, you can inject front matter, there's all sorts of stuff.

[76:25] - Oh, nice. Just the prism support for syntax highlighting. That's cool. That's very cool. - I don't know. Anything about Astro components we'd want to talk about?

[76:39] - Oh, yeah, we haven't even really used- - No, not really. We had the card. So let's... Okay. And I see here, yep. Okay. So that's

[76:50] a good instance of where we would want to use Astro.props. So we've got this card that we're passing this stuff in. Okay.

[76:59] - Yeah, and I didn't mention what the styling is scoped. So you see here a style tag. If you come from Vue or Svelte and you're used to single file components, that's what we

[77:12] pulled from. The core of Astro actually started kind of as like Svelte, but different. And then we slowly moved it a little further and further into the camp we were looking for.

[77:22] But yeah, it's very inspired by those kinds of frameworks. - That's nice. And you don't need any sort of attribute on this style tag to make that

[77:27] happen. Just it living in this file is enough to scope it. - Right. Yeah. It's global by default or sorry, it's scoped by default, but you can add it's

[77:36] global if you want to turn it into a global style block. That's just like unprocessed. I just want style. You can do that too.

[77:45] - Yeah. And the one thing I feel like that I was really impressed by when I started to integrate the Vue, for example, and to make sort of interactive components was the sort

[77:58] of islands architecture. And I know that's like its whole thing and definitely not enough time to unpack that in the time we got left, but definitely something like if you're interested

[78:08] in Astro, this is like a super cool feature because just having these client directives to tell it sort of when and how you want particular JavaScript elements loaded was super neat.

[78:21] - Yeah. I mean, it's kind of funny when you're looking at like pure content sites and posts, like I've done a couple of these demos now where we never need a client directive. We

[78:31] never need, like you kind of shoehorn a demo at the end, like, oh, by the way, but a lot of the time you don't need the JavaScript because especially if you use like SSR, you

[78:41] saw there, you can just fetch dynamically for any post that you want. You don't have to do like a fetch query with react query or something like that. You just do it on

[78:50] the server, bring in the data and yeah. - Yeah. And I think that's part of the reason like why I was so amped about this for the

[78:58] WordPress community in particular is because like the idea that y'all are focusing on content focused sites is like important. And that's most of what WordPress sites are or some sort

[79:08] of content site. Yeah. Like we have some people who are doing like some more app like stuff where I don't know, they're kind of using it like as an application framework and you

[79:16] can do that, but most of it is not that. And this was just like such a, you know, like the idea that you're focusing on this one use case and sort of saying like, if it's

[79:27] outside that here's other stuff, but like, this is our audiences is really refreshing and cool. Cause I feel like in tech, a lot of times in WordPress itself is a great example

[79:37] of this where to like try and expand and become all these different things to all these different people instead of staying focused. So.

[79:46] - Yeah. It's been tough sometimes. Cause you start looking at like, oh, and we could do single page apps and handle e-commerce and all this stuff. And it's like, sure. These

[79:56] things are all possible. We gave the toolbox to everyone, but we know what people are using it for. And we know where the strengths are and where we put in a lot of months to making

[80:05] like really clean APIs. And the answer is content, Markdown, MVX, calling APIs. So it's like, if we want to define ourselves as like, what is the killer use case? It's that it's

[80:19] marketing and blogs and slowly expanding from there when we really feel good about what we could bring to the table.

[80:26] - Very cool. It's super, super cool. Super cool. Well, awesome. I know we're pushing up against time. Ben, I definitely want to be respectful of your schedule and thanks

[80:37] a ton for having me on. - Yeah. Yeah. I mean, thanks for coming on and leading this whole demo. I was worried

[80:43] I'd have to like set up a WordPress engine admin panel. We were talking about that before the stream. It's worked out for sure.

[80:49] - Cool. Cool. Cool. And if you don't mind, yeah, I'll just leave y'all with a couple of things like to check us out if you want and you're interested in doing this. Yeah.

[80:57] So our website is developers.wpeng.com. This is where we publish a ton of content on doing all things headless WordPress. We're really focused on one sort of just educating the

[81:09] community about the different patterns and like the different backend tools that you can use, but also trying to really stay as much as we can, obviously being here on an

[81:17] Astrotalk framework agnostic, right? I think like that's the beauty of headless style of development is you can use whatever front end tools you want. So although a lot of our

[81:26] stuff is based around next JS, we're definitely here to support you with whatever flavor of JavaScript you want to use to make this stuff. You know, clearly I did some demos of our

[81:38] hosting platform. So if you're interested in that, you can sign up for a free account, gets you a node hosting environment and a WordPress hosting environment that you can

[81:46] use in tandem to sort of experiment with this style of development. And like I said, there's definitely changes on the horizon. This is still sort of like, oh shoot, space. So like

[82:01] there's a ton of, are you got to go? Sorry, we lost your camera for a couple of seconds. I'm just making sure.

[82:07] Oh no. Okay. Audio go up? A little bit, but golly or so.

[82:12] Oh, okay. All right. Yeah, yeah, yeah. Just check it out. There's lots of, lots of innovation happening here and hopefully if you check back with us in a month or two, have some

[82:19] cool demos of some of that block editor, sort of a more component based stuff that we can do with the GraphQL output. So thanks again for having me. Definitely check out Astro.

[82:30] Super, super nice. Super cool. Awesome. Yeah. This felt like such a great like combination of ideas of, I learned a

[82:39] lot at least about how, what WordPress is conceptually. I feel like I actually had the wrong idea of what it was and I think I have a right idea now. And yeah, WordPress engine,

[82:50] I'm really fascinated with the block stuff. Like if it could give me like a tree of everything and I can render it to anything I want. Like that, that feels like something I've heard

[82:59] Russell's of in other CMSs too. So it's cool to see like even WordPress itself, it's gotten yeah.

[83:05] As soon as it's ready, I'll, you know, like I'll, I'll shoot it your way. Cause it is, it's going to be really cool and really powerful. And we'll let you do, you know, obviously

[83:16] kind of at that point, the sky's the limit with really how you want to render some of this stuff. So it's neat for sure.

[83:23] It's really neat. Yeah. Yeah. But okay. Thanks. Yeah.

[83:28] Dang, you're professional with this stuff. Do you even have to ask for that? It's almost like I am. Yeah.

[83:35] Yeah, exactly. Yeah. You got to meet through this. It's the first time I've done a guest of course.

[83:40] Oh cool. Cool. Well I will always, I guess, have that under my belt. Right. I was the first, first guest on your stream.

[83:47] You're ground zero. Yes.

[83:49] For the first thumbnail on the learn with Ben landing page. Fantastic. Awesome.

[83:54] Make a new microsite. All right. Well, yeah. Wrapping up. I don't see any like questions or anything in the chat. Just a lot of love. Thank you Fuzzy for showing up as always.

[84:05] He's our like main support squad person. If you say anything in the Astro Discord, you'll probably pop up. Just a bare emoji will do.

[84:13] And I'm definitely lurking in y'all's Discord as well. So if you've got any questions, hit me up. We run a Discord space too, that you can get to at the bottom of our website. That's

[84:22] really just sort of focused on, you know, headless WordPress and people doing projects in that vein. So if you feel like it, pop in there, join us. If not, give me a shout

[84:32] out in the Astro, Astro Discord. Awesome. Yeah. There was the banner. I was supposed to do this banner earlier, but go

[84:40] over there. WordPressengine.com should have all that info. Yeah. Yeah. Come on over.

[84:46] Yep. And if you want to meet up with us, astrobuild/chat is the other one to go to. It's all the plugging we've got to do here. We've got two projects and they work really well together.

[84:58] Awesome. Cool stuff. All right. Thanks for joining us everyone.

[85:03] All right. I think I'm going to sign up here.

[85:07] Cool. Should I just bounce?