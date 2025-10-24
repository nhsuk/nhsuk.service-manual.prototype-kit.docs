import fs from 'node:fs/promises'
import process from 'node:process'

import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    footer: {
      meta: {
        items: [
          {
            text: 'About',
            href: '/about'
          },
          {
            text: 'Support',
            href: '/support'
          },
          {
            text: 'Updates',
            href: '/updates'
          },
          {
            text: 'Page templates',
            href: '/page-templates'
          },
          {
            text: 'Sitemap',
            href: '/sitemap'
          },
          {
            text: 'NHS prototype kit on GitHub',
            href: 'https://github.com/nhsuk/nhsuk-prototype-kit'
          }
        ]
      }
    },
    header: {
      service: {
        text: 'Prototype kit',
        href: '/'
      },
      navigation: {
        items: [
          {
            text: 'Get started',
            href: '/install'
          },
          {
            text: 'Guides',
            href: '/guides'
          },
          {
            text: 'Contribute',
            href: '/contribute'
          },
          {
            text: 'Support',
            href: '/support'
          }
        ]
      },
      search: true
    },
    opengraphImageUrl:
      'https://prototype-kit.service-manual.nhs.uk/assets/images/nhs-prototype-kit-opengraph.png',
    stylesheets: ['/assets/application.css'],
    templates: {
      searchIndex: true
    },
    titleSuffix: 'NHS prototype kit',
    url:
      process.env.GITHUB_ACTIONS &&
      'https://prototype-kit.service-manual.nhs.uk'
  })

  // Add global data
  eleventyConfig.addGlobalData(
    'downloadUrl',
    `https://github.com/nhsuk/nhsuk-prototype-kit/archive/refs/tags/v7.1.0.zip`
  )

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/assets/images')

  // Add shortcode for action link component
  eleventyConfig.addNunjucksShortcode('actionLink', function (params) {
    return `<p><a class="nhsuk-action-link nhsuk-u-margin-bottom-2" href="${params.href}">
  <svg class="nhsuk-icon nhsuk-icon--arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-10 9h11.7l-4-4a1 1 0 0 1 1.5-1.4l5.6 5.7a1 1 0 0 1 0 1.4l-5.6 5.7a1 1 0 0 1-1.5 0 1 1 0 0 1 0-1.4l4-4H2A10 10 0 1 0 12 2z" />
  </svg>
  <span class="nhsuk-action-link__text">${params.text}</span>
</a></p>\n\n`
  })

  // Add shortcode for action link component
  eleventyConfig.addPairedNunjucksShortcode('list', function (content, params) {
    const iconPath =
      params.type === 'tick'
        ? 'M11.4 18.8a2 2 0 0 1-2.7.1h-.1L4 14.1a1.5 1.5 0 0 1 2.1-2L10 16l8.1-8.1a1.5 1.5 0 1 1 2.2 2l-8.9 9Z'
        : 'M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z'
    const icon = `<svg class="nhsuk-icon nhsuk-icon--${params.type}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true"><path d="${iconPath}"/></svg>`

    const { markdown } = eleventyConfig.nunjucks.filters

    let html = markdown(content)
    html = html.replace('nhsuk-list', `nhsuk-list nhsuk-list--${params.type}`)
    html = html.replaceAll('<li>', `<li>${icon}`)

    return `<div class="nhsuk-do-dont-list">
  <h3 class="nhsuk-do-dont-list__label">${params.title}</h3>
  ${html}
</div>\n\n`
  })

  // Reset contents of output directory before each build
  eleventyConfig.on('eleventy.before', async ({ directories, runMode }) => {
    if (runMode === 'build') {
      await fs.rm(directories.output, {
        force: true,
        recursive: true
      })
    }
  })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: process.env.GITHUB_ACTIONS
      ? '/nhsuk.service-manual.prototype-kit.docs/'
      : '/',
    dir: {
      input: 'app'
    }
  }
}
