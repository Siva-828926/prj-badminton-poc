import { useEffect, useState } from "react";
import {
  headerOptionsList,
  IHeaderOptions,
} from "../../constants/AppConstants";
import BtHeader from "../../ui/BtHeader";
import deloitteLogo from "../../assets/deloittelogo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [headerOptions, setHeaderOptions] = useState<IHeaderOptions[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  const [buttonId , setbuttonId] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const optionsList = headerOptionsList();
    setHeaderOptions(optionsList);
  }, []);

  const onClickHandler = (buttonId: number) => {
    setbuttonId(buttonId)
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
    <header className="text-white p-1 flex items-center">
      <div className="flex w-full">
        <div className="w-1/4 flex items-center justify-center">
          <img src={deloitteLogo} height="30px" width="120px" />
        </div>
        <nav className="w-3/4 flex items-center">
          <ul className="flex space-x-8">
            {headerOptions.map((data) => (
              <BtHeader
                key={data.id}
                id={data.id}
                title={data.title}
                onClickHandler={onClickHandler}
                isClicked={buttonId == data.id}
              ></BtHeader>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
