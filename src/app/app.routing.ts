import {Routes, RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import {EagerComponent} from './eager/eager.component';
const routes: Routes =[
  {path: '', redirectTo: 'eager', pathMatch: 'full'},
  {path: 'eager', component:EagerComponent},
  {path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule'}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes)
