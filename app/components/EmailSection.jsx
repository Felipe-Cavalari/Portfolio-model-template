import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 py-24 gap-4 relative' id='contato'>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className='z-10'>
                <h5  className="text-xl font-bold text-white my-2">Vamos entrar em contato</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    Atualmente, estou em busca de novas oportunidades, minha caixa de entrada está sempre aberta. Se você tiver alguma pergunta ou apenas quiser dizer oi, 
                    farei o meu melhor para responder!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href={'github.com'} className='text-white text-2xl'>
                        <FaGithub  />
                    </Link>

                    <Link href={'linkedin.com'} className='text-white text-2xl'>
                        <FaLinkedin  />
                    </Link>
                </div>
            </div>
        <div>
            <form className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Seu email</label>
                <input type='email' id='email' required placeholder='john_doe@email.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
            
                <label htmlFor="assunto" className='text-white block mb-2 text-sm font-medium'>Assunto</label>
                <input type='text' id='assunto' placeholder='Adicione o titulo do assunto' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
           
                <label htmlFor="mensagem" className='text-white block mb-2 text-sm font-medium'>Mensagem</label>
                <textarea type='' id='mensagem' placeholder='De um resumo sobre o que gostaria de conversar' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
            
                <div className="mt-6">
                    <button type='submit' className='bg-gradient-to-tr from-blue-500 to-purple-700 w-full py-2.5 rounded-lg text-white px-5 font-medium'> Enviar Mensagem </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default EmailSection  