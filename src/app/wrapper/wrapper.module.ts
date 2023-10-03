import { NgModule } from "@angular/core";
import { WrapperComponent } from "./wrapper.component";
import { WrapperRoutingModule } from "./wrapper-routing.module";

@NgModule({
  imports:[WrapperRoutingModule],
  declarations:[WrapperComponent],
})
export class WrapperModule{

}
