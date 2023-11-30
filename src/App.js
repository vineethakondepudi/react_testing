import React from 'react';
import LoginForm from './LoginForm';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div>
      {/* <Router>
        <Route path="/" element={LoginForm}/>
      </Router> */}
      <LoginForm />
    </div>
  )
}
