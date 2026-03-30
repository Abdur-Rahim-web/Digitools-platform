import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import AllCard from './Component/AllCards/AllCard';
import { Suspense } from 'react';
import Steps from './Component/Steps/Steps';


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
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AllCard toolsPromise={toolsPromise}/>
      </Suspense>
      <Steps/>
      
    </>
  )
}

export default App
