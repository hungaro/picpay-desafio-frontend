import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'a-button',
  templateUrl: './a-button.component.html',
  styleUrls: ['./a-button.component.scss']
})
export class AButtonComponent implements OnInit {

  @Input() title: string;
  @Input() color: string;
  @Input() block: boolean = false;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.buttonClicked.emit();
  }

}
