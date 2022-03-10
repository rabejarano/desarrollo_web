import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

// npm install --save react-router-dom
// npm install --save @types/react-router-dom

export default function App() {

  return <Router >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/:id" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router >;
}

function Home() {
  let navigate = useNavigate();

  return <div>
    <h2>Home</h2>
    <button onClick={() => {
      navigate('/about/12345667', { replace: true });
    }}>navigate to about</button>
    <button onClick={() => {
      navigate(-1);
    }}>atras</button>
    <button onClick={() => {
      navigate('/', { replace: true });
    }}>reset navigator</button>
  </div >;
}

type QueryParams = { id: string };

function About() {
  let params: Readonly<Partial<QueryParams>> = useParams<QueryParams>();
  let navigate = useNavigate();

  return <div>

    <h2>About {params.id}</h2>;

    <button onClick={() => {
      navigate(-1);
    }}>Atras</button>
  </div >;

}

function Users() {
  let navigate = useNavigate();
  return <div>

    <h2>Users</h2>;
    <button onClick={() => {
      navigate('/', { replace: true });
    }}>Atras</button>
  </div >;
}

function NotFound() {
  return <h2>404</h2>;
}
