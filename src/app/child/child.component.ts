import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  input: string;
  @Output() passToParent = new EventEmitter<string>();
  
  
  @Input() passedToChild: string;

  constructor() { }

  ngOnInit() {
  }
  
  onPassToParent() {
    this.passToParent.emit(this.input);
  }

}
