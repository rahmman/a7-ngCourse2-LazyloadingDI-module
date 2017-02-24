import {Routes, RouterModule} from '../../../node_modules/@angular/router'
import {LazyComponent} from './lazy.component';
import {ModuleWithProviders} from '@angular/core'
const routes: Routes=[
  {path: '', component: LazyComponent}

]
export const routing : ModuleWithProviders= RouterModule.forChild(routes)
