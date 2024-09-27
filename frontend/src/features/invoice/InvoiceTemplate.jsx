import { useRef } from "react";
import Invoice1 from "../../ui/invoice1/Invoice1";

function InvoiceTemplate() {
  const printRef = useRef();
  return (
    <>
      <div
        ref={printRef}
        className="absolute top-[50%] left-[50%] w-[80%] translate-x-[-50%] translate-y-[-50%] z-10 bg-yellow-500 text-black shadow-lg"
      >
        <h2 className="text-center font-bold text-xl">
          Tax Invoice (Original)
        </h2>
        <Invoice1 />
      </div>
    </>
  );
}

export default InvoiceTemplate;
