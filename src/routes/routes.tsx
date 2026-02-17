import Home from "@/pages/Home";
import HomeLayout from "@/pages/Home/layout";
import Browse from "@/pages/Browse";
import RoomDetails from "@/pages/RoomDetails";
import MacBookAir from "@/pages/MacBookAir";
import MacBookPro from "@/pages/MacBookPro";
import Accessories from "@/pages/Accessories";
import Support from "@/pages/Support";
import Dashboard from "@/pages/Dashboard";
import AddRoom from "@/pages/Dashboard/AddRoom";
import MyAllListings from "@/pages/Dashboard/MyAllListings";
import AllRequests from "@/pages/Dashboard/AllRequests";
import AboutGuest from "@/pages/Dashboard/AboutGuest";
import ManageRooms from "@/pages/Dashboard/ManageRooms";
import EditRoom from "@/pages/Dashboard/EditRoom";
import DashboardLayout from "@/pages/Dashboard/layout";
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-room",
        element: <AddRoom />,
      },
      {
        path: "all-listings",
        element: <MyAllListings />,
      },
      {
        path: "all-requests",
        element: <AllRequests />,
      },
      {
        path: "all-requests/:id",
        element: <AboutGuest />,
      },
      {
        path: "manage-rooms",
        element: <ManageRooms />,
      },
      {
        path: "edit-room/:id",
        element: <EditRoom />, 
      },
    ],
  },
]);
