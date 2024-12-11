import { NgModule } from '@angular/core';
import { AddEventDialogComponent } from './add-event-dialog/add-event-dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { EditEventDialogComponent } from './edit-event-dialog/edit-event-dialog.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AddEventDialogComponent,
    EditEventDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CalendarModule
  ],
  exports: [
    AddEventDialogComponent,
    EditEventDialogComponent
  ]
})
export class DialogsModule { }
