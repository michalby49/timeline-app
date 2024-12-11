import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsModule } from './dialogs/dialogs.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { eventReducer } from './store/events/event.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ConfirmationService } from 'primeng/api';

export function localStorageSyncReducer(reducer: any) {
  return localStorageSync({ keys: ['event'], rehydrate: true })(reducer);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterOutlet,
    SharedModule,
    CommonModule,
    DialogsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      { event: eventReducer },
      { metaReducers: [localStorageSyncReducer] }
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
