import { useEffect, useState } from "react";
import { headerOptionsList } from "../../constants/AppConstants";

const Header = () => {
  const [headerOptions, setHeaderOptions] = useState<string[]>([]);
  useEffect(() => {
    const optionsList = headerOptionsList();
    setHeaderOptions(optionsList);
  });

  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      <div className="mr-20">
        
      </div>
      <nav>
        <ul className="flex space-x-8">
          {headerOptions.map((values, indexes) => (
            <li key={indexes}>{values}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
