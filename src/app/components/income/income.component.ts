import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  @Input() data;
  @Output() idIncome = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  clickHundler(id) {
      this.idIncome.emit(id);
  }
}
