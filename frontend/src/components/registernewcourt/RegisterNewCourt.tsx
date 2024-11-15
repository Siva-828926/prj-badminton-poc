import { useEffect, useState } from "react";
import {
  IFormRegisterNewCourt,
  IFormRegisterNewCourtHeadings,
  loadRegisterNewCourtFormHeadings,
} from "../../constants/AppConstants";

const RegisterNewCourt = () => {
  const [fromValues, setFormValues] = useState<IFormRegisterNewCourt>();
  const [formHeadings, setFormHeadings] =
    useState<IFormRegisterNewCourtHeadings[]>();
  useEffect(() => {
    setFormHeadings(loadRegisterNewCourtFormHeadings());
  });
  return (
    <div>
      <div>
        {formHeadings?.map((headings, index) => (
          <h1>{headings.placeHolder}</h1>
        ))}
      </div>
    </div>
  );
};

export default RegisterNewCourt;
