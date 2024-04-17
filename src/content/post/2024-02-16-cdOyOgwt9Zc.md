---
showLink: "https://www.youtube.com/watch?v=cdOyOgwt9Zc"
channel: "Ben Holmes"
channelURL: "https://www.youtube.com/@bholmesdev"
title: "React Suspense from scratch!"
description: "Demonstrate building React Suspense from scratch using Astro, covering topics like middleware, request-response handlers, and server-side streaming."
publishDate: "2024-02-16"
ogImage: "https://i.ytimg.com/vi/cdOyOgwt9Zc/maxresdefault.jpg"
---

## Episode Summary

In this video, the host walks through the process of building React Suspense from scratch using Astro. The video covers topics such as implementing React's runtime, handling middleware and request-response handlers, and utilizing server-side streaming. The host starts with a simple Spotify clone demo and progressively adds features like loading indicators and parallel data fetching. The video also delves into advanced web APIs like async generators, readable streams, and suspense boundaries. Finally, the host introduces a library called SimpleStack Stream for Astro users who want to use Suspense in their projects.

## Chapters

00:00 - Introduction and Setting Up the Demo  

The video begins with an introduction to the goal of building React Suspense from scratch using Astro. The host sets up a simple Spotify clone demo and explains the basic components and structure of the project.

02:05 - Implementing a Basic Suspense Component  

The host creates a basic Suspense component in Astro and explains how to handle children and fallback content using slots. The importance of hot promises in JavaScript is discussed, and the host demonstrates how to unblock rendering using promises.

04:37 - Bubbling Promises to Middleware  

The host explains how to bubble up promises from the Suspense component to middleware using Astro's locals. The concept of async generators and yielding responses is introduced, and the host implements a function to suspend promises and render chunks.

11:52 - Handling Multiple Suspense Boundaries  

The host demonstrates how to handle multiple Suspense boundaries and identifies a problem with the current implementation where the slowest promise blocks others. The host then refactors the code to create a custom stream and iterate over it using a for-await loop.

16:54 - Conclusion and Introducing SimpleStack Stream Library  

The host summarizes the key concepts covered in the video, including async generators, readable streams, and middleware. The host then introduces a library called SimpleStack Stream for Astro users who want to use Suspense in their projects and provides resources for further learning.

## Transcript

[00:00] All right, let's build React Suspense totally from scratch. This is going to get deep in the weeds of playing with middleware and request response

[00:09] handlers because we're going to implement pretty much React's entire runtime just to show you how Suspense works with server-side streaming.

[00:18] So we're going to be using Astro for this example, not because we need a meta framework, but because we want a simple HTML templating language to work with and create our components.

[00:28] You can see in this layout, for example, it's just HTML all the way down. And we'll use this to template out the rest of our app.

[00:35] We're also going to be using the same albums demo from the React server components from scratch video.

[00:40] If you haven't seen that, definitely worth a watch. But we've recreated that just with plain HTML and Astro so we can really understand Suspense.

[00:49] And if I pop open our dev server, we can see this is a pretty simple demo indeed. Just a blank page and some metadata applied.

[00:56] So let's add a little bit of content that we can work with. Inside of here, I'll add a heading with Spotify, since we're building out Spotify clone and

[01:05] also our albums component. If we click into the source here, you can see it just reaches out to a database the

[01:12] same way you would in a React server component and renders all the albums to a list using some simple JSX and tailwind.

[01:20] Head back to our browser and you can see all of those albums appear with a little clicky button using React.

[01:25] But if we refresh, you can see it's not really the best user experience. It does have in order HTML streaming, so it'll send whatever HTML it can, like the heading.

[01:35] But while you're waiting for the albums, you don't really have a loading indicator or anything else on the page.

[01:40] It's blocked until that database request resolves. And this is the kind of place where you probably want to unblock that with Suspense.

[01:48] And you know, if you were in React, you would just import Suspense at the top and sandwich our albums inside.

[01:54] But we're not in React. We have to implement our own Suspense component.

[01:58] So let's go ahead and do that. I'm going to add a Suspense.astro inside of this guy.

[02:05] And we're going to render out the children straight away, just to make sure that everything is working.

[02:10] So in Astro, you use slots in order to render children. This is equivalent to that, you know, curly boy children that you would get inside of

[02:17] JSX. You can also render named slots using names.

[02:21] So we could say fallback is a name slot that's passed in here, and we can render that separately. Head back to our component.

[02:29] And you can see, as long as we import this from our components folder, we'll get our albums on the page, just as we did before.

[02:36] But of course, we're not doing any suspending. We're waiting for the children to resolve, and then blocking the page until they're ready.

