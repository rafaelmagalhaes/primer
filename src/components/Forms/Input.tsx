import type { Component } from "../../types";

export const CInput = ({
  component,
  onInputChange,
}: {
  component: Component;
  onInputChange: any;
}) => {
  return (
    <input
      type="text"
      placeholder={component.hint}
      onChange={(e) => onInputChange(component?.id as string, e.target.value)}
    />
  );
};
