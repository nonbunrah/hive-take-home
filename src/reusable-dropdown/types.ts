export type ComponentProps = {
  defaultValue: ReusableDropdownProps["defaultValue"];
  handleSelect: (option: Option) => void;
  handleSelectAll: () => void;
  isOpen: boolean;
  multiSelect: ReusableDropdownProps["multiSelect"];
  onChange: ReusableDropdownProps["onChange"];
  options: ReusableDropdownProps["options"];
  placeholder?: ReusableDropdownProps["placeholder"];
  selectedOptions: string[];
  toggleDropdown: () => void;
};

export type DropdownProps = Omit<
  ComponentProps,
  "defaultValue" | "onChange" | "placeholder" | "toggleDropdown"
>;

export type DropdownOptionProps = Pick<
  ComponentProps,
  "handleSelect" | "multiSelect" | "selectedOptions"
> & { option: Option };

export type InputProps = Pick<
  ComponentProps,
  "isOpen" | "placeholder" | "selectedOptions" | "toggleDropdown"
>;

export type Option = {
  label: string;
  value: string | number;
};

export type ReusableDropdownProps = {
  defaultValue?: string[];
  multiSelect?: boolean;
  onChange?: (selectedOptions: ComponentProps["selectedOptions"], option?: Option) => void;
  options: Option[];
  placeholder?: string;
};
