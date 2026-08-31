import React, { useContext, useState } from 'react'
import { ContextData } from '../../ContextProvider/Context';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import PaymentPopup from '../../Components/PaymentPopup/PaymentPopup';
import { TbMoodEmpty } from 'react-icons/tb';

const PlaceOrder = () => {
  const { cart, decreament, increament } = useContext(ContextData);
  const [openPopup, setOpenPopup] = useState(false);

  const MrpPrice = cart.reduce((total, item) => {
    return total + item.price * item.quty;
  }, 0);
  const discount = 10;
  const dicPr = (MrpPrice * discount) / 100;
  const totalPrice = Math.floor(MrpPrice - dicPr);

  if (cart.length === 0) {
    return (
      <div>
        <div className='my-3 mx-5'>
          <Link to={'/'}>
            <FaArrowLeftLong size={30} />
          </Link>
        </div>
        <div className='flex items-center justify-center gap-2 text-xl font-semibold mt-5'>
          <TbMoodEmpty size={50} color='red' /> Your cart is empty...
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='m-4'>
        <div className='mb-3 mx-2'>
          <Link to={'/'}>
            <FaArrowLeftLong size={30} />
          </Link>
        </div>
        <div className='grid lg:grid-cols-2 gap-6'>
          {cart.map((item) => {
            const mainAmount = item.price * item.quty;
            const afterDisc = (mainAmount * discount) / 100;
            const payPrice = Math.floor(mainAmount - afterDisc);
            return (
              <div key={item?.id} className='grid grid-cols-[38%_60%] items-center gap-2 p-3 sm:p-6 pr-3.5 shadow-[0_0_10px_rgb(202,202,202)] rounded-lg'>
                <div className='h-full w-full'>
                  <img src={item?.image} alt={item?.name} className='object-cover h-full w-full rounded-lg' />
                </div>
                <div>
                  <p className='font-semibold text-xl sm:text-2xl mb-2'>{item?.name}
                    <span className='text-gray-800 font-normal text-lg sm:text-xl'> {`(${item?.flavor})`}</span>
                  </p>
                  <p className='text-xl text-gray-600 line-through'>₹{item?.price}</p>
                  <div className='border border-pink-500 rounded-md inline-flex text-xl my-1 sm:my-3'>
                    <button className='px-3 font-bold' onClick={() => decreament(item.id)}>
                      -
                    </button>
                    <span className='border-l border-l-pink-500 border-r border-r-pink-500 px-3'>{item?.quty}</span>
                    <button className='px-3 font-bold' onClick={() => increament(item.id)}>
                      +
                    </button>
                  </div>
                  <p className='text-lg sm:text-xl font-semibold'>Total price: ₹{payPrice}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='my-5 text-right border-t'>
          <div className='m-2 sm:m-5 text-lg sm:text-xl inline-flex flex-col text-left'>
            <p className=' line-through text-gray-700'>MRP: {MrpPrice}/-</p>
            <p>Discount: {discount}%</p>
            <p>Total Price: {totalPrice}/-</p>
            <button
              onClick={() => setOpenPopup(true)}
              className='mt-3 itemBtn'>Place Order</button>
          </div>
        </div>
        {openPopup && (
          <PaymentPopup closePopUp={() => setOpenPopup(false)} />
        )}
      </div>
    </>
  )
}

export default PlaceOrder;
