import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login/login';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={<Login />}
                />
            </Routes>
        </Router>
    );
}

export default App;
