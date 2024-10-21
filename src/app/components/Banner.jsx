
const Banner = ({title,subtitle}) => {
  return (
    <div className="mx-auto my-32 rounded-lg 
    p-10 text-center text-neutral capitalize bg-base-200 bg-opacity-80" style={{width:'80vw',maxWidth:'400px'}}>
      {title&&<h2 className="text-4xl w-fit mx-auto">{title}
        <div className="w-full h-1 my-3 bg-accent rounded-sm"></div>
      </h2>}
      
      {subtitle && <p className="font-semibold">{subtitle}</p>}
    </div>
  )
}

export default Banner
