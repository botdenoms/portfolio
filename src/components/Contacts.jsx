import web from '../assets/web.svg'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'
import github from '../assets/github.svg'



function Contacts() {
    return (
        <div className='contacts'>
            <div className="row-wd-bl">
                <div className="contact">
                    <div className="hd-sc">
                        <div className="icon-sml">
                            <img src={phone} alt="icon" className='logo-img' />
                        </div>
                        <span>Phone</span>
                    </div>
                    <span>+254727292322</span>
                </div>
                <div className="contact">
                    <div className="hd-sc">
                        <div className="icon-sml">
                            <img src={phone} alt="icon" className='logo-img' />
                        </div>
                        <span>phone</span>
                    </div>
                    <span>+254101292322</span>
                </div>
            </div>
            <div className="row-wd-bl">
                <div className="contact">
                    <div className="hd-sc">
                        <div className="icon-sml">
                            <img src={github} alt="icon" className='logo-img' />
                        </div>
                        <span>github</span>
                    </div>
                    <span>Botdenoms</span>
                </div>
            </div>
            <div className="row-wd-bl">
                <div className="contact">
                    <div className="hd-sc">
                        <div className="icon-sml">
                            <img src={web} alt="icon" className='logo-img' />
                        </div>
                        <span>web</span>
                    </div>
                    <span>botdenoms.com</span>
                </div>
            </div>
            <textarea placeholder="messsage..." cols="40" rows="6"></textarea>
            <div className="row-wd-bl">
                <input type="text" placeholder='Email@address.domain' />
            </div>
            <div className="row-wd">
                <button>Send</button>
            </div>
        </div>
    )
}

export default Contacts