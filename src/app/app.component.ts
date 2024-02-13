import { Component } from '@angular/core';

//Para poder usar bootstrap: descargar bootstrap (situados en la carpeta del proyecto): npm install bootstrap --save. Despues,
//en angular.json, en styles y en script, poner la ruta a los archivos css y js respectivamente.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini calculadora';
  numero1:number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar():void{
    this.resultado = this.numero1 + this.numero2;
  }

  restar():void{
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar():void{
    this.resultado = this.numero1 * this.numero2;
  }

  dividir():void{
    this.resultado = this.numero1 / this.numero2;
  }
}
