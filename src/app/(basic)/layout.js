import SecondHeader from '../components/SecondHeader'
const layout = ({children}) => {
  return (
    <main className="w-full bg-gradient-to-t from-black via-orange-800 to-black min-h-screen overflow-hidden">
     <SecondHeader />
     {children}
    </main>
  )
}

export default layout
