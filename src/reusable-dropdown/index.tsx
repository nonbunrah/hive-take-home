import { useEffect, useRef, useState } from "react";
import { Dropdown, Input } from "./components";
import { getDefaultOptions } from "./helpers";
import "./styles.css";

import type { ComponentProps, Option, ReusableDropdownProps } from "./types";

const ReusableDropdown = ({
  defaultValue,
  multiSelect = false,
  options,
  onChange,
  placeholder,
}: ReusableDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const defaultOptions = getDefaultOptions(defaultValue, multiSelect);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] =
    useState<ComponentProps["selectedOptions"]>(defaultOptions);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleSelect = (option: Option) => {
    let newSelected;

    if (multiSelect) {
      const isOptionSelected = selectedOptions.includes(option.label);

      newSelected = isOptionSelected
        ? selectedOptions.filter((item) => item !== option.label)
        : [...selectedOptions, option.label];
    } else {
      newSelected = [option.label];
      setIsOpen(false);
    }

    if (onChange) {
      onChange(newSelected, option);
    }

    setSelectedOptions(newSelected);
  };

  const handleSelectAll = () => {
    const allOptions = options.map((option) => option.label);
    const isEverythingSelected = selectedOptions.length === options.length;

    const newSelected = isEverythingSelected ? [] : allOptions;

    if (onChange) {
      onChange(newSelected);
    }

    setSelectedOptions(newSelected);
  };

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <Input
        isOpen={isOpen}
        placeholder={placeholder}
        selectedOptions={selectedOptions}
        toggleDropdown={toggleDropdown}
      />
      <Dropdown
        handleSelect={handleSelect}
        handleSelectAll={handleSelectAll}
        isOpen={isOpen}
        multiSelect={multiSelect}
        options={options}
        selectedOptions={selectedOptions}
      />
    </div>
  );
};

export default ReusableDropdown;
