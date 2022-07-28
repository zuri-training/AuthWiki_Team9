import './Hero.css'
import {GoPrimitiveDot} from 'react-icons/go'
import {FaReact} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {IoLogoPython} from 'react-icons/io'
import {SiPhp, SiGoland, SiJava, SiTypescript,SiFlask} from 'react-icons/si'
import {Link} from 'react-router-dom'
export const Hero = () => {
    return(
        <div className="hero">
            <div className="title-wrapper">
                <h2 className="title copy">Copy.</h2>
                <h2 className="title paste">Paste.</h2>
                <h2 className="title test">Test.</h2>
            </div>
            <a href="#" className="docs-btn">Documentation</a>
                <div className='para-container'>
                    <p className='desc'><a href='#'>Authlt</a> combines the best developer experience with an obsessive focus on end-user performance. <span>Our paltform enables frontend teams to do their best work.</span></p>
                </div>
            <div className='desc-wrapper'>
                <div className='get-start-wrapper'>
                    <div className='get-start-title-container'>
                    <h3 className='get-start-title'>Get Started With Pre-Written Authentication Codes Anytime.</h3>
                    </div>
                    <div className='languges'>
                        <Link to='#' className='active'>
                        <SiJavascript className='language' />JS
                        </Link>
                        <Link to='#' >
                        <SiPhp className='language' />PHP
                        </Link>
                        <Link to='#' >
                        <SiJava className='language' />JAVA
                        </Link>
                        <Link to='#'>
                        <SiGoland className='language' />GoLand
                        </Link>
                        <Link to='#' >
                        <IoLogoPython className='language' />Python
                        </Link>
                        <Link to='#' >
                        <SiTypescript className='language' />TS
                        </Link>
                        <Link to='#' >
                        <SiFlask className='language' />Flask
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
