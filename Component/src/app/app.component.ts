import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component';
 public userinfo={name:'',email:''}
  fun(n:any,e:any){
    // console.log(e,n);
    this.userinfo.name+=n
    this.userinfo.email+=e
    console.log(this.userinfo);
        
  }
}
