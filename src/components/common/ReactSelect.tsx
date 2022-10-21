import React from "react";
import Select from "react-select";

interface IProps {
  onChange: (value: any) => void;
}

export interface IOption {
  label: string;
  value: string;
}

function ReactSelect(props: IProps) {
  const [selectedOptions, setSelectedOptions] = React.useState<IOption[]>([]);
  const options: any = [
    { value: "test1@yopmail.com", label: "Test1" },
    { value: "test2@yopmail.com", label: "Test2" },
    { value: "test3@yopmail.com", label: "Test3" },
  ];

  const handleChange = (value: any) => {
    setSelectedOptions([...value]);
    props.onChange(value);
  };

  return (
    <Select
      options={options}
      value={selectedOptions}
      isMulti
      onChange={handleChange}
    />
  );
}

export default ReactSelect;
