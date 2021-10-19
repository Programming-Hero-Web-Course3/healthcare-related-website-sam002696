import React, { useEffect, useState } from 'react';
import DoctorStyling from './DoctorStyling';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div>
            <div>
                <h1 className='font-bold p-10 text-5xl text-center'>Our Doctors</h1>
            </div>
            <div>
                <h1 className="mx-auto text-3xl text-center w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique at mollitia, corporis ullam exercitationem ipsam qui cupiditate aliquam officia earum quae a voluptas? Nobis perspiciatis ipsa architecto porro laborum officiis.</h1>
            </div>
            <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    doctors.map(doctor => <DoctorStyling doctor={doctor} key={doctor.id}></DoctorStyling>)
                }
            </div>
        </div>
    );
};

export default Doctor;