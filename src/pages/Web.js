// import { Link } from "react-router-dom";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import Styles from './Events.module.css'
import { FaLinkedin, FaFacebookSquare, FaEnvelope } from "react-icons/fa";
const Web = () => {
    return (
        <div className={Styles.all}>
            <SideNavBar></SideNavBar>
            <br />
            <div className={Styles.container}>
                <div className={Styles.banner}>
                    <img src="icons/RightLogo.png" className={Styles.bannerImg} alt="" />
                </div>
                <br />
                <div className={Styles.pic}>
                    <div className={Styles.card}>
                        <img src="Photos/nitishpic.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>K.R.<br />Nitish Kumar</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Nitish Kumar</h3>
                        <h3>Web Coordinator</h3>
                        <a href="mailto:nitishkumar1@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/nitishk1005/" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/nitish-bpns/" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3>+919507816000</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/ShivamDwivedi.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>Shivam Dwivedi</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Shivam Dwivedi</h3>
                        <h3>Web Coordinator</h3>
                        <a href="mailto:shivamkval@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/profile.php?id=100048948850858" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/shivam-dwivedi-764006217/" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+919044162170</h3>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Web;