import React from 'react';
import image from "./profile.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="profile_picture" className="absolute h-20 w-25"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-3xl text-white font-bold cursive leading-none lg:leading-snug home-name">Hi 👋 I'm Ranjit</h1>
            </section> 
        </main>
    )
}