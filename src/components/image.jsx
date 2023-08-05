import { useState } from "react";
import "../styles/image.css";
import defaultIMG from "../assets/upload.webp";

export default function Image() {
  const [url, setUrl] = useState(defaultIMG);
  function handleImgClick(e) {
    const input = e.target.previousElementSibling;
    input.click();
  }

  function handleImgUpload(e) {
    setUrl(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <input
        type="file"
        className="img-input"
        accept="image/*"
        onChange={handleImgUpload}
      />
      <img
        src={url}
        alt="Profile Picture"
        className="image"
        onClick={handleImgClick}
      />
    </>
  );
}
