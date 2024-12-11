import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { TimelineComponent } from './timeline/timeline.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogsModule } from '../dialogs/dialogs.module';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    TimelineModule,
    CardModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogsModule,
    InputTextModule,
    CalendarModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TimelineComponent
  ]
})
export class SharedModule { }
