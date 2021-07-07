# bootcamp-shopping-cart

Slack: `#bootcamp2021` 

![](images/store.png)
![](images/cart.png)

## Preqrequities

- NodeJS v14 (or higher)
- Visual Studio Code
- Git

To get started, clone this repo locally:

```bash
git clone https://github.secureserver.net/txwilliams/bootcamp-shopping-cart.git
```

Then, let's make sure we have the BootCamp-API you worked on previously [running locally](https://github.secureserver.net/thoag/2021Bootcamp-API#run-locally).

## Getting Started

So how do you build a web application? At the very simplest level, a webapp responds to a request from a client with some data. If you want the content to be viewable in a web browser, it will probably be some combination of HTML/CSS/Javascript files. One way to do this is to simply write HTML, put it on a server, and configure that server to return that file - simple! As you begin to build bigger websites with more complex functionality, though, you will likely find that the simple approach is limiting - that's where frameworks like Gasket and NextJS come in!

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

To use Gasket, we would normally to install it into our project via NPM (Node Package Manager) via [these instructions](https://github.com/godaddy/gasket/blob/master/docs/quick-start.md). However, this repo already comes with gasket installed so no need to worry!

And speaking of libraries, let's install one called [Material UI](https://material-ui.com/). This is a Google-inspired opensource library that contains some basic react components we'll use to make our web app pretty. We'll go more in-depth into Material UI a little later on. For now though, let's just run this command:
```
npm install @material-ui/core
```

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

## Material UI

Ok, now that we have the basic pages setup lets circle back to back to Material UI. You might have noticed a few lines of code in ShopPage that [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) the "Container" and "Typography" components from Material UI

```js
// This is called a named import
import { Container, Typography } from '@material-ui/core'
```

Both `Container` and `Typography` are examples of reusable react components that the gracious and mysterious and opensource community have built. In react, reusability is core tenet and the main way we will encapsulate reusable frontend logic and HTML is via components. In fact, when building a large scale web-app, one of the first things you will need to identify is what components you will need to build, and which components you can reuse. 


![](https://hermesespinola.files.wordpress.com/2016/11/code-reuse.jpg?w=842)

Here's a couple candidates for re-use (via Material UI), but feel free to explore the docs to see the full list of generic components are available

Card
- https://material-ui.com/components/cards/
- https://material-ui.com/api/card/

Typography
- https://material-ui.com/components/typography/
- https://material-ui.com/api/typography/

Button
- https://material-ui.com/components/button/
- https://material-ui.com/api/button/

## Components

However, no web-app is able to rely purely on generic components. We'll also need to build some custom components specific to our use case. Since we're modeling a shopping cart, you could imagine the we need the following components:

1. ShopItem
2. ShopItemList
3. CartItem
4. Cart

Let's walk through an example and create a skeleton for `ShopItem.js` in the `/components` folder.

```js
import React from 'react';
import { Card, CardContent, CardActions } from '@material-ui/core'

function ShopItem({ /* insert props here */}) {
  
  const addToCart = () => {
     /* Insert logic here  */
  }

  return (
    <Card style={{height: "400px"}}>
      /* Insert Image Here */
    <CardContent>
      /* Insert Name, Description, Price Here */
    </CardContent>
      <CardActions>
        /* Insert AddToCart Button here */
        /* What should happen when you click the button? */
      </CardActions>
    </Card>
  );
}

export default ShoppingCard;
```

Now that we've got a ShopItem, we need to retrieve the list of products from your api and render the full list using your newly built component. To do this, let's create a `ShopItemList.js` in the `/components` folder. This component will reference `ShopItem`.


```js
import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'

function ShoppingItemList() {

  // this is the state we will use to hold the response from the api
  const [products, setProducts] = useState([]);
  const router = useRouter()

  useEffect(async () => {
    /* fetch list of products here */
    /* update product state with response */
  }, [])

  const handleAddToCart = async (product) => {
    /* add product to cart via api */
    /* redirect to the cart page */
  }

  return (
    <Grid container direction="row" spacing={1}>
       /* Add your ShoppingItem components here! */
       /* How should you iterate over the list of products?  */
       /* Hint: map() function for Arrays */
    </Grid>
  )
}
```


Now that we got you started, the rest is up to you! Your next steps should be finishing up the CartItem and Cart components. Reach out to a bootcamp trainer or take a peek at a working solution [here](https://github.secureserver.net/txwilliams/bootcamp-shopping-cart/tree/full-solution).

## Tips
### Async/await
Managing asynchronous code can be tricky to wrap your head around, but once you master it you will unlock tons of the cool stuff that client-side javascript can do.

First: what does async/asynchronous mean? Well, it's actually a negation of "synchronous" ("a-synchronous" == "not synchronous") so let's start there: Synchronous means that your code instructions are fully executed in the order that you write them. This is probably how you've written most programs! Something like:

```js
function square(n) {
  return n * n;
}

const x = 5;
const result = square(x);
console.log(result)
// 25
```

Each line will be executed in full and in order. First `x` is assigned to 5, then the function `square` is called with `x` as a parameter, `square` finishes and the result is stored in the `result` variable, and finally we print `result` to the console.

Asynchronous code (or async for short) lets you start running some code, continue doing other useful work, and come back and do something when that bit of code you started completes. Why would you want to do this? The most common case is that you want to do something that involves a lot of waiting around, like making an HTTP request to some API. These requests can take seconds, an eternity of waiting for a computer. Async code style lets you just define what you want to do when the operation completes, and the execution envioronment handles all the details of invoking the your handling code when the background portion is done.

In javascript, how you write async code has evolved over the years so you may see some different styles. One way to do it is to make use of the `async` and `await` keywords. When defining a function, you can specify that it is an async function by adding `async` to the declaration:

```js
async function square(n) {
  // I need to think for a while...
  sleep(1)
  // got it!
  return n * n;
}
```

This tells the javascript interpreter that the function is async and restricts how you can use it. Most importantly, it changes what the function returns! If you try to call `square` directly, it no longer returns a number:

```js
let result = square(5);
console.log(result)
// Promise { <state>: "fulfilled", <value>: 25 }
```

Instead of `25` we got a `Promise` object with some properties. We won't go too deeply into the details of what a `Promise` is here, but here are the key things to know:
- Promises are wrappers around some result value, which could be anything - a number, a string, an object.
- Promises have internal state managed by the javascript engine, and you can hook functions into these lifecycle changes - for example, when it is fulfilled.

The easiest way to obtain the result of an `Promise` (and by extention, `async` functions), is to use the `await` keyword.

### Fetch

### State

## Links

// examples of fetch, useState, async await, etc

Gasket: https://github.com/godaddy/gasket
- Gasket Plugins:  https://gasket.dev/#/README

Confluence: https://confluence.godaddy.com/display/URBC/2020+Bootcamp+Home+Page


Training URLS: 
- Pluralsight
  - React Track: https://www.pluralsight.com/browse/software-development/react
  - React Fundamentals: https://www.pluralsight.com/courses/react-fundamentals-update
  - React Component App: https://www.pluralsight.com/projects/build-a-quiz-component-with-react
