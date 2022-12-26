import React from "react"
import PhoneImg from '../assets/img/logo_phone.png'
import HandImg from '../assets/img/hand2.png'


export function About(){
    return(
        <div className="container about">
            {/* Innowacyjność */}
            <section className="bg-white w-screen">
                <h1 className="parallax-item font-bold text-9xl relative text-gray-200" data-speed='3'>PARTYMEET</h1>

                <h2 className="fade relative text-6xl font-thin uppercase text-grey-700"direction="left">Plan.</h2>
                <h2 className="fade relative uppercase text-[#fb9330] text-6xl font-normal" direction="right">Meet.</h2>
                <h2 className="fade relative text-6xl font-thin uppercase text-grey-700" direction="left">Repeat.</h2>

                <div className="flex md:flex-row flex-col relative section-box">
                    <div className="p-6 md:mr-20 md:p-0 md:ml-10 w-screen text-center md:w-96 md:text-left text-[#161616] text-2xl font-light">
                        <p className="fade font-light" direction="left">
                        PartyMeet jest to firma, której zależy na dostarczaniu wszelakiej rozrywki swoim klientom na jak najwyższym poziomie. Szukasz towarzysza, który ma takie samo hobby jak Ty? Z nami jesteś w stanie zorganizować wiele więcej!    
                        </p>
                    </div>
                    <div className="m-10">
                        <img className="fade" src={PhoneImg} />
                    </div>
                </div>
            </section>
            <section className="w-screen"></section>

            <section className="w-screen mt-20 mb-20">
            <h1 className="parallax-item font-bold text-7xl relative text-gray-200" data-speed='5'>ZARABIAJ Z NAMI!</h1>
                <div className="flex flex-col relative section-box">
                    
                    <img src={HandImg} />
                    <div className="p-6 mt-12 md:p-0 md:ml-10 w-screen text-center md:w-96 md:text-left text-[#161616] text-2xl font-light">
                        <p className="fade font-light" direction="left">
                            Dzięki PartyMeet jesteś w stanie zacząć zarabiać poprzez wynajmowanie swojego lokalu! Decyduj kogo przyjmiesz oraz wystawiaj oceny gościom!
                        </p>
                    </div>
                    
                </div>
            </section>
        </div>

    )
}