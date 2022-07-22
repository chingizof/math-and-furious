import './index.css'

export const GamesCatalogue = () => {
    return(
        <div className="find-wrapper">
            <div className="find-button" onClick={handleClick}>
                        <Link to="/game">
                            Find New Game
                        </Link>
                </div>
        </div>
    )
}