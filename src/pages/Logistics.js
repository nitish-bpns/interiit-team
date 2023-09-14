// import { Link } from "react-router-dom";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import Styles from './Events.module.css'

import { FaLinkedin, FaFacebookSquare, FaEnvelope } from "react-icons/fa";
const Logistics = () => {
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
                            <img src="Photos/Ishan.jpg" className={Styles.Img} alt="" />
                        </div>
                        {/* <h2 className={Styles.name}>Ishan Nargolkar</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Ishan Nargolkar</h3>
                        <h3>Logistics Coordinator</h3>
                        <a href="mailto:ishan.nargolkar@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/ishan.nargolkar.3" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="www.linkedin.com/in/ishan-nargolkar" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3>+917261970250</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/AkshatAnshNayak.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>Akshat Ansh Nayak</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Akshat Ansh Nayak</h3>
                        <h3>Logistics Coordinator</h3>
                        <a href="mailto:akshatansh.nayak@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/BludgerMist16850?mibextid=V3Yony" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/akshat-ansh-nayak-752480205" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+918597986876</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/GVKSaiSarath.png" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>GVK Sai Sarath</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>GVK Sai Sarath</h3>
                        <h3>Logistics Coordinator</h3>
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

export default Logistics;