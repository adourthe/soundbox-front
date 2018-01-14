import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-soundbutton',
  templateUrl: './soundbutton.component.html',
  styleUrls: ['./soundbutton.component.css']
})
export class SoundbuttonComponent implements OnInit {

  @Input() label: String;
  @Input() key: String;
  @Input() id: String;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  playSound() {
    this.http.get('http://localhost:3000/soundbox/play/' + this.id).subscribe();
  }

}
