import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/root-layout";
import HomePage from "./pages/home-page";
import AddPetPage from "./pages/add-pet-page";
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/signup-page";
import { AuthContextProvider } from "./contexts/auth-context";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/pets/new",
        Component: AddPetPage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/sign-up",
        Component: SignupPage,
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthContextProvider >
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
