'use client'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import {motion} from "framer-motion"


function HeroSection() {

  return (
    <motion.section 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    className='h-screen md:flex md:flex-col md:justify-center'>
        <motion.div className='grid grid-cols-1 sm:grid-cols-12 '>
           <div className="col-span-7 place-self-center  sm:text-left">
                <h1 className='text-white pb-6 text-4xl lg:text-5xl font-extrabold'>
                    
                    <span className='w-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700'> 
                      {/* O componente Type animation pode ser adicionado mais Frases e alterado o tempo que a escrita muda na animação */}
                      <TypeAnimation
                            sequence={[
                                1000,
                                'Olá sou Insira seu nome',
                                3000, 
                                'Seja bem vindo ao meu Portfolio',
                                3000,
                                
                                
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                      </span>
                </h1>

                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl pb-6'>
                  Descreva sua area de atuação aqui
                </p>

                <div className="flex flex-row ">
                    <button className='px-6 py-3 rounded-full mr-4 text-slate-200 bg-white hover:bg-slate-200 bg-gradient-to-tr from-blue-500 to-purple-700'><Link href={'#contato'}>Me contrate</Link></button>
                    <button className='px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white'><Link href={'/'} target="_blank">Download CV</Link></button>
                    {/* Adiciona o caminho do curriculo na pasta public e remova o comentário*/}
                </div>

           </div>

           
           <div className="col-span-5 place-self-center mt-16 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative ">
                    <Image 
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                    src='/Avatar.jpeg'
                    alt='Hero Image'
                    width={300}
                    height={300}
                />
               
                </div>
           </div>


        </motion.div>

        
    </motion.section>
  )
}

export default HeroSection