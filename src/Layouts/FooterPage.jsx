import React from 'react'
import fb from '../Icons/fb.png'
import linkdin from '../Icons/linkdin.png'
import twitter from '../Icons/twitter.png'
import insta from '../Icons/instagram.png'
import '../Components/Style/Footer.css'
const FooterPage = () => {
    return(
        <div className="footer">
            <div className="sb__footer section__pading">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>for the bussiness</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthpln">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Partners</h4>
                        <a href="/resource">
                            <p>Swing Tech</p>
                        </a>
                        </div>
                        <div className="sb__footer-links-div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                        </div>
                        <div className="sb__footer-links-div">
                            <h4>Comming Soon On</h4>
                            <div className="socialmedia">
                                <p><img src={fb} alt=""/></p>
                                <p><img src={twitter} alt=""/></p>
                                <p><img src={linkdin} alt=""/></p>
                                <p><img src={insta} alt=""/></p>
                            </div>
                        </div>

                </div>
                <hr/>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn.All right reversed.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p> Privacy</p></div></a>
                <a href="/security"><div><p> Security</p></div></a>
                <a href="/cookie"><div><p> Cookie Declration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterPage;