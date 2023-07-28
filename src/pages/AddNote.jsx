import { useState } from 'react'

const AddNote = () => {

    const [noteName, setNoteName] = useState('')
    const [noteImages, setNoteImages] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(noteName)

        // Get the file input element
  const fileInput = document.getElementById('note-images');

  // Get the selected files from the file input (an array of File objects)
  const selectedFiles = fileInput.files;

  // Convert the File objects to an array of URLs using FileReader
  const imageUrls = [];
  for (let i = 0; i < selectedFiles.length; i++) {
    const file = selectedFiles[i];
    const reader = new FileReader();

    // Create a closure to capture the file information
    reader.onload = (e) => {
      imageUrls.push(e.target.result);
      
      // Check if all files have been processed, then update the state with the imageUrls array
      if (imageUrls.length === selectedFiles.length) {
        setNoteImages(imageUrls);
      }
    };

    // Read the file as a data URL (this will trigger the `onload` event)
    reader.readAsDataURL(file);
  }

  console.log(noteImages)
    }

    return (
        <div className="p-2">
            <form action="" onSubmit={e => handleSubmit(e)}>
                <label htmlFor="note-name" className="mt-2 text-md block">Note Name</label>
                <input type="text" value={noteName} onChange={e => setNoteName(e.target.value)} className="mt-2 w-[300px] rounded-sm outline-none p-2" />

                <label htmlFor="note-images" className="mt-3 text-md block">Select note images</label>
                <input type="file" name="note-images" id="note-images" multiple accept="image/*"  className="mt-2"/>

                <button type="submit" className="mt-4 p-2 bg-white rounded-sm">Add</button>
            </form>
        </div>
    )
}
export default AddNote