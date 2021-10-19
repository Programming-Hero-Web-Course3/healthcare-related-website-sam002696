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
                <h1 className="mx-auto text-3xl text-center w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique at mollitia, corporis ullam exercitationem ipsam qui cupiditate aliquam officia earum quae a voluptas? Nobis perspiciatis ipsa architecto porro laborum officiis.</h1>
            </div>
            <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    services.map(service => <ServiceStyling service={service} key={service.id}></ServiceStyling>)
                }
            </div>
        </div>
    );
};

export default Service;