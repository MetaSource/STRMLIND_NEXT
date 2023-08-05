"use client"; 



const Services = () => {

  const serviceList = [
      { serviceName : "Digital FootPrint", 
        descrition: "Every business needs a strong digital presence to remain competitive in todays digital landscape. As a solution we provide simple package that includes Domain + Website."
      },
      { serviceName : "Online Store", 
        descrition: "Let us handle the fuss of building and setting up your online store. Choose from the available commerce templates or optionally a custom store with Payment Integrations."
      },
      { serviceName : "Apps", 
        descrition: "Have an idea that you need to bring to market? We can build end to end software solutions for all your business needs."
      } ]; 


  return (
    <div className="bg-[#E0E0DB] flex-center flex-col justify-center p-4 pt-12 md:p-16">
        <h1 className="contact__title text-center">Our Services</h1>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mb-16">
            {serviceList.map((service, serviceIndex) => 
                (<li key={serviceIndex} className="max-w-lg p-2">
                    <h2 className="mt-6 text-[16px] md:text-[18px] font-light">{service.serviceName}</h2>
                    <p className="mt-4 text-[14px] md:text-[14px]">{service.descrition}</p>
                </li>)
            )}
        </ul>
    </div>
  )
}

export default Services