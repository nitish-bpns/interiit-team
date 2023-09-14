// import { Link } from "react-router-dom";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import Styles from './Events.module.css'

import { FaLinkedin, FaFacebookSquare, FaEnvelope } from "react-icons/fa";
const Sponsorship = () => {
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
                            <img src="Photos/RishiKumar.jpg" className={Styles.Img} alt="" />
                        </div>
                        {/* <h2 className={Styles.name}>Rishi Kumar</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Rishi Kumar</h3>
                        <h3>Sponsorship Coordinator</h3>
                        <a href="mailto:kumarrishi.iitkgp@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/profile.php?id=100006118908643" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/rishi-kumar-01a752221/" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3>+918084927363</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/NIKHIL.jpeg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>Nikhil Goyal</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Nikhil Goyal</h3>
                        <h3>Sponsorship Coordinator</h3>
                        <a href="mailto:nikhilgoyal.iitkgp@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/profile.php?id=100056865170803" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/nikhil-goyal-612700205/" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+919855342222</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/Awanish.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>Awanish Kumar</h2>
                        <br /> */}
                         <h3 className={Styles.name2}>Awanish Kumar</h3>
                         <h3>Sponsorship Coordinator</h3>
                        <a href="mailto:Awanish.iitkgp@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/profile.php?id=100007226146644&mibextid=LQQJ4d" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="http://linkedin.com/in/awanish-kumar-413781205" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+919351114364</h3>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Sponsorship;