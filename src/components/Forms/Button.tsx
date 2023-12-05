import type { Component } from "../../types";

export const CButton = ({
  component,
  onButtonClicked,
}: {
  component: Component;
  onButtonClicked: Function;
}) => {
  return (
    <button onClick={() => onButtonClicked(`${component.onClick}`)}>
      {component.text}
    </button>
  );
};
