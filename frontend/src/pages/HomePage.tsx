import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import RegisterNewCourtPage from "./RegisterNewCourtPage";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div  className="bg-gray-800 text-white p-4">
        <Header />
      </div>
      <div className="flex-grow bg-gray-100 p-4">
       <RegisterNewCourtPage />
      </div>
      <div className="bg-gray-800 text-white p-4">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
