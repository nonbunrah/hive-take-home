import DropdownOption from "./DropdownOption";

import type { DropdownProps, Option } from "../types";

const Dropdown = ({
  handleSelect,
  handleSelectAll,
  isOpen,
  multiSelect,
  options,
  selectedOptions,
}: DropdownProps) => {
  if (!isOpen) {
    return null;
  }

  const SelectAll = multiSelect ? (
    <div className="single-option" onClick={handleSelectAll}>
      <input
        checked={selectedOptions.length === options.length}
        onChange={handleSelectAll}
        type="checkbox"
      />
      <label className="option-label">Select All</label>
    </div>
  ) : null;

  const DropdownOptions = options.map((option: Option, index) => (
    <DropdownOption
      handleSelect={handleSelect}
      key={`option-${index}`}
      multiSelect={multiSelect}
      option={option}
      selectedOptions={selectedOptions}
    />
  ));

  return (
    <div className="options-list">
      {SelectAll}
      {DropdownOptions}
    </div>
  );
};

export default Dropdown;
