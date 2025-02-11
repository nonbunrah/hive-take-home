import type { InputProps } from "../types";

const MAX_LENGTH = 45;

const Input = ({ isOpen, placeholder, selectedOptions, toggleDropdown }: InputProps) => {
  const defaultPlaceholder = placeholder || "Select...";

  const getDisplayText = () => {
    const text = selectedOptions.join(", ");
    return text.length > MAX_LENGTH ? text.substring(0, MAX_LENGTH) + "..." : text;
  };

  const arrowClassName = `dropdown-arrow ${isOpen ? "open" : ""}`;
  const placeholderText = selectedOptions.length === 0 ? defaultPlaceholder : getDisplayText();

  return (
    <div className="dropdown-select" onClick={toggleDropdown}>
      <span className="dropdown-text">{placeholderText}</span>
      <span className={arrowClassName}>&#9662;</span>
    </div>
  );
};

export default Input;
