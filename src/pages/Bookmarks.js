import DataBaseSkeleton from '../component/DatabaseSkeleton';
import BookmarkForm from '../component/BookmarkForm';
import '../styles/index.css';
import { useEffect, useState } from 'react';


function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    fetch("https://x9nifekwkb.execute-api.us-east-1.amazonaws.com/dev/get-bookmarks")
    .then(response => response.json())
    .then(data => {
      setCount(data["documents"].length);
      setTimeout(() => {
        document.getElementById("db-content-skeleton").classList = "displayNone"
        setBookmarks(data["documents"])
      }, 200);
    });
  }, []);

  const [type, setType] = useState("ALL");

  function handleTypeClick(buttonType, target) {
    document.getElementById("sort-all-button").classList = "";
    document.getElementById("sort-manga-button").classList = "";
    document.getElementById("sort-manhwa-button").classList = "";
    target.classList.toggle("active")
    setType(buttonType)
    setTimeout(() => {
      setCount(Array.from(document.getElementById("db-content").children).length - 1)
    }, 50);  }

  const [search, setSearch] = useState(""); 

  function handleSearchInput(target) {
    setSearch(target.value.trim().toLowerCase())
    setTimeout(() => {
      setCount(Array.from(document.getElementById("db-content").children).length - 1)
    }, 50);
  }  

  function handleAddClick() {
    document.getElementById("book-form").classList.toggle("displayNone")
  }

  return (
    <>
      <div className='side-nav'>
        <div className='nav-header'>
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M64 480H48a32 32 0 01-32-32V112a32 32 0 0132-32h16a32 32 0 0132 32v336a32 32 0 01-32 32zM240 176a32 32 0 00-32-32h-64a32 32 0 00-32 32v28a4 4 0 004 4h120a4 4 0 004-4zM112 448a32 32 0 0032 32h64a32 32 0 0032-32v-30a2 2 0 00-2-2H114a2 2 0 00-2 2z"/><rect x="112" y="240" width="128" height="144" rx="2" ry="2"/><path d="M320 480h-32a32 32 0 01-32-32V64a32 32 0 0132-32h32a32 32 0 0132 32v384a32 32 0 01-32 32zM495.89 445.45l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85 3c-17.59 1.67-30.65 15.71-29.17 31.36l32.23 340c1.48 15.65 16.94 27 34.53 25.31l31.85-3c17.59-1.67 30.65-15.71 29.17-31.36z"/></svg>
          <p>Library</p>
        </div>
        <div className='link-container'>
          <a href='#/' draggable="false">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 00-17.92 5.33A32 32 0 0016 79.9V366c0 19.34 13.76 33.93 32 33.93 71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 006.94-3V106.82a15.89 15.89 0 00-5.46-12A143 143 0 00202.24 74zM481.92 53.3A31.33 31.33 0 00464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 00-32.31 20.78 15.93 15.93 0 00-5.45 12v337.13a3.93 3.93 0 006.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0032-32v-288a32 32 0 00-14.12-26.61z"/></svg>
            <p>Owned Books</p>
          </a>
          <a className='active' href='#/bookmarks' draggable="false">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z"/></svg>              
            <p>Bookmarks</p>
          </a>
        </div>
      </div>
      <div id='main' className='main-content'>
        <BookmarkForm></BookmarkForm>
        <div className='main-content-header'>
          <div className='db-search'>
            <input id='db-search-input' placeholder='Search Titles..' onInput={e => handleSearchInput(e.target)}></input>
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"/></svg>
          </div>
          <button onClick={e => handleAddClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>
            <p>Add</p>
          </button>
        </div>
        <div className='db-title'>
          <h2>Bookmarks</h2>
          <p>{count} Total</p>
          <div className='sort-methods'>
            <button id='sort-all-button' className='active' value="ALL" onClick={e => handleTypeClick(e.target.value, e.target)}>All</button>
            <button id='sort-manga-button' value="MANGA" onClick={e => handleTypeClick(e.target.value, e.target)}>Manga</button>
            <button id='sort-manhwa-button' value="MANHWA" onClick={e => handleTypeClick(e.target.value, e.target)}>Manhwa</button>
          </div>
        </div>
        <div className='bookmarks-db-container'>
          <div className='db-header'>
            <p>Type</p>
            <p>Title</p>
            <p>Link</p>
            <p>Author</p>
          </div>
          <div id='db-content'>
            <div id='db-content-skeleton'>
              <DataBaseSkeleton></DataBaseSkeleton>
            </div>
            {bookmarks.map(bookmark => {
                // bookmark function
                function createNovel(bookmark) {
                    return (
                    <div className='bookmark'>
                        <p>{bookmark.type}</p>
                        <p>{bookmark.title}</p>
                        <a href={bookmark.link} target='_blank'>
                            <p className='link-label'>Link</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                        </a>
                        <p>{bookmark.author}</p>
                    </div>
                    )
                }

                if (type === "ALL") {
                    // all
                    if (bookmark.title.toLowerCase().indexOf(search) === -1) return;
                    return (createNovel(bookmark))
                } else if (type === "MANGA") {
                    // manga
                    if (bookmark.type === "Manga") {
                    if (bookmark.title.toLowerCase().indexOf(search) === -1) return;
                    return (createNovel(bookmark))
                    }
                } else if (type === "MANHWA") {
                    // manhwa
                    if (bookmark.type === "Manhwa") {
                    if (bookmark.title.toLowerCase().indexOf(search) === -1) return;
                    return (createNovel(bookmark))
                    }
                }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookmarks;
