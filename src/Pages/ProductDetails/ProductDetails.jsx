import { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ContextData } from '../../ContextProvider/Context';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';

const ProductDetails = () => {
  const { id } = useParams();
  const { data, addToCart } = useContext(ContextData);
  const navigate = useNavigate();
  const product = data.find((item) => item.id === Number(id));

  const handleCart = (prod) => {
    addToCart(prod);
    navigate('/place-order');
  };

  if (!product) {
    return <div className='text-center text-xl font-semibold mt-5'>Loading...</div>
  }

  return (
    <>
      <div className='grid xl:grid-cols-2 gap-5 p-5 pb-8' key={product.id}>
        <div>
          <div className='mb-3 mx-2'>
            <Link to={'/'}>
              <FaArrowLeftLong size={30} />
            </Link>
          </div>
          <div className='h-[400px] sm:h-[500px] lg:h-[650px] rounded-lg'>
            <img src={product?.image} alt={product?.name} className='w-full h-full rounded-lg object-cover' />
          </div>
        </div>
        <div className='pt-7 text-lg'>
          <div className='space-y-3 mb-4'>
            <div className='flex justify-between items-center w-full'>
              <h1 className='font-bold text-3xl'>{product?.name}</h1>
              <div>
                <button
                  onClick={() => handleCart(product)}
                  className="itemBtn"
                >
                  Add <IoMdAdd size={20} />
                </button>
              </div>
            </div>
            <p className='font-medium text-xl'><strong>Price: </strong>{product?.price}/-</p>
            <p><strong>Flavor: </strong>{product?.flavor}</p>
            <p><strong>Description: </strong>{product?.description}</p>
          </div>
          <div className='shadow-lg py-3 px-5 rounded-xl bg-pink-100'>
            <h2 className='font-semibold text-2xl mb-2'>Ingredients</h2>
            <ul className='px-5'>
              {product?.ingredients?.map((item) => (
                <li className='list-disc'><strong>{item?.ingr_name}:</strong> {item?.ingr_description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetails;
