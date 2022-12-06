import Document, { Head, Html, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        className="scroll-smooth"
      >
        <Head>
          <meta
            name="msapplication-TileColor"
            content="#000000"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#fff"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#000"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            href="/feed.xml"
          />
        </Head>
        <body className="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 bg-white pb-16 text-black antialiased dark:border-gray-700 dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
