import { Component, OnInit, Input, DoCheck } from '@angular/core';
import swal from 'sweetalert2';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  filterText:string;
  wordDescription:string;
  constructor() { }

  ngOnInit() {
  }

  onLetterClicked(event: any){
    this.filterText = event;
  }

  onSetDescription(event:any){
    this.wordDescription=event;
  }

}
