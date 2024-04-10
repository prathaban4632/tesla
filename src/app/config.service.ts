import { Injectable } from '@angular/core';
import { CarModelService } from './carmodel.service';
import { Config } from '../types/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configId = 0; // No config selected
  config: Config | null = null;
  // False options mean either unavailable or available but not selected
  towHitch = false;
  yoke = false;

  constructor(carModelService: CarModelService) {
    
    carModelService.modelCode$.subscribe(_ => {
      this.configId = 0;
      this.config = null;
      this.towHitch = false;
      this.yoke = false;
    });
  }
}
