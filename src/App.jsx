
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time,id) =>{
    setReadingTime(readingTime+time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id!==id);
    setBookmarks(remainingBookmarks);
  }

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks);

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
