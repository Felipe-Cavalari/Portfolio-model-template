'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'
// import { FaNodeJs, FaPython  } from "react-icons/fa";
// import { TbBrandNextjs } from "react-icons/tb";
// import { TbBrandDjango } from "react-icons/tb";
// import { FcLinux } from "react-icons/fc";
// import { IoLogoJavascript } from "react-icons/io5";
import TAB_DATA from './TabData'

// const TAB_DATA = [
//   {
//     title: 'Skills',
//     id: 'skills',
//     content: (
//       <ul className='border p-4 rounded-lg flex flex-col  items-start list-disc'>
        
//         <li className='flex flex-row items-center justify-center gap-2 mb-2'> <IoLogoJavascript className="text-[#efdc5c] text-base md:text-2xl"/> JavaScript</li>
//         <li className='flex flex-row items-center justify-center gap-2 mb-2'> <FaNodeJs className="text-[#5aa14b] text-base md:text-2xl"/>  Node.js</li>
//         <li className='flex flex-row items-center justify-center gap-2 mb-2'> <TbBrandNextjs className="text-white text-base md:text-2xl"/>Nextjs</li>
//         <li className='flex flex-row items-center justify-center gap-2 mb-2'> <FaPython className="text-[#477bab] text-base md:text-2xl"/> Python</li>
//         <li className='flex flex-row items-center justify-center gap-2 mb-2'> <TbBrandDjango className="text-[#3aac7b] text-base md:text-2xl"/>Django</li>
//         <li className='flex flex-row items-center justify-center gap-2 mb-2'> <FcLinux className="text-base md:text-2xl"/> Linux</li>
//       </ul>
//     )
//   },
//   {
//     title: 'Experiência',
//     id: 'experiencia',
//     content: (
//       <ul className='border rounded-lg p-4 flex flex-col  md:items-start'>
//         <li>
//           <div className=" py-2 px-2 rounded-lg flex flex-col gap-2 mb-2">
//             <h2 className='text-xl font-bold'>Desenvolvedor Freelancer</h2>
//             <span className='text-sm text-purple-800 font-semibold'>Sem data especifica</span>
//             <p className='text-sm text-slate-200'>Developed a tool that allows users of a group to buy limited time items faster than others by monitoring the websites using HTTP requests. More info here.</p>
//           </div>
//         </li>
//         <div className="w-full h-0.5 bg-purple-700 mb-4"></div>
//         <li>
//           <div className=" py-2 px-2 rounded-lg flex flex-col gap-2">
//             <h2 className='text-xl font-bold'>Software Developer | Ambush.IO</h2>
//             <span className='text-sm text-purple-800 font-semibold'>Aug 2021 - Apr 2022</span>
//             <p className='text-sm text-slate-200'>Used Python + Flask to develop the software for a SaaS with a team of developers. More info here..</p>
//           </div>
//         </li>
//       </ul>
//     )
//   },
  
  
// ]


const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [ isPending, startTransition] = useTransition();

  //Função para mudar as tabs de sobre mim
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='' id='sobre_mim'>
        <div className="text-white">
            <div className="md:grid md:grid-cols-2 gap-9 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
              <Image
                className='rounded pb-8' 
                src='/about-image.png'
                width={500}
                height={500}
                alt='about me image'
              />
              <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className='text-4xl font-bold text-white mb-4'>Sobre Mim</h2>
                <p className='text-base border p-6 rounded-lg font-mono' >
                Profissional especializado em desenvolvimento full stack, domino tecnologias como Next.js, Python e SQL para criar soluções robustas e eficientes. 
                Minha experiência abrange a concepção e implementação de sistemas inovadores, garantindo funcionalidades excepcionais e desempenho otimizado. 
                Comprometido com a entrega de projetos de alta qualidade , busco constantemente atualizações para permanecer na vanguarda das tendências tecnológicas
                </p>
                <div className="flex flex-row justify-start mt-8">
                  <TabButton
                    selectTab = {() => handleTabChange('skills')}
                    active = {tab === 'skills'}
                  >
                    {" "}
                    Conhecimentos{""}
                  </TabButton>

                  <TabButton
                    selectTab = {() => handleTabChange('experiencia')}
                    active = {tab === 'experiencia'}
                  >
                    {" "}
                    Experiência{" "}
                  </TabButton>

                
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection