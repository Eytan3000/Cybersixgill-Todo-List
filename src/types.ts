import { Cell, Column, Row, Table } from "@tanstack/react-table";

export type Priority = {
  id: number,
  name: 'high' | 'med' | 'low'
}

export interface TaskData {
  id: string;
  task: string;
  assignee: string;
  priority: Priority;
}

interface FormElements extends HTMLFormControlsCollection {
  task: HTMLInputElement;
  assignee: HTMLInputElement;
  priority: HTMLSelectElement;
}
export interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export type CellValue = string | { id: number; name: string }

export type CellProps<TData> = {
  table: Table<TData>;
  row: Row<TData>;
  column: Column<TData>;
  cell: Cell<TData, CellValue>;
  getValue: () => string | null;
  renderValue: () => string;
};

