import { useState } from 'react';
import { toast } from "react-toastify"

function BookmarkForm() {
    function handleOutsideFormClick(target) {
        if (document.getElementsByClassName("form-container")[0].contains(target)) return;
        document.getElementById("book-form").classList.toggle("displayNone")
    }

    const [novelType, setNovelType] = useState("Manga")
    function handleTypeClick(target) {
        if (novelType === target.value) return
        setNovelType(target.value)
        document.getElementById("manga-button").classList.toggle("active")
        document.getElementById("manhwa-button").classList.toggle("active")
    }

    function handleSubmitForm(type, title, link, author, key) {
        if (title === "" || link === "" || author === "" || key === "") {
            toast.warn(
                "Please Complete Form",
                { theme: 'dark', autoClose: 1500, hideProgressBar: true, pauseOnHover: false}
            )
            return;
        }
        fetch(`https://x9nifekwkb.execute-api.us-east-1.amazonaws.com/dev/add-to-bookmarks?key=${key}&title=${title}&type=${type}&link=${link}&author=${author}`)
        .then(response => response.json())
        .then(data => {
            if (data['insertedId'] === undefined) {
                toast.warn(
                    "Unable To Add Bookmark",
                    { theme: 'dark', autoClose: 1500, hideProgressBar: true, pauseOnHover: false}
                )
            } else {
                toast.success(
                    "Book Added To Library",
                    { theme: 'dark', autoClose: 1500, hideProgressBar: true, pauseOnHover: false}
                )
            }
        });

    }

    return (
        <div id="book-form" className='add-book-form displayNone' onClick={e => handleOutsideFormClick(e.target)}>
            <div className="form-container">
                <div className="form-header">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                    <p>Add Bookmark To Library</p>
                    <button onClick={e => handleOutsideFormClick()}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
                    </button>
                </div>
                <div className="type-selector">
                    <button id="manga-button" className="active" value={"Manga"} onClick={e => handleTypeClick(e.target)}>Manga</button>
                    <button id="manhwa-button" value={"Manhwa"} onClick={e => handleTypeClick(e.target)}>Manhwa</button>
                </div>
                <div className="input-forms">
                    <div className="form1">
                        <p>Series Title</p>
                        <p>URL Link</p>
                        <input id='title-input' placeholder="Title"></input>
                        <input id='link-input' placeholder="Link"></input>
                    </div>
                    <div className="form2">
                        <p>Author(s)</p>
                        <input id='author-input' className="form-input" placeholder="Author(s)"></input>
                    </div>
                    <div className="form3">
                        <p>Admin Key</p>
                        <input id='key-input' className="form-input" placeholder="Admin Key"></input>
                    </div>
                </div>
                <div className="form-footer">
                    <button onClick={e => handleSubmitForm(novelType, document.getElementById("title-input").value, document.getElementById("link-input").value, document.getElementById("author-input").value, document.getElementById("key-input").value)}>Add Bookmark</button>
                </div>
            </div>
        </div>
    )
}

export default BookmarkForm;
