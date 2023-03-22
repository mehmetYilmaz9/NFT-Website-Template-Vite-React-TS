import React, {useState} from "react"
import homeImg from "../assets/home.png"

///Button = border + hover + color var

export default function Home () {

    return (
        <section className="mt-10 container mx-auto">
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-6  md:grid-cols-2">
                {/* Left Side*/}
                <div className="grid gap-1 mx-auto">
                    <p className="mt-4 text-3xl uppercase tracking-widest text-colorPink ">Launching Soon</p>
                    <h1 className="text-7xl font-bold block ">An NFT like no other</h1>
                    <p className="block text-4xl text-gray-400">
                        Don't miss out on the release of our new NFT. Sign up below to
                        recieve updates when we go live.
                    </p>
                    <div>
                        <button className="bg-blue-500  border-red-800 hover:bg-blue-700 text-white py-4 px-12 rounded-full">Sign Up</button>
                    </div>
                    
                </div>

                {/* Right SIde  backdrop-blur bg-gradient-to-r from-colorPink to-colorOrange   */}
                <div className="relative text-center">
                    <div className="flex justify-center z-20">
                        <img src={homeImg} alt="logo" className=" " />
                    </div>
                    <div className="z-10">
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-colorOrange rounded-full mix-blend-multiply filter blur-xl opacity-60  animate-blob animation-delay-4000"></div>
                        <div className="absolute -bottom-2 left-4 w-72 h-72 bg-colorPink rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000">
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}