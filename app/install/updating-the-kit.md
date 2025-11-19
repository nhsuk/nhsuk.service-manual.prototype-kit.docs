---
title: Updating the kit
description: Use the latest version of the NHS prototype kit.
redirectFrom: /how-tos/updating-the-kit
---

Check which version of the kit you are currently using.

## Updating from version 8 and above

Look in your `package.json` file. If you have a line within the `dependencies` section which looks like this then you are on version 8 or above:

```json
  "nhsuk-prototype-kit": "8.0.0",
```

If you see this, you can update to the latest version by changing the version number and running `npm install` in your terminal to install the new version.

If you use GitHub, you may also get automatic pull requests opened by Dependabot which do this for you.

## Updating to version 8 from version 7 or below

If you are not yet using version 8 or above, follow these steps:

### 1. Edit the `package.json` file

Make these changes within the `dependencies` section:

Add this line:

* add `"nhsuk-prototype-kit": "8.0.0",`

Remove these lines (the version numbers may be different):

* `"body-parser": "^2.2.0",`
* `"client-sessions": "^0.8.0",`
* `"cookie-parser": "^1.4.7",`
* `"dotenv": "^17.2.2",`
* `"express-session": "^1.18.2",`
* `"lodash": "^4.17.21",`
* `"path": "^0.12.7",`
* ` "portscanner": "^2.2.0",`

Check the version number of `nhuk-frontend`. It should look like this:

```json
"nhsuk-frontend": "^10.1.0",
```

### 2. Delete these sub-folders within your prototype:

* `lib`
* `tests/lib`
* `docs` (if present)
* `middleware` (if present)

### 3. Edit your `app.js` file

Replace the entire contents of it with this:

```js
const { join } = require('node:path')
const { format: urlFormat } = require('node:url')

// External dependencies
const express = require('express')
const nunjucks = require('nunjucks')

const NHSPrototypeKit = require('nhsuk-prototype-kit')

// Local dependencies
const config = require('./app/config')
const locals = require('./app/locals')
const routes = require('./app/routes')
const sessionDataDefaults = require('./app/data/session-data-defaults')

// Set configuration variables
const port = parseInt(process.env.PORT || config.port, 10) || 2000

// Initialise applications
const app = express()

// Add variables that are available in all views
app.locals.asset_path = '/public/'
app.locals.serviceName = config.serviceName

// Nunjucks configuration for application
const appViews = [
join(__dirname, 'app/views/'),
join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk/components'),
join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk/macros'),
join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk'),
join(__dirname, 'node_modules/nhsuk-frontend/dist')
]

let nunjucksAppEnv = nunjucks.configure(appViews, {
express: app,
noCache: true
})

// Use public folder for static assets
app.use(express.static(join(__dirname, 'public')))

// Use assets from NHS frontend
app.use(
'/nhsuk-frontend',
express.static(join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk'))
)

NHSPrototypeKit.init({
serviceName: config.serviceName,
express: app,
nunjucks: nunjucksAppEnv,
routes: routes,
locals: locals,
sessionDataDefaults: sessionDataDefaults
})

// Run the application
app.listen(port)

if (
process.env.WATCH !== 'true' && // If the user isn’t running watch
process.env.NODE_ENV !== 'production' // and it’s not in production mode
) {
console.info(`Running at http://localhost:${port}/`)
console.info('')
console.warn(
   'Warning: It looks like you may have run the command `npm start` locally.'
)
console.warn('Press `Ctrl+C` and then run `npm run watch` instead')
}

module.exports = app
```

### 4. Update your `gulpfile.js` file

Replace the entire contents of it with this:

```js
const { join } = require('node:path')
const process = require('node:process')

// External dependencies
const browserSync = require('browser-sync')
const gulp = require('gulp')
const babel = require('gulp-babel')
const clean = require('gulp-clean')
const nodemon = require('gulp-nodemon')
const gulpSass = require('gulp-sass')
const { createProxyMiddleware } = require('http-proxy-middleware')
const PluginError = require('plugin-error')
const dartSass = require('sass-embedded')
const NHSPrototypeKit = require('nhsuk-prototype-kit')

// Local dependencies
const config = require('./app/config')


/**
* Add environment variables from .env file
* (Requires Node.js v20.12.0 or later)
*
* @see {@link https://nodejs.org/api/process.html#processloadenvfilepath}
*/
if ('loadEnvFile' in process) {
try {
   process.loadEnvFile()
} catch (error) {
   if (error.code === 'ENOENT') {
      // File not found - this is fine
   } else {
      // Some other error occurred
      throw error
   }
}
}

// Set configuration variables
const port = parseInt(process.env.PORT || config.port, 10) || 2000

// Delete all the files in /public build directory
function cleanPublic() {
return gulp.src('public', { allowEmpty: true }).pipe(clean())
}

// Set Sass compiler
const sass = gulpSass(dartSass)

