# QUICK-FOLIO

A simple site that presents your open source work published on GitHub.  
Repositories automatically sorted from the latest you contributed to.  
Make it yours just by editing one word in the code: `username`!

Made with Next.js, Tailwind CSS, and using GitHub API.

## Installation

1. Clone the repository: `git clone https://github.com/narmanguebraun/quick-folio.git`
2. Navigate to the project directory: `cd quick-folio`
3. Install the dependencies: `npm install`

## View the App on the browser

1. Start the development server: `npm run dev`
2. Open your browser and visit `http://localhost:3000`.

## Get your own Quick Folio

1. In the `data` folder, open the `github.ts` file.
2. Replace the username value by your own GitHub username:

```
export const GITHUB_USERNAME = "username";
```

That's it!

## Technologies

This project is built with:

- [Next.js](https://nextjs.org/docs): A React framework for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/docs/installation): A highly customizable CSS framework.
- [TypeScript](https://www.typescriptlang.org/docs/): A typed superset of JavaScript that compiles to plain JavaScript.
- [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
