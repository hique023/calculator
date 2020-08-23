import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  public valor1: number;
  public valor2: number;
  public result;

  public opMult() {
    this. result = this.valor1 * this.valor2;
  }

  public opDiv() {
    if (this.valor2 == 0 || this.valor2 == null) {
      this.result = "Sem divisão";
    } else {
      this. result = this.valor1 / this.valor2
    }
  }

  public opSom() {
    this. result = this.valor1 + this.valor2
  }

  public opSub() {
    this. result = this.valor1 - this.valor2
  }

  public setLimpa() {
    this.valor1 = null;
    this.valor2 = null;
    this.result = null;
  }

  ngOnInit() {
  }

}