// Compile SASS to CSS
function compileStyles() {
return gulp
   .src(['app/assets/sass/**/*.scss'], {
      sourcemaps: true
   })
   .pipe(
      sass({
      loadPaths: ['node_modules'],
      sourceMap: true,
      sourceMapIncludeSources: true
      }).on('error', (error) => {
      throw new PluginError('compileCSS', error.messageFormatted, {
         showProperties: false
      })
      })
   )
   .pipe(
      gulp.dest('public/css', {
      sourcemaps: '.'
      })
   )
}

// Compile JavaScript (with ES6 support)
function compileScripts() {
return gulp
   .src(['app/assets/javascript/**/*.js'], {
      sourcemaps: true
   })
   .pipe(babel())
   .pipe(
      gulp.dest('public/js', {
      sourcemaps: '.'
      })
   )
}

// Compile assets
function compileAssets() {
return gulp
   .src(
      [
      'app/assets/**/**/*.*',
      '!**/assets/**/**/*.js', // Don't copy JS files
      '!**/assets/**/**/*.scss' // Don't copy SCSS files
      ],
      { encoding: false }
   )
   .pipe(gulp.dest('public'))
}

// Start nodemon
async function startNodemon(done) {
let availablePort

try {
   availablePort = await findAvailablePort(port)
   if (!availablePort) {
      throw new Error(`Port ${port} in use`)
   }
} catch (error) {
   done(new PluginError('startNodemon', error))
   return
}

process.env.PORT = availablePort
process.env.WATCH = 'true'

const server = nodemon({
   script: 'app.js',
   stdout: true,
   ext: 'js json',
   watch: ['.env', 'app.js', 'app', 'lib'],
   ignore: ['app/assets', '**.test.*'],
   quiet: false
})

let starting = false

const onReady = () => {
   starting = false
   done()
}

server.on('start', () => {
   starting = true
   setTimeout(onReady)
})

server.on('stdout', (stdout) => {
   process.stdout.write(stdout)
   if (starting) {
      onReady()
   }
})
}

// Start browsersync
async function startBrowserSync(done) {
const proxyPort = parseInt(process.env.PORT, 10)

browserSync.init(
   {
      port: proxyPort + 1000,
      ui: false,
      files: ['app/views/**/*.*', 'lib/example-templates/**/*.*'],
      ghostMode: false,
      open: false,
      notify: true,
      watch: true,

      // Proxy to Node.js server
      middleware: createProxyMiddleware({
      changeOrigin: true,
      target: `http://localhost:${proxyPort}`
      }),

      // Serve static assets
      server: {
      baseDir: join(__dirname, 'public')
      }
   },
   done
)

gulp.watch('public/**/*.*').on('change', browserSync.reload)
}

// Watch for changes within assets/
function watch() {
gulp.watch('app/assets/sass/**/*.scss', compileStyles)
gulp.watch('app/assets/javascript/**/*.js', compileScripts)
gulp.watch('app/assets/**/**/*.*', compileAssets)
}

exports.watch = watch
exports.compileStyles = compileStyles
exports.compileScripts = compileScripts
exports.cleanPublic = cleanPublic

gulp.task(
'build',
gulp.series(cleanPublic, compileStyles, compileScripts, compileAssets)
)

gulp.task('default', gulp.series(startNodemon, startBrowserSync, watch))
```

### 5. Run `npm install` in your terminal


The install may take up to a minute.

While installing it may `WARN` about some items -- this is okay. As long as there are no `ERRORs` you can continue.

You should see a message like this:

```shell
added 1251 packages, and audited 1252 packages in 7s

180 packages are looking for funding
run `npm fund` for details

15 vulnerabilities (6 moderate, 9 high)

To address issues that do not require attention, run:
npm audit fix

To address all issues (including breaking changes), run:
npm audit fix --force

Run `npm audit` for details.
```

### 6. Start your local server

In your terminal, enter: <kbd>npm run watch</kbd>

After the kit has started, you should see a message telling you that the kit is running:

```shell
[18:58:50] Starting 'watch'...
[18:58:50] [nodemon] 2.0.22
[18:58:50] [nodemon] to restart at any time, enter `rs`
[18:58:50] [nodemon] watching path(s): *.*
[18:58:50] [nodemon] watching extensions: js
[18:58:50] [nodemon] starting `node app.js`
[Browsersync] Proxying: http://localhost:2000
[Browsersync] Access URLs:
----------------------------------
   Local: http://localhost:3000
External: http://192.168.1.94:3000
----------------------------------
[Browsersync] Watching files...
```

## Help and support

If you have any problems:

- ask a developer on your team (if you have one)
- email the service manual team at [england.service-manual.nhs.net](mailto:england.service-manual@nhs.net?subject=NHS%20prototype%20kit%20-%20Updating%20the%20kit)
- get in touch on the [NHS digital service manual #prototype-kit Slack channel](https://nhs-service-manual.slack.com/messages/CFYL2GDGW)
