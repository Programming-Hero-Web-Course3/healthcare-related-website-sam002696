import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeDoctor from './HomeDoctor';
import HomeService from './HomeService';

const Home = () => {
    const [homeServices, setHomeServices] = useState([]);
    const [homeDoctors, setHomeDoctors] = useState([]);
    useEffect(() => {
        fetch('./homeService.JSON')
            .then(res => res.json())
            .then(data => setHomeServices(data));
    }, [])
    useEffect(() => {
        fetch('./homeDoctors.JSON')
            .then(res => res.json())
            .then(data => setHomeDoctors(data))
    }, [])
    return (
        <div>
            <div className='bg-gray-100 lg:flex lg:flex-row justify-evenly m-12 p-10 rounded-3xl sm:flex-col-reverse sm:flex'>

                <div className='flex-col self-center sm:pt-1.5 sm:w-11/12 w-1/3'>
                    <h1 className='font-bold text-5xl'>Your <span className='hover:text-green-600 text-blue-600'>Healthy Life</span> is Our First Priority</h1>
                    <p className='mt-10 text-2xl'>You might think that making your health your number one priority in life is impossible, what with work, family, friends, religion, and whatever else you have going on. Trust me, now is the time to start putting yourself and your health first. Why, you might ask – because when you are healthy, every other aspect of your life is much more enjoyable for you and those around you.</p>
                    <Link to='/doctor'> <button className="bg-white border border-gray-400 font-semibold hover:bg-blue-600 hover:text-white mt-16  px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                        Doctors
                    </button>
                    </Link>
                </div>


                <div>
                    <img src='https://disin-react.hibootstrap.com/images/home-three/home-three-banner1.png' alt="study" />
                </div>
            </div>

            {/* Services */}

            <div>
                <h1 className='font-bold p-10 text-5xl text-center'>Discover Our <span className='text-green-600'>Services</span></h1>
            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3">It has always been our belief that the most effective use of our time as financial professionals is servicing our clients. Our clients are always our first priority, and we believe that focusing on helping them pursue their financial goals is the key to building the foundation for a strong relationship.</h1>
            </div>

            <div className="gap-8 grid lg:grid-cols-3 p-36 sm:p-20">
                {
                    homeServices.map(homeService => <HomeService homeService={homeService} key={homeService.id}></HomeService>)
                }
            </div>

            {/* Expertise */}
            <div>
                <h1 className='font-black text-5xl text-center'>Our Expertise</h1>
            </div>
            <div className='lg:grid lg:grid-cols-3 items-end lg:p-36 sm:grid sm:grid-cols-1 sm:p-5'>
                <div className='lg:col-span-2 sm:ml-10'>

                    <div>
                        <h1 className='border-b-2 border-blue-400 font-sans lg:pb-5 lg:text-5xl lg:w-1/3 sm:pb-5 sm:pt-1.5 sm:text-4xl sm:text-center sm:w-11/12'>Our Speciality</h1>
                    </div>
                    <div className='gap-4 lg:grid lg:grid-cols-2 mt-24 sm:grid sm:grid-cols-1'>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl'>Child Care</h1>
                                <p className='sm:text-justify'>Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years</p>
                            </div>
                        </div>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl'>24 Hour Doctor</h1>
                                <p className='sm:text-justify'>Healthline is available to call 24 hours per day/7 days a week on 0800 611 116 for free health advice, including interpreter services and NZ Relay Services.</p>
                            </div>
                        </div>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl'>More Stuff</h1>
                                <p className='sm:text-justify'>You can see us for any urgent medical issue that you would otherwise see your GP for, as well as accident related injuries such as sprains, cuts or broken bones.</p>
                            </div>
                        </div>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl'>Enough Lab</h1>
                                <p className='sm:text-justify'>Adequate facilities, equipment, and supplies for laboratory experiences are inequitably distributed.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-1'>
                    <img className='lg:rounded-2xl sm:p-11 sm:rounded-full lg:p-0.5' src="https://disin-react.hibootstrap.com/images/about4.jpg" alt="" />
                </div>
            </div>

            {/* Doctors */}

            <div>
                <h1 className='font-bold p-10 text-5xl text-center'>Our <span className='text-blue-600'>Doctors</span></h1>
            </div>
            <div>
                <h1 className="mx-auto sm:w-11/12 text-3xl text-center w-2/3">Find a doctor who is the perfect match for your medical needs. Use the tools below to search for a doctor by name, specialty, gender, service line or practice location.</h1>
            </div>
            <div className="gap-8 grid lg:grid-cols-3 p-36 sm:p-20">
                {
                    homeDoctors.map(homeDoctor => <HomeDoctor homeDoctor={homeDoctor} key={homeDoctor.id}></HomeDoctor>)
                }
            </div>

        </div>


    );
};

export default Home;