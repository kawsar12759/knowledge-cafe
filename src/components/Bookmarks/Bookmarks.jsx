import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3  ml-4 mt-2 pt-4">
            <div className='bg-blue-200 py-3 border-2 border-blue-600 rounded-xl mb-4'>
                <h3 className='text-2xl text-center text-blue-600 font-semibold'>Spent Time on Read: {readingTime} Min</h3>
            </div>
            <div className='bg-gray-200 min-h-screen rounded-xl'>
                <h2 className=' text-2xl font-bold text-center pt-4'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
}

export default Bookmarks;