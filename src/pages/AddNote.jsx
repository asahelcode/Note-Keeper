import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

const AddNote = () => {
  const notifySuccess = () => toast("Note successfully added!");

  const [noteName, setNoteName] = useState("");
  const [noteImages, setNoteImages] = useState([]);

  const url = "http://localhost:5000";

  const verifyNoteAdded = () => {
    if (noteName.trim() !== "" && noteImages.length > 0) notifySuccess();
  };

  const handleFileChange = (e) => {
      const files = e.target.files;
      setNoteImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const formData = new FormData();

      for (let i = 0; i < noteImages.length; i++) {
            formData.append("noteImages", noteImages[i]);
      }

      try {
          const response = await axios.post(`${url}\\convert-to-pdf`, formData, {
              headers: {
                  "Content-Type": "multipart/form-data"
              }
          })
          console.log(response.data);
      } catch (err) {
          console.error(err);
      }

  };

  return (
    <div className="p-2">
      <ToastContainer />
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="note-name" className="mt-2 text-md block">
          Note Name
        </label>
        <input
          type="text"
          value={noteName}
          required
          onChange={(e) => setNoteName(e.target.value)}
          className="mt-2 w-[300px] rounded-sm outline-none p-2"
        />

        <label htmlFor="note-images" className="mt-6 text-md block">
          Select note images
        </label>
        <input
          type="file"
          required
          name="note-images"
          id="note-images"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="mt-2"
        />

        <button
          type="submit"
          className="mt-6 p-2 bg-white rounded-sm"
          onClick={verifyNoteAdded}
        >
          Add
        </button>
        {/* <button onClick={handleDownloadPdf}><i className="fa-solid fa-download text-green-600 text-lg mt-2 ml-4"></i></button> */}
      </form>
    </div>
  );
};
export default AddNote;
