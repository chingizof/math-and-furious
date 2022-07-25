import './index.css'
import { Link } from 'react-router-dom'
import { Footer } from '../footer'

export const HomeDescription = () => {

    return(
        <div class="wrapper">
            <div className="container">
                <div className='container-description'>
                    <h1 className='container-text'>Start playing Fast & Furious: develop your mental math skills and have fun together</h1>
                    {/* start playing button  */}
                    <div className="play-now">
                        <Link to="/game">
                            Start Now!
                        </Link>
                    </div>
                </div>
            </div>
            <div className="why-solve-math">
                <h1>Why Solve Math?</h1>
            </div>
            <div className='home-why'>
                <div className='container-item'>
                    <div className='inner-item left'>
                        <h1>Fast Thinking</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet nibh ut odio vulputate porttitor nec ut eros. Ut fermentum</span>
                        <img src="https://www.wallpaperflare.com/static/452/109/152/furious-7-fast-and-the-furious-hd-4k-wallpaper.jpg" alt=""/>
                    </div>
                </div>
                <div className='container-item'>
                    <div className='inner-item right'>
                        <h1>Interview Preparation</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet nibh ut odio vulputate porttitor nec ut eros. Ut fermentum</span>
                        <img src="https://images.hdqwalls.com/download/fast-and-furious-9-the-fast-saga-2020-3r-1920x1080.jpg" alt=""/>
                    </div>
                </div>
                <div className='container-item'>
                    <div className='inner-item left' style={{marginBottom:'40px'}}>
                        <h1>Keeping mind in shape</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet nibh ut odio vulputate porttitor nec ut eros. Ut fermentum</span>
                        <img src="https://cdn.wallpapersafari.com/58/99/M3agOj.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}