import React from 'react'
import './second_laste.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Second_Laste = () => {
  return (
    <section className="s-wrapper">
        <div className="paddings innerWidth flexCenter s-container">
            
            {/* left side */}
            <div className="flexColStart s-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>We always readyto help by providing the best services for you. we
                beleive a good blace to live can mack your life better.</span>
                <div className="flexColStart contactModes">
                    {/* first row  */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>8865 653 8443</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        {/* second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>8865 653 8443</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>

                    {/* second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>8865 653 8443</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>

                        {/* fourth mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>8865 653 8443</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* right side */}
            <div className="s-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}


export default Second_Laste
