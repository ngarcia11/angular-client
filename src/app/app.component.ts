import { Component } from '@angular/core';
import { Client } from './client/client.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  cli: Client[];

  constructor() {
    this.cli = [
      new Client(700093, 'Norlan Garcia', 'Colinia Kennedy')
    ];
  }

  name = 'Norlan';

addCli(id, name, address){
this.cli.push(new Client(id.value, name.value, address.value));
id.value = '';
name.value ='';
address.value = '';
return false;
}

delete(id, name, address) {
  for(let i=0; i < this.cli.length; i ++){
    if (id == this.cli[i]){
      this.cli.splice(i,1);
    }
  }
  }

}
