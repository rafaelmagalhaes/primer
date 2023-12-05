import type { DuckCoins } from "../types";

export const duckSchema: DuckCoins = {
  screens: [
    {
      id: "start_screen",
      components: [
        {
          type: "Container",
          components: [
            {
              type: "Container",
              components: [
                {
                  type: "Text",
                  text: "Pay with Ducks",
                },
                {
                  type: "Text",
                  text: "1. Go to your Ducks app to get your Duck code.",
                },
                {
                  type: "Text",
                  text: "2. Paste your Duck code here.",
                },
                {
                  id: "duck-code",
                  type: "Input",
                  hint: "Enter Duck code",
                },
              ],
            },
            {
              type: "Button",
              text: "Submit",
              onClick: "SUBMIT",
            },
          ],
        },
      ],
    },
  ],
  events: [
    {
      type: "SUBMIT",
      actions: [
        {
          type: "log",
          data: {
            value: "{{duck-code}}",
          },
        },
      ],
    },
  ],
};
