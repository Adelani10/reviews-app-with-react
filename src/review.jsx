import React from "react";
import './index.css'
import { useState } from "react";
import reviews from './data'

export default function Review () {
    const [count, setCount] = useState(0)
    const [person, setPerson] = useState(reviews)
    const [readMore, setReadMore] = useState(true)
    
    const {name, job, image, text} = person[count]


    function nextPerson () {
        if(count <= 2){
            setCount(prev => prev + 1)
        }
        else {
            setCount(0)
        }
    }

    function prevPerson () {
        setCount(prev => prev - 1)
        if (count === 0){
            setCount(3)
        }
    }

    function generateRandom () {
        const randomNumber = Math.floor(Math.random()*4)
        setCount(randomNumber) 
    }




    return (
        <div className="flex flex-col items-center bg-white w-full md:space-y-6 space-y-4 md:w-1/2 rounded-lg px-3 py-6">
            <div className="image-div w-48 h-48 rounded-full">
                <img src={image} alt="" className="w-full h-full object-cover rounded-full"/>
            </div>

            <section className="review-body  space-y-6 md:space-y-8 flex flex-col justify-center">
                <article className="text-center">
                        <h1 className="text-black tracking-widest font-semibold">{name}</h1>
                        <p className="tracking-tighter uppercase font-semibold text-sky-400">{job}</p>
                </article>

                <article>
                        <p className="inline">{!readMore ? text : `${text.substring(0,60)}. . .`}</p>
                        <button onClick={() => setReadMore(prev => !prev)} className="pl-1 font-bold tracking-wider hover:text-sky-300">{readMore ? "See More" : "See Less"}</button>
                </article>

                <div className="btn flex justify-center space-x-9 md:space-x-16">
                    <button onClick={prevPerson} className="text-sky-400 hover:text-sky-200 text-4xl md:text-5xl">
                        <i className="fa-solid fa-circle-arrow-left"></i>
                    </button>
                    <button onClick={nextPerson} className="text-sky-400 hover:text-sky-200 text-4xl md:text-5xl">
                        <i className="fa-solid fa-circle-arrow-right"></i>
                    </button>
                </div>

                <button onClick={generateRandom} className="w-1/2 text-sky-900 mx-auto rounded-full py-1 md:py-2 border-2 border-sky-400 tracking-widest font-bold hover:text-white hover:bg-black">Random</button>
            </section>
        </div>
    )
}