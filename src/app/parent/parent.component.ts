import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  input: string;
  @Input() passedFromApp: string;
  @Output() passToAppInput = new EventEmitter<string>();
  passedFromChild: string;

  constructor() { }

  ngOnInit() {
    
    
  }
  
  passInputToApp(){
    this.passToAppInput.emit(this.input);
  }
  
  passFromChild(passedInputFromChild) {
    this.passedFromChild = passedInputFromChild;
  }

}
