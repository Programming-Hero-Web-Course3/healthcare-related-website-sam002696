import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const ServiceDetail = () => {
    const { serviceID } = useParams();
    const [services, setServices] = useState([]);
    const [singleServiceDetails, setSingleServiceDetails] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/prangancode/homeservices-data/main/homeService.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    useEffect(() => {
        const getService = services.find(serviceDetails => serviceDetails.id == serviceID);
        console.log(getService);
        setSingleServiceDetails(getService);
    }, [serviceID, services]);

    return (
        <div>
            {services.length === 0 ? <div className="flex items-center justify-center space-x-2 animate-bounce mt-28">
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                <div className="w-8 h-8 bg-black rounded-full"></div>
            </div> :

                <div className='lg:p-36 sm:p-10 space-y-10 text-center'>
                    <div>
                        <img className='mx-auto rounded-2xl' src={singleServiceDetails?.img_url} alt="" />
                    </div>
                    <div>
                        <h1 className='border-b-2 font-semibold mx-auto pb-5 text-3xl w-1/3 border-blue-400'> {singleServiceDetails?.service_name}</h1>
                        <h2 className='mx-auto sm:font-semibold sm:pt-5 sm:text-2xl sm:text-justify sm:w-5/6 text-3xl w-1/2'> {singleServiceDetails?.details_description}</h2>
                    </div>
                </div>
            }
        </div>
    );
};

export default ServiceDetail;