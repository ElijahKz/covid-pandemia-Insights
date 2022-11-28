import ScriptAppComponent from '../ScriptAppcomponent/ScriptAppComponent'
import NavbarApp from '../NavbarApp/NavbarApp'
import FooterSection from '../FooterSection/FooterSection.js'
import React, { useState, useEffect } from 'react';
import Router from 'next/router'
import $ from 'jquery'
const mixContainer = {

    width: "103%",
    padding: "5em",
    margin: "0",
    display: "flex",
    justifyContent:"center",
    flexDirection:"column"


};
const AppContainer = (props) => {

    useEffect(() => {
        Router.events.on('routeChangeComplete', () => {

            var elementOffset = 0;

            $('#mix-container').animate({ scrollTop: elementOffset }, 200);
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });

       

    });
    //

    return (
        <>
        <NavbarApp />
            <div id="mix-container" style={mixContainer} className="">
                {props.children}
            </div>
            <ScriptAppComponent />
            <FooterSection />
        </>
    )
}
export default AppContainer;