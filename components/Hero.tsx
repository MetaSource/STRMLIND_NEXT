"use client"

export const Hero = () => {
  return (
    <div className="hero w-full h-screen bg-cover bg-no-repeat bg-wave ">
        <div className="flex-1 pt-36 padding-x">
            <h1 className='hero__title'>
                STRMLIND 
            </h1>

            <p className="hero__subtitle">Revolutionize your business today.</p>

            <button disabled={false} type={"button"} className={`custom-btn`} onClick={ ()=> {}}>
                <span className={""}>Learn More</span>
            </button>  
        </div>
    </div>
  )
}
