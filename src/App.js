import './styles/index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Books from "./pages/Books"
import Bookmarks from "./pages/Bookmarks"

function App() {
  return (
    <HashRouter>
      <div className="site-wrapper">
        <ToastContainer limit={5}/>
        <Routes>
          <Route exact path="/" element={<Books></Books>}></Route>
          <Route path="/bookmarks" element={<Bookmarks></Bookmarks>}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
