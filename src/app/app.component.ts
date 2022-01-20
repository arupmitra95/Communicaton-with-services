import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: Array<{name: string, status: string}> = [];

  constructor(private acnt: AccountService){
    this.accounts = this.acnt.getAccntDetails();
  }

  onCreateAccount(event: {name: string, status: string}){
    this.acnt.onAddAccount(event);
    this.accounts = this.acnt.getAccntDetails();
  }

  updateAccount(event: {id: number, status: string}){
    this.acnt.upAcnt(event);
    this.accounts = this.acnt.getAccntDetails();
  }
}
