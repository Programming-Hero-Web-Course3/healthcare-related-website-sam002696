import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const HomeService = (props) => {
    const { service_name, img, description, id } = props.homeService;
    return (
        <Fade top cascade>
            <div className=" ring-4 ring-gray-300 rounded-xl shadow-xl">

                <img className="rounded-t-xl  w-full  object-cover " src={img} alt="" ></img>

                <div className="flex flex-col p-7">
                    <div className="flex flex-row">
                        <div className=" text-xs uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl line-clamp-1 hover:line-clamp-none">
                            {service_name}
                        </div>
                    </div>
                    <div>

                        <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none font-medium">
                            {description} </p>

                    </div>
                    <div>
                        <Link to={`/serviceDetail/${id}`}>
                            <button className="bg-white border border-gray-400 font-semibold hover:bg-gray-100 mt-4 px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                                See More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fade>

    );
};

export default HomeService;