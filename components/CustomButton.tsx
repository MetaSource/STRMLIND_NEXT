"use client";

const CustomButton = () => {
    return (
      <button 
      disabled={false}
      type={"button"}
      className={`custom-btn`}
      onClick={ ()=> {}}>

        <span className={`flex-1`}>
              Learn More 
        </span>
      </button>  
    )
  }

export default CustomButton