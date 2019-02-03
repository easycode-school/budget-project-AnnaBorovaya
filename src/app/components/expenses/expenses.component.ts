import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  @Input() data;
  @Output() idExpense = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  clickHundler(id) {
      this.idExpense.emit(id);
  }
}
