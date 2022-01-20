import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts: Array<{name: string, status: string}> =[
    {
      name: "Master Account",
      status: "Active"
    },
    {
      name: "Test Account",
      status: "Invalid"
    },
    {
      name: "Hidden",
      status: "Unknown"
    }
  ];

  constructor() { }

  public getAccntDetails(){
    return this.accounts;
  }

  public onAddAccount(acc: {name: string, status: string}){
    this.accounts.push(acc);
  }

  public upAcnt(updateDetails: {id: number, status: string}){
    this.accounts[updateDetails.id].status = updateDetails.status;
  }
}
