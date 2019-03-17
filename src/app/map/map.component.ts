import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  public lat: Number = 24.799448;
  public lng: Number = 120.979021;
  public origin: any;
  public destination: any;

  ngOnInit() {
  }

}