[02:43] To unblock it, we have to avoid rendering that slot. Instead, we want to get the promise to resolve that child, so we can handle it separately,

[02:52] an imperative API. Luckily, Astro has a utility just for this.

[02:56] You can go over to list of slots and ask it to render a given slot. We'll call default in order to get the default children object.

[03:05] And this promises to return some HTML as soon as it's rendered. Now, when we kick this off right here, you don't actually have to call await in order

[03:14] for the slot to start rendering. If you didn't know, promises are hot in JavaScript, so they start right away, and you can track

[03:21] them later. Here's a little whiteboard explainer on why hot promises are so important.

[03:26] If you tried React server components, you know that you can await anywhere in the tree, which is really nice, but can also lead to data waterfalls.

[03:34] Let's say we're building the Spotify artist page, and we need to make some database calls in order to get the artist's name and concert info.

[03:42] We can just await the data, here it would fetch the name right away, then we can keep going down the tree.

[03:49] This is fine, but these queries are unrelated. Ideally, they would run in parallel, so you don't have to wait this amount of time before

[03:56] you can start the next one. One option might be to move this query inside the heading, but if you need that data and

[04:02] a whole bunch of components, you're going to start hammering your database. You only want to fetch once.

[04:07] So what if we just kept the fetch where it was, but removed the await? This is still going to make the database call, but in the background.

[04:15] That's because promises are hot. Okay, not like that, but it means that they run without you waiting on them.

[04:21] So now we can pass the promise from the database and await it inside the component. Let's run the example again.

[04:28] Now, because name was in parallel, this was cut off our response time. Really nice.

[04:34] All right, so we have that hot new promise. What do we do with it?

[04:37] We need to watch it and render it after the rest of the page is done. So in order to put that somewhere, we want to bubble this up to middleware.

[04:48] And middleware is added the same way you do in Next.js. You can create a middleware.ts file in your source directory, and you can hook into every

[04:56] request that's coming through your server-driven app. Inside of here, I'm going to start us off by handling only HTML requests.

[05:04] If it's an image asset or robots.txt, just call Next, do whatever you're going to do. But if you're a cool kid and you have some HTML, we're going to handle that separately

[05:14] down here. And we're going to do so using an async generator.

[05:19] Don't ask me how async generators work. I honestly don't know, but I know what they accomplish.

[05:24] They let you iterate over a set of elements, like in this copilot example, iterating over each bit of HTML in the body, and instead of buffering and handling it all in one go,

[05:37] you can actually yield individual responses as they're streaming through. So you don't have to iterate over the whole array.

[05:43] You can return things to the browser or stream them as soon as they're available. And that's what this yield is doing right here.

[05:51] It's going to yield that bit of HTML to your browser as the other ones are coming through. And you can return this using just a web standard response.

[06:00] Everyone doesn't know about it, so don't worry about the red squiggles. But we know what we're doing.

[06:04] So we're going to apply it right here. You can pass through an async iterable.

[06:10] And that's going to go over all of the body chunks and stream them into the browser one by one.

[06:15] And that's the behavior that we were getting before. First it streams the heading chunk.

[06:18] It yields that one. And then it yields the other HTML a little bit later.

[06:23] So that part is working. But you know, we want to add suspense boundaries to this.

[06:29] So how do we bubble up those promises that we have in our suspense component to our middleware? We need a communication channel from components to middleware.

[06:37] For that, we can rely on something called locals. This is a pretty simple concept in Astro.

[06:43] It's just a global variable that exists for the length of a given request. So when I kick off a request to the homepage, we spin up this fancy suspend function.

[06:53] So here's the TypeScript definition. It's going to be a function that takes in a promise, which is that slots.render from

[06:59] earlier, and it returns a little identifier. So we can put an ID on the fallback and then replace that fallback content later with the

[07:07] same ID. And as you can imagine, we have to implement suspend from our middleware and call it from

[07:14] our suspense component. For the implementation, you can reach up to locals by calling context.locals, and we're

[07:20] going to define that suspend function. This takes in our promise, and we're going to push it onto a list of promises that we

[07:28] want to resolve. I'm just going to call this guy pending, and we're going to make this a set because we

[07:34] want to truncate duplicates, and in a moment, it's going to make a lot more sense to use set so we can look up promises later.

[07:40] We're kind of setting ourselves up for success. Dad jokes.

[07:44] So in order to get an ID, we can rely on the size of our pending array. This ID is going to match up the fallback with the actual content.

[07:53] Then we can push our promise onto pending and return the ID back to the suspense component so it can render everything.

