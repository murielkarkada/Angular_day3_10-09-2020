import { Component } from '@angular/core';

/* Interpolation is one way of databinding that is used to transfer the data from TS code to HTML template.
   It uses curly braces,inside which the propertyor expression has be mentioned.
*/
@Component({
  selector: 'app-root',
  template:
  `
  <h1>This is my First Example on Interpolation 
  <hr color=red>
  <p> Expression Execution: (5x10=){{5*10}}</p>
  <p>{{'trainer name:'+trainer_name}}</p>
  <p>Trainer presenting:{{present?'yes':'no'}}
  </p>
  <p>Presenting:<img src={{imgpath}}></p> 
  <p>Details:{{getDetails()}}</p>
  `,
  styles:[]
})
export class AppComponent {
  trainer_name:string='Dipendu Mishra';
  exp:number=15;
  present:boolean=true;
  imgpath:string='https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  company:string='Impelsys';
  getDetails():string
  {
    return "Exp:"+this.exp+"Representing Company:"+this.company;
  }
}
