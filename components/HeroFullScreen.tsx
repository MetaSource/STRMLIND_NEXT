"use client"

const HeroFullScreen = () => {
    const useOverlay = false;

    return (
      <div className='w-full h-screen min-h-[500px]'>
        
        <img
          className='top-0 left-0 absolute w-full h-screen min-h-[500px] object-cover'
          src='/bg-1.jpeg'
          alt='/'
        />
        
        {useOverlay? <div className='bg-black/10 absolute top-0 left-0 w-full h-screen' />: null}
       
        <div className='absolute top-0 w-full h-screen flex flex-center justify-center'>
          <div className='md:left-[10%] max-w-[1100px] m-auto p-4'>
            <h1 className='hero__title'>STRMLIND</h1>
            <p className="hero__subtitle">Revolutionize your business today.</p>
            <button disabled={false} type={"button"} className={`custom-btn mt-20`}  >
               <a className="nav-link" href="#mission-section"><span>Learn More</span></a>
            </button> 
          </div>
        </div>
      </div>
    );
  };

export default HeroFullScreen