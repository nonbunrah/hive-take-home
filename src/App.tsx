import ReusableDropdown from "./reusable-dropdown";
import "./App.css";

import type { ComponentProps, Option } from "./reusable-dropdown/types";

function App() {
  const carOptions = [
    { label: "Acura", value: "Acura" },
    { label: "Audi", value: "Audi" },
    { label: "BMW", value: "BMW" },
    { label: "Citroen", value: "Citroen" },
    { label: "Ford", value: "Ford" },
    { label: "GMC", value: "GMC" },
    { label: "Honda", value: "Honda" },
    { label: "Hummer", value: "Hummer" },
    { label: "Lexus", value: "Lexus" },
    { label: "McLaren", value: "McLaren" },
    { label: "Mercedes-Benz", value: "Mercedes-Benz" },
    { label: "Pagani", value: "Pagani" },
    { label: "Scion", value: "Scion" },
    { label: "Subaru", value: "Subaru" },
    { label: "Suzuki", value: "Suzuki" },
    { label: "Toyota", value: "Toyota" },
    { label: "Volkswagen", value: "Volkswagen" },
  ];

  const selectedOptions = ["Acura", "Audi", "BMW"];

  const onChange = (selectedOptions: ComponentProps["selectedOptions"], option?: Option) => {
    console.log("Updated value: ", option, selectedOptions);
  };

  return (
    <>
      <h1>Reusable Dropdown by RJ Bamrah</h1>
      <label>Multi Select Dropdown: </label>
      <ReusableDropdown
        defaultValue={selectedOptions}
        multiSelect
        onChange={onChange}
        options={carOptions}
      />
      <div style={{ margin: "2em 0" }} />
      <label>Single Select Dropdown: </label>
      <ReusableDropdown options={carOptions} placeholder="Select a vehicle..." />
    </>
  );
}

export default App;
