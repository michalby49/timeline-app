import { Component, ViewChild } from '@angular/core';
import { AddEventDialogComponent } from './dialogs/add-event-dialog/add-event-dialog.component';
import { Store } from '@ngrx/store';
import { setSearchTerm } from './store/events/event.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(AddEventDialogComponent) addEventDialog!: AddEventDialogComponent;

  constructor(private store: Store) {
    this.store.dispatch(setSearchTerm({ searchTerm: "" }));
  }

  openAddEventDialog(): void {
    this.addEventDialog.openDialog();
  }
}
