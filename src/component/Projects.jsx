import { LinkIcon } from 'lucide-react'
import React from 'react'
import Card from '../component/card'
import img from '/hero-bg.jpg'

const Projects = () => {
  const project = [
        {
            url:"https://github.com/HeyAman63/Basic-Auth",
            title:"Authentication App",
            image:"https://www.smscountry.com/blog/wp-content/uploads/2023/04/MFA-or-Oauth-Which-Authentication-Method-Should-You-Use-For-Your-Software.jpg"
        },
        {
            url:"https://github.com/HeyAman63/Conference_LU1",
            title:"Raashee Conference Website",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQG345Q5FPPCnusBJXxgd1ZEtk1b47-cq3A&s"
        },
        {
            url:"https://github.com/HeyAman63/tic-tac-toe",
            title:"Tic Tac Toe",
            image:"https://t3.ftcdn.net/jpg/05/72/99/52/360_F_572995264_X14q5Zn60SaTgmqbxWLN5fwdxDNFjr63.jpg"
        },
        {
            url:"https://github.com/HeyAman63/Video-Player",
            title:"Video palyer",
            image:"https://media.istockphoto.com/id/1409431800/vector/video-player-interface-isolated-on-white-background-video-streaming-template-mockup-live.jpg?s=612x612&w=0&k=20&c=c4Ukls95CaoQhgYnKVFvdhcngAA6hEMAnORTWYPn4cY="
        }
    ]
  return (
    <div id='project' className="relative w-[80%] left-10 md:left-[20%]">
        <h2 className="mt-15 text-2xl font-bold tracking-widest border-b-3 border-blue-300 mb-10 inline-block ml-3">
          Projects
        </h2>
        <div className='flex flex-wrap justify-center'>
          
            {project.map((proj,index)=>(
              <div key={index} className=' mt-10 w-86 cursor-pointer md:ml-3 group transition duration-500 z-10'>
                <Card
                
                image={proj.image}
                title={proj.title}
                url={proj.url}
                />
              </div>
              
            ))}
          
          
        </div>
    </div>
  )
}

export default Projects