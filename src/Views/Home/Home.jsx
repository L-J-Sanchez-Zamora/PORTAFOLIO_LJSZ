import style from "./Home.module.css"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin-64.png"
import yo from "../../assets/leidy_vana_studio.png"
import slack from "../../assets/icons8-slack-64.png"

function Home() {


    return (
        <div>
            <div className={style.backgrounOnedHome}>
                <h1 className={style.titleHome}>Hi!</h1>
                <h1 className={style.titleHome}> My name is Leidy</h1>
                <p className={style.pHome}>Junior Front-End junior, My main goal is to design visually appealing compositions, <br /> plus I have strong problem solving and effective communication skills,<br />
                    all with the purpose of collaborating to create high quality web experiences.</p>
                <div className={style.containerSocialNetworksHome}>
                    <div className={style.socialNetworksHome}>
                        <a href="https://github.com/L-J-Sanchez-Zamora" target="_blank" className={style.iconHome}>
                            <img src={github} alt="Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/leidy-johanna-s%C3%A1nchez-zamora-9370731a3/" target="_blank" className={style.iconHome}>
                            <img src={linkedin} alt="Linkedin" />
                        </a>
                        <a href="https://henrygrads.slack.com/team/U05QFN4839D" target="_blank" className={style.iconHome}>
                            <img src={slack} alt="Slack" />
                        </a>
                    </div>
                </div>
                <button className={style.buttomHome} >Contac</button>
            </div>

            <div className={style.backgrounTwoHome}>
                <div className={style.tramaOneHome}>
                <img src={yo} className={style.iHome} />
                </div>


                <div className={style.styleDiv} >
                    <div className={style.div1}></div>
                    <div className={style.div2}><h3>I seek to continually create and innovate, I love working collaboratively as it allows me to provide solutions and learn together. I have excellent communication and use of organizational tools for work and have carried out projects with the scrum methodology. I am willing to learn continuously. and to work for an excellent company.</h3></div>
                {/* Busco crear e inovar continuamente, me encanta trabajar de forma colaborativa ya que permite aportar soluciones y aprender en conjunto, tengo una excelente comunicación y uso de las herramientas de organización para el trabajo y realizado proyectos con la metodologia scrum, tengo la disposición de aprender continuamente y a trabajar para una excelente empresa. */}
                </div>


            </div>


            <div className={style.backgrounThreedHome}>
                <h1 className={style.titleHome}>Projects</h1>


                <div className={style.containerProyect}>
                    <a href="https://youtu.be/bgXDk5O93j4?si=aF9qWBUvbJkVY14K" target="_blank">
                        <div className={style.parte1}>
                        </div>
                    </a>
                    <a href="https://youtu.be/qPM9QPRe2Ik?si=Hg1s_ne4w84gYRMZ" target="_blank">
                        <div className={style.parte2}>
                        </div>
                    </a>
                    <div className={style.parte3}>

                    </div>
                    <div className={style.parte4}></div>
                    {/* <div className={style.parte5}>5</div>
                    <div className={style.parte6}>6</div>
                    <div className={style.parte7}>7</div>
                    <div className={style.parte8}>8</div>
                    <div className={style.parte9}>9</div> */}
                </div>


            </div>
        </div >
    )
}
export default Home;
