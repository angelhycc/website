import './index.scss'

const Minesweeper = () =>{
    return (
        <>
        {/* <script src="minesweeper.js"/> */}
        <div className='game-area'>
            <div id="field">
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
                <div class="cell active dark"></div>
                <div class="cell active"></div>
            </div>
        </div>
        </>
    )
}

export default Minesweeper
