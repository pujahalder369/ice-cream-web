import { createContext, useEffect, useState } from "react";

export const ContextData = createContext();

const ContextProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        try {
            const savaData = localStorage.getItem("products");
            if (!savaData || savaData === "undefined") {
                return [];
            }

            return JSON.parse(savaData);
        } catch (err) {
            console.log(err);
            localStorage.removeItem("products");

            return [];
        }
    });

    const [cart, setCart] = useState(() => {
        try {
            const saveCart = localStorage.getItem("cart");
            if (!saveCart || saveCart === "undefined") {
                return [];
            }

            return JSON.parse(saveCart);
        } catch (err) {
            console.log(err);
            localStorage.removeItem("cart");
            return [];
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const saveData = localStorage.getItem("products");
                if (saveData && saveData !== "undefined" && saveData !== "null") {
                    return;
                }
                const allData = await fetch("/data.json");
                if (!allData.ok) {
                    throw new Error("Failed to fetch data");
                }
                const res = await allData.json();
                const pro = res?.data || [];
                setData(pro);

                localStorage.setItem("products", JSON.stringify(pro))
            } catch (err) {
                console.log(err, "fetching error");
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    const addToCart = (prod) => {
        setCart((prePro) => {
            const existing = prePro.find((item) => item.id === prod.id);

            if (existing) {
                return prePro.map((item) =>
                    item.id === prod.id
                        ? {
                            ...item,
                            quty: item.quty + 1,
                        }
                        : item,
                );
            }

            return [
                ...prePro,
                {
                    ...prod,
                    quty: 1,
                },
            ];
        });
    };

    const increament = (id) => {
        setCart((preQty) =>
            preQty.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quty: item.quty + 1,
                    }
                    : item,
            ),
        );
    };

    const decreament = (id) => {
        setCart((preQuty) =>
            preQuty
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quty: item.quty - 1,
                        }
                        : item,
                )
                .filter((item) => item.quty > 0),
        );
    };

    return (
        <ContextData.Provider
            value={{ data, cart, addToCart, increament, decreament }}
        >
            {children}
        </ContextData.Provider>
    );
};

export default ContextProvider;
