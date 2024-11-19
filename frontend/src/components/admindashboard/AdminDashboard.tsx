import SubHeader from "../subcomponents/SubHeader";

const AdminDashboard = () => {



  const fetchDetailsHandler = () =>
  {
    
  }
  return (
    <>
      <SubHeader heading={"Admin Dashboard"} />
      <div className="flex items-center justify-center mt-5">
        <div className="flex items-center">
          <input
            type="number"
            placeholder="Enter mobile number"
          
           
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
          />
          <button

            className="mb-4 p-2 bg-blue-500 text-white rounded focus:outline-none focus:ring-2 shadow-sm ml-2 font-medium font-roboto"
          >
            {" "}
            Fetch Details{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
