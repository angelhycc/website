import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'



const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
         }, 3000)
    }, [])
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15}/>
                </h1>
            </div>
        </div>
        <Loader type="line-scale-pulse-out-rapid" />
        </>
    )
}

export default Project