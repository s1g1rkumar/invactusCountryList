import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countryAllData: any = [];
  countryList: any = null;
  countryRegionValue: any = [];
  searchTerm: string = '';
  options: any[] = [];
  selectRegion: any;


  constructor(private _http: HttpClient) { }

  // get country list 
  getCountryData() {
    return this._http.get("https://restcountries.com/v3.1/all");
  }

  getCountryByRegionSearch(search: string) {
    return this._http.get(`https://restcountries.com/v3.1/region/${search}`)
  }



  ngOnInit(): void {
    this.searchTerm = "";
    this.selectRegion = "";
    this.getCountryData().subscribe((res: any) => {
      this.countryAllData = res;
      this.countryList = res.slice(0, 8);
      this.options = res.filter(
        (obj: any, index: number) =>
          res.findIndex((item: any) => item.region === obj.region) === index
      );
    });
  }

  filteredCountry(search: string): void {
    if (search === "") {
      this.ngOnInit();
    } else {
      this.countryList = this.countryAllData.filter((item: any) => item.name.common.toLowerCase().includes(search)).slice(0, 8);
    }
  }

  getCountryByRegion(search: string): void {
    this.getCountryByRegionSearch(search).subscribe((res: any) => {
      this.countryList = res.slice(0, 8);
    });
  }

}

