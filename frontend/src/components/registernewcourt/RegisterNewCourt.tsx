import { useEffect, useState } from "react";
import {
  IFormRegisterNewCourt,
  IFormRegisterNewCourtHeadings,
  loadFormDefaultValues,
  loadRegisterNewCourtFormHeadings,
} from "../../constants/AppConstants";
import SubHeader from "../subcomponents/SubHeader";
import { toast } from "react-toastify";
import * as Yup from "yup";
import * as ApiService from "../../service/ApiService";

const RegisterNewCourt = () => {
  const [formValues, setFormValues] = useState<IFormRegisterNewCourt>({});

  const [formHeadings, setFormHeadings] = useState<
    IFormRegisterNewCourtHeadings[]
  >([]);
  //const [courtList, setCourtList] = useState<{ name: string }[]>([]);

  const validationSchema = Yup.object().shape({
    mobileNo: Yup.number()
      .required("Mobile number is required")
      .positive("Mobile number must be positive")
      .integer("Mobile number must be an integer"),
    location: Yup.string()
      .required("Location is required")
      .min(2, "Location must be at least 2 characters long"),
    userName: Yup.string()
      .required("User name is required")
      .min(2, "User name must be at least 2 characters long"),
    complexName: Yup.string()
      .required("Complex name is required")
      .min(2, "Complex name must be at least 2 characters long"),
    courtImage: Yup.mixed()
      .required("Court image is required")
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) =>
          value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
      ),
    court: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required("Court name is required"),
        })
      )
      .min(1, "Aleast one court is required"),
  });

  useEffect(() => {
    setFormHeadings(loadRegisterNewCourtFormHeadings());
    setFormValues(loadFormDefaultValues());
    // setCourtList([]);
  }, []);

  const inputChangeHandler = (
    heading: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [heading]: e.target.value,
    }));
  };

  const courtInputChangeHandler = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newCourts = [...formValues.court];
    newCourts[index] = {
      ...newCourts[index],
      name: e.target.value,
    };
    setFormValues((prev) => ({
      ...prev,
      court: newCourts,
    }));
  };

  const addFileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormValues((prev) => ({
      ...prev,
      courtImage: file,
    }));
  };

  const addCourtHandler = () => {
    if (formValues.court.length >= 4) {
      toast.error("Reached maximum court per location");
    } else {
      //setCourtList((prev) => [...prev, { name: "" }]);
      setFormValues((prev) => ({
        ...prev,
        court: [...prev.court, { name: "" }],
      }));
    }
  };

  const removeCourtHandler = (index: number) => {
    //setCourtList((prev) => prev.filter((_, i) => i !== index));
    setFormValues((prev) => ({
      ...prev,
      court: prev.court.filter((_, i) => i !== index),
    }));
  };

  const registerNewCourtHandler = async () => {
    console.log("Register button clicked ", formValues);
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      ApiService.addNewCourt(generateFormData()).then((res) => {
        toast.success(res.msg);
        setFormValues(loadFormDefaultValues);
      });
    } catch (err: any) {
      err.inner.some((error: any) => {
        toast.error(error.message);
        return true;
      });
    }
  };

  const generateFormData = (): FormData => {
    var formData = new FormData();
    formData.append("mobileNo", formValues.mobileNo);
    formData.append("userName", formValues.userName);
    formData.append("complexName", formValues.complexName);
    formData.append("image", formValues.courtImage);
    formData.append("location", formValues.location);
    formValues.court.forEach((val) => {
      console.log(val);
      formData.append("courtName",val.name);
    });
    return formData;
  };

  return (
    <>
      <SubHeader heading="Register New Court" />
      <form>
        <div className="flex items-center justify-center mt-5 overflow-y-auto">
          <div className="flex flex-col items-center w-full">
            {formHeadings.map((headings) => (
              <div
                key={headings.heading}
                className="flex items-center justify-between mb-4 w-full mt-2"
              >
                <h3 className="mr-4 text-right w-1/3 bold">
                  {headings.placeHolder}
                </h3>
                {headings.type === "text" ? (
                  <input
                    type={headings.type}
                    placeholder={headings.placeHolder}
                    id={headings.heading}
                    value={formValues[headings.heading] || ""}
                    onChange={(e) => inputChangeHandler(headings.heading, e)}
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm w-1/3"
                  />
                ) : headings.type === "file" ? (
                  <label className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer items-left">
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={addFileUploadHandler}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div>
                    <div className="w-full">
                      {formValues.court.map((court, index) => (
                        <div
                          key={index}
                          className="flex flex-row items-center space-x-2 mt-2 mb-2"
                        >
                          <input
                            type={headings.type}
                            placeholder={headings.placeHolder}
                            id={headings.heading}
                            value={formValues.court[index]?.name || ""}
                            onChange={(e) => courtInputChangeHandler(index, e)}
                            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm w-2/3"
                          />
                          <button
                            type="button"
                            className="ml-3 bg-red-500 text-white font-bold py-1 px-6 rounded"
                            onClick={() => removeCourtHandler(index)}
                          >
                            -
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addCourtHandler}
                        className="bg-green-500 text-white font-bold py-1 px-6 rounded mt-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
                <div className="w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={registerNewCourtHandler}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterNewCourt;
