import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Directives';
  public list:any=[];
  public show:any=true
 ngOnInit(): void {
   fetch(`https://fakestoreapi.com/products`).then((r:any)=>{
    if(r.ok){
      return r.json()
    }
   }).then(res=>{
    this.list=res;
    console.log(this.list);
    
   })
 }
 onswitch(){
  this.show=(!this.show)
 }
}
