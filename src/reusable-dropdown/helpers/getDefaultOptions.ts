import type { ComponentProps, ReusableDropdownProps } from "../types";

type DefaultOptions = ComponentProps["selectedOptions"];
type DefaultValue = ReusableDropdownProps["defaultValue"];
type MultiSelect = ReusableDropdownProps["multiSelect"];

export const getDefaultOptions = (defaultValue: DefaultValue, multiSelect: MultiSelect) => {
  let defaultOptions: DefaultOptions = [];

  if (defaultValue) {
    defaultOptions = multiSelect ? defaultValue : [defaultValue[0]];
  }

  return defaultOptions;
};
