import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-soundbutton',
  templateUrl: './soundbutton.component.html',
  styleUrls: ['./soundbutton.component.css']
})
export class SoundbuttonComponent implements OnInit {

  @Input() label: String;
  @Input() key: String;

  constructor() { }

  ngOnInit() {
  }

  popup() {
    alert("playing " + this.label);
  }

}