[08:00] If we add over to suspense, we can access locals the same way. Locals now on the astroglobal, and we can call suspend child.

[08:08] Kind of sounds like they did something bad in school, suspend the child. But this is going to lift up our promise so we can access it from our middleware and render

[08:17] out all the chunks. So with this set up, now we have our array of pending promises, and we want to loop over

[08:24] those, yield those chunks. So we're going to create a simple for loop here where we access all the promises on pending.

[08:31] And yeah, co-pilot, we could just yield all of the promises, but this would just take all those suspended components and render them at the bottom of the page, underneath

[08:41] the footer and everything else. We need a little bit more control.

[08:44] We needed to actually insert where the fallback is, and we're going to do that with a tiny bit of client side JavaScript.

[08:50] So instead of yielding right away, we're going to yield a template tag. So I'm going to use the template element.

[08:58] This is a way to sort of shrink wrap a bunch of HTML so you can render it separately, however you want to in the browser.

[09:05] And yeah, we're going to await the promise, plop it in there. We'll also put an identifier on this guy so we can match it up with that fallback from

[09:12] earlier. Put a few quotes around there, and in order to get the ID, we're just going to use the

[09:17] array index. Little hot trick.

[09:20] First off, you can do this to turn a set into an array, and you can also call dot entries in order to turn an array into an object where all the keys are just the IDs.

[09:30] So if we do a little destructuring here, the first entry will be our number, the index, and then the second one will be our value, the promise.

[09:38] So there we go. Now we have our ID, promise.

[09:41] Last thing we need is a script tag in order to put that template where it belongs. We're going to use an immediately invoked function for this, otherwise known as an iffy.

[09:52] This is just a way to make sure if we declare some variables inside of here, they don't conflict if we have multiple script tags on the page.

[09:59] For example, we want to create a template variable, and this is going to be a query selector in order to grab that template out of the document.

[10:07] And our fallback is also going to be a query selector. This is going to be for the fallback element that we mentioned earlier.

[10:15] We should also go ahead and wire up that fallback element while we're thinking about it. So inside of here, we're just rendering the fallback content straight away, and we're

[10:24] not actually wrapping it with an identifier. There's no way to find the fallback as we have it set up right now.

[10:29] So let's add a little div to the top of this guy. It's going to have data fallback that the script is relying on, and it's going to receive

[10:38] an ID as well. We'll wrap that around the slot, and we'll access the ID from where we called suspend.

[10:45] Lastly, I'm going to add just a little bit of styling to this guy, display contents. This is a little hack to make sure if you're using Flexbox or Grid or just Border, whatever

[10:57] you're doing in CSS, don't use the div styling. Instead rely on the children.

[11:03] That way we don't get awkward padding and line heights unexpectedly. So with all of that set up, we can head back over here.

[11:10] Now the fallback should exist in the document. And all we have to do is say fallback replace with the templates content.

[11:18] There we go. Lastly, let's make sure there's some fallback content to show.

[11:23] Normally in React you would probably pass a fallback property, but in Astral we rely on slots, which is a little bit more like view or svelte if you've ever used those.

[11:32] So we're going to call it fallback right here, and that's going to pass through a loading albums element.

[11:37] So if we check it out in our browser now, we see loading albums appear right away. And then it's going to replace that content using a little document query selector with

[11:48] all of our albums. Pretty nice and still interactive.

[11:52] Now this is a very simple approach to implementing suspense, but not totally satisfied. Let me show you why.

[12:00] If we head over to our homepage, maybe we have multiple suspense boundaries that we want to handle.

[12:07] For example, maybe we want to fetch each album by an ID. I'll import this ready-made component right here.

[12:14] If we head into this guy, you can see it's just fetching from the database that individual album by its ID and rendering the same sort of list item.

[12:23] And as you can imagine, it's going to load in our albums one after the other. So whenever they're available, it should hot swap the appropriate element.

[12:31] Looks like it's working fine here, but what if we reordered this to the slowest one is the first on the page?

[12:37] We noticed that Lady Gaga came in last, so let's put her first this time. And you can see now, we're getting a much longer loading state, and then they all come

[12:46] in at the same time. That's because the way we set this up, the slowest promise is going to block all of the

[12:52] other ones on the page, depending on how high up they are. And it's pretty easy to see why if we take a look at this for loop here.

[13:00] Inside of this iterable, we're awaiting the promise, which means, you know, if the first element in that array takes a long time, we're going to wait for that long promise to resolve

[13:10] before we even get to the second or third element. So in this example here, it's going to block everything else on the page.

