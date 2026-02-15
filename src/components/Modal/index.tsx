import useModal from "./useModal";
import Authentication from "@/pages/Auth/Authentication";

export default function Modals() {
  const { Modal } = useModal();

  return (
    <>
      {/* Authentication Modal with Tabs */}
      <Modal
        modalId="modal"
        openId="authentication"
        closeModals={["tab"]}
        className="max-w-md"
      >
        <Authentication />
      </Modal>
    </>
  );
}
