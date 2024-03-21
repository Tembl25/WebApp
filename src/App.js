import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import FilmsPage from "./components/filmsPage/FilmsPage";
import Footer from "./components/footer/Footer";
import Films from "./components/films/Films";
import Login from "./components/login/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/filmsPage" element={<FilmsPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<Outlet />}>
                        <Route path="/" element={<>
                            <Promo />
                            <Brands />
                            <Films />
                        </>} />
                    </Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
