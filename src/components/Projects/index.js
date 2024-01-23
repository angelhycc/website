import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'



const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
         }, 3000)
    }, [])
    return(
        <>
        <div className='container project-page'>
            <nav>
                    <ul>
                        <li>
                            <a href='/projects/r10k'>r10k out of order processor</a>
                        </li>
                        <li>
                            <a>web systems</a>
                        </li>
                        <li>
                            <a>machine learning</a>
                        </li>
                        <li>
                            <a>language detector</a>
                        </li>
                    </ul>
                </nav>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15}/>
                </h1>
                <div className='project'>
                    <h2>
                        <AnimatedLetters letterClass={letterClass} strArray={['R10k',' ', 'out-of-order',' ', 'processor']}/>
                    </h2>
                    <p>
                        Built a consistent and coherent out of order processor with 4 other group members with basic features following the Intel R10k chip design, and achieved a very high performance (class highest performance) by adding on advanced features (branch predictor etc.).
                    </p>
                    <a href='https://drive.google.com/file/d/1xgjUD3AN-w8FN14ZdNiOBrdyLxMZQf60/view?usp=sharing' target="_blank"> See our paper here</a>
                </div>
            </div>
        </div>
        <Loader type="line-scale-pulse-out-rapid" />
        </>
    )
}

export default Projects