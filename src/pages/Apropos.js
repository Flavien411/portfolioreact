import React from 'react';
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";

const Apropos = () => {
    return (
        <div>
            <Navigation />
            <SocialNetwork />
            <ButtonsBottom right={"/contact"} left={"/project-3"}/>
        </div>
    );
};

export default Apropos;
