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
