import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  get(url: string, headers: HttpHeaders): Observable<any>{
    return this.http.get<any>(url, {observe: 'response', headers: headers});
  }
  post(url: string, body: any, headers: HttpHeaders): Observable<any>{
    return this.http.post<any>(url, body, {observe: 'response', headers: headers});
  }
  put(url: string, body: any, headers: HttpHeaders): Observable<any>{
    return this.http.put<any>(url, body, {observe: 'response', headers: headers});
  }
  patch(url: string, body: any, headers: HttpHeaders): Observable<any>{
    return this.http.patch<any>(url, body, {observe: 'response', headers: headers});
  }
  delete(url: string, headers: HttpHeaders): Observable<any>{
    return this.http.delete<any>(url, {observe: 'response', headers: headers});
  }
}
