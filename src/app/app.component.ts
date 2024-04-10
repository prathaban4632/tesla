import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarModelViewerComponent } from './carmodel-viewer/carmodel-viewer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { CarModelService } from './carmodel.service';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CarModelViewerComponent,
    MatTabsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeRoute = 0;
  readonly routes = [
    '/select-model',
    '/select-config',
    '/summary',
  ];

  constructor(
    private carModelService: CarModelService,
    private _configService: ConfigService,
  ) { }

  isDisabled(route: string): boolean {
    switch (route) {
      case '/select-config':
        return this.carModelService.modelCode$.value === '';
      case '/summary':
        return this._configService.configId === 0;
      default:
        return false;
    }
  }
}
