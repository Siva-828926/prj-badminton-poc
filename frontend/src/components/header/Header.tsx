import { useEffect, useState } from "react";
import {
  headerOptionsList,
  IHeaderOptions,
} from "../../constants/AppConstants";
import BtHeader from "../../ui/BtHeader";
import deloitteLogo from "../../assets/deloittelogo.png";

const Header = () => {
  const [headerOptions, setHeaderOptions] = useState<IHeaderOptions[]>([]);
  useEffect(() => {
    const optionsList = headerOptionsList();
    setHeaderOptions(optionsList);
  }, []);

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
              ></BtHeader>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
