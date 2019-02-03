import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  public sign = 'income';
  public minus = false;
  public someValue = {
    number: '',
    text: '',
    id: ''
  };
  public valuesIncome = [];
  public valuesExpense = [];

  constructor() { }
  ngOnInit() {
  }

  public generate_id = () => {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';
    for (let i = 0; i < 10; i++) {
      const index: number = Math.floor(Math.random() * words.length);
      id += words[index];
    }
    return id;
  }

  onClickSelect() {
    if (this.sign === 'expense') {
      this.minus = true;
    } else if (this.sign === 'income') {
      this.minus = false;
    }
  }

  onClickButtonDelete(id) {
    this.valuesExpense = this.valuesExpense.filter(item => item.id !== id);
    this.valuesIncome = this.valuesIncome.filter(item => item.id !== id);
    console.log(this.valuesIncome);
  }

  onSubmitHandler(form) {
    this.someValue.id = this.generate_id();
    if (this.minus === false) {
      if (Number(this.someValue.number) < 0) {
        return alert('Введите положительное значение');
      }
      this.valuesIncome = this.valuesIncome.concat(Object.assign({}, this.someValue));
      console.log(this.valuesIncome);
      form.resetForm();
    } else {
      if (Number(this.someValue.number) > 0) {
        return alert('Введите отрицательное значение');
      }
      this.valuesExpense = this.valuesExpense.concat(Object.assign({}, this.someValue));
      console.log(this.valuesExpense);
      form.resetForm();
    }
  }
}
