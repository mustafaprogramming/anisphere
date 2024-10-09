import SecondHeader from '../components/SecondHeader'
const layout = ({children}) => {
  return (
    <main className="w-full bg-orange-950  min-h-screen overflow-hidden">
     <SecondHeader />
     {children}
    </main>
  )
}

export default layout
