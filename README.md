# bootcamp-shopping-cart

A basic gasket app

## Quickstart

## References

Slack: `#bootcamp2021` 

## Setup - Terrance

- Install Gasket [ https://github.com/godaddy/gasket](https://github.com/godaddy/gasket/blob/master/docs/quick-start.md)
- Commit initial code to a directory under `Teams` with your team name.


## Gasket / Next.js

How do you build a web application? At the very simplest level, a webapp responds to a request from a client with some data. If you want the content to be viewable in a web browser, it will probably be some combination of HTML/CSS/Javascript files. One way to do this is to simply write HTML, put it on a server, and configure that server to return that file - simple! As you begin to build bigger websites with more complex functionality, though, you will likely find that the simple approach is limiting - that's where frameworks like Gasket and NextJS come in!

### What is a framework?
Web frameworks are collections of code that automate and provide common solutions to many problems that you will need to solve to build a web application. Their features typically include but are certainly not limited to:
- Templating and code reuse: Sharing layouts and inserting dynamic content into pages
- Authentication and session management: Creating accounts and logging in securely.
- Routing: Mapping URLs to code handlers
- File bundling and optimization
- Configuration management

> Aside: What is the difference between a library and a framework? Both are collections of code written bundled separately and included in your application. Put simply: Your code invokes library code, and framework code invokes your code!

### Next.js and Gasket
[Next.js](https://nextjs.org/) is a Javascript web application framework designed to help you create performant React applications. It has a ton of powerful features, but don't be overwhelmed (what the heck is `Client-side routing with optimized prefetching`??) - you don't have to know much to get up and running!

[Gasket](https://gasket.dev/#/) takes frameworks to another level: it's a framework for frameworks!

![](https://i.imgflip.com/5fj4oj.jpg)

Created and open-sourced at GoDaddy, Gasket lets us create standard templates for and bundle features for different types of applications. Want to build an API? There's a Gasket preset for that, with support for GoDaddy authentication and API standards already built in. Building a full-stack app? There's a preset for that, with all of our standard UX goodness built in.

### Framework skeleton
Alright, enough talk, let's look at some code. After creating a new Gasket app with the Next.js preset, we get a few key things:
- Some config files that we'll ignore for now (`gasket.config.js`, `package.json`, `jest.config.js`)
- The components directory, with one component: [`head.js`](./components/head.js) 
- The pages directory, with 3 files:
  - [`_app.js`](./pages/_app.js)
  - [`_document.js`](./pages/_document.js)
  - [`index.js`](./pages/index.js)

We'll talk more about pages and components in a moment, but I want to make a couple of brief notes on these:
- `head.js` is a simple React component that encapsulates what we'd put in the `<head>` element on every page. This is a great example of how web frameworks are a big boost over writing out pages by hand - we can just re-use that component everywhere and inject the variable values that we need!
- In Nextjs, files in the `pages/` directory map to route names, with `index.js` being a special case that routes to `/`. Visit `http://localhost:8080` to view the page, and edit the text and save the file to see it reload in real time!
- If you want global css styles, import them into [`_app.js`](./pages/_app.js).

One last thing to remember - it's ok to not understand everything that's going on in these generated files! One of the most important skills to learn as a web developer is the ability to accept some "magic" and focus your attention where it really matters. There will always be time to learn about features in-depth later when you need to use them.

## Material UI - Terrance
// intro to material ui 
// import / export / named imports
- npm install @material-ui/core

## Pages
You may remember having to map URL routes to code handlers when writing your APIs in the Falcon framework with code like this:
```python
api.add_route('/v1/products', Products())
api.add_route('/v1/products/{product_id:int}', Product())
```

For UI pages in Next.js, the framework is even more opinionated: each file in the `pages/` that exports a React component automatically gets its own route. We discussed the special case of `pages/index.js` already, which is mapped to the root route `/`. New files will get pages that correspond to their name, and you can create folder structures to nest pages. For example:
- `pages/about.js` will map to `/about`
- `/pages/blog/posts.js` will map to `/blog/posts`
- `/pages/blog/posts/[id].js` will create a dynamic route for `/blog/posts/{id}`. We won't be discussing dynamic Next.js routing today, but you can check out the docs for more information: https://nextjs.org/docs/routing/dynamic-routes

Remember the products API you created? Let's create a page to browse products at the `/shop` route. We don't have any components to include yet, so for now we'll just add a title (`"My shop"`) and a link to another page, the cart page. The Next.js [Link component](https://nextjs.org/learn/basics/navigate-between-pages/link-component) works a lot like an `<a>` tag, but with some framework magic sprinkled in.

Here's the full page code that you should add to `pages/shop.js`:

```javascript
/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import Link from 'next/link';

import { Container, Typography } from '@material-ui/core'

export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <div>
      <Typography variant="h3">My Shop</Typography>   
    </div>
    <div>
      <Link href="/cart">
        <a>View cart</a>
      </Link>
    </div>
  </Container>
);

export default ShopPage;
```

Check it out at `http://localhost:8080/shop`. You'll notice that clicking on the "View cart" link leads to an error page - let's fix that! Create a `cart.js` page similar to this one with a different title and a link back to the shop page.

Further reading:
- Next.js pages tutorial: https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs
- Next.js pages docs: https://nextjs.org/docs/basic-features/pages

## Components - Terrance

//small intro to react components, props, propTypes, etc

// Suggest list of starter components,
ShoppingList
ShoppingItem
CartList
CartItem

// Walk through creating
ShoppingList
ShoppingItem

## Tips - Jacob

// examples of fetch, useState, async await, etc

Gasket: https://github.com/godaddy/gasket
- Gasket Plugins:  https://gasket.dev/#/README

Confluence: https://confluence.godaddy.com/display/URBC/2020+Bootcamp+Home+Page



Training URLS: 
- Pluralsight
  - React Track: https://www.pluralsight.com/browse/software-development/react
  - React Fundamentals: https://www.pluralsight.com/courses/react-fundamentals-update
  - React Component App: https://www.pluralsight.com/projects/build-a-quiz-component-with-react
