import './index.css'

export const WhySolve = () => {
    return (
        <div className='background' style={{ backgroundImage: `url(/back.svg)` }}>
            <div className="why-solve-math">
                <h1>Why Solve Math?</h1>
            </div>
            <div className='home-items'>
                <div className='inner-item '>
                    <h1>Fast Thinking</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet nibh ut odio vulputate porttitor nec ut eros. Ut fermentum</span>
                    <img src="https://www.wallpaperflare.com/static/452/109/152/furious-7-fast-and-the-furious-hd-4k-wallpaper.jpg" alt=""/>
                </div>
                <div className='inner-item '>
                    <h1>Interview Preparation</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet nibh ut odio vulputate porttitor nec ut eros. Ut fermentum</span>
                    <img src="https://images.hdqwalls.com/download/fast-and-furious-9-the-fast-saga-2020-3r-1920x1080.jpg" alt=""/>
                </div>
                <div className='inner-item ' style={{marginBottom:'40px'}}>
                    <h1>Keeping mind in shape</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet nibh ut odio vulputate porttitor nec ut eros. Ut fermentum</span>
                    <img src="https://cdn.wallpapersafari.com/58/99/M3agOj.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}