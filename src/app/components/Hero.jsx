import Image from "next/image";

const Hero = () => {
  return (
    <section className="absolute w-full infoHeight
    overflow-hidden " >
      <aside className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-black " >
          <div className="fixed w-full h-full flex 
          bg-gradient-to-t from-primary via-transparent to-primary -z-50">
          <div className="fixed w-full h-full flex 
          bg-gradient-to-t from-black via-transparent   to-black -z-40"></div>
            
            <Image
            src="/sukuna.jpeg"
            alt="background"
            quality={100}
            priority
            width={500}
            height={500}  // Ensures the image fills the container without stretching
            className=" h-full mix-blend-overlay  md:block hidden contrast-150"
            style={{width:'33vw'}}
            />

            <Image
            src="/tanjiro.jpeg"
            alt="background"
            quality={100}
            width={500}
            priority
            height={500}  // Ensures the image fills the container without stretching
            className=" h-full mix-blend-overlay  md:block hidden contrast-150"
            style={{width:'33vw'}}

            />
            <Image
            src="/yorforger.jpeg"
            alt="background"
            quality={100}
            width={500}
            height={500}
            priority  // Ensures the image fills the container without stretching
            style={{width:'33vw'}}
            className=" h-full mix-blend-overlay  md:block hidden contrast-150"
            />

            <Image
            src="/sukuna.jpeg"
            alt="background"
            quality={100}
            fill
            sizes="100vw"  // Ensures the image fills the container without stretching
            className=" h-full w-screen mix-blend-overlay md:hidden sm:block hidden contrast-150"
            />
            
            <Image
            src="/tanjiro.jpeg"
            alt="background"
            quality={100}
            fill
            sizes="100vw"  // Ensures the image fills the container without stretching
            className="h-full w-screen mix-blend-overlay sm:hidden block contrast-150"
            />
          </div>
          
      </aside>
    </section>
  )
}

export default Hero
