import * as Select from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, CheckIcon } from "lucide-react";
import React from "react";

interface D2YSelectProps {
  value: string;
  data: { value: string; label: string }[];
  onValueChange: (value: string) => void;
  placeholder: string;
}

const D2YSelect: React.FC<D2YSelectProps> = ({
  value,
  data,
  onValueChange,
  placeholder,
}) => {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger
        aria-label={placeholder}
        className="inline-flex items-center justify-between w-full px-3 py-2 border rounded-md text-white bg-black"
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content className="bg-black relative z-50 border border-neutral-600 rounded-md">
        <Select.ScrollUpButton className="flex items-center justify-center p-2">
          <ChevronUp />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-2">
          {data.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-neutral-700 text-white"
            >
              <Select.ItemText>{item.label}</Select.ItemText>
              <Select.ItemIndicator>
                <CheckIcon className="w-4 h-4 text-green-500" />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center p-2">
          <ChevronDown />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Root>
  );
};

export default D2YSelect;
