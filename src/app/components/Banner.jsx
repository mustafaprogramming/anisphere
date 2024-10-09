
const Banner = ({title,subtitle}) => {
  return (
    <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 rounded-lg 
    p-10 text-center text-orange-100 capitalize" style={{width:'80vw',maxWidth:'400px',background:' linear-gradient(to right ,#c2400cd3 ,#431407d3)'}}>
      {title&&<h2 className="text-4xl w-fit mx-auto">{title}
        <div className="w-full h-1 my-3 bg-orange-300 rounded-sm"></div>
      </h2>}
      
      {subtitle && <p className="font-semibold">{subtitle}</p>}
    </div>
  )
}

export default Banner
