import React from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ onFileUpload }) => {
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = () => onFileUpload(reader.result);
      reader.readAsText(file);
    } else {
      alert("Please upload a valid .txt file!");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: ".txt" });

  return (
    <div {...getRootProps()} className="">
      <input {...getInputProps()} />
      <p className="font-semibold text-xl">Drag & drop a WhatsApp chat export here, or click to upload</p>
    </div>
  );
};

export default FileUpload;
