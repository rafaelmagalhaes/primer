export type DuckCoins = {
  screens: Screen[];
  events: Event[];
};

export type Event = {
  type: string;
  actions: Action[];
};

export type Action = {
  type: string;
  data: ActionData;
};

export type ActionData = { [key: string]: any };

export type Screen = {
  id: string;
  components: Component[];
};

export type Component = {
  type: string;
  text?: string;
  hint?: string;
  id?: string;
  onClick?: string;
  components?: Component[];
};
