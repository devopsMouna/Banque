import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface Client{
  id:number;
  nom:String;
  email:String;
}


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  public getallclient():Observable<Array<Client>>{

    return this.http.get<Array<Client>>(environment.backendurl+"/clients/listedeclients")
  }
  public saveclient(clientt:Client):Observable<Client>{
    return this.http.post<Client>(environment.backendurl+"/clients/ajouter",clientt)

  }
  public deletclient(clientid:number){
    return this.http.delete(environment.backendurl+"/clients/delete/"+clientid)
}
}