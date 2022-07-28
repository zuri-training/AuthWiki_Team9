import {GoPrimitiveDot} from 'react-icons/go'
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs, TbBrandSass, TbBrandVue} from 'react-icons/tb'
import {SiArtixlinux, SiSpring} from 'react-icons/si'
import {IoLogoAngular} from 'react-icons/io'
import './GetSupport.css'

const GetSupport = () => {
    return (
        <div className="get-start-container">
            <div className='snippet-wrapper'>
                        <div className='image-container'>
                            <img src='/code-snippet.png' />
                        </div>
                        <div className='languges-support'>
                            <div className='support-container'>
                                <GoPrimitiveDot className='circle purple' />
                                <div className='support-title'>
                                    <h3>Language Support</h3>
                                    <p>Designed and built all the love in the world by the Bootstrap team the help of our contributions.</p>
                                </div>
                            </div>

                            <div className='support-container'>
                                <GoPrimitiveDot className='circle yellow' />
                                <div className='support-title'>
                                    <h3>Reliable Tested Code</h3>
                                    <p>Designed and built all the love in the world by the Bootstrap team the help of our contributions.</p>
                                </div>
                            </div>

                            <div className='support-container'>
                                <GoPrimitiveDot className='circle purple' />
                                <div className='support-title'>
                                    <h3>Community Support</h3>
                                    <p>Designed and built all the love in the world by the Bootstrap team the help of our contributions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='work-with'>
                            <h3>Works With 30+ framework</h3>
                        <div className='work-support-framework'>
                            <TbBrandVue className='framework' />
                            <IoLogoAngular className='framework' />
                            <FaReact className='framework' />
                            <TbBrandNextjs className='framework' />
                            <TbBrandSass className='framework' />
                            <SiArtixlinux className='framework' />
                            <SiSpring className='framework' />
                        </div>
                    </div>
                </div>
    )
}

export default GetSupport