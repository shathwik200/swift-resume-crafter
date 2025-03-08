
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const exportToPdf = async (elementId: string, filename = "resume.pdf"): Promise<void> => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with ID "${elementId}" not found.`);
    }

    // Clone the element to a hidden container for proper rendering
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.left = "-9999px";
    container.style.top = "0";
    // Set fixed width to match A4 paper ratio
    container.style.width = "794px"; // A4 width in pixels at 96 DPI
    container.style.backgroundColor = "white";
    
    // Clone the node to avoid modifying the original
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.transform = "none";
    clone.style.width = "100%";
    clone.style.height = "auto";
    clone.style.overflow = "visible";
    
    container.appendChild(clone);
    document.body.appendChild(container);

    // Use html2canvas to render the cloned element
    const canvas = await html2canvas(container, {
      scale: 2, // Higher resolution
      useCORS: true,
      logging: false,
      allowTaint: true,
      backgroundColor: "white",
      windowWidth: 794, // Match A4 width
    });

    // Calculate PDF dimensions (using A4 size)
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create the PDF with A4 dimensions
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    
    // Add the image to the PDF
    const imgData = canvas.toDataURL("image/png");
    
    // Handle multi-page if resume is longer than A4
    let heightLeft = imgHeight;
    let position = 0;
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if needed
    while (heightLeft > 0) {
      position = -pageHeight * (imgHeight - heightLeft) / imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    // Save the PDF
    pdf.save(filename);
    
    // Clean up
    document.body.removeChild(container);
  } catch (error) {
    console.error("Error exporting to PDF:", error);
    throw error;
  }
};
