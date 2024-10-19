const loading = () => {
  return (
    <section className="loaderContainer">
      <div className='loading mx-auto w-full  max-w-xl min-h-40 rounded-lg flex relative '>
        <span
          className='spinner spinner1 bg-orange-500 xs:w-16 xxs:w-12 w-10 xs:h-16 xxs:h-12 h-10'></span>
        <span
          className='spinner spinner2 bg-orange-500 xs:w-16 xxs:w-12 w-10 xs:h-16 xxs:h-12 h-10'></span>
        <span
          className='spinner spinner3 bg-orange-500 xs:w-16 xxs:w-12 w-10 xs:h-16 xxs:h-12 h-10'></span>
      </div>
    </section>
  )
}

export default loading
