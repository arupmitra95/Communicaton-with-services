import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent {
  @Output() newAccount = new EventEmitter<{name: string, status: string}>();

  constructor() { }
  onCreateNewAccount(accountName: string, accountStatus: string){
    this.newAccount.emit({
        name: accountName,
        status: accountStatus
      });

  }


}
