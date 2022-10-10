import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingsListComponent } from './votings-list/votings-list.component';
import { VotingsDetailsComponent } from './votings-details/votings-details.component';
import { UiComponent } from './ui/ui.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


const routes: Routes = [
  {
    path: '',
    component: UiComponent,
    children: [
      {
        path: '',
        component: VotingsListComponent,
      },
      {
        path: ':id',
        component: VotingsDetailsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    VotingsListComponent,
    VotingsDetailsComponent,
    UiComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
  ],
  exports: [],
})
export class InsideModule {}
