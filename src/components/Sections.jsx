import React from "react";

export function Sections() {
    return (
        <div className="sections">
            <section className="text-center">
                <h2 className="font-bold text-7xl text-grey-900">OUR SOCIALS</h2>
                <ul className="social">

                    <li className="facebook"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li className="twitter"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li className="tiktok"><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
                    <li className="instagram"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li className="linked-in"><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>

                </ul>
            </section>
            <section></section>
        </div>
    )
}