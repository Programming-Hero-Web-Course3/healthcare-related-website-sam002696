import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import BlogStyling from './BlogStyling';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./Blogs.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            <div>
                <h1 className='font-bold p-10 text-5xl text-center'>Our Blogs</h1>
            </div>
            <div>
                <h1 className="mx-auto text-3xl text-center w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique at mollitia, corporis ullam exercitationem ipsam qui cupiditate aliquam officia earum quae a voluptas? Nobis perspiciatis ipsa architecto porro laborum officiis.</h1>
            </div>
            <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    blogs.map(blog => <BlogStyling blog={blog} key={blog.id}></BlogStyling>)
                }
            </div>
        </div>
    );
};

export default Blog;