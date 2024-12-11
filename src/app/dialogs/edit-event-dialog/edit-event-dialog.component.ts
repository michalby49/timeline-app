import { Component, EventEmitter, Output } from '@angular/core';
import { TimelineEvent } from '../../models/timeline-event.model';
import { Store } from '@ngrx/store';
import { editEvent } from '../../store/events/event.actions';

@Component({
  selector: 'app-edit-event-dialog',
  templateUrl: './edit-event-dialog.component.html',
  styleUrl: './edit-event-dialog.component.scss'
})
export class EditEventDialogComponent {
  @Output() eventEdited = new EventEmitter<any>();
  displayDialog: boolean = false;

  eventToEdit: TimelineEvent = {
    id: '',
    title: '',
    date: new Date(),
    description: '',
    icon: 'pi pi-calendar',
    color: '#4CAF50',
    status: ''
  };

  constructor(private store: Store) {}

  openDialog(event: TimelineEvent): void {
    this.eventToEdit = { ...event };
    this.displayDialog = true;
  }

  closeDialog(): void {
    this.displayDialog = false;
  }

  editEvent(): void {
    this.closeDialog();
  }

  saveEditEvent(): void {
    if (this.eventToEdit) {
      this.store.dispatch(editEvent({ event: this.eventToEdit }));
    }

    this.closeDialog();
    this.resetEventForm();
  }

  private resetEventForm(): void {
    this.eventToEdit = {
      id: '',
      title: '',
      date: new Date(),
      description: '',
      icon: 'pi pi-calendar',
      color: '#4CAF50',
      status: ''
    };
  }
}
