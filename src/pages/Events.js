// import { Link } from "react-router-dom";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import Styles from './Events.module.css'

import { FaLinkedin, FaFacebookSquare, FaEnvelope } from "react-icons/fa";
const Events = () => {
    return (
        <div className={Styles.all}>
            <SideNavBar></SideNavBar>
            <div className={Styles.container}>
                <div className={Styles.banner}>
                    <img src="icons/RightLogo.png" className={Styles.bannerImg} alt="" />
                </div>
                <br />
                <div className={Styles.pic}>
                    <div className={Styles.card}>
                        <div className={Styles.imgcontainer}>
                            <img src="Photos/Aryan_Rane.jpg" className={Styles.Img} alt="" />
                        </div>
                        {/* <h2 className={Styles.name}>Aryan Rane</h2> */}
                    
                        <h3 className={Styles.name2}>Aryan Rane</h3>
                        <h3>Dance + Lifestyle Coordinator</h3>
                        <a href="mailto:aryanrane1000@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://m.facebook.com/profile.php/?id=100006483914831" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/aryan-rane-22a8241b9" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3>+919112817950</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/Zaid.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>Md Zaid Alam</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Md Zaid Alam</h3>
                        <h3>Dramatics Coordinator</h3>
                        <a href="mailto:Mallickzaid7@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/Mallickzaid7" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/md-zaid-alam-a99874217" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+919508551256</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/Jaikumarsoni.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>Jai Kumar Soni</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Jai Kumar Soni</h3>
                        <h3>Fine Arts Coordinator</h3>
                        <a href="mailto:sonij7767@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/profile.php?id=100062647992139&mibextid=ZbWKwL" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/jai-kumar-soni-64b21a211" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+919001927934</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/Sanchay.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>Sanchay Mahato</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Sanchay Mahato</h3>
                        <h3>Quiz Coordinator</h3>
                        <a href="mailto:15sanchay@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/heavymetal17/" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/sanchay17/" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+919479087949</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/Burra_Nithish.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>Burra Nitish</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Burra Nithish</h3>
                        <h3>Music Coordinator</h3>
                        <a href="mailto:saisarath857@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/sarathgarimella17/" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/saisarathgarimella/" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+919618790643</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/HarishwarAdithya.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>Harishwar</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Harishwar</h3>
                        <h3>Film + Photography Coordinator</h3>
                        <a href="mailto:harishwar017@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/Harishwar.Adithya.S?mibextid=ZbWKwL" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/saisarathgarimella/" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+919618790643</h3>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Events;