import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import InvoiceTemplate from "../features/invoice/InvoiceTemplate";

const BasicModal = ({ open, setOpen }) => {
  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="plain"
          sx={{ borderRadius: "md", p: 3, boxShadow: "lg" }}
          className="w-3/4 md:w-3/4 lg:1/2"
        >
          <ModalClose variant="plain" />
          <InvoiceTemplate />
        </Sheet>
      </Modal>
    </>
  );
};

export default BasicModal;
