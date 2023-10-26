import { NgModule } from '@angular/core';
import { WrapperComponent } from './wrapper.component';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [WrapperRoutingModule, CommonModule],
  declarations: [WrapperComponent],
})
export class WrapperModule {}
