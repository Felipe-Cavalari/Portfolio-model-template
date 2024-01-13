'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'
import TAB_DATA from './TabData'




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
                className='rounded-xl pb-8' 
                src='/Python no pc gerado por IA.jpeg'
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