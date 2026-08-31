import React, { useContext } from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { ContextData } from '../../ContextProvider/Context';

const ThankYouPopup = ({ closePopUp, payMethod }) => {
        const { clearCart } = useContext(ContextData);
        const handleClear = () => {
            clearCart();
        }
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-[90%] max-w-[400px] text-center relative">
                <button
                    onClick={closePopUp}
                    className="absolute top-3 right-3 cursor-pointer"
                >
                    <IoMdClose size={30} />
                </button>
                <div className="flex justify-center mb-4">
                    <FaCheckCircle
                        size={70}
                        className="text-green-500"
                    />
                </div>
                <h2 className="text-3xl font-bold mb-3">
                    Thank You!
                </h2>
                <p className="text-lg text-gray-600">
                    Your order has been placed successfully.
                </p>
                <p className="text-gray-500 mb-5">
                    Payment Method:{" "}
                    <span className="font-semibold text-blue-500 uppercase">
                        {payMethod}
                    </span>
                </p>

                <div className="flex justify-center">
                    <button onClick={handleClear} className="itemBtn"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ThankYouPopup;
