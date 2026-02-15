import Home from "@/pages/Home";
import HomeLayout from "@/pages/Home/layout";
import Browse from "@/pages/Browse";
import RoomDetails from "@/pages/RoomDetails";
import MacBookAir from "@/pages/MacBookAir";
import MacBookPro from "@/pages/MacBookPro";
import Accessories from "@/pages/Accessories";
import Support from "@/pages/Support";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "browse/:id",
        element: <RoomDetails />,
      },
      {
        path: "macbook-air",
        element: <MacBookAir />,
      },
      {
        path: "macbook-pro",
        element: <MacBookPro />,
      },
      {
        path: "accessories",
        element: <Accessories />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
]);
