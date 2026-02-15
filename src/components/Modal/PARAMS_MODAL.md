# Modal System Documentation

## 📁 File Structure

```
Modal/
├── index.tsx       # Modal container - Register all modals here
├── modal.tsx       # Modal component - The actual UI component
├── useModal.ts     # Modal hook - Logic for controlling modals
└── README.md       # This file
```

---

## 🎯 How It Works

The modal system uses **URL search parameters** to control which modal is open.

**Example:** `example.com/?modal=authentication` will open the authentication modal.

---

## 🚀 How to Add a New Modal

Follow these **4 simple steps**:

### **Step 1: Create Your Modal Content**

Create a new component for your modal content (or use an existing one).

```tsx
// src/pages/MyModal/MyModal.tsx
export const MyModal = () => {
  return (
    <div>
      <p>This is my modal content!</p>
      <button>Click me</button>
    </div>
  );
};
```

---

### **Step 2: Register the Modal in `index.tsx`**

Open `src/components/Modal/index.tsx` and add your modal:

```tsx
import useModal from "./useModal";
import { MyModal } from "@/pages/MyModal/MyModal"; // 1. Import your component

export default function Modals() {
  const { Modal } = useModal();

  return (
    <>
      {/* 2. Add your modal here */}
      <Modal
        modalId="modal"           // The URL param name
        openId="my-modal"         // The value that triggers it
        className="max-w-lg"      // Optional: custom width
      >
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">My Modal Title</h2>
          <MyModal />  {/* Your component */}
        </div>
      </Modal>

      {/* Other modals... */}
    </>
  );
}
```

---

### **Step 3: Open the Modal from Any Component**

Use the `useModal` hook to open your modal:

```tsx
import useModal from "@/components/Modal/useModal";

function MyButton() {
  const { open } = useModal();

  const handleClick = () => {
    open([
      { modalId: "modal", openId: "my-modal" }
    ]);
  };

  return (
    <button onClick={handleClick}>
      Open My Modal
    </button>
  );
}
```

---

### **Step 4: (Optional) Close the Modal**

Close from anywhere using:

```tsx
const { close } = useModal();

close(["modal"]);
```

---

## 📋 Complete Example

### 1. Create Component
```tsx
// src/pages/Confirmation/Confirmation.tsx
export const Confirmation = () => {
  return (
    <div className="space-y-4">
      <p>Are you sure you want to delete this item?</p>
      <div className="flex gap-2">
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
        <button className="bg-gray-300 px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};
```

### 2. Register in `index.tsx`
```tsx
import { Confirmation } from "@/pages/Confirmation/Confirmation";

export default function Modals() {
  const { Modal } = useModal();

  return (
    <>
      <Modal modalId="modal" openId="confirm-delete">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
          <Confirmation />
        </div>
      </Modal>
    </>
  );
}
```

### 3. Use in Your App
```tsx
function DeleteButton() {
  const { open } = useModal();

  return (
    <button onClick={() => open([{ modalId: "modal", openId: "confirm-delete" }])}>
      Delete Item
    </button>
  );
}
```

---

## 🔧 Modal Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `modalId` | string | ✅ | The URL parameter name (e.g., "modal") |
| `openId` | string | ✅ | The value that triggers this modal |
| `closeModals` | string[] | ❌ | Other modals to close when this one closes |
| `className` | string | ❌ | Custom styling classes |

---

## 🎨 Common Patterns

### **Multiple Modals with Different IDs**
```tsx
// Sign In Modal: ?modal=signin
<Modal modalId="modal" openId="signin">
  <SignIn />
</Modal>

// Settings Modal: ?settings=open
<Modal modalId="settings" openId="open">
  <Settings />
</Modal>
```

### **Open Multiple Modals at Once**
```tsx
open([
  { modalId: "modal", openId: "signin" },
  { modalId: "settings", openId: "open" }
]);
```

### **Close Multiple Modals**
```tsx
close(["modal", "settings"]);
```

### **Auto-close Other Modals**
```tsx
<Modal 
  modalId="modal" 
  openId="signin"
  closeModals={["settings", "sidebar"]}  // Close these when signin closes
>
  <SignIn />
</Modal>
```

### **Check if Modal is Open**
```tsx
const { getParams } = useModal();
const isOpen = getParams("modal") === "signin";

if (isOpen) {
  console.log("Sign in modal is open!");
}
```

---

## ✅ Current Modals

### Sign In Modal
- **Trigger:** `?modal=authentication`
- **How to open:** Click "Login" button in Header
```tsx
open([{ modalId: "modal", openId: "authentication" }])
```

### Sign Up Modal
- **Trigger:** `?modal=signup`
- **How to open:**
```tsx
open([{ modalId: "modal", openId: "signup" }])
```

---

## 💡 Tips

1. **Use descriptive `openId` values** - Makes URLs readable
2. **Keep modal content in separate components** - Easier to maintain
3. **Use the same `modalId` for related modals** - Only one can be open at a time
4. **Add custom styling via `className`** - Control size and appearance

---

## 🐛 Troubleshooting

### Modal not opening?
1. Check that the modal is registered in `index.tsx`
2. Verify `modalId` and `openId` match exactly
3. Make sure `<Modals />` is included in your layout (should be in `layout.tsx`)

### Modal shows behind other content?
- The Dialog component from shadcn/ui has built-in z-index handling
- Check if other components have very high z-index values

### Multiple modals interfering?
- Use different `modalId` values for independent modals
- Use the same `modalId` for modals that shouldn't be open simultaneously

---

## 📚 Further Reading

- [shadcn/ui Dialog Documentation](https://ui.shadcn.com/docs/components/dialog)
- [React Router useSearchParams](https://reactrouter.com/en/main/hooks/use-search-params)
