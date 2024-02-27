import { RefObject, useRef, useState } from "react";

import classes from "./image-picker.module.css";

interface IMultipleImagePickerProps {
  label: string;
  name: string;
}
export default function MultipleImagePicker({
  label,
  name,
}: IMultipleImagePickerProps) {
  const [pickedImages, setPickedImages] = useState<
    (string | ArrayBuffer | null)[]
  >([]);

  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    if (imageInput.current) imageInput.current.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (!files || files.length === 0) {
      setPickedImages([]);
      return;
    }

    const fileReaders: FileReader[] = [];
    const results: (string | ArrayBuffer | null)[] = [];

    for (let i = 0; i < files.length; i++) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[i]);
      fileReaders.push(fileReader);

      fileReader.onload = () => {
        results.push(fileReader.result);
        if (results.length === files.length) {
          setPickedImages(results);
        }
      };
    }
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImages.length === 0 && <p>No images picked yet.</p>}
          {pickedImages.map((image, index) => (
            <img
              key={index}
              src={image?.toString()}
              alt="The image selected by the user."
              aria-hidden
            />
          ))}
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
