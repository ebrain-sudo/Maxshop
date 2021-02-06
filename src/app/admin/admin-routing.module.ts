import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogsComponent} from './logs/logs.component';
import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
  path: 'logs',
  component: LogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [LogsComponent,]
})

export class AdminPageRoutingModule {}
