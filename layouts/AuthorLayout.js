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
              width="140px"
              height="160px"
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
          <div className="prose max-w-none pt-8 pb-8 text-sm dark:prose-dark xl:col-span-2">
            <p>
              I am a software engineer and indie hacker focused on building
              products and tools for Web 3.0. I love talking about emerging
              architectures, next-generation tooling, data harvesting, swarms,
              and semantic spaces.
            </p>
            <p>
              I've used way too many tools, technologies, and languages that can
              be listed here. I like working with opinionated frameworks and
              strongly-typed, compiled languages such as{' '}
              <span className="font-bold">Go</span> and{' '}
              <span className="font-bold">Rust</span>.
            </p>
            <p>
              I'm pretty comfortable when it comes to{' '}
              <span className="font-bold">software design</span> (designing
              cloud architectures, setting up infrastructure) and{' '}
              <span className="font-bold">data ingestion</span> (event-driven
              processes, pipelines, efficient storage solutions).
            </p>
            <p>
              Life isn't linear. Up until this point, I have done a ton of
              exploration and made a ton of mistakes. Within those excursions, I
              have had some sprinkles of success and small wins.
            </p>
            <h2 id="timeline">Timeline</h2>
            <h3 id="2022">2022</h3>
            <ul>
              <li>
                Earned my{' '}
                <span className="font-bold">
                  AWS Certified Solutions Architect - Associate
                </span>{' '}
                certification
              </li>
              <li>
                Awarded{' '}
                <span className="font-bold">
                  1st Place at Incubate Galveston + the Ion Hackathon
                </span>{' '}
                for pitching an AR gaming application built with location-aware
                token dropping
              </li>
              <li>
                <span className="font-bold">
                  Dropped out of the MS Computer Science
                </span>{' '}
                program from Georgia Tech to pursue entrepreneurship
              </li>
            </ul>
            <h3 id="2021">2021</h3>
            <ul>
              <li>
                <span className="font-bold">Recharged my entire life</span> by
                spending majority of my time partying, traveling, and having as
                much fun as I can
              </li>
            </ul>
            <h3 id="2020">2020</h3>
            <ul>
              <li>
                Earned my{' '}
                <span className="font-bold">
                  AWS Certified Developer - Associate
                </span>{' '}
                certification
              </li>
              <li>
                Quit my comfy job to give a shot at freelancing and{' '}
                <span className="font-bold">failed miserably</span>
              </li>
            </ul>
            <h3 id="2019">2019</h3>
            <ul>
              <li>
                Made a tough decision to{' '}
                <span className="font-bold">drop my pursuit</span> of a
                mathematical research career in academia
              </li>
            </ul>
            <h3 id="2018">2018</h3>
            <ul>
              <li>
                Gave a talk about{' '}
                <span className="font-bold">
                  Dynamic Coverage in Sensor Networks
                </span>{' '}
                at Lousiana State University
              </li>
              <li>
                Awarded <span className="font-bold">TSU Hackathon Winner</span>{' '}
                for Roku's "Connecting People to People" Challenge
              </li>
            </ul>
            <h3 id="2017">2017</h3>
            <ul>
              <li>
                Gave a talk about{' '}
                <span className="font-bold">
                  Homological Criteria for Coverage in Sensor Networks
                </span>{' '}
                at the University of Houston
              </li>
            </ul>
            <h3 id="1996">1996</h3>
            <ul>
              <li>
                Started the exciting journey known as life in{' '}
                <span className="font-bold">Houston, TX</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
