import React from 'react';
import image from "./prof-pixel.png"

export default function Home() {
    return (
        <main>
            <section className="relative flex justify-center ">
            <img src={image} alt="profile_picture" className="home-profile "/>
            </section>
            <section className="relative flex justify-center pt-3 lg:pt-12 px-8">
                <h1 className="text-3xl text-white font-bold cursive leading-none lg:leading-snug home-name">Hi 👋 I'm Ranjit</h1>
            </section> 
        </main>
    )
} 