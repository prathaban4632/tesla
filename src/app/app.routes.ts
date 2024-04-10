import { Routes } from '@angular/router';

import { CarModelSelectorComponent } from './carmodel-selector/carmodel-selector.component';
import { CarConfigSelectorComponent } from './carConfig-selector/CarConfig-selector.component';
import { SummaryComponent } from './summary/summary.component';
import { inject } from '@angular/core';
import { CarModelService } from './carmodel.service';
import { ConfigService } from './config.service';

export const routes: Routes = [
  { path: '', redirectTo: 'select-model', pathMatch: 'full' },
  { path: 'select-model', component: CarModelSelectorComponent },
  {
    path: 'select-config',
    component: CarConfigSelectorComponent,
    canActivate: [() => inject(CarModelService).modelCode$.value.length > 0]
  },
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate: [() => inject(ConfigService).configId > 0]
  },
  { path: '**', redirectTo: 'select-model' }
];
