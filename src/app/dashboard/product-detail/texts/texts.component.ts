import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.css']
})
export class TextsComponent implements OnInit {
  
  @Input() page: string;

  constructor() { }

  ngOnInit(): void {
  }

}
