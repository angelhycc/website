import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCss3, faHtml5, faPython, faReact, faGit, faInnosoft, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import gradimg from '../../assets/images/grad.png'
import mtheater from '../../assets/images/mtheater.png'
import tower from '../../assets/images/tower.png'



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
         }, 3000)
    }, [])
    return(
        <>
        <img src={mtheater} alt='mtheater' className='mtheater' />
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm','e']} idx={15}/>
                </h1>
                <p> I am currently a senior studying at the University of Michigan - Ann Arbor majoring in
                    Computer Science and minoring in Electrical Engineering and Art History.
                    As a computer science student, I have experience in machine learning projects and also web designing projects.
                    </p>
                <p> I am a fast learner and am never afraid to learn new things as I encounter them.
                    In addition to my enthusiasm, I am also an easygoing person with a tactful personality.</p>
                <p> In addition to computer science and technical related skills,
                    I am also passionate about designing and art as a side project.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='black'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='black'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='black'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='black'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGit} color='black'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faInstagramSquare} color='black'/>
                    </div>
                </div>
            </div>
        </div>
        <img src={gradimg} alt='grad' className='grad' />
        {/* <img src={tower} alt='tower' className='tower' /> */}
        <Loader type="line-scale-pulse-out-rapid" />
        </>
    )
}

export default About