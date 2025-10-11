import brand1 from "../../assets/images/brands/brand1.png";
import brand2 from "../../assets/images/brands/brand2.png";
import brand3 from "../../assets/images/brands/brand3.png";
import brand4 from "../../assets/images/brands/brand4.png";
import brand5 from "../../assets/images/brands/brand5.png";

const brands = [
  { name: "Vodafone image", image: brand1 },
  { name: "Intel image", image: brand2 },
  { name: "Tesla image ", image: brand3 },
  { name: "AMD image", image: brand4 },
  { name: "Talkit image", image: brand5 },
];

const Brands = () => {
  return (
    <section className="py-16 ">
      <div className="container">
        <h3 className="font-normal text-[18px] leading-7 text-[#202430] opacity-50 text-left">
          Companies we helped grow
        </h3>
        <div className="w-full mt-5  ">
          <div className="flex flex-wrap justify-around items-center gap-4 sm:justify-between">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`${
                  index === 1 || index === 3 || index === 4
                    ? "w-20 lg:w-24"
                    : "w-24"
                } ml-1 h-max`}
              >
                <img
                  className="md:h-[100px] h-12 opacity-80 object-contain"
                  src={brand.image}
                  alt={brand.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
