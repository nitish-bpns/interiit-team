import SideNavBar from "../components/SideNavBar/SideNavBar";
import Styles from './Home.module.css'
import { FaLinkedin, FaFacebookSquare, FaEnvelope } from "react-icons/fa";
const Home = () => {
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
                        <img src="Photos/K.R.Rahul.jpeg" className={Styles.Img} alt="" />
                        {/* <h2 className={Styles.name}>K.R.Rahul</h2>
                        <br /> */}
                        <h3 className={Styles.name2}>K.R.Rahul</h3>
                        <h3>Overall Coordinator</h3>
                        <a href="mailto:krrahul.iitkgp@gmail.com" className={Styles.icon}><FaEnvelope /></a>
                        <a href="https://www.facebook.com/profile.php?id=100056602879445" target='blank' className={Styles.icon}><FaFacebookSquare /></a>
                        <a href="www.linkedin.com/in/rahul-k-r-30a687201" target='blank' className={Styles.icon}><FaLinkedin /></a>
                        <br />
                        <h3>+919642196970</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;