---
sidebar_position: 100
description: Docs for Docs
---

# Documentation Website

## Add a new page
1. Add a new markdown file under `/docs` (names doesn't matter but you should name it wisely).
2. Add the following text in the top of file.
```
---
sidebar_position: 5
description: Docs for Docs
---
```
3. Edit the markdown file. 
- The `#` header will be the title and also visible in the sidebar.
- The `##` and `###` will be rendered accordingly. 
4. The `sidebar_position` will be used to determine order of pages in the sidebar.

## Add a new folder
1. Add a new directory under `/docs`
2. Add a `_category_.json` under it and change the content accordingly.
```
{
  "label": "Software Defined Radio",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Documentation for setting up Software Defined Radio on your local device."
  }
}
```
3. Add some pages under it.

## Build & Deploy

### Local
1. run `npm run build` to build the static file.
2. run `npm run server` to serve it locally. With step 1 and 2, you will be able to see the latest page at your localhost (e.g. http://localhost:3000/adsb-nats/).

### Remote
1. run `npm run build` to build the static file.
2. Depending you github settings:
- If you are using SSH for your github, run `USE_SSH=true yarn deploy`. This will deploy the change to `gh-pages` branch and the changes will be reflected at [ml4wireless.github.io/adsb-nats](https://ml4wireless.github.io/adsb-nats/) shortly. 
- If you are using passwords for your github, run `GIT_USER=[YOURUSERNAME] yarn deploy` and input your password when prompted. This will deploy the change to `gh-pages` branch and the changes will be reflected at [ml4wireless.github.io/adsb-nats](https://ml4wireless.github.io/adsb-nats/) shortly. 

### Don't forget to push your changes to `docs` branch as well!

## References
For anything else, you can DM Victor on slack or try to find answers yourself at [Docusaurus Deployment](https://docusaurus.io/docs/deployment#deploying-to-github-pages).