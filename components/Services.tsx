"use client"; 



const Services = () => {

  const serviceList = [
      { serviceName : "Digital FootPrint", 
        descrition: "Every business needs a strong digital presence to remain competitive in todays digital landscape. As a solution we provide simple package that includes a domain and an elegant landing page with basic contact integration."
      },
      { serviceName : "Consultation", 
        descrition: "We can design the exact solution your business needs. Schedule a consultation with us today and lets get started crafting the perfect roadmap for your business."
      }, 
      { serviceName : "Apps", 
        descrition: "Have an idea that you need to bring to market? We can build intuitive, elegant, and scalable end to end software solutions for your every business need."
      } ]; 


  return (
    <div id="services-section" className="bg-[#E0E0DB] flex-center flex-col justify-center p-4 pt-12 md:p-16">
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