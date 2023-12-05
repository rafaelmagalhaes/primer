import type { Component } from "../../types";

export const CText = ({ component }: { component: Component }) => {
  return <p>{component.text}</p>;
};
