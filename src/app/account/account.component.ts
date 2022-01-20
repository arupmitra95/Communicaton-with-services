import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account!: {name: string, status: string};
  @Input() arrayIndex !: number;
  @Output() updateAcnt = new EventEmitter<{id: number, status: string}>();

  constructor() { }

  onUpdateAcnt(id: number, status: string){
    this.updateAcnt.emit({
      id: id, 
      status: status
    });
  }

  ngOnInit(): void {
  }

}
