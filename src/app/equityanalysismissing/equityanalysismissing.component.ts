import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { EquityAnalysisMissingService } from '../equity-analysis-missing.service';

@Component({
  selector: 'app-equityanalysismissing',
  templateUrl: './equityanalysismissing.component.html',
  styleUrls: ['./equityanalysismissing.component.css']
})
export class EquityanalysismissingComponent implements OnInit {

  @ViewChild('equityAnalysisForm') _equityAnalysisForm: NgForm;

  constructor(private userGetEquityService: EquityAnalysisMissingService,
    private router: Router) {
  }

  userEquityAnalysis: object = {};
  retriveTrue: boolean = false;
  dataValue: any = {};

  dataValueDetails: any = {};

  ngOnInit() {

  }

  onRetrive() {
    this.retriveTrue = true;

    this.userGetEquityService.getEquityAnalysisFullDetails()
      .subscribe(data => {
        for (let i = 0; i < data.LMCA.length; i++) {
          if (data.LMCA[i].ModelRun == this.userEquityAnalysis['ModelRun'] && data.LMCA[i].CCLoanNumber == this.userEquityAnalysis['CCLoanNumber']) {
            this.dataValue = data.LMCA[i];
            break;
          }
        }
        console.log(this.dataValue);
      }), (error => {
        console.log(error);
      });
  }
  
  onReset() {
    this.retriveTrue = false;
    this._equityAnalysisForm.reset();
  }
  onSignOut() {
    this.router.navigateByUrl('/login');
  }

}
