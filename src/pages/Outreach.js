// import { Link } from "react-router-dom";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import Styles from './Events.module.css'

import { FaLinkedin, FaFacebookSquare, FaEnvelope } from "react-icons/fa";
const Outreach = () => {
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
                            <img src="Photos/Zeeshan.jpg" className={Styles.Img} alt="" />
                        </div>
                        {/* <h2 className={Styles.name}>Zeeshan</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Zeeshan</h3>
                        <h3>Outreach and Hospitality Coordinator</h3>
                        <a href="mailto:zeeshankhan.iitkgp@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/profile.php/?id=100003497188793" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/zeeshan-khan-05a25211b" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3>+919770583095</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/Rishitha.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>Rishitha Marlapati</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Rishitha Marlapati</h3>
                        <h3>Outreach and Hospitality Coordinator</h3>
                        <a href="mailto:marlapatirishitha@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/rishitha.marlapati?mibextid=ZbWKwL" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/rishitha-marlapati-a7096521b" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+918850412529</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/GVKSaiSarath.png" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>GVK Sai Sarath</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>GVK Sai Sarath</h3>
                        <h3>Outreach and Hospitality Coordinator</h3>
                        <a href="mailto:saisarath857@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/sarathgarimella17/" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/saisarathgarimella/" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+919618790643</h3>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Outreach;