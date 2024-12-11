import { createAction, props } from '@ngrx/store';
import { TimelineEvent } from '../../models/timeline-event.model';

export const addEvent = createAction('[Event] Add Event', props<{ event: TimelineEvent }>());
export const editEvent = createAction('[Event] Edit Event', props<{ event: TimelineEvent }>());
export const deleteEvent = createAction('[Event] Delete Event', props<{ eventId: string }>());
export const loadEvents = createAction('[Event] Load Events');
export const loadEventsSuccess = createAction('[Event] Load Events Success', props<{ events: TimelineEvent[] }>());
export const setSearchTerm = createAction('[Event] Set Search Term', props<{ searchTerm: string }>());