[13:18] That might be the experience you want and react as an API for that called suspense list. But in our case, we want these to be unblocked.

[13:26] No matter where they are in the page, it should load the content right away. Layout shift, be danged, it doesn't matter.

[13:33] So let's go ahead and implement that. We're not going to do a traditional for loop.

[13:38] We're instead going to create our own stream. We've been talking about streams a lot, but we've never actually made one ourselves.

[13:46] This is a web standard, so you can just reach for readable stream without an import. And it has one important method called start.

[13:54] This gives you a controller that lets you enqueue important elements onto the stream. So every time a promise resolves, for example, enqueue that bit of HTML onto the stream to

[14:06] send off to the browser. And in order to enqueue that, I'm actually going to hoist the controller to a top level

[14:12] variable so we can access it from our suspense function. So I have a little snippet right here.

[14:18] Readable stream default controller. Very fun type name.

[14:22] We're going to hoist that up, just calling controller equals controller. And just to show you what this guy is going to do, this is how we'll replace our for loop.

[14:31] So until now, we waited for all the pending promises to exist, then go through them in one go.

[14:37] Now we're going to iterate over a stream. And you might be surprised.

[14:42] Wait, you can put a for loop on a stream? Isn't a stream like this infinite sort of thing?

[14:47] In a way it is. But a stream, you can think of like an infinite list that you can iterate over whenever there's

[14:52] new elements. And as long as you put for a wait at the front, it's going to wait for a new element to exist

[14:59] on the stream with that enqueue method. So in this example, it's going to do nothing for a while.

[15:06] And then once we've enqueued the first promise, it's going to say, oh, new element. Let me iterate to that one and yield a new template to the browser.

[15:15] So you can think of streams like an infinite array that we're allowed to play with. So let's wire up the actual enqueuing mechanism.

[15:23] Inside of suspend, we're going to keep doing what we did before with the ID and the pending list.

[15:29] But we're also going to wire up the promise resolver. So we're going to await that promise, and we're going to grab the chunk of HTML.

[15:36] If you've ever worked with bundlers, you know that chunk is a pretty common word. It's not the most pretty, but it gets the job done.

[15:43] So inside of here, we can remove the promise from our list of pending promises, and we can enqueue that promise onto the controller.

[15:52] And lastly, we do need a bit of a base case, because remember, this is an infinite array, and we need to close that stream as soon as all the promises have been resolved.

[16:02] So check that pending size is zero, and when it is, go ahead and close that stream so the loading bar in your browser disappears.

[16:08] With all that wired up, we just need a couple types in order to make this feel nice. You noticed suspended chunk was up here.

[16:15] So the thing that we're enqueuing is a tuple. We have suspended chunk, and the first one is going to be the ID, which is a number,

[16:23] and the next one is going to be a chunk, which is a stream. If you didn't know, you can add little labels to your tuples in TypeScript.

[16:29] Really nice advanced use case, if you're ever into that. But you can see here, we're just enqueuing that as an array, and then destructuring it

[16:37] down here. But we can go ahead and change this guy to chunk, and remove the await.

[16:43] Because remember, we've already waited for it to happen. Once we've enqueued, that thing is ready to send to the browser.

[16:49] So inside of here, chunk is just a string that's ready to send off as a template and a script tag.

[16:54] Now, if we head to our browser again, you can see, oh, look at that. It's going to send them in whatever order that they resolve.

[17:02] Because we're enqueuing things, as soon as they're ready, it'll just send over the template tags when it's available.

[17:08] So post comes in second, since it was the fastest, then the third, then the first. All right.

[17:13] So that really is suspense from scratch. We learned a lot of crazy web APIs.

[17:20] We checked out function generators, which you may have never seen before. We learned what yield does.

[17:25] We learned about for await, and how you can use it on a readable stream by creating our own stream controller.

[17:32] And we also got our hands dirty with some middleware. Really nice set of APIs here.

[17:37] So, if you wanted to play with this yourself, I actually bundled this up into a library called SimpleStack Stream.

[17:45] So if you're an Astro user, and you've been wanting to use suspense, well, this is the library for you.

[17:49] You can import suspense into any Astro component and use it to suspend content with a fallback. And this covers some more edge cases than we could actually get into this video.

[18:00] We're also thinking about how suspense list might work, which gets even more complicated. If any of that interests you, you can head over to our Discord, where we're working on

[18:08] this stuff actively. And you can also access the source code, of course.

[18:12] So I hope that was really helpful. Be sure to like and subscribe.

[18:15] I do a lot of content about React and the web in general. So if that's your bag, I will see you in the next video.

