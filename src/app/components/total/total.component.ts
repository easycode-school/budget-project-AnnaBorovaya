import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit, OnChanges {
  @Input() totalValueExpense;
  @Input() totalValueIncome;
  public sumExpense = 0;
  public sumIncome = 0;
  public sum = 0;
  constructor() { }
  ngOnInit() {
  }

  ngOnChanges(change) {
    this.sumExpense = this.totalValueExpense.length ? this.totalValueExpense.reduce((prev, next) => prev + Number(next.number), 0) : 0;
    this.sumIncome = this.totalValueIncome.length ? this.totalValueIncome.reduce((prev, next) => prev + Number(next.number), 0) : 0;
    this.sum = this.sumExpense + this.sumIncome;
  }
}