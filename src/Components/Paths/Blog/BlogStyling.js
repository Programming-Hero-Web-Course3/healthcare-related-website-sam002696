import React from 'react';
import Fade from 'react-reveal/Fade';


const BlogStyling = (props) => {
    const { blog_name, description, img } = props.blog;
    return (
        <Fade top cascade>
            <div className=" ring-4 ring-gray-300 rounded-xl shadow-xl">
                <img className="rounded-t-xl  w-full  object-cover" src={img} alt="" ></img>
                <div className="flex flex-col p-7">
                    <div className="flex flex-row">
                        <div className=" text-xs uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl line-clamp-1 hover:line-clamp-none">
                            {blog_name}
                        </div>
                    </div>
                    <div>

                        <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none font-medium">
                            {description} </p>

                    </div>
                </div>
            </div>
        </Fade>

    );
};

export default BlogStyling;