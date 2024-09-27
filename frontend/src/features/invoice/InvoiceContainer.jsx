import { useState } from "react";
import BasicModal from "../../ui/BasicModal";

function InvoiceContainer() {
  const [open, setOpen] = useState(false);

  function handleNewInvoice(e) {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <>
      <button onClick={handleNewInvoice}>+ invoice</button>
      {open && <BasicModal open={open} setOpen={setOpen} />}
    </>
  );
}

export default InvoiceContainer;
