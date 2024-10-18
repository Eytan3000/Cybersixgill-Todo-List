import { v4 as uuid } from 'uuid';
import {
    PRIORITIE_COLOR_HIGH, PRIORITIE_COLOR_MED,
    PRIORITIE_COLOR_LOW
} from './data';

export const generateId = () => uuid();

export function getPriorityColor(id: number) {
    if (id === 3) {
        return PRIORITIE_COLOR_HIGH;
    }
    if (id === 2) {
        return PRIORITIE_COLOR_MED;
    }
    return PRIORITIE_COLOR_LOW;
}

