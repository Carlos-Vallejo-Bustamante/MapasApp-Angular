import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
  .mapa-container {
    height: 100%;
    width: 100%;
}

.row {
  background: white;
  border-radius: 5px;
  bottom: 50px;
  left: 50px;
  padding: 10px;

  position: fixed;
  z-index: 999;
}
  `]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;

  constructor() {
    console.log('Constructor', this.divMapa);
  }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-3.9844613968785887, 40.29787449584509],
      zoom: 18
    });
  }

  zoomOut() {
    this.mapa.zoomOut();

  }

  zoomIn() {
    this.mapa.zoomIn();
  }

}
