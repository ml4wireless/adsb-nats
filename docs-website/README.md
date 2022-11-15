# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

# Changes & Deploy 

1. changes md file and directory structure at `/docs-website` at **branch docs**.
2. use `yarn start` to test it locally
3. use `USE_SSH=true yarn deploy` to deploy it
4. push your change to **branch docs** as well.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
