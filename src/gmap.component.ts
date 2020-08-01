import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {

  options: any;
  
  overlays: any[];
  
  ngOnInit() {
    this.options = {
        center: {lat: 19.0760, lng: 72.8777},
        zoom: 12
    };
}

zoomIn(map) {
  map.setZoom(map.getZoom()+1);
}

zoomOut(map) {
  map.setZoom(map.getZoom()-1);
}

clear() {
  this.overlays = [];
}
}