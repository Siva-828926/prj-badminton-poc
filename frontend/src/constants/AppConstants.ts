// Default values for header option
export const headerOptionsList = (): IHeaderOptions[] => {
  const HeaderoptionList = [
    {
      id: 1,
      title: "Admin Dashboard",
    },
    {
      id: 2,
      title: "User Dashboard",
    },
    {
      id: 3,
      title: "Book Court",
    },
    {
      id: 4,
      title: "Register New Court",
    },
  ];
  return HeaderoptionList;
};

// interface for Regsiter New court form
export interface IFormRegisterNewCourtHeadings {
  heading: string;
  placeHolder: string;
  type: string;
}

export interface IHeaderOptions {
  id: number;
  title: string;
}

// Form structure for new court registration
export const loadRegisterNewCourtFormHeadings =
  (): IFormRegisterNewCourtHeadings[] => {
    const formValues = [
      {
        heading: "mobileNumber",
        placeHolder: "Mobile Number",
        type: "text",
      },
      {
        heading: "name",
        placeHolder: "Name",
        type: "text",
      },
      {
        heading: "location",
        placeHolder: "Location",
        type: "text",
      },
      {
        heading: "complexName",
        placeHolder: "Complex Name",
        type: "text",
      },
      {
        heading: "complexImage",
        placeHolder: "Complex Image",
        type: "upload",
      },
      {
        heading: "court",
        placeHolder: "court",
        type: "array",
      },
    ];

    return formValues;
  };

export interface IFormRegisterNewCourt {
  mobileNo: number;
  userName: string;
  complexName: string;
  courtImage: File;
  court: [
    {
      name: string;
    }
  ];
}
