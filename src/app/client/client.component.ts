import { Component, OnInit } from '@angular/core';
import { Client, ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
 clients!:any
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.getallclient().subscribe(data=>{
      this.clients=data;
      console.log(this.clients)
    })
  }
public supprimerclient (c:Client){
  let conf=confirm("vous etes sur " );
  if (!conf)
  return;
  this.clientService.deletclient(c.id).subscribe({
    next:(resp)=>{
      //this.clients=this.clients.pipe (map (data=>{
      //  let index =data.indexOf(c);
      //  data.slice(index,1)
      //  return data;
      //}))
      //alert('client supprimer')
    }
  })
}
}
