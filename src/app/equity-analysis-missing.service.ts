import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/Http';
import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class EquityAnalysisMissingService {

  constructor(private http: Http) { }

  getEquityAnalysisFullDetails() {
    return this.http.get('./assets/data/EquityAnalysisFullData.json').map((res: Response) => res.json()).catch((error: Response | any) => error.json())
  }
}
