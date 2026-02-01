import { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

export default function PasswordField({ name, placeholder }) {
  const [visible, setVisible] = useState(false);
  const passRef = useRef(null);

  const togglePassword = () => {
    setVisible(prev => !prev);

  };

  return (
    <div
      className="loginInput flex items-center w-[775px] h-[59px] my-[10px] bg-[#19183B] px-[25px] text-[24px]"
      style={{ fontFamily: "Jaldi", borderRadius: "18px" }}
    >
      <input
        ref={passRef}
        id="passs"
        type={visible ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        required
        className="w-full h-full bg-[#19183B] text-white outline-0"
        style={{ borderRadius: "18px" }}
      />
      <span
        className="cursor-pointer text-white"
        onClick={togglePassword}
        aria-label={visible ? "Hide password" : "Show password"}
      >
        {visible ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
}
