// import { Link } from "react-router-dom";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import Styles from './Events.module.css'
import { FaLinkedin, FaFacebookSquare, FaEnvelope } from "react-icons/fa";
const Media = () => {
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
                        <img src="Photos/nidhii.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>K.R.<br />Nitish Kumar</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Nidhi Goyal</h3>
                        <h3>Media and Publicity Coordinator</h3>
                        <a href="mailto:nidhigoyal1310@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/profile.php?id=100059180424213" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/nidhi-goyal-iitkgp" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3>+919507816000</h3>
                    </div>
                    <div className={Styles.card}>
                        <img src="Photos/shreyas.jpg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>Shivam Dwivedi</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>Shreyas Anilal</h3>
                        <h3>Media and Publicity Coordinator</h3>
                        <a href="mailto:shreyas2.0sv@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/shreyas.anilal/" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="https://www.linkedin.com/in/shreyas-anilal-883166179/" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3 style={{ 'color': 'white' }}>+919044162170</h3>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Media;