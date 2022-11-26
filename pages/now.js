import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Now() {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col space-y-2 pt-6 pb-8 pr-8 md:space-y-5">
            <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
              Samad Ahmed
            </h1>
            <h2 className="mb-4 text-black dark:text-white">
              Software Engineer at{' '}
              <span className="font-semibold">
                Solaris Oilfield Infrastructure
              </span>
            </h2>
            <p className="mb-16 text-gray-500 dark:text-gray-400">
              Software engineer and indie hacker building next-generation
              developer tools and products.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
