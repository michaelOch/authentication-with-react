import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/index/index';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={<Login />}
                />
                <Route
                    exact
                    path='/register'
                    element={<Register />}
                />
                <Route
                    exact
                    path='/home'
                    element={<Home />}
                />
            </Routes>
        </Router>
    );
}

export default App;
