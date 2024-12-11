import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { TimelineEvent } from '../../models/timeline-event.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllEvents } from '../../store/events/event.selectors';
import { deleteEvent } from '../../store/events/event.actions';
import { ConfirmationService } from 'primeng/api';
import { EditEventDialogComponent } from '../../dialogs/edit-event-dialog/edit-event-dialog.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @ViewChild(EditEventDialogComponent) editEventDialog!: EditEventDialogComponent;
  @Output() editEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();

  events$: Observable<TimelineEvent[]>;

  constructor(
    private store: Store,
    private confirmationService: ConfirmationService
  ) {
    this.events$ = this.store.select(selectAllEvents);
  }

  onEditEvent(event: TimelineEvent): void {
    this.editEventDialog.openDialog(event);
  }

  confirmDelete(event: TimelineEvent): void {
    this.confirmationService.confirm({
      message: 'Czy napewno chcesz usunąć wydarzenie?',
      header: 'Potwierdz usunięcie',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'Nie',
      acceptLabel: 'Tak',
      accept: () => {
        this.store.dispatch(deleteEvent({ eventId: event.id }));
      }
    });
  }
}
