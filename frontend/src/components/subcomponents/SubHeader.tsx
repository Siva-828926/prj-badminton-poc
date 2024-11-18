import { SubHeaderProps } from "../../constants/props";

const SubHeader :React.FC<SubHeaderProps> =  ({heading}) => {
  return (
    <div className="w-full mb-5 pb-1  bg-gradient-to-r from-white to-black  h-12 flex items-center pl-3">
      <h1 className=" font-roboto text-black">{heading}</h1>
    </div>
  );
};

export default SubHeader;
