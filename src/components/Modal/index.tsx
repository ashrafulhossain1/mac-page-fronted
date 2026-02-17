import useModal from "./useModal";
import Authentication from "@/pages/Auth/Authentication";
import ProfileForm from "@/pages/Profile/ProfileForm";
import ResponsiveModal from "./ResponsiveModal";
import MessagesList from "@/pages/Messages/MessagesList";
import BookingModal from "@/pages/RoomDetails/_components/BookingModal";

export default function Modals() {
  const { Modal } = useModal();

  return (
    <>
      {/* Authentication Modal with Tabs */}
      <Modal
        modalId="modal"
        openId="authentication"
        closeModals={["tab" , "authType" , "modal"]}
        className="max-w-md"
      >
        <Authentication />
      </Modal>

      {/* Profile Settings Modal */}
      <Modal
        modalId="modal"
        openId="profile-settings"
        className="max-w-5xl p-0 bg-transparent border-none shadow-none"
      >
        <ProfileForm />
      </Modal>

      {/* Messages Modal */}
      <ResponsiveModal
        modalId="modal"
        openId="messages"
        className="sm:max-w-[800px] p-0"
      >
        <MessagesList />
      </ResponsiveModal>

      {/* Booking Modal */}
      <ResponsiveModal
        modalId="modal"
        openId="booking"
        className="sm:max-w-[600px] p-0"
      >
        <BookingModal />
      </ResponsiveModal>
    </>
  );
}
