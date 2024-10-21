import Socials from './Socials'

const Footer = () => {
  return (
    <footer className="w-full mt-10 p-4 pb-10">
     <div className='flex xs:flex-row xs:items-center flex-col '>
      <h1 className="text-neutral text-3xl sm:text-4xl font-bold w-fit flex items-center mb-3">
       <span>Ani<span className="text-primary">Sphere</span></span>
      <span className="h-10 w-px opacity-50 bg-primary xs:flex hidden mx-5 my-3"></span>
      </h1>
      <Socials />
     </div>
      <span className="h-px w-full opacity-50 bg-primary flex my-5"></span>
      <div className="text-neutral text-sm opacity-70 lg:text-start text-center">
       <p>
        AniSphere does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
       </p>
       <span>© AniSphere.netlify.app. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
