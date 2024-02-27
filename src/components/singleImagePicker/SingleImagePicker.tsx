import { RefObject, useRef, useState } from "react";

import classes from "./image-picker.module.css";

interface ISingleImagePickerProps {
  label: string;
  name: string;
}
export default function SingleImagePicker({
  label,
  name,
}: ISingleImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const imageInput = useRef<HTMLInputElement>();

  function handlePickClick() {
    if (imageInput.current) imageInput.current.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      if (!file) {
        setPickedImage(null);
        return;
      }
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const readerResult: string | ArrayBuffer | null | undefined =
        fileReader.result;
      setPickedImage(readerResult);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <img
              src={pickedImage.toString()}
              alt="The image selected by the user."
              aria-hidden
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          /* when not mention a type an error occurs 
          because useRef() returns a MutableRefObject, and TypeScript expects a RefObject for the ref prop of the <input> element.  */
          ref={imageInput as RefObject<HTMLInputElement>}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
