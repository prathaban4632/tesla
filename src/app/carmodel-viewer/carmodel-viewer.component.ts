import { Component } from '@angular/core';
import { CarModelService } from '../carmodel.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-model-viewer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './carmodel-viewer.component.html',
  styleUrl: './carmodel-viewer.component.scss'
})
export class CarModelViewerComponent {
  readonly ENDPOINT = 'https://interstate21.com/tesla-app/images';

  constructor(private carModelService: CarModelService) { }

  getUrl(modelCode: string, colorCode: string): string {
    return `${this.ENDPOINT}/${modelCode}/${colorCode}.jpg`;
  }

  get isModelSelected(): boolean {
    return this.modelCode !== '';
  }

  get src(): string {
    return this.getUrl(this.modelCode, this.colorCode);
  }

  get alt(): string {
    return `Tesla model ${this.modelCode} in ${this.colorCode}`;
  }

  get modelCode(): string {
    return this.carModelService.modelCode$.value;
  }

  get colorCode(): string {
    return this.carModelService.colorCode;
  }
}
