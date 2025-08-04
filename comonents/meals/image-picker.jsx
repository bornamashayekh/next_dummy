"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const ImageInput = useRef();
  const [pickedImage, setPickedImage] = useState();
  function handlePickClick() {
    ImageInput.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>no Image was picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="image selected by user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png , image/jpeg"
          name={name}
                  ref={ImageInput}
                  onChange={handleImageChange}
        />
        <button
          type="button"
          onClick={handlePickClick}
          className={classes.button}
        >
          {" "}
          Pick Your Image
        </button>
      </div>
    </div>
  );
}
