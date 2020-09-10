import { Component } from '@angular/core';
/*ATTRIBUTE BINDING is required in those cases when HTML attribute has no corresponding DOM property
  HTML attribute value contains initial value whereas DOM property value contains current value
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
