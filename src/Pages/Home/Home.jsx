import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { ContextData } from "../../ContextProvider/Context";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import { IoMdAdd } from "react-icons/io";

const Home = () => {
  const { data, addToCart } = useContext(ContextData);
  const navigate = useNavigate();
  const handleCart = (prod) => {
    addToCart(prod)
    navigate('/place-order')
  }
  return (
    <div>
      <HeroBanner />
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-4 pt-0 h-full">
        {data?.map((item) => (
          <div className="min-h-[500px] flex flex-col items-center relative bg-gray-100 pt-3" key={item.id}>
            <div className="h-[300px] w-[300px] rounded-full itemImage overflow-hidden">
              <Link
                to={`/product-details/${item?.id}`}
              >
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="object-cover h-full w-full"
                />
              </Link>
            </div>
            <div className="m-3 mb-5">
              <Link
                to={`/product-details/${item?.id}`}
              >
                <p className="text-xl font-semibold inline-flex mb-1 hover:text-[#4778f6] item_name">{item?.name}</p>
              </Link>
              <div className="flex justify-between gap-2">
                <p className="text-[18px]">
                  <strong>Price:</strong> {item?.price}/-
                </p>
                <span className="px-4 py-0.5 bg-[#4778f6] text-white flex items-center justify-center rounded-lg">
                  {item?.rating} ⭐</span>
              </div>
              <p className="pb-2 text-[16px]">
                <strong>Flavor:</strong> {item?.flavor}
              </p>
              <div className="flex flex-wrap gap-2 items-center justify-between my-3">
                <Link
                  to={`/product-details/${item?.id}`}
                  className="itemBtn rounded-lg py-1 px-5 text-lg font-semibold"
                >
                  Product details
                </Link>
                <button
                  onClick={() => handleCart(item)}
                  className="itemBtn"
                >
                  Add <IoMdAdd size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
