import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  
  ngOnInit(): void {
  
  }
  
  onNoClick(data): void {
    this.dialogRef.close(data);
  }

}
