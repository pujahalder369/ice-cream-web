import React, { useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoCashOutline } from "react-icons/io5";

const PaymentPopup = ({ closePopUp }) => {
    const [payMethod, setPayMethod] = useState("");

    const hanldeMethod = () => {
        if (payMethod === "cash") {
            console.log("cash");
        };

        if (payMethod === "upi") {
            console.log("upi");
        };
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center transition-all duration-300">
            <div className="bg-white p-6 rounded-lg w-xl">
                <div className="relative">
                    <h2 className="text-xl font-serif font-semibold mb-3">
                        Select payment method
                    </h2>
                    <button
                        onClick={closePopUp}
                        className="absolute -top-3.5 -right-3.5 cursor-pointer transition-all duration-300"
                    >
                        <IoMdClose size={30} />
                    </button>
                </div>
                <div className="mx-3 my-6">
                    <div className="flex justify-between items-center gap-2 border-b py-2">
                        <label className="text-lg flex items-center gap-2">
                            Cash on counter <IoCashOutline size={22} color="green" />
                        </label>
                        <input
                            type="radio"
                            value="cash"
                            name="payment"
                            checked={payMethod === "cash"}
                            onChange={(e) => setPayMethod(e.target.value)}
                            className="w-5 h-5"
                        />
                    </div>
                    <div className="flex justify-between items-center gap-2 border-b py-2">
                        <label className="text-lg flex items-center gap-2">
                            UPI <AiTwotoneLike size={22} color="blue" />
                        </label>
                        <input
                            type="radio"
                            value="upi"
                            name="payment"
                            checked={payMethod === "upi"}
                            onChange={(e) => setPayMethod(e.target.value)}
                            className="w-5 h-5"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            disabled={!payMethod}
                            onClick={hanldeMethod}
                            className={`itemBtn mt-4 disabled:opacity-50 ${!payMethod ? "pointer-events-none" : ""}`}>
                            {payMethod === "cash" ? "Pay with Cash" : "Pay with UPI"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPopup;
