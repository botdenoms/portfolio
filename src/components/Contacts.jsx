import React from 'react'

function Contacts() {
    return (
        <div className='contacts'>
            <div className="row-wd-bl">
                <div className="contact">
                    <div className="hd-sc">
                        <div className="icon-sml"></div>
                        <span>Title</span>
                    </div>
                    <span>Contact details</span>
                </div>
                <div className="contact">
                    <div className="hd-sc">
                        <div className="icon-sml"></div>
                        <span>Title</span>
                    </div>
                    <span>Contact details</span>
                </div>
            </div>
            <div className="row-wd-bl">
                <div className="contact">
                    <div className="hd-sc">
                        <div className="icon-sml"></div>
                        <span>Title</span>
                    </div>
                    <span>Contact details</span>
                </div>
            </div>
            <div className="row-wd-bl">
                <div className="contact">
                    <div className="hd-sc">
                        <div className="icon-sml"></div>
                        <span>Title</span>
                    </div>
                    <span>Contact details</span>
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