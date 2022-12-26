import React from 'react'   
import {Nav} from './Nav'
import {About} from './About'
import {Sections} from './Sections'
import Logo from "../assets/img/logo_light.png"
import '../assets/styles/Menu.scss'


export function Menu() {
    return (
        <>
            <div className="line-container">
                {/* <svg viewBox="0 0 117 1239" fill="none" preserveAspectRatio='xMidYMax meet'>
                    <path d="M53.5 0V796L32.5 791.5L24 815C22 823.167 18.9 840.7 22.5 845.5C27 851.5 35.5 857 43.5 849.5C51.5 842 55 809.5 55 807C55 804.5 50.5 814 47 810.5C43.5 807 36 808.5 35 809.5C34 810.5 27.5 803.5 25 837C24.8333 840.5 26 847.7 32 848.5L23.5 893L6 899L37.5 905L25 893.5C34.5 888.333 53.5 875.6 53.5 866C53 862.167 50.3 855.1 43.5 857.5C43.029 859.333 43.0697 862.8 47 862C54.6667 864.5 69.5 864.7 67.5 845.5C66.5 843.833 64.8 835.1 66 813.5L88 809.5C90.3333 815.833 95.3 829.7 96.5 834.5C94.8333 831.333 90.8 825 88 825C84.5 825 81 827 77.5 829.5C74.5 828.333 68.7 827.7 69.5 834.5C71 838.5 75.7 845.3 82.5 840.5C85.5 838.167 90.3 833.1 85.5 831.5C81.6667 833.167 78.5 837.8 96.5 843C98.1667 849 98.8 862.6 88 869L95.5 909L111.5 915.5L80.5 921C71.5 921.333 53.5 933.5 53.5 979.5C53.5 1025.5 53.5 1113.67 53.5 1152V1239" stroke="#161616" stroke-width="3"/>
                </svg> */}
            </div>

            <div id="menu-container">
                <div className="nav-wrapper">
                    <Nav/>
                </div>
                <div className="product-row">
                    <div className="product parallax" data-speed="4">
                        <img src={Logo} alt="Party Meet" />
                    </div>
                    <div className="info-2"></div>
                </div>
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            < About />
            < Sections />
        </>
    )
}