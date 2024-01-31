import { useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleClick = () => {
    const val = (inputRef.current.style.background = "red");
    console.log("inputRef =>", val);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default DomRef;
