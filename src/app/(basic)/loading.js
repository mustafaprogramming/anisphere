
const loading = () => {
  return (
    <aside className="bg-orange-700 loading mx-auto w-full max-w-96 min-h-40 rounded-lg flex relative my-28">
      <div className="spinner bg-orange-500" style={{'--order':'35%','--time':'0s'}}></div>
      <div className="spinner bg-orange-500" style={{'--order':'50%','--time':'0.4s'}}></div>
      <div className="spinner bg-orange-500" style={{'--order':'65%','--time':'0.8s'}}></div>
    </aside>
  )
}

export default loading
