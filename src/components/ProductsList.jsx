import IMG from "/@/assets/IMG1.jpg";

const ProductsList = () => {
  return (
    <div className="m-2 justify-evenly flex flex-wrap gap-2">
      <img
        src={IMG}
        alt="Img"
        className="w-full md:w-[30%] lg:w-[30%] xl:w-[30%] h-auto"
      />
      <img
        src={IMG}
        alt="Img"
        className="w-full md:w-[30%] lg:w-[30%] xl:w-[30%] h-auto"
      />
      <img
        src={IMG}
        alt="Img"
        className="w-full md:w-[30%] lg:w-[30%] xl:w-[30%] h-auto"
      />
    </div>
  );
};

export default ProductsList;
