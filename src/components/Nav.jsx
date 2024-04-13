import React, { useState } from 'react';
import style from '../styles/nav.module.css';
import logo from '../images/ZEE5_logo.svg'
const Nav = () => {
    // State to control dropdown visibility
    const [isOptionVisible, setIsOptionVisible] = useState(false);

    // Function to show options on hover
    const showOption = () => {
        setIsOptionVisible(true);
    };

    // Function to hide options when cursor leaves
    const hideOption = () => {
        setIsOptionVisible(false);
    };
    // State to control dropdown visibility
    const [isOption, setIsOption] = useState(false);

    // Function to show options on hover
    const showOptions = () => {
        setIsOption(true);
    };

    // Function to hide options when cursor leaves
    const hideOptions = () => {
        setIsOption(false);
    };

    return (
        <div className={style.nav}>
            <ul className={style.left}>
                <li><img src={logo} alt="" className={style.logo}/></li>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Premium</li>
                <li>Web Series</li>
                <li>
                    <div>
                        {/* Use onMouseEnter and onMouseLeave to show/hide dropdown */}
                        <div onMouseEnter={showOption} >
                            <div className={style.menu}></div>
                            <div className={style.menu}></div>
                            <div className={style.menu}></div>
                        </div>
                        {/* Conditionally render the dropdown based on state */}
                        {isOptionVisible && (
                        <ul className={style.option} onMouseLeave={hideOption}>
                            <li>Rent</li>
                            <li>Live TV</li>
                            <li>Eduauraa</li>
                            <li>Music</li>
                            <li>Cricket</li>
                            <li>Kids</li>
                            <li>Songs</li>
                            <li>Videos</li>
                        </ul>
                        )}
                    </div>
                </li>
            </ul>    
            <ul className={style.right}>
                <li className={style.search}>🔍<input type="search" placeholder='Search for Movies, Shows, Channels etc.' />🎙️</li>
                <li>A</li>
                <li>Login</li>
                <li>BUY PLAN</li>
                <li>
                    <div>
                        {/* Use onMouseEnter and onMouseLeave to show/hide dropdown */}
                        <div onMouseEnter={showOptions} >
                            <div className={style.menu}></div>
                            <div className={style.menu}></div>
                            <div className={style.menu}></div>
                        </div>
                        {/* Conditionally render the dropdown based on state */}
                        {isOption && (
                        <ul className={style.option} id={style.option}onMouseLeave={hideOptions}>
                            <li>Home</li>
                            <li>Explore TV</li>
                            <li>Plans</li>
                            <li>Buy Plan</li>
                        </ul>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
