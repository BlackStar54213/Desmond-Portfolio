import icon from '../assets/bx-message-dots.svg'
import '../css/workdets.css'
function Work() {
    return (
        <>
            <section className="all">
                <section className="exp" id='stack'>
                    <h2>Recent Working experience</h2>
                    <div className="contain">

                        <div className="expitem"><img src={icon} alt="" /> <div className="itemdets">Frontend Mobile Developer at <span className="company">Delta State University</span><br /><span className="duration">September 2023 - october 2024</span></div></div>
                        <div className="expitem">
                            <img src={icon} alt="" />
                            <div className="itemdets">Full Stack Mobile Developer at <span className="company">Carrb`</span><br /><span className="duration">September 2023 - october 2024</span></div></div>
                        <div className="expitem"><img src={icon} alt="" /> <div className="itemdets"> Web Developer at <span className="company">Interkel</span><br /><span className="duration">September 2023 - october 2024</span></div></div>
                    </div>


                </section>
                <section className="achieve">
                    <h2>Certification and Achievement</h2>
                    <div className="contain">
                        <div className="expitem"><img src={icon} alt="" /> <div className="itemdets">Udemy Web Dev Certificate at <span className="company">Udemy</span><br /><span className="duration">September 2023</span></div></div>
                        <div className="expitem">
                            {/* <img src={icon} alt="" /> <div className="itemdets">Udemy Web Dev Certificate at <span className="company">Udemy</span><br /><span className="duration">September 2023</span></div> */}
                        </div>
                        <div className="expitem">
                            {/* <img src={icon} alt="" /> <div className="itemdets">Udemy Web Dev Certificate at <span className="company">Udemy</span><br /><span className="duration">September 2023</span></div> */}
                        </div>

                    </div>

                </section>
            </section>
        </>
    )
}

export default Work;