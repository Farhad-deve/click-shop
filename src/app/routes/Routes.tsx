import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { lazy } from "react";
import { HomePage } from "../../pages/home";

const ProductsPage = lazy(() =>
  import("../../pages/products").then((module) => ({ default: module.ProductsPage, })),
);
const FavoritesPage = lazy(() =>
  import("../../pages/favorites").then((module) => ({ default: module.FavoritesPage, })),
);
const CartPage = lazy(() =>
  import("../../pages/cart").then((module) => ({ default: module.CartPage })),
);
const ProfilePage = lazy(() =>
  import("../../pages/profile").then((module) => ({ default: module.ProfilePage, })),
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "basket",
        element: <CartPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
