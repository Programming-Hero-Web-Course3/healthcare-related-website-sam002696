import React, { useEffect, useState } from 'react';
import ServiceStyling from './ServiceStyling';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div>
                <h1 className='font-bold p-10 text-5xl text-center'>Discover Our Services</h1>
            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3">It has always been our belief that the most effective use of our time as financial professionals is servicing our clients. Our clients are always our first priority, and we believe that focusing on helping them pursue their financial goals is the key to building the foundation for a strong relationship.</h1>
            </div>
            <div className="grid lg:grid-cols-3 p-36 gap-8 sm:p-20">
                {
                    services.map(service => <ServiceStyling service={service} key={service.id}></ServiceStyling>)
                }
            </div>
        </div>
    );
};

export default Service;