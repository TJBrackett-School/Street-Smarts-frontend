import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public origin: any;
  public destination: any;
  public lat;
  public lng;
  public selectedMarker;
  public markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    {
      lat: 22.33159,
      lng: 105.63233,
      alpha: 1
    },
    {
      lat: 7.92658,
      lng: -12.05228,
      alpha: 1
    },
    {
      lat: 48.75606,
      lng: -118.859,
      alpha: 1
    },
    {
      lat: 5.19334,
      lng: -67.03352,
      alpha: 1
    },
    {
      lat: 12.09407,
      lng: 26.31618,
      alpha: 1
    },
    {
      lat: 47.92393,
      lng: 78.58339,
      alpha: 1
    }
  ];

  constructor() {}

  ngOnInit() {
    const locationData = JSON.parse(localStorage.getItem('locationData'))
    this.lat = locationData.lat
    this.lng = locationData.lng
    this.addMarker(this.lat, this.lng)
  }

  addMarker(lat: number, lng: number) {
    this.markers.push({
      lat,
      lng,
      alpha: 1
    });
  }
  // Related to the rectangle property in the html
  // max(coordType: 'lat' | 'lng'): number {
  //   return Math.max(...this.markers.map(marker => marker[coordType]));
  // }

  // min(coordType: 'lat' | 'lng'): number {
  //   return Math.min(...this.markers.map(marker => marker[coordType]));
  // }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }
}
