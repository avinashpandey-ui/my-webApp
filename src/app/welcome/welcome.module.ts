import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  declarations: [WelcomeComponent],
})
export class WelcomeModule {}
