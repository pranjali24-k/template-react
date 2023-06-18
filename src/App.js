import Section from "./Section";
import download from "./download.png";
const App = () => {
    return (
        <div>

            <Section>
                <div className="head">
                    <h1>START BOOTSTRAP</h1>
                    <div className="head2">
                        <p>PORTFOLIO</p>
                        <p>ABOUT</p>
                        <p>CONTACT</p>
                    </div>
                </div>
                <div className="start">
                    <img src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg" alt="" />
                    <h1>START BOOTSTRAP</h1>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
                <div className="images">
                    <p className="img1">
                        <img src="	https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png" alt="" />
                        <img src="	https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png" alt="" />
                        <img src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png" alt="" />
                    </p>
                    <p className="img1">
                        <img src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png" alt="" />
                        <img src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png" alt="" />
                        <img src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png" alt="" />
                    </p>
                </div>
                <div className="about">

                    <h1>ABOUT</h1>
                    <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download <br />
                        includes the complete source files including HTML, CSS, and JavaScript as well  <br />
                        as optional SASS stylesheets for easy customization.</p>
                    <p>"You can create your own custom avatar for the masthead,change the <br />
                        icon in the dividers, and add your email address to the contact form to make it <br />
                        fully functional!"</p>
                    <button> <img src={download} alt="" />Free Download!</button>
                </div>
                <div>
                    <form >
                        <h1>CONTACT ME</h1>
                        <input type="text" placeholder="Full name" />
                        <input type="email" placeholder="Email" />
                        <input type="number" placeholder="Phone no" />
                        <input type="message" placeholder="Message" />
                        <button style={{ backgroundColor: "rgb(26,188,156)", padding: 30, marginRight: 553, border: "none", borderRadius: 6, color: "white" }}>Send</button>
                    </form>

                </div>
                <div>
                    <div className="foot">
                        <h1>LOCATION</h1>
                        <p style={{ fontSize: 20 }}>2215 John Daniel Drive <br />
                            Clark, MO 65243</p>
                        <h1>AROUND THE WEB</h1>
                        <h1>ABOUT FREELANCER</h1>
                        <p style={{ fontSize: 20 }} >Freelance is a free to use, MIT licensed Bootstrap theme created by <br /> <a style={{ color: "rgb(26,188,156)", fontSize: 20, textDecoration: "underline" }} > Start Bootstrap .</a></p>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(26,37,47)", textAlign: "center", color: "white", padding: 30 }}>
                    <p>copyright @pranjalikolhe </p>

                </div>

            </Section>
        </div>
    )
}

export default App;