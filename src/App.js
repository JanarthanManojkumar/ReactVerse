import react from 'react' 
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import {  Analytics } from './components/Analitics';
import { Newsletter } from './components/Newsletter';
import { Cards } from './components/Cards';
import { End } from './components/End';


function App() {
  return (
    <div className="bg-[#161A30] w-full h-screen">
     <Navbar/>
     <Hero/>
     <Analytics/>
     <Newsletter/>
     <Cards/>
     <End/>
     
    
    </div>
  );
}

export default App;
