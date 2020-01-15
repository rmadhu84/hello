import { Component, OnInit } from '@angular/core';
import { HTTPclientService } from '../service/httpclient.service';

@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.less']
})
export class SayHelloComponent implements OnInit {

  greet:string;
  constructor(public service:HTTPclientService) { 
   
  }

  ngOnInit() {
    this.service.sayHello().subscribe(response=>this.handleSuccessResponse(response));
  }
  sayHello(){
    return (this.greet as string);
}
  handleSuccessResponse(response){
    this.greet = response;
  }
}
