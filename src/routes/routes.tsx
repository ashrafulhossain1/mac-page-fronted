import Home from "@/pages/Home";
import HomeLayout from "@/pages/Home/layout";
import Browse from "@/pages/Browse";
import RoomDetails from "@/pages/RoomDetails";
import OurStory from "@/pages/OurStory";
import Support from "@/pages/Support";
import TermsConditions from "@/pages/TermsConditions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import GuestBlog from "@/pages/GuestBlog";
import GuestBlogDetail from "@/pages/GuestBlog/BlogDetail";
import HostBlog from "@/pages/HostBlog";
import HostBlogDetail from "@/pages/HostBlog/BlogDetail";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/Blog/BlogDetail";
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
        path: "our-story",
        element: <OurStory />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "term-condition",
        element: <TermsConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "guest-blog",
        element: <GuestBlog />,
      },
      {
        path: "host-blog",
        element: <HostBlog />,
      },
      {
        path: "blog/:id",
        element: <BlogDetail />,
      },
      {
        path: "guest-blog/:id",
        element: <GuestBlogDetail />,
      },
      {
        path: "host-blog/:id",
        element: <HostBlogDetail />,
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
