import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true,
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
          const ProtectedProfilePage = () => (
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          )
          return { Component: ProtectedProfilePage };
        },
      },
      {
        path: "admin",
        lazy: async () => {
          const { AdminCategoriesPage } = await import("../../pages/admin");
          const ProtectedAdminPage = () => (
            <ProtectedRoute>
              <AdminCategoriesPage />
            </ProtectedRoute>
          )
          return { Component: ProtectedAdminPage };
        }
      },
      {
        path: "admin/products",
        lazy: async () => {
          const { AdminProductsPage } = await import("../../pages/admin")
          const ProtectedAdminProductsPage = () => (
            <ProtectedRoute>
              <AdminProductsPage />
            </ProtectedRoute>
          )
          return { Component: ProtectedAdminProductsPage };
        }
      },
      {
        path: "admin/create-category",
        lazy: async () => {
          const { AdminCreateCategoryPage } = await import("../../pages/admin");
          const ProtectedAdminCreateCategoryPage = () => (
            <ProtectedRoute>
              <AdminCreateCategoryPage />
            </ProtectedRoute>
          )
          return { Component: ProtectedAdminCreateCategoryPage };
        }
      },
      {
        path: "admin/create-product",
        lazy: async () => {
          const { AdminCreateProductPage } = await import("../../pages/admin");
          const ProtectedAdminCreateProductPage = () => (
            <ProtectedRoute>
              <AdminCreateProductPage />
            </ProtectedRoute>
          )
          return { Component: ProtectedAdminCreateProductPage };
        }
      },
      {
        path: "admin/users",
        lazy: async () => {
          const { AdminUsersPage } = await import("../../pages/admin");
          const ProtectedAdminUsersPage = () => (
            <ProtectedRoute>
              <AdminUsersPage />
            </ProtectedRoute>
          )
          return { Component: ProtectedAdminUsersPage };
        }
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
