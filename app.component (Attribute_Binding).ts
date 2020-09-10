import { Component } from '@angular/core';

/* Property Binding is also one-way data binding technique.
we bind property of DOM element to a field which is a defined proprty in our component TS code
*/
@Component({
  selector: 'app-root',
  template:
  `
  <h1>This is an example for Attribute Binding <h1> 
  <hr color=yellow>
  <input id=ab type=text value="AttributeBinding">               
  <table border=2>
   
  //<tr><td colspan={{value}}>A</td></tr>          /* Interpolation & PB deal with binding component class properties to
                                                      HTML element properties ,not attributes .ATTRIBUTE BINDING is used to
                                                      bind to HTML elements attributes 
                                                   */ 
  //<tr><td [attr.colspan]='value'>A-Z</td></tr>   //attribute binding 
  //<tr><td attr.colspan={{value}}>A-Z</td></tr>   //alternative 
  
  <tr><td >A</td><td>B</td></tr>
  <tr><td >C</td><td>D</td></tr>
  </table>
  `,
  styles:[]
})
export class AppComponent {
  value:number=2;
}
