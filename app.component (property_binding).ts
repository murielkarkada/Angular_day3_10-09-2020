import { Component } from '@angular/core';

/* Property Binding is also one-way data binding technique.
we bind property of DOM element to a field which is a defined proprty in our component TS code
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
  <p>Presenting:<img src='https://angular.io/assets/images/logos/angular/{{imgpath}}'></p> 
  <p>Details:{{getDetails()}}</p>
  `,
  styles:[]
})
export class AppComponent {
  trainer_name:string='Dipendu Mishra';
  exp:number=15;
  present:boolean=true;
  imgpath:string='logo-nav@2x.png';
  company:string='Impelsys';
  getDetails():string
  {
    return "Exp:"+this.exp+"Representing Company:"+this.company;
  }
}
