const siteMetadata = {
  title: 'Samad Ahmed Blog',
  author: 'Samad Ahmed',
  headerTitle: '@_samadahmed',
  description: 'A blog created with Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'samad@chamoylabs.com',
  github: 'https://github.com/sahmed007',
  twitter: 'https://twitter.com',
  linkedin: 'https://www.linkedin.com/in/samadahmed/',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    // plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    // provider: 'buttondown',
  },
  comment: {},
}

module.exports = siteMetadata
