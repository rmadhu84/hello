import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Greet{
  constructor(private message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class HTTPclientService {

  constructor(public httpClient: HttpClient) { }

  sayHello(){
    console.log("Test call");
    return this.httpClient.get<Greet>('http://localhost:8090/hello');
  }
}
