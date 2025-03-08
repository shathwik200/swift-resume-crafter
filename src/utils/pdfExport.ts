
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const exportToPdf = async (elementId: string, filename = "resume.pdf"): Promise<void> => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with ID "${elementId}" not found.`);
    }

    // Ensure the element has proper width/height and is visible
    const originalDisplay = element.style.display;
    element.style.display = "block";

    // Use html2canvas to render the element to a canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Higher resolution
      useCORS: true,
      logging: false
    });

    // Calculate PDF dimensions (using A4 as a standard resume size)
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create the PDF
    const pdf = new jsPDF({
      orientation: imgHeight > imgWidth ? "portrait" : "landscape",
      unit: "mm",
      format: "a4",
    });
    
    // Add the image to the PDF
    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    
    // Save the PDF
    pdf.save(filename);
    
    // Restore the original display style
    element.style.display = originalDisplay;
  } catch (error) {
    console.error("Error exporting to PDF:", error);
    throw error;
  }
};
