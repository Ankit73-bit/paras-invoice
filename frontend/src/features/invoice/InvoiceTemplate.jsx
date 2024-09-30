import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import html2pdf from "html2pdf.js";

function InvoiceTemplate() {
  const componentRef = useRef();

  // Function to handle the print button (opens print dialog)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Function to handle the download button (directly download as PDF)
  const handleDownload = () => {};

  return (
    <>
      <main
        ref={componentRef}
        className="absolute top-[50%] left-[50%] w-[80%] translate-x-[-50%] translate-y-[-50%] text-black bg-slate-600 p-2"
      >
        <h2 className="text-center bg-yellow-500 font-bold text-xs md:text-lg lg:text-2xl">
          Tax Invoice (Original)
        </h2>
      </main>
      <div className="flex flex-col mt-56">
        <button onClick={handlePrint}>Print</button>
        <button onClick={handleDownload}>Download as PDF</button>
      </div>
    </>
  );
}

export default InvoiceTemplate;
