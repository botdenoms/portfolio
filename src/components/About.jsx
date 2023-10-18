import React from 'react'

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
                    <div className="icon-sml"></div>
                    <span>Skill title</span>
                </div>

                <div className="spacer"></div>
                <div className="skill">
                    <div className="icon-sml"></div>
                    <span>Skill title</span>
                </div>

                <div className="spacer"></div>
                <div className="skill">
                    <div className="icon-sml"></div>
                    <span>Skill title</span>
                </div>

                <div className="spacer"></div>
                <div className="skill">
                    <div className="icon-sml"></div>
                    <span>Skill title</span>
                </div>

                <div className="spacer"></div>
                <div className="skill">
                    <div className="icon-sml"></div>
                    <span>Skill title</span>
                </div>
                
                <div className="spacer"></div>
                <div className="skill">
                    <div className="icon-sml"></div>
                    <span>Skill title</span>
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