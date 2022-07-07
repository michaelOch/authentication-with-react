import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './services/auth';
import RequireAuth from './components/RequireAuth/RequireAuth';
import PersistLogin from './components/PersistLogin/PersistLogin';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/index/index';
import Profile from './pages/profile/profile';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/** Protected Routes */}
                    <Route element={<PersistLogin />}>
                        <Route element={<RequireAuth />}>
                            <Route path='/' element={<Home />} />
                        </Route>
                        <Route element={<RequireAuth />}>
                            <Route path='/home' element={<Home />} />
                        </Route>
                        <Route element={<RequireAuth />}>
                            <Route path='/profile' element={<Profile />} />
                        </Route>
                    </Route>
                    <Route
                        path='/login'
                        element={<Login />}
                    />
                    <Route
                        path='/register'
                        element={<Register />}
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
