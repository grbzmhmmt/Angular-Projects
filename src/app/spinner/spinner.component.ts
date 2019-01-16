import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  spinnerName: string = 'Ng4 Spinner';
  template: string =`<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`;

  constructor(private ng4spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.ng4spinnerService.show();
  }
}
