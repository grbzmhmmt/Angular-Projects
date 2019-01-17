import { Component, OnInit, HostListener } from '@angular/core';
import { QuintessentialWords } from './quintessential';
import { QuintessentialWordsList } from './quintessential-list.mock';

@Component({
  selector: 'app-quintessential',
  templateUrl: './quintessential.component.html',
  styleUrls: ['./quintessential.component.css']
})
export class QuintessentialComponent implements OnInit {
  quintessentials:QuintessentialWords[];
  quintessential:QuintessentialWords;
  rd:number;
  constructor() { }

  ngOnInit() {
    this.quintessentials=QuintessentialWordsList;
    this.quintessential=this.quintessentials.pop();
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    this.rd=Math.floor(Math.random() * (this.quintessentials.length)) + 0;
    this.quintessential=this.quintessentials[this.rd];
  }

}
