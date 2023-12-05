import { ActionData } from "../types";
import { Container } from "./Forms/Container.tsx";
import { duckSchema } from "../data/schema.ts";

const DuckCoin = () => {
  const executeAction = (
    actionType: string,
    actionData: ActionData,
    eventData: ActionData,
  ) => {
    const fieldIds = Object.keys(eventData);
    let fieldValue;
    const key = actionData.value.replace("{{", "").replace("}}", "");

    fieldIds.map((id) => {
      if (id === key) {
        if (eventData[id]) {
          fieldValue = { [id]: eventData[id] } as ActionData;
        }
      }
    });

    if (actionType === "log") {
      if (fieldValue) return console.log(fieldValue);
    }
  };

  const handleSubmit = ({
    eventType,
    eventData,
  }: {
    eventType: string;
    eventData: any;
  }) => {
    const event = duckSchema.events.find((e) => e.type === eventType);
    if (event) {
      event?.actions?.forEach((action) => {
        const { type: actionType, data: actionData } = action;
        executeAction(actionType, actionData, eventData);
      });
    }
  };

  return (
    <div>
      {duckSchema.screens.map((screen, index) => (
        <Container key={index} schema={screen} onSubmit={handleSubmit} />
      ))}
    </div>
  );
};

export default DuckCoin;
