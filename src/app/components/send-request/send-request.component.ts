import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent {
  constructor(private requestService: RequestService){}

  reqFormControl: string = "";
  userJsonError: boolean = false;
  requestBody: string = "";
  requestUrl: string = "";
  responseBody: string = "";
  responseHeaders: string = "";
  requestHeaders: string = "";
  statusCode: string = "";
  getJson(val: string): object{
    try{
      this.userJsonError = false;
      return JSON.parse(val);
    }catch(ex){
      console.log(ex);
      this.userJsonError = true;
      return {};
    }
  }
  send(){
    let body;
    let headers: HttpHeaders = new HttpHeaders;
    if(this.requestBody != "")
      body = this.getJson(this.requestBody);
    if(this.requestHeaders != "")
      headers = this.getJson(this.requestHeaders) as HttpHeaders;
    switch(this.reqFormControl){
      case "get":
        this.requestService.get(this.requestUrl, headers).subscribe(res => {this.responseBody = JSON.stringify(res.body); this.responseHeaders = JSON.stringify(res.headers); this.statusCode = res.status;}, error => {this.statusCode = error.status});
        break;
      case "post":
        this.requestService.post(this.requestUrl, body, headers).subscribe(res => {this.responseBody = JSON.stringify(res.body); this.responseHeaders = JSON.stringify(res.headers); this.statusCode = res.status;});
        break;
      case "patch":
        this.requestService.patch(this.requestUrl, body, headers).subscribe(res => {this.responseBody = JSON.stringify(res.body); this.responseHeaders = JSON.stringify(res.headers); this.statusCode = res.status;});
        break;
      case "delete":
        this.requestService.delete(this.requestUrl, headers).subscribe(res => {this.responseBody = JSON.stringify(res.body); this.responseHeaders = JSON.stringify(res.headers); this.statusCode = res.status;});
        break;
      case "put":
        this.requestService.put(this.requestUrl, this.requestBody, headers).subscribe(res => {this.responseBody = JSON.stringify(res.body); this.responseHeaders = JSON.stringify(res.headers); this.statusCode = res.status;});
        break;
      default:
        break;
    }
  }
}
