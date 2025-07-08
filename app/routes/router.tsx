// main.tsx or routes.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../routes/home";
import Index from "../routes/index";
import A1Page from "../routes/levels/a1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // <-- layout
    children: [
      {
        index: true, // <-- matches "/"
        element: <Index />,
      },
      {
        path: "routes/levels/a1",
        element: <A1Page />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
