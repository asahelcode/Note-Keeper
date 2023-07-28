import jsPDF from "jspdf"

const handleConvertToPDF = async (noteImages, noteName) => {
    if (noteImages.length === 0) {
      alert('Please select images before converting to PDF.');
      return;
    }
  
    // Create a new instance of jsPDF
    const pdf = new jsPDF();
  
    // Function to create an Image object and resolve it when the image is loaded
    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = src;
      });
    };
  
    try {
      for (const imageUrl of noteImages) {
        if (pdf.internal.getNumberOfPages() > 0) {
          pdf.addPage(); // Add a new page for each image (except the first one)
        }
  
        const img = await loadImage(imageUrl);
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (imgWidth / img.width) * img.height;
  
        // Add the image to the PDF with adjusted dimensions
        pdf.addImage(img, 'JPEG', 0, 0, imgWidth, imgHeight);
      }
  
      // Save the PDF and trigger the download
      pdf.save(`${noteName}`);
    } catch (error) {
      console.error('Error converting images to PDF:', error);
    }
  };
  
  

export default handleConvertToPDF