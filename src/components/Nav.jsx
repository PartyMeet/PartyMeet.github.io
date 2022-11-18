import React from 'react';


export function Nav() {
    return (
        <nav>
            {/* Menu */}
            <a onClick={console.log("product")} className="hover-this"><span className="move">Zaloguj się</span></a>
            <a onClick={console.log("about us")} className="hover-this"><span className="move">O Aplikacji</span></a>
            {/* Custom cursor */}
            <div className="cursor"></div>
        </nav>
    )
}