import React from 'react';
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import Project from "../components/Projet";
import SocialNetwork from "../components/SocialNetwork";
import Mouse from "../components/Mouse";

export const Project1 = () =>{
    return(
        <main>
            <Mouse/>
            <div className="project">
                <Navigation/>
                <SocialNetwork />
                <Logo/>
                <Project projectNumber={0}/>
                <ButtonsBottom right={"/project-2"} left={"/home"}/>
            </div>
        </main>
    )
}

export const Project2 = () =>{
    return(
        <main>
            <Mouse/>
            <div className="project">
                <Navigation/>
                <SocialNetwork />
                <Logo/>
                <Project projectNumber={1}/>
                <ButtonsBottom right={"/project-3"} left={"/project-1"}/>
            </div>
        </main>
    )
}

export const Project3 = () =>{
    return(
        <main>
            <Mouse/>
            <div className="project">
                <Navigation/>
                <SocialNetwork />
                <Logo/>
                <Project projectNumber={2}/>
                <ButtonsBottom right={"/contact"} left={"/project-2"}/>
            </div>
        </main>
    )
}


