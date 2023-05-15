import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  country: any = null;

  @Input('country') set data(data: any) {
    this.country = data;
  }
}
