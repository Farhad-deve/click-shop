import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { HomePage } = await import("../../pages/home");
          return { Component: HomePage };
        },
      },
      {
        path: "products",
        lazy: async () => {
          const { ProductsPage } = await import("../../pages/products");
          return { Component: ProductsPage };
        },
      },
      {
        path: "products/:id",
        lazy: async () => {
          const { ProductPage } = await import("../../pages/products");
          return { Component: ProductPage };
        },
      },
      {
        path: "favorites",
        lazy: async () => {
          const { FavoritesPage } = await import("../../pages/favorites");
          return { Component: FavoritesPage };
        },
      },
      {
        path: "basket",
        lazy: async () => {
          const { CartPage } = await import("../../pages/cart");
          return { Component: CartPage };
        },
      },
      {
        path: "profile",
        lazy: async () => {
          const { ProfilePage } = await import("../../pages/profile");
          return { Component: ProfilePage };
        },
      },
      {
        path: "*",
        lazy: async () => {
          const { NotFoundPage } = await import("../../pages/not-found");
          return { Component: NotFoundPage };
        },
      },
    ],
  },
]);
