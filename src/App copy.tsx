import React from 'react';
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
  return <div style={{ width: space ?? 10 }} />;
}

export default function App() {

  return <div id="containr">
    <div id="header">
      <button>Home</button>
      <button>¿Quienes Somos?</button>
      <button>Login</button>
    </div>
    <div id="body">

      <button>Home</button>
      <Space space={10} />
      <button>¿Quienes Somos?</button>
      <button>Login</button>
      <button>Login</button>
      <Space space={20} />
      <button>Login</button>
      <button>Login</button>
      <button>Login</button>
      <button>Login</button>
      <button>Login</button>
      <button>Login</button>
      <button>Login</button>
      <button>Login</button>
      <button>Login</button>
      <button>Login</button>
      <button>Login</button>
      <button>Login</button>
    </div>

  </div>

}
