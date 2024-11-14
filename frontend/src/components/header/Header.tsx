import { useEffect, useState } from "react";
import { headerOptionsList } from "../../constants/AppConstants";

const Header = () => {
  const [headerOptions, setHeaderOptions] = useState<string[]>([]);
  useEffect(() => {
    const optionsList = headerOptionsList();
    setHeaderOptions(optionsList);
  });

  return (
    <header>
      <nav>
        <ul>
          {headerOptions.map((values, indexes) => (
            <li key={indexes}>{values}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
