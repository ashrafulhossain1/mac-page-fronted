# Project Planning and Architecture

## 1. Overview
The goal is to build a flow for users to sell their used electronics. The user starts at the Home page, selects a category, gets a price quote, enters shipping details, and confirms the order. They can also view their past orders.

## 2. Page Flow (User Journey)
1.  **Home Page** (`/`):
    *   **Hero Section**: Intro and "Sell Now" / "Buy Now" toggle.
    *   **Category Section**: Cards for Smartphones, Laptops, etc. (Recently added).
    *   **User Action**: Clicks on a category card (e.g., "Smartphones").
2.  **Category/Product Selection** (`/sales/:category`):
    *   **Purpose**: Display available devices within the selected category.
    *   **User Action**: Selects a specific model (e.g., "iPhone 15 Pro Max").
3.  **Device Condition & Quote** (`/sales/:category/:deviceId` - or similar):
    *   **Purpose**: User answers questions about device condition (cracked screen, storage, etc.).
    *   **Outcome**: User receives a price quote.
    *   **Action**: User accepts the offer.
4.  **Price Locked** (`/checkout/price-locked` or integrated into step 3):
    *   **Purpose**: Confirmation that the price is reserved (Image 3).
    *   **Action**: "Enter Shipping Details".
5.  **Shipping Details** (`/checkout/shipping`):
    *   **Purpose**: Form for Name, Address, City (Image 1).
    *   **Action**: "Confirm pickup address".
6.  **Order Confirmation** (`/checkout/success` or `/order/:orderId`):
    *   **Purpose**: Show status "Shipping Confirmed", "Label Generated" (Image 4).
7.  **My Orders / Dashboard** (`/account/orders`):
    *   **Purpose**: List of past orders with status (Image 2).

## 3. Routing System (React Router v6/v7)

We will use the existing `createBrowserRouter` in `src/routes/routes.tsx`.

### Proposed Route Structure:

```tsx
import { createBrowserRouter } from "react-router";
import HomeLayout from "@/pages/Home/layout";
import Home from "@/pages/Home";
import SalesLayout from "@/pages/Sales/layout"; // New layout for sales flow?
import CategoryPage from "@/pages/Sales/CategoryPage"; // List of devices
import DeviceQuotePage from "@/pages/Sales/QuotePage"; // Details & Condition
import CheckoutLayout from "@/pages/Checkout/layout";
import ShippingPage from "@/pages/Checkout/ShippingPage";
import ConfirmationPage from "@/pages/Checkout/ConfirmationPage";
import ProfileLayout from "@/pages/Profile/layout";
import OrdersPage from "@/pages/Profile/OrdersPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />, // Contains Hero + Category Section
      },
      // Sales Flow
      {
        path: "sales",
        children: [
          {
            path: ":category", // e.g. /sales/smartphones
            element: <CategoryPage />,
          },
          {
            path: ":category/:deviceId", // e.g. /sales/smartphones/iphone-15
            element: <DeviceQuotePage />,
          },
        ],
      },
      // Checkout Flow (Protected or Standalone)
      {
        path: "checkout",
        children: [
          {
            path: "shipping", // Image 1 and 3 flow
            element: <ShippingPage />,
          },
          {
            path: "success", // Image 4
            element: <ConfirmationPage />,
          },
        ],
      },
      // User Profile
      {
        path: "account",
        children: [
          {
            path: "orders", // Image 2
            element: <OrdersPage />,
          },
        ],
      },
    ],
  },
]);
```

## 4. Next Steps for Development
1.  **Refine Home Page**: Ensure the Category section is correctly styled and linked. (Done).
2.  **Create Sales Pages**:
    *   Create `src/pages/Sales` folder.
    *   Implement `CategoryPage` (Display dummy products).
    *   Implement `QuotePage` (Condition form + Price calculation).
3.  **Create Checkout Pages**:
    *   Create `src/pages/Checkout` folder.
    *   Implement `ShippingPage` (Form validation, State management).
    *   Implement `ConfirmationPage` (Status timeline).
4.  **Create Profile Pages**:
    *   Create `src/pages/Profile` folder.
    *   Implement `OrdersPage` (Table of orders).

## 5. UI/UX Considerations
*   **Animations**: Use `framer-motion` for transitions between steps (e.g., Quote -> Shipping).
*   **State Management**: Use `redux` (already installed) or Context to store the current `order` (device details, price, shipping info) across the checkout flow.
