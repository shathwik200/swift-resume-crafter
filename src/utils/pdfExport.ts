
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const exportToPdf = async (elementId: string, filename: string): Promise<void> => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    throw new Error(`Element with ID ${elementId} not found`);
  }
  
  // Apply specific styling for PDF export
  const originalStyle = element.style.cssText;
  element.style.width = '794px'; // 21cm in pixels at 96 dpi - A4 width
  element.style.height = 'auto';
  element.style.overflow = 'hidden';
  element.style.backgroundColor = 'white';
  
  // Get the actual height of the content
  const scrollHeight = element.scrollHeight;
  
  // Create canvas with high resolution
  const canvas = await html2canvas(element, {
    scale: 2, // Higher scale for better quality
    useCORS: true,
    logging: false,
    allowTaint: true,
    backgroundColor: '#ffffff',
    windowWidth: 1200, // Simulate a desktop viewport
    windowHeight: scrollHeight,
  });
  
  // Reset the original style
  element.style.cssText = originalStyle;
  
  // A4 measurements in mm for jsPDF
  const a4Width = 210;
  const a4Height = 297;
  
  // Create PDF with A4 dimensions
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });
  
  // Calculate dimensions to fit the A4 page properly
  const imgWidth = a4Width;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  // If content exceeds one page, create multiple pages
  let position = 0;
  let remainingHeight = imgHeight;
  
  while (remainingHeight > 0) {
    // For pages after the first one
    if (position > 0) {
      pdf.addPage();
    }
    
    // Calculate how much of the canvas to render on the current page
    const heightOnThisPage = Math.min(remainingHeight, a4Height);
    const srcY = position / imgHeight * canvas.height;
    const srcHeight = heightOnThisPage / imgHeight * canvas.height;
    
    // Add content to the PDF
    const canvasDataUrl = canvas.toDataURL('image/png');
    
    // Standard parameters for addImage
    pdf.addImage(
      canvasDataUrl, 
      'PNG', 
      0, // X position
      0, // Y position (always start at top of new page)
      imgWidth, 
      heightOnThisPage
    );
    
    // Update position and remaining height
    position += heightOnThisPage;
    remainingHeight -= a4Height;
  }
  
  // Save the PDF
  pdf.save(filename);
};
