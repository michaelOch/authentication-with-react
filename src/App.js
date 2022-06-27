import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './services/auth';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/index/index';
import Profile from './pages/profile/profile';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <RequireAuth>
                                <Home />
                            </RequireAuth>
                        }
                    />
                    <Route
                        exact
                        path='/home'
                        element={
                            <RequireAuth>
                                <Home />
                            </RequireAuth>
                        }
                    />
                    <Route
                        exact
                        path='/login'
                        element={<Login />}
                    />
                    <Route
                        exact
                        path='/register'
                        element={<Register />}
                    />
                    <Route
                        exact
                        path='/profile'
                        element={
                            <RequireAuth>
                                <Profile />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
