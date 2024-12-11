import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSearchTerm } from '../../store/events/event.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() eventAdded = new EventEmitter<any>();

  searchTerm: string = '';

  constructor(private store: Store) {}

  openAddEventDialog(): void {
    this.eventAdded.emit();
  }

  onSearchChange(): void {
    this.store.dispatch(setSearchTerm({ searchTerm: this.searchTerm }));
  }
}
