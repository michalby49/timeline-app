import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventState } from './event.reducer';
import { TimelineEvent } from '../../models/timeline-event.model';

export const selectEventState = createFeatureSelector<EventState>('event');

export const selectAllEvents = createSelector(
  selectEventState,
  (state: EventState) => {
    const searchTerm = state.searchTerm.trim().toLowerCase();
    if (!searchTerm) {
      return [...state.events].sort((a: TimelineEvent, b: TimelineEvent) => a.date.getTime() - b.date.getTime())
    }

    return [...state.events].sort((a: TimelineEvent, b: TimelineEvent) => a.date.getTime() - b.date.getTime()).filter(event =>
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm));
  }
);
