
const Banner = ({title,subtitle}) => {
  return (
    <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-orange-950 bg-opacity-90 rounded-lg 
    p-10 text-center text-orange-100 capitalize" style={{width:'80vw',maxWidth:'400px'}}>
      <h2 className="text-4xl w-fit mx-auto">{title}
        <div className="w-full h-1 my-3 bg-orange-300 rounded-sm"></div>
      </h2>
      
      <p className="font-semibold">{subtitle}</p>
    </div>
  )
}

export default Banner
