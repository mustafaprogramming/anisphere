import Header from "./components/Header";
import Hero from './components/Hero'
import Info from './components/Info'
export const dynamic = 'force-dynamic';

function DefaultPage() {
  return (
    <main >
      <Header/>
      <Hero />
      <section className=" relative min-w-full h-screen">
      <Info />
      <div className='bg-black xs:text-base text-sm text-orange-100 xl:px-28 px-5 -mt-2 pb-12'>
        <div>
          <span className="text-orange-500 font-bold xs:text-lg text-base">Share AniSphere</span>
          <p>to your friends</p>
        </div>
        <aside className="flex flex-col gap-4 xl:max-w-4xl ">
          <h1 className="md:text-3xl sm:text-2xl xs:text-xl text-lg mt-10 mb-4 font-bold">AniSphere - The best site to watch anime online for Free</h1>
          <p>Do you know that according to Google, the monthly search volume for anime related topics is up to over 1 Billion times? Anime is famous worldwide and it is no wonder we've seen a sharp rise in the number of free anime streaming sites.
          </p>
          <p>Just like free online movie streaming sites, anime watching sites are not created equally, some are better than the rest, so we've decided to build AniSphere to be one of the best free anime streaming site for all anime fans on the world.
          </p>
          <h2 className="md:text-2xl sm:text-xl xs:text-lg text-base mt-5 font-bold">1/ What is AniSphere?</h2>
          <p>AniSphere is a free site to watch anime and you can even download subbed or dubbed anime in ultra HD quality without any registration or payment. By having only one ads in all kinds, we are trying to make it the safest site for free anime.</p>
          <h2 className="md:text-2xl sm:text-xl xs:text-lg text-base mt-5 font-bold">2/ Is AniSphere safe?</h2>
          <p>Yes we are, we do have only one Ads to cover the server cost and we keep scanning the ads 24/7 to make sure all are clean, If you find any ads that is suspicious, please forward us the info and we will remove it.</p>
          <h2 className="md:text-2xl sm:text-xl xs:text-lg text-base mt-5 font-bold">3/ So what make AniSphere the best site to watch anime free online?</h2>
          <div>Before building AniSphere, we've checked many other free anime sites, and learnt from them. We only keep the good things and remove all the bad things from all the competitors, to put it in our AniSphere website. Let's see how we're so confident about being the best site for anime streaming:
            <ul className="list-disc py-4 px-5 gap-4 flex flex-col">
                <li><span className="font-bold mr-2">Safety:</span>We try our best to not having harmful ads on AniSphere.</li>
                <li><span className="font-bold mr-2">Content library:</span>Our main focus is anime. You can find here popular, classic, as well as current titles from all genres such as action, drama, kids, fantasy, horror, mystery, police, romance, school, comedy, music, game and many more. All these titles come with English subtitles or are dubbed in many languages.</li>
                <li><span className="font-bold mr-2">Quality/Resolution:</span> All titles are in excellent resolution, the best quality possible. AniSphere also has a quality setting function to make sure our users can enjoy streaming no matter how fast your Internet speed is. You can stream the anime at 360p if your Internet is being ridiculous, Or if it is good, you can go with 720p or even 1080p anime.</li>
                <li><span className="font-bold mr-2">Streaming experience:</span>Compared to other anime streaming sites, the loading speed at AniSphere is faster. Downloading is just as easy as streaming, you won't have any problem saving the videos to watch offline later.</li>
                <li><span className="font-bold mr-2">Updates:</span>We updates new titles as well as fulfill the requests on a daily basis so be warned, you will never run out of what to watch on AniSphere.</li>
                <li><span className="font-bold mr-2">User interface:</span>Our UI and UX makes it easy for anyone, no matter how old you are, how long have you been on the Internet. Literally, you can figure out how to navigate our site after a quick look. If you want to watch a specific title, search for it via the search box. If you want to look for suggestions, you can use the site's categories or simply scroll down for new releases.
                </li>
                <li><span className="font-bold mr-2">Device compatibility:</span>AniSphere works alright on both your mobile and desktop. However, we'd recommend you use your desktop for a smoother streaming experience.</li>
                <li><span className="font-bold mr-2">Customer care:</span>We are in active mode 24/7. You can always contact us for any help, query, or business-related inquiry. On our previous projects, we were known for our great customer service as we were quick to fix broken links or upload requested content.</li>
            </ul>
            So if you're looking for a trustworthy and safe site for your Anime streaming, let's give AniSphere a try. And if you like us, please help us to spread the words and do not forget to bookmark our site.

          <span className="flex my-4">Thank you!</span>
          </div>
        </aside>
        <div className="xl:mt-32 mt-20">© AniSphere. All rights reserved.</div>
      </div>
      </section>
    </main>
  );
}

export default DefaultPage;



