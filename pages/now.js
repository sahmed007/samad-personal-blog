export default function Now() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Now
          </h1>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="prose max-w-none pb-8 text-sm dark:prose-dark xl:col-span-2">
            <p>
              This is a now page inspired by{' '}
              <span className="font-bold">Derek Sivers</span>.
            </p>
            <p>
              Updated on <span className="font-bold">Nov 28, 2022</span>
            </p>
            <h2 id="building">Building</h2>
            <p>
              Right now I'm building a SaaS product focused on making ordinary
              spaces into spaces that users can interact with. Currently in
              stealth mode.
            </p>
            <h2 id="working">Working</h2>
            <p>
              By day, I'm working as a software engineer at Solaris Oilfield
              Infrastructure. Specifically, working on setting up infrastructure
              and implementation for a data lakehouse system.
            </p>
            <h2 id="playing">Playing</h2>
            <p>
              Music is the best stress relief. I've been learning Julia Florida
              by Augustin Barrios Mangore on the classical side and
              experimenting with neo-soul riffs.
            </p>
            <h2 id="gaming">Gaming</h2>
            <p>
              I've beaten alot of games since I nabbed a PS5. Recently finished
              Ghost of Tsushima and The Last of Us. Now delivering packages in
              Death Stranding.
            </p>
            <h2 id="traveling">Traveling</h2>
            <p>
              Planned my next trip and I'm going hiking in Patagonia. Going to
              spend a couple of weeks across El Chaltén, El Calafate, and Buenos
              Aires.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
