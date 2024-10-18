import { Priority, TaskData } from "./types";

export const PRIORITY_LOW: Priority = { id: 1, name: "low", };
export const PRIORITY_MED: Priority = {
    id: 2,
    name: "med",
};
export const PRIORITY_HIGH: Priority = { id: 3, name: "high", };

export const PRIORITIES: Priority[] = [
    PRIORITY_LOW,
    PRIORITY_MED,
    PRIORITY_HIGH
];

export const PRIORITIE_COLOR_HIGH = '#f58989';
export const PRIORITIE_COLOR_MED = '#fcbe58';
export const PRIORITIE_COLOR_LOW = '#74fc58';

export const initTableData = [
    {
        id: 'b66c7d80-95b1-458a-b40a-acb2e2078867',
        task: 'Buy groceries',
        assignee: 'Karen',
        priority: PRIORITY_MED,
    },
    {
        id: '7c5fe481-d5f1-4814-bc20-48e3a92fb6a3',
        task: 'Pick up the children from kindergarten',
        assignee: 'Eytan',
        priority: PRIORITY_HIGH,
    },
    {
        id: '990c7346-01f5-4954-aa61-c413e31a885c',
        task: 'Schedule doctor appointment',
        assignee: 'Eytan',
        priority: PRIORITY_LOW,
    },
];


export const initEditingData: TaskData & { index: number } = {
    index: -1,
    id: '-1',
    task: '',
    assignee: '',
    priority: {
        id: -1,
        name: 'high',
    } as Priority,
};