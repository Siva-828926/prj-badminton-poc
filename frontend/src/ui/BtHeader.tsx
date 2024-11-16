import { useNavigate } from "react-router-dom";
import { IHeaderOptions } from "../constants/AppConstants";
import { useState } from "react";

const BtHeader: React.FC<IHeaderOptions> = ({ id, title }) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState<Boolean>(false);

  const buttonOnClickHandler = (buttonId: number) => {
    setIsClicked(true);
    if (buttonId == 1) {
      navigate("/admin/dashboard");
    } else if (buttonId == 2) {
      navigate("/user/dashboard");
    } else if (buttonId == 3) {
      navigate("/user/bookcourt");
    } else if (buttonId == 4) {
      navigate("/admin/registernewcourt");
    }
  };
  return (
    <button
      
      onClick={() => buttonOnClickHandler(id)}
    >
      {title}
    </button>
  );
};

export default BtHeader;
