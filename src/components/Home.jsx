import React, {Fragment} from "react";

import streamHaus from '../Assets/streamHaus.png';

import '../styles/home-style.css';

const Home = () => {

    //To Show current year
    const year = new Date().getFullYear();

    return (  
        <Fragment>
            <div className="mainBg2">

                <div className="img-container">
                    <img className="home-logo" src={streamHaus} alt="logo" />

                    <h2>Watch Movies and TV Shows Online Free</h2>
                </div>
                
                <div className="info-container">

                    <p><span className="color-txt">Stream Haus</span> is the best and safest free movie site in {year}. With the ad-free feature.</p>

                    <p><span className="color-txt">Stream Haus</span> allows users to watch and download tens of thousands of movies and TV shows in HD quality safely, freely, and smoothly. Despite the extensive content library and premium features.</p>
                    
                    <p><span className="color-txt">Stream Haus</span> does not require any commitment from users. You are not obliged to pay, or even register to enjoy your favorite movies on the site without limits. We update new titles on a daily basis; 
                    therefore, you can rest assured, the fun never ends on.</p>

                    <p>Sharing is caring! Introduce <span className="color-txt">Stream Haus</span> to your friends and family to protect them from shady and low-quality sites. Thanks!
                    Are you looking for a movie to watch but worried about viruses and malware? <br/> Or are you looking for the best free alternative to your current paid streaming service? If yes, you are at the right place! </p>

                    <p><span className="color-txt">Stream Haus</span> is a free movie site that is completely free of ads, pop-ups, and commercials. Therefore, you can watch your favorite movies and TV shows on the site without fear of viruses, trojans, malware,
                    and other malicious computer programs. </p>

                    <p>Although the site is free of charge, it provides users with an extensive content library and superb features that are normally exclusive to paid users only on premium sites.</p>

                    <p>Therefore, <span className="color-txt">Stream Haus</span> is the best free alternative to any paid streaming service.</p>
                
                    <p>Is It Illegal to Use <span className="color-txt">Stream Haus</span>? The answer is NO, It is not currently not banned in any region; therefore, you can access the site without any hassle. Although the site is not legal due to its pirated content, 
                    you should not need to worry about being subject to criminal or civil charges. </p>

                    <p> According to copyright attorneys, you will only face legal issues when you commit illegal downloading or file sharing. 
                    To be safe, you should stick with online movie streaming only. In case you insist on downloading videos from the site to watch offline later, protect your identity with a reliable VPN and proceed at your own risk.</p>
                
                    <p>Is <span className="color-txt">Stream Haus</span> safe? </p>

                    <p> Using it to watch movies and TV shows online is as safe as using Google to search for results. <span className="color-txt">Stream Haus</span> does not pose any risk to your device and identity thanks to the ad-free feature.</p>
                    
                    <p> Normally hackers use ad links to install viruses and malware into your device. Therefore, you are completely safe Stream Haus as ads, pop-ups, and commercials are nonexistent on the site. </p>
                    
                    
                    <p> In addition, <span className="color-txt">Stream Haus</span> does not require any registration or signup, which protects users from information leakage. Apart from excellent security,</p>

                    <p><span className="color-txt">Stream Haus</span> also provides users with these premium features:</p>
                       
                       <div className="info-list">
                            <ul>
                                    <li>- An extensive pool of TV shows and series with tens of thousands of titles.</li>
                                    <li> - HD Resolution (720p, adjustable).</li>
                                    <li>- Seamless streaming feature.</li>
                                    <li>- Fast loading speed.</li>
                                    <li>- Private and safe streaming sources.</li>
                                    <li>- Fast updates.</li>
                                    <li>- Optimized UI & UX.</li>
                                    <li>- Mobile-friendly and Chromecast supported.</li>
                                    <li>- Zero ads, pop-ups, and commercials.</li>
                                    <li>- No signup or registration required.</li>
                                    <li>- 24/7 customer service.</li>
                            </ul>
                       </div>
                </div>
            </div>
        </Fragment>

    );
}
 
export default Home;