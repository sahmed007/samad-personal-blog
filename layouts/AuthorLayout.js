import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    email,
    location,
    linkedin,
    twitter,
    github,
  } = frontMatter

  return (
    <>
      <PageSEO
        title={`About - ${name}`}
        description={`About me - ${name}`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="flex flex-col items-center p-2 text-center md:flex-row">
            <Image
              src={avatar}
              alt="avatar"
              width="150px"
              height="150px"
              className="rounded-md"
            />
            <h3 className="pt-6 text-2xl font-bold leading-8 tracking-tight md:p-0">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{location}</div>
            <div className="flex space-x-3 p-4">
              <SocialIcon
                kind="mail"
                href={`mailto:${email}`}
              />
              <SocialIcon
                kind="github"
                href={github}
              />
              <SocialIcon
                kind="linkedin"
                href={linkedin}
              />
              <SocialIcon
                kind="twitter"
                href={twitter}
              />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>
              Tails Azimuth is a professor of atmospheric sciences at the
              Stanford AI Lab. His research interests includes complexity
              modelling of tailwinds, headwinds and crosswinds.
            </p>
            <p>
              Tails Azimuth is a professor of atmospheric sciences at the
              Stanford AI Lab.
            </p>
            <h2 id="timeline">Timeline</h2>
            <h3 id="2022">2022</h3>
            <ul>
              <li>x</li>
              <li>y</li>
              <li>z</li>
            </ul>
            <h3 id="2021">2021</h3>
            <ul>
              <li>x</li>
              <li>y</li>
              <li>z</li>
            </ul>
            <h3 id="2021">2020</h3>
            <ul>
              <li>x</li>
              <li>y</li>
              <li>z</li>
            </ul>
            <h3 id="2021">2019</h3>
            <ul>
              <li>x</li>
              <li>y</li>
              <li>z</li>
            </ul>
            <h3 id="1996">1996</h3>
            <ul>
              <li>x</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
