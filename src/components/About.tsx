import React from "react";
import Image from "next/image";
import book from "../asserts/book.png";
import pc from "../asserts/pc.png";
import card from "../asserts/card.png";
import finance from "../asserts/finance.png";

const About = () => {
  return (
    
    
    
      <div className="max-w-[1200px] mx-auto" id="about">

      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-400">Me</span>
      </h1>

        
        <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
          <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
              <Image src={book} alt="book" className="w-auto h-[130px]" />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-bold text-white/80">Education</h2>
                <p className="text-lg text-white/70 mt-2">
                I hold a degree in Computer Science, where I developed a strong foundation in programming and software development. My education has equipped me with essential skills for my career."
                </p>
              </div>
            </div> 
          </div>
      
           <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
              <Image src={pc} alt="pc" className="w-auto h-[130px]" />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-bold text-white/80">My Leptop</h2>
                <p className="text-lg text-white/70 mt-2">"My laptop is my primary tool for development, equipped with powerful hardware and essential software. It allows me to code efficiently and manage multiple projects seamlessly."</p>
              </div>
            </div>
          </div>
      
          <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

           <div className="flex flex-row p-6">
              <Image src={card} alt="card" className="w-auto h-[130px]" />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-bold text-white/80">Expirence</h2>
                <p className="text-lg text-white/70 mt-2">"I have gained valuable experience through internships and freelance projects, where I honed my skills in web development and collaborated with diverse teams to deliver successful outcomes."</p>
              </div>
            </div>
          </div>
          
      
          <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="flex flex-row p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
              <Image src={finance} alt="finance" className="w-auto h-[130px]" />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-bold text-white/80">Finance</h2>
                <p className="text-lg text-white/70 mt-2">"I am knowledgeable in financial management, understanding budgeting and investment principles. This knowledge helps me manage my resources effectively while pursuing my career goals."
                </p>
              </div>
            </div>
          </div> 
      
        </div>
      </div>
    );
};

export default About;
