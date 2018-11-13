import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {
  @Output() onLetterClicked: EventEmitter<any> = new EventEmitter();

  filterText:string;
  captions:string[]=['A','B','C','Ç','D','E','F','G','H','I','İ','J','K','L','M','N','O','Ö','P','Q','R','S','Ş','T','U','Ü','V','W','X','Y','Z'];
 
  constructor() { }

  ngOnInit() {
  }

  letterClicked(value: string){
    this.onLetterClicked.emit(value);
  }

}
