import React from "react"
import PhoneImg from '../assets/img/logo_phone.png'


export function About(){
    return(
        <div className="container about">
            {/* Innowacyjność */}
            <section className="bg-white w-screen h-screen">
                <h1 className="parallax-item font-bold text-9xl relative text-slate-100" data-speed='3'>INNOWACJE</h1>
                <h2 className="font-thin relative text-6xl text-[#161616]">Innowacje</h2>
                <div className="flex md:flex-row flex-col relative section-box">
                    <div className="m-10">
                        <img className="fade parallax-item" data-speed='8' src={PhoneImg} />
                    </div>
                    <div className="p-6 md:p-0 md:ml-10 w-screen text-center md:w-72 md:text-left text-[#161616] text-2xl font-light">
                        <p className="fade" direction="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                        </p> 
                    </div>
                </div>
            </section>
        </div>

    )
}