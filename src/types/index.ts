export interface ITodo {
  id: number;
  name: string;
  completed: boolean;
}

export interface IFilter {
  id: number;
  name: string;
  filterName: FilterPropView;
}

export const filterPropView = ["all", "active", "completed"] as const;
export type FilterPropView = typeof filterPropView[number];
