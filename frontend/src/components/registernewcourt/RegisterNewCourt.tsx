import { useEffect, useState } from "react";
import {
  IFormRegisterNewCourt,
  IFormRegisterNewCourtHeadings,
  loadRegisterNewCourtFormHeadings,
} from "../../constants/AppConstants";
import SubHeader from "../subcomponents/SubHeader";

const RegisterNewCourt = () => {
  const [fromValues, setFormValues] = useState<IFormRegisterNewCourt>({});
  const [formHeadings, setFormHeadings] =
    useState<IFormRegisterNewCourtHeadings[]>();
  const [courtList, setCourtList] = useState<string[]>();
  const [courtCount, setCourtCount] = useState<number>(1);
  useEffect(() => {
    setFormHeadings(loadRegisterNewCourtFormHeadings());
    setCourtCount(1);
  });

  const handleInputChange = (e) => {};

  const handleFileUpload = () => {};

  const registerNewCourtHandler = () => {};
  return (
    <>
      <SubHeader heading="Register New Court" />

      <form>
        <div className="flex items-center justify-center mt-5">
          <div className="flex flex-col items-center w-full">
            {formHeadings?.map((headings) => (
              <div
                key={headings.heading}
                className="flex items-center justify-between mb-4 w-full mt-2"
              >
                <h6 className="mr-4 text-right w-1/3">
                  {headings.placeHolder}
                </h6>
                {headings.type == "text" ? (
                  <input
                    type={headings.type}
                    placeholder={headings.placeHolder}
                    id={headings.heading}
                    value={fromValues[headings.heading] || ""}
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm w-1/3"
                  />
                ) : headings.type == "button" ? (
                  <button className="bg-green"> upload </button>
                ) : (
                  courtList?.map((court) => (
                    <div>
                      <input type="text" />
                      <button> Add </button>
                    </div>
                  ))
                )}

                <div className="w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={registerNewCourtHandler}> Register </button>
      </form>
    </>
  );
};

export default RegisterNewCourt;
