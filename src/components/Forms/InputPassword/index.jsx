import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function InputPassword({ label, id, placeholder, register, errors }) {
  const [typeInput, setTypeInput] = useState("password");
  const [hidePass, setHidePass] = useState(true);

  function handleHidePass() {
    if (typeInput === "password") {
      setHidePass(false);
      setTypeInput("text");
    } else if (typeInput === "text") {
      setHidePass(true);
      setTypeInput("password");
    }
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          type={typeInput}
          id={id}
          placeholder={placeholder}
          {...register}
        />
        <button type="button" onClick={handleHidePass}>
          {hidePass ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
        </button>
      </div>
      <span>{errors}</span>
    </div>
  );
}
