import Minesweeper from '../Minesweeper'
import './index.scss'
import Loader from 'react-loaders'


const GamePage = () => {
    return (
    <>
    <div className='container game-page'>
        <div className='minesweeper'>
            <Minesweeper/>
        </div>
    </div>
    <Loader type='line-scale-pulse-out-rapid'/>
    </>
    )
}

export default GamePage