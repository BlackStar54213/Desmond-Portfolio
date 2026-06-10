import { useState } from "react";
import '../css/Nav.css'
function Nav() {
    return (
        <>
            <nav>
                <img src="" alt="" />
                <div className="socials">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/desmond-izu-802551354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></li>
                        <li><a href="mailto:izuokeme@gmail.com">Email</a></li>
                        <li><a href="https://github.com/BlackStar54213">Github</a></li>
                        <li><a href="https://wa.me/2348155053195">Whatsapp</a></li>
                    </ul>
                </div>
                <ul>
                    <a href="#current"><li id="current">Home</li></a>
                    <a href="#stack"><li>Stack</li></a>
                    <a href="#port"><li>Portfolio</li></a>

                </ul>
            </nav>
        </>
    )
}
export default Nav;