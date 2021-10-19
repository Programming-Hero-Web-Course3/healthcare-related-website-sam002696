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
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3">Find a doctor who is the perfect match for your medical needs. Use the tools below to search for a doctor by name, specialty, gender, service line or practice location.</h1>
            </div>
            <div className="grid lg:grid-cols-3 p-36 gap-8 sm:p-20">
                {
                    doctors.map(doctor => <DoctorStyling doctor={doctor} key={doctor.id}></DoctorStyling>)
                }
            </div>
        </div>
    );
};

export default Doctor;