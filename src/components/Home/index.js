import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import './index.scss'
import cloud1 from '../../assets/images/cloud1.png'
import cloud2 from'../../assets/images/cloud2.png'
import IMG from '../../assets/images/taiwan.png'
import AnimatedLetters from '../AnimatedLetters'
import DraggableElement from '../DraggableElement'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['A', 'n', 'g', 'e', 'l']
    useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    }, [])
    return (
        <>
        <div className='container home-page'>
            <DraggableElement image={cloud1} idx='1'/>
            {/* <img src={cloud1} alt='taipei' className='cloud _1'/> */}
            <DraggableElement image={cloud2} idx ='2'/>
            <div className='text-zone'>
                <h1>
                    <span>Hi, <br/> I'm </span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    {/* <img src={IMG} alt=''/> */}
                </h1>
                <Link to ='/contact' className='flat-button'> CONTACT ME </Link>
            </div>
        </div>
        <img src={IMG} alt='taipei' className='taipei' />
        <Loader type="line-scale-pulse-out-rapid" />
        </>
    )
}

export default Home