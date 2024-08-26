import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div className='mt-8'>
            <img className='w-full h-96 mb-8 rounded-lg' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center text-xl font-medium text-gray-400 '>
                    <span className='mr-2'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className='text-xl font-medium text-gray-400 '>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>{hash} </a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline mt-2'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;