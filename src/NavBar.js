import React from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-black">
            <div className="container mx-auto text-white flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-10 px-6 my-0 mr-4 text-white hover:text-red-300  font-bold text-3xl cursive tracking-widest">
                        Ranjit Kalita
                    </NavLink>
                    <NavLink to="/youtube" activeClassName="text-white " className="inline-flex items-center py-2 px-4  my-0  text-white hover:text-red-300 text-xl cursive">
                        YouTube
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-white " className="inline-flex items-center py-2 px-4 my-0  text-white hover:text-red-300 text-xl cursive">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-white" className="inline-flex items-center py-2 px-4 my-0  text-white hover:text-red-300 text-xl cursive">
                        About Me
                    </NavLink>

                </nav>
                <div className="inline-flex py-3 px-10 my-6">
                    <SocialIcon url="https://github.com/rks0001" className="mr-4" target="_blank" fgColor='#000' style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/ranjit-kalita-a5316b167/" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://twitter.com/ranjitkalita5o5" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header >
    )
}