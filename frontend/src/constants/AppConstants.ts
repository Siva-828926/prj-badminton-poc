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
  isClicked : boolean
  onClickHandler : (buttonId : number) => void
}

// Form structure for new court registration
export const loadRegisterNewCourtFormHeadings =
  (): IFormRegisterNewCourtHeadings[] => {
    const formValues = [
      {
        heading: "mobileNo",
        placeHolder: "Mobile Number",
        type: "text",
      },
      {
        heading: "userName",
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
        heading: "courtImage",
        placeHolder: "Complex Image",
        type: "file",
      },
      {
        heading: "court",
        placeHolder: "Court",
        type: "array",
      },
    ];

    return formValues;
  };

export interface IFormRegisterNewCourt {
  mobileNo: number;
  location: string;
  userName: string;
  complexName: string;
  courtImage: File | null;
  court: {
    name: string;
  }[];
}

export const loadFormDefaultValues = () => {
  const defaultFormValues = {
    mobileNo: 0,
    location: "",
    userName: "",
    complexName: "",
    courtImage: null,
    court: [],
  };
  return defaultFormValues;
};
