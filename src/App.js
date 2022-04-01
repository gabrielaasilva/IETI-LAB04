import React, { useReducer } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import initialState from './utils';
import themeReducer from './utils';
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';

export default function App() {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login></Login>} />
                    <Route path="/home" element={<Home></Home>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
