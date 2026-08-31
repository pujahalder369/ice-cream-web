import Home from '../Pages/Home/Home'
import ProductDetails from '../Pages/ProductDetails/ProductDetails'
import PlaceOrder from '../Pages/PlaceOrder/PlaceOrder'

const ProtectedRoute = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: "/product-details/:id",
        element: <ProductDetails />
    },
    {
        path: "/place-order",
        element: <PlaceOrder />
    },
]

export default ProtectedRoute;
