
import Home from './pages/Home'
import { ArrowUpIcon } from 'lucide-react'
import About from "./component/About";
import Skill from "./component/Skill";
import Footer from "./component/Footer";
import Contacts from "./component/Contacts";
import { ToastContainer } from 'react-toastify';
import Projects from './component/Projects';
import ResumeViewer from './component/Resume.jsx'
import { Suspense } from 'react';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Home/>
      <About />
      <Skill />
      <Projects/>
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <ResumeViewer/>
      </Suspense>
      <Contacts/>
      <Footer/>
      <div 
      onClick={()=>scrollTo(0,0)}
      className="flex justify-center items-center h-10 w-10 bg-green-300 mb-5 mr-5 rounded-full cursor-pointer right-0 bottom-0 fixed">
        <ArrowUpIcon/>
      </div>
    </div>
  )
}

export default App