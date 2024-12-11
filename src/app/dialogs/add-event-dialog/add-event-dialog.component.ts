import { Component, EventEmitter, Output } from '@angular/core';
import { TimelineEvent } from '../../models/timeline-event.model';
import { Store } from '@ngrx/store';
import { addEvent } from '../../store/events/event.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent {
  @Output() eventAdded = new EventEmitter<any>();
  displayDialog: boolean = false;

  newEvent: TimelineEvent = {
    id: '',
    title: '',
    date: new Date(),
    description: '',
    icon: 'pi pi-calendar',
    color: '#4CAF50',
    status: ''
  };

  constructor(private store: Store) {}

  openDialog(): void {
    this.displayDialog = true;
  }

  closeDialog(): void {
    this.displayDialog = false;
  }

  addEvent(): void {
    this.newEvent.id = uuidv4();
    this.newEvent.date = new Date(this.newEvent.date);
    this.store.dispatch(addEvent({ event: this.newEvent }));

    this.closeDialog();
    this.resetEventForm();
  }

  private resetEventForm(): void {
    this.newEvent = {
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
