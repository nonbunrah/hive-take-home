import type { DropdownOptionProps } from "../types";

const DropdownOption = ({
  handleSelect,
  multiSelect,
  option,
  selectedOptions,
}: DropdownOptionProps) => {
  const onUpdate = () => handleSelect(option);

  const checked = selectedOptions.includes(option.label);

  const optionClassName = `single-option ${checked ? "checked" : ""}`;
  const inputClassName = `single-option-input ${multiSelect ? "open" : ""}`;

  return (
    <div className={optionClassName} onClick={onUpdate}>
      <input
        className={inputClassName}
        checked={checked}
        onChange={onUpdate}
        type={multiSelect ? "checkbox" : "radio"}
      />
      <label className="option-label">{option.label}</label>
    </div>
  );
};

export default DropdownOption;
