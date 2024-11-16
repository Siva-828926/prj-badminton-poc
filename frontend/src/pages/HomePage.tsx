import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import RegisterNewCourtPage from "./RegisterNewCourtPage";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-black to-white">
        <Header />
      </div>
      <div className="flex-grow bg-gray-100 p-4">
       <RegisterNewCourtPage />
      </div>
      <div className="bg-gradient-to-r from-white to-black">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
