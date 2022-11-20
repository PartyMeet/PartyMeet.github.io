import React from "react"
import PhoneImg from '../assets/img/logo_phone.png'


export function About(){
    return(
        <div className="container about">
            {/* Innowacyjność */}
            <section className="bg-white w-screen">
                <h1 className="parallax-item font-bold text-9xl relative text-gray-200" data-speed='3'>INNOWACJE</h1>
                <h2 className="font-thin relative text-6xl text-[#161616]">Innowacje</h2>
                <div className="flex md:flex-row flex-col relative section-box">
                    <div className="m-10">
                        <img className="fade" src={PhoneImg} />
                    </div>
                    <div className="p-6 md:p-0 md:ml-10 w-screen text-center md:w-72 md:text-left text-[#161616] text-2xl font-light">
                        <p className="fade" direction="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                        </p> 
                    </div>
                </div>
            </section>

            <section className="w-screen"></section>

            <section className="parallax-item w-screen h-screen" data-speed='-10'>
                <h2 className="font-thin relative text-5xl text-[#161616] fade" direction="left">Zarabiaj na imprezach</h2>
                
            </section>
        </div>

    )
}