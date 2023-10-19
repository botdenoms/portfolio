import sc from '../assets/sc.svg'
import ui from '../assets/ui.svg'
import software from '../assets/software.svg'
import data from '../assets/data.svg'
import engineering from '../assets/engineering.svg'
import game from '../assets/game.svg'

function About() {
    return (
        <div className='about'>
            <div className="top-sec">
                <div className="profile"></div>
                <span>Dennis Moseti, Okari</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Error corporis veniam quo, delectus neque ab nobis minus <br /> 
                provident aliquam rerum placeat amet excepturi expedita <br /> 
                quod officia est dolores, voluptatibus cum.
            </p>
            <div className="skills">
                <div className="skill">
                    <div className="icon-sml">
                        <img src={sc} alt="icon" className='log-img' />
                    </div>
                    <span>Computer Scientist</span>
                </div>

                <div className="spacer"></div>
                <div className="skill">
                    <div className="icon-sml">
                        <img src={data} alt="icon" className='log-img' />
                    </div>
                    <span>Data Science</span>
                </div>

                <div className="spacer"></div>
                <div className="skill">
                    <div className="icon-sml">
                        <img src={software} alt="icon" className='log-img' />
                    </div>
                    <span>Software Engineering</span>
                </div>

                <div className="spacer"></div>
                <div className="skill">
                    <div className="icon-sml">
                        <img src={game} alt="icon" className='log-img' />
                    </div>
                    <span>Game Developer</span>
                </div>

                <div className="spacer"></div>
                <div className="skill">
                    <div className="icon-sml">
                        <img src={ui} alt="icon" className='log-img' />
                    </div>
                    <span>Ui/Ux Designer</span>
                </div>
                
                <div className="spacer"></div>
                <div className="skill">
                    <div className="icon-sml">
                        <img src={engineering} alt="icon" className='log-img' />
                    </div>
                    <span>Solution Engineer</span>
                </div>
            </div>
            <div className="downloads">
                <button>Resume</button>
                <button>CV</button>
            </div>
        </div>
    )
}

export default About