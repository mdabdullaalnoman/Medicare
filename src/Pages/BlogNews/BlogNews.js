import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';
import './Blogs.css';

const BlogNews = () => {
    const [blogs , setBlogs] = useState([]);

    useEffect( () => {
        fetch('./news.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <Navbar/>
            <h1 className="blog-tittle">Our Blogs</h1>
            <div className="blogs">
                {
                    blogs.map(blog => 
                        <div className="blog body-padding" key={blog.id}>
                            <h1>{blog.tittle}</h1>
                            <p>{blog.description}</p>
                        </div>
                        )
                }
            </div>
            <Footer/>
        </div>
    );
};

export default BlogNews;