import Header from "./components/Header";
import Hero from './components/Hero'
import Info from './components/Info'
export const dynamic = 'force-dynamic';

function DefaultPage() {
  return (
    <main>
      <Header/>
      <Hero />
      <section className=" relative min-w-full min-h-screen">
      <Info />
      <div className='w-full h-64 bg-black'></div>
      </section>
    </main>
  );
}

export default DefaultPage;



