import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client, ClientService } from '../client/client.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  newclientformegroupe!:FormGroup

  constructor( private clientservice:ClientService ,private fb:FormBuilder , private route:Router) { }

  ngOnInit(): void {
    this.newclientformegroupe=this.fb.group({
      nom:this.fb.control("mouna",[Validators.required,Validators.minLength(5)]),
      email:this.fb.control(null,[Validators.required,Validators.email])
    })
  }
saveclient(){
  let client:Client=this.newclientformegroupe.value;
  this.clientservice.saveclient(client).subscribe({
    next:data=>{
      alert("client ajouter avec succè")
       this.route.navigateByUrl("/client")
     // this.newclientformegroupe.reset();
    }
  })
}
}
