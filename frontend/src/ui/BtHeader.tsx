import { IHeaderOptions } from "../constants/AppConstants";

const BtHeader: React.FC<IHeaderOptions> = ({ id, title ,isClicked , onClickHandler}) => {
  return (
    <button
      onClick={() => onClickHandler(id)}
      className={`font-bold  ${ isClicked ? "text-black" : "text-white"}`}
    >
      {title}
    </button>
  );
};

export default BtHeader;
