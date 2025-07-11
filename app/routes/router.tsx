// main.tsx or routes.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../routes/home";
// import Index from "../routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // <-- layout
    // children: [
    //   {
    //     index: true, // <-- matches "/"
    //     element: <Index />,
    //   },
    // ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
