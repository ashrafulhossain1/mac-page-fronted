import useModal from "./useModal";
import Authentication from "@/pages/Auth/Authentication";
import ProfileForm from "@/pages/Profile/ProfileForm";
import ResponsiveModal from "./ResponsiveModal";
import MessagesList from "@/pages/Messages/MessagesList";
import BookingModal from "@/pages/RoomDetails/_components/BookingModal";
import ResetEmail from "@/pages/Auth/Forget/ResetEmail";
import ResetCode from "@/pages/Auth/Forget/ResetCode";
import NewPassword from "@/pages/Auth/Forget/NewPassword";
import ResetSuccess from "@/pages/Auth/Forget/ResetSuccess";
// import SelectUserType from "@/pages/Auth/components/SelectUserType";

export default function Modals() {
  const { Modal } = useModal();

  return (
    <>
      {/* Authentication Modal with Tabs */}
      <Modal
        modalId="modal"
        openId="authentication"
        closeModals={["tab", "authType", "modal" , "user-type-selector" , "user-type-selected"]}
        className="max-w-md"
      >
        <Authentication />
      </Modal>

      <Modal
        modalId="reset"
        openId="reset-email"
        className="bg-white  rounded-4xl py-4 md:py-6 px-4 md:px-8 w-full md:w-[680px]"
      >
        <ResetEmail />
      </Modal>

      <Modal
        modalId="reset"
        openId="reset-code"
        className="bg-white  rounded-4xl py-4 md:py-6 px-4 md:px-8 w-full md:w-[680px]"
      >
        <ResetCode />
      </Modal>

      <Modal
        modalId="reset"
        openId="new-password"
        className="bg-white  rounded-4xl py-4 md:py-6 px-4 md:px-8 w-full md:w-[680px]"
      >
        <NewPassword />
      </Modal>

      <Modal
        modalId="reset"
        openId="success"
        className="bg-white  rounded-4xl py-4 md:py-6 px-4 md:px-8 w-full md:w-[680px]"
      >
        <ResetSuccess />
      </Modal>

      {/* <Modal
        modalId="type"
        openId="select-user-type"
        className="bg-white  rounded-4xl py-4 md:py-6 px-4 md:px-8 w-full md:w-[680px]"
      >
        <SelectUserType />
      </Modal> */}

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
