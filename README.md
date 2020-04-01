<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Portfolio
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the gatsby-starter-portfolio starter.

    ```shell
    # create a new Gatsby site using the gatsby-starter-portfolio
    gatsby new gatsby-starter-portfolio https://github.com/felixbec/gatsby-starter-portfolio
    ```

2.  **Before starting to develop.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-starter-portfolio/
    npm start
    ```

At this point you have the repository download with all the dependencies installed, but if you try to start by running `npm start` you are going to receive these messages in the console:
```
Unable to locate env file at location (.env.development)
```

```
Accessing your Contentful space failed.
Try setting GATSBY_CONTENTFUL_OFFLINE=true to see if we can serve from cache.

Endpoint not found. Check if host and spaceId settings are correct
```

Due to Contentful space not being setup, the portfolio will take the information. So the next step is create an empty space in [Contentful!](https://www.contentful.com/)

1.  **Configure Contentful.**

    Navigate into your new site’s directory and you'll see a `.env.development.example` file. Replace the `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` and remove the `.example` from the file.

    ```shell
    npm start
    ```

    _Note: Gatsby Starter Portfolio requires an `.env.production` for production build. Make sure you create a copy of `.env.development` and rename to `.env.production`. This allows users to have a Development Contentful Space and a Production Contentful Space._

2.  **Open the source code and start editing!**

    Your site is now running at `https://localhost:3000`!

    _Note: You'll also see a second link: _`https://localhost:3000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `gatsby-starter-portfolio` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierignore`**: This file tells prettier which files it should ignore.

5.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

6.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

7.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

8.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/felixbec/gatsby-starter-portfolio)

<!-- AUTO-GENERATED-CONTENT:END -->
