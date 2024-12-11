import { createReducer, on } from '@ngrx/store';
import { addEvent, deleteEvent, editEvent, loadEventsSuccess, setSearchTerm } from './event.actions';
import { TimelineEvent } from '../../models/timeline-event.model';

export interface EventState {
  events: TimelineEvent[];
  searchTerm: string;
}

export const initialState: EventState = {
  events: [],
  searchTerm: ''
};

export const eventReducer = createReducer(
  initialState,
  on(addEvent, (state, { event }) => ({
    ...state,
    events: [...state.events, event]
  })),
  on(deleteEvent, (state, { eventId }) => ({
    ...state,
    events: state.events.filter(event => event.id !== eventId)
  })),
  on(loadEventsSuccess, (state, { events }) => ({
    ...state,
    events
  })),
  on(editEvent, (state, { event }) => ({
    ...state,
    events: state.events.map(existingEvent =>
      existingEvent.id === event.id ? { ...existingEvent, ...event } : existingEvent
    )
  })),
  on(setSearchTerm, (state, { searchTerm }) => ({
    ...state,
    searchTerm
  }))
);
