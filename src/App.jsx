import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import Stats from './Component/Stats/Stats';
import { Suspense } from 'react';
import AllCard from './Component/AllCards/AllCard';
import Steps from './Component/Steps/Steps';
import Pricing from './Component/Pricing/Pricing';
import Workflow from './Component/Workflow/Workflow';
import Footer from './Component/Footer/Footer';


const fetchTools = async() => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const toolsPromise = fetchTools();
  // console.log(toolsPromise)

  return (
    <>
      <Navbar/>
      <Banner/>
      <Stats/>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AllCard toolsPromise={toolsPromise}/>
      </Suspense>
      <Steps/>
      <Pricing/>
      <Workflow/>
      <Footer/>
      
    </>
  )
}

export default App
