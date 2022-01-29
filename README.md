# About
Final front-end project at university by subject "Network and Internet technologies".

This site consists of 7 pages and has the technology stack:
* Apache2
* Http, JSON, HTML
* CSS
* Javascript
* Ajax
* Package manager `pnpm`
* Task runner `gulp` with plugins and module bundler `webpack`

HOST: http://161.35.69.228/

# Installation
1. Clone project from GitHub `https://github.com/Kokov1ch/FrontFinalProject`
2. Install NodeJs `https://nodejs.org/en/`
3. Install pnpm `https://pnpm.io/installation`
4. Install dependencies from `package.json`:`pnpm add`
5. Run gulp-tasks in development mode: `pnpm run dev`
6. Run gulp-tasks in production mode: `pnpm run build`

# Architecture
- /.cache - cache directory
- /dist - build directory
- /src - source directory for pages and files
- /src/img - image files directory
- /src/svg - .svg files directory
- /src/js - .js files directory
- /src/css - .css files directory
- /src/html - .html templates directory
- /src/files - directory for other files
- /node_modules - contains all project dependencies
- /gulp - contains configs and tasks for `gulp`
- /gulp/config - contains configs path and plugins
- /gulp/tasks - contains .js tasks
- package.json - contains project configs
- !task.txt - contains study tasks for final project
- gulpfile.js - contains executable code for `gulp`
