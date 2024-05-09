import { AiOutlineDown } from "react-icons/ai";
const SecondaryList = () => {
  return (
    <div className="m-2 flex justify-between items-center">
      <p>Items : 16</p>
      <p className="flex items-center gap-2 border border-rose-500 text-rose-500 px-4 py-1 rounded-full">
        <span>Sort</span>
        <span>/</span>
        <span className="flex items-center gap-1">
          New
          <AiOutlineDown className="w-[10px] h-[10px]" />
        </span>
      </p>
    </div>
  );
};

export default SecondaryList;
