import { useRoutes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Layout from "../Layout/Layout";
import ProtectedRoute from "./ProtectedRoute";
import AuthGuard from "../Auth/AuthGuard";

const MainRoute = () => {
    const routes = [...PublicRoute,
    {
        path: "/",
        element: <AuthGuard />,
        children: [
            {
                element: <Layout />,
                children: ProtectedRoute
            }
        ],
    },
    ]
    const element = useRoutes(routes)
    return element;
}

export default MainRoute;