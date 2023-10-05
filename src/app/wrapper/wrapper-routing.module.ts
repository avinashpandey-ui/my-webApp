import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper.component';
import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: ()=> import('../welcome/welcome.module').then((m)=>m.WelcomeModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
