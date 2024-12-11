import { Component, ViewChild } from '@angular/core';
import { AddEventDialogComponent } from './dialogs/add-event-dialog/add-event-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(AddEventDialogComponent) addEventDialog!: AddEventDialogComponent;

  openAddEventDialog(): void {
    this.addEventDialog.openDialog();
  }
}
