import Header from "./components/Header";
import Hero from './components/Hero'


import Info from './components/Info'
function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <main className=" relative min-w-full min-h-screen">
      <Info />
      <div className='w-full h-64 bg-black'></div>
      </main>
    </>
  );
}

export default Home;



