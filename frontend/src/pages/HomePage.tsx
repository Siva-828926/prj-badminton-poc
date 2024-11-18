import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BookCourtPage from "./BookCourtPage";
import AdminDashboardPage from "./AdminDashboardPage";
import UserDashboardPage from "./UserDashboardPage";
import RegisterNewCourtPage from "./RegisterNewCourtPage";
import EmptyPage from "./EmptyPage";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full bg-gradient-to-r from-white to-black">
        <Header />
      </div>

      <div className="flex-grow p-4">
        <div className="flex items-center justify-center min-h-full m-4">
          <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
            <Routes>
              <Route path="/" element={<EmptyPage />} />
              <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
              <Route path="/user/dashboard" element={<UserDashboardPage />} />
              <Route path="/user/bookcourt" element={<BookCourtPage />} />
              <Route
                path="/admin/registernewcourt"
                element={<RegisterNewCourtPage />}
              />
            </Routes>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-l from-white to-black">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
