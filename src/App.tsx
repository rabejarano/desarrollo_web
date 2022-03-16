import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/404';
import Users from './pages/users';
import './App.css';

function Space({ space }: { space?: number }) {
  return <div style={{ width: space ?? 8 }} />
}


export default function App() {

  return <div id="fullScreen">
    <div id="containerPink">
      <div id="leftRow">
        <div id="header"></div>
        <div id="screen"></div>
        <div id="users">
          <div className="user"></div>
          <div className="user"></div>
          <div className="user"></div>
          <div className="user"></div>
          <div className="user"></div>
          <div className="user"></div>
          <div className="user"></div>
          <div className="user"></div>
        </div>
      </div>
      <div id="rigthRow">
      </div>
    </div>
    <div id="containerBlue">
      <div id="sect1">
        <p>20:58</p>
        <Space space={16} />
        <p>|</p>
        <Space space={16} />
        <p>Llamada Clase</p>
      </div>
      <div id="sect2">
        <button className="genericButton">?</button>
        <button className="genericButton">?</button>
        <button className="genericButton">?</button>
        <button className="genericButton">?</button>
      </div>
      <div id="sect3">
        <button className="genericButton">?</button>
        <button className="genericButton">?</button>
        <button className="genericButton">?</button>
        <button className="genericButton">?</button>
      </div>
    </div>
  </div>

  // return <Router >
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about/:id" element={<About />} />
  //     <Route path="/users" element={<Users />} />
  //     <Route path="*" element={<NotFound />} />
  //   </Routes>
  // </Router >;
}
