import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  countryDetails: any = null;
  countryCodeId = this.route.snapshot.paramMap.get('countryCode');

  constructor(private route: ActivatedRoute, private _http: HttpClient,private location: Location) { }

  // get country list 
  getSingleCountryData() {
    return this._http.get("https://restcountries.com/v3.1/alpha/" + this.countryCodeId);
  }


  goBack() {
    this.location.back();
  }




  ngOnInit() {
    this.getSingleCountryData().subscribe((res: any) => {
      this.countryDetails = res[0];
    })
  }


  getObjectValues(obj: object): string[] {
    return Object.values(obj);
  }



}
