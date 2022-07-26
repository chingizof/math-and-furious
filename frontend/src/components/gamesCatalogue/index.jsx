import './index.css'

export const GamesCatalogue = () => {
    return(
        <div className="find-wrapper">
            <div className="find-button" onClick={handleClick}>
                
                        <Link to="/game">
                            Connect to game
                        </Link>
                </div>
        </div>
    )
}