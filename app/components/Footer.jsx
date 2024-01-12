import Image from 'next/image'
import React from 'react'

const Footer = () => {
  
  const data_atual = new Date();

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white ">
        <div className='container p-6 flex justify-around'>
            {/* <Image 
              src={'/'}
              height={60}
              width={60}
              alt='Seu Logo'
            /> */}
            <h1 className='text-4xl'>LOGO</h1>
            <p className='text-slate-600'> Seu nome | Todos os direitos reservados | {parseInt(data_atual.getFullYear())}</p>
        </div>
    </footer>
  )
}

export default Footer