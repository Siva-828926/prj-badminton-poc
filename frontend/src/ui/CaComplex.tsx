import { ComplexProps } from "../constants/props";

const CaComplex: React.FC<ComplexProps> = ({
  details,
  onClickHandler,
  isSelected,
}) => {
  const { id, complexName, complexImages } = details;
  return (
    <div
      className={`w-16 h-16 border rounded-lg overflow-hidden flex flex-col ${
        isSelected ? "bg-green-500" : ""
      }`}
      onClick={() => onClickHandler(id)}
      style={{ cursor: "pointer" }}
    >
      <div className="flex-4 overflow-hidden">
        <img src={complexImages} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <p className="text-sm">{complexName}</p>
      </div>
    </div>
  );
};

export default CaComplex;
