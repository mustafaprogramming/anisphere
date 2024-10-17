import SecondHeader from '../components/SecondHeader'
import Footer from '../components/Footer'
export const dynamic = 'force-dynamic';

const layout = ({children}) => {
  return (
    <main className="w-full bg-orange-950">
      <section className="h-screen overflow-y-scroll mx-auto max-w-fit ">
      <SecondHeader />
      {children}
      <Footer />
      </section>
    </main>
  )
}

export default layout