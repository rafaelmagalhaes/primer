import { useState } from "react";
import type { Screen, Component } from "../../types";
import { CInput } from "./Input.tsx";
import { CText } from "./Text.tsx";
import { CButton } from "./Button.tsx";

export const Container = ({
  schema,
  onSubmit,
}: {
  schema: Screen;
  onSubmit: any;
}) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleEvent = (eventType: string) => {
    onSubmit({ eventData: formData, eventType });
  };

  const renderComponent = (component: Component, index: number) => {
    switch (component.type) {
      case "Container":
        return (
          <div key={index}>
            {component?.components?.map((subComponent, i) =>
              renderComponent(subComponent, i),
            )}
          </div>
        );
      case "Text":
        return <CText component={component} key={index} />;
      case "Input":
        return (
          <CInput
            key={index}
            component={component}
            onInputChange={handleInputChange}
          />
        );
      case "Button":
        return (
          <CButton
            key={index}
            component={component}
            onButtonClicked={handleEvent}
          ></CButton>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {schema.components.map((component, index) =>
        renderComponent(component, index),
      )}
    </div>
  );
};
