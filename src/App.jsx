import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import Stats from './Component/Stats/Stats';
import { Suspense, useState } from 'react';
import AllCard from './Component/AllCards/AllCard';
import Steps from './Component/Steps/Steps';
import Pricing from './Component/Pricing/Pricing';
import Workflow from './Component/Workflow/Workflow';
import Footer from './Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';


const fetchTools = async() => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const toolsPromise = fetchTools();
  // console.log(toolsPromise)

  const [cart, setCart] = useState(0);

  return (
    <>
      <Navbar cart={cart}/>
      <Banner/>
      <Stats/>
      <Suspense fallback={<span className="loading loading-spinner loading-xl ml-170 w-1/16"></span>}>
      <AllCard toolsPromise={toolsPromise} setCart={setCart} cart={cart}/>
      </Suspense>
      <Steps/>
      <Pricing/>
      <Workflow/>
      <Footer/>


      {/* from react tostify */}
      <ToastContainer/>
      
    </>
  )
}

export default App
