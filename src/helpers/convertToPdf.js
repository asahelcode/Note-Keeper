import jsPDF from "jspdf"

const handleConvertToPDF = (noteImages) => {
    if (noteImages.length === 0) {
      alert('Please select images before converting to PDF.');
      return;
    }
  
    // Create a new instance of jsPDF
    const pdf = new jsPDF();
  
    noteImages.forEach((imageUrl, index) => {
      if (index > 0) {
        pdf.addPage(); // Add a new page for each image (except the first one)
      }
  
      const img = new Image();
      img.onload = () => {
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (imgWidth / img.width) * img.height;
  
        // Add the image to the PDF with adjusted dimensions
        pdf.addImage(imageUrl, 'JPEG', 0, 0, imgWidth, imgHeight);
        
        if (index === noteImages.length - 1) {
          // Save the PDF or show it in a new tab (you can also use FileSaver.js to save the PDF)
          pdf.save('note.pdf');
        }
      };
  
      img.src = imageUrl;
    });
  };
  

export default handleConvertToPDF