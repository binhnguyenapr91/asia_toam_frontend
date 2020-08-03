import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthboardComponent} from './authboard/authboard.component';

const routes: Routes = [
  {
    path: '',
    component: AuthboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AuthRoutingModule {
}
