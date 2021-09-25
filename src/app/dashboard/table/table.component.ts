import {Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

/* import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component'; */
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { Subscription } from 'rxjs';


export interface UserElement {
  usuario: string;
  Id: number;
  email: string;
  nombre: string;
  apellido: string;
  activo: string;
}

/* export interface DialogData {
  animal: string;
  name: string;
} */

const ELEMENT_DATA: UserElement[] = [
  {Id: 1, usuario: 'Ana', email: 'test@gmail.com', nombre: 'Ana', apellido: 'Ana', activo: 'true' },
  {Id: 2, usuario: 'Camilo', email: 'test@gmail.com', nombre: 'Camilo', apellido: 'Camilo', activo: 'true' },
  {Id: 3, usuario: 'Javier', email: 'test@gmail.com', nombre: 'Javier', apellido: 'Javier', activo: 'true' },
  {Id: 4, usuario: 'Jorge', email: 'test@gmail.com', nombre: 'Jorge', apellido: 'Jorge', activo: 'true' },
  {Id: 5, usuario: 'Duvan', email: 'test@gmail.com', nombre: 'Duvan', apellido: 'Duvan', activo: 'true' },
  {Id: 6, usuario: 'Camila', email: 'test@gmail.com', nombre: 'Camila', apellido: 'Camila', activo: 'true' },
  {Id: 7, usuario: 'Natalia', email: 'test@gmail.com', nombre: 'Natalia', apellido: 'Natalia', activo: 'true' },
  {Id: 8, usuario: 'Paola', email: 'test@gmail.com', nombre: 'Paola', apellido: 'Paola', activo: 'true' },
  {Id: 9, usuario: 'Jeisson', email: 'test@gmail.com', nombre: 'Jeisson', apellido: 'Jeisson', activo: 'true' },
  {Id: 10, usuario: 'Duvan', email: 'test@gmail.com', nombre: 'Duvan', apellido: 'Duvan', activo: 'true' },
  {Id: 11, usuario: 'UAna', email: 'emtest@gmail.com', nombre: 'noAna', apellido: 'apAna', activo: 'true' },
  {Id: 12, usuario: 'UCamilo', email: 'emtest@gmail.com', nombre: 'noCamilo', apellido: 'apCamilo', activo: 'true' },
  {Id: 13, usuario: 'UJavier', email: 'emtest@gmail.com', nombre: 'noJavier', apellido: 'apJavier', activo: 'true' },
  {Id: 14, usuario: 'UJorge', email: 'emtest@gmail.com', nombre: 'noJorge', apellido: 'apJorge', activo: 'true' },
  {Id: 15, usuario: 'UDuvan', email: 'emtest@gmail.com', nombre: 'noDuvan', apellido: 'apDuvan', activo: 'true' },
  {Id: 16, usuario: 'UCamila', email: 'emtest@gmail.com', nombre: 'noCamila', apellido: 'apCamila', activo: 'true' },
  {Id: 17, usuario: 'UNatalia', email: 'emtest@gmail.com', nombre: 'noNatalia', apellido: 'apNatalia', activo: 'true' },
  {Id: 18, usuario: 'UPaola', email: 'emtest@gmail.com', nombre: 'noPaola', apellido: 'apPaola', activo: 'true' },
  {Id: 19, usuario: 'UJeisson', email: 'emtest@gmail.com', nombre: 'noJeisson', apellido: 'apJeisson', activo: 'true' },
  {Id: 110, usuario: 'UDuvan', email: 'emtest@gmail.com', nombre: 'noDuvan', apellido: 'apDuvan', activo: 'true' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  animal: string;
  name: string;

  form: FormGroup;


  displayedColumns: string[] = ['Id', 'usuario', 'email', 'nombre', 'apellido', 'activo', 'actions'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<UserElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  emailFormControl = new FormControl('', [Validators.required,Validators.email,]);
  usuarioFormControl = new FormControl('', [Validators.required,]);
  nombreFormControl = new FormControl('', [Validators.required,]);
  apellidoFormControl = new FormControl('', [Validators.required,]);

  // email: Subscription;
  email: string;
  user: string;
  nombre: string;
  apellido: string;

  constructor(
    // public dialogo: MatDialog
    // public dialog: MatDialog
    // private formBuilder: FormBuilder
    ) { 
    /*   this.buildForm(); */
    }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    // console.log(dialog)
    this.emailFormControl.valueChanges.subscribe((ele => {
      // console.log(ele)
      this.email = ele
    }))

    this.usuarioFormControl.valueChanges.subscribe((ele => {
      // console.log(ele)
      this.user = ele
    }))
  }

  /* private buildForm() {
    this.form = this.formBuilder.group({
      emailFormControl: ['', [ Validators.required]],
      usuarioFormControl: ['', [ Validators.required]],
      nombreFormControl: ['', [ Validators.required]],
      apellidoFormControl: ['', [ Validators.required]],
    });
  } */

  verUser(){
    console.log('ClickVer')
  }

  editUser(){
    console.log('ClickUser') 
  }

  openDialog(): void {
    /* const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    }); */
  }

  mostrarDialogo(): void {
    console.log('Dialog')
    // const dialogRef = this.dialog.open(DialogContentExampleDialog);
    /* this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Te gusta programar en TypeScript?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          alert("¡A mí también!");
        } else {
          alert("Deberías probarlo, a mí me gusta :)");
        }
      }); */
  }

  /* applyFilter(field: string){

  } */

  applyFilter(field: string) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    
    this.dataSource.filter = this.user.trim().toLowerCase();
    if (field == 'email') {
      // this.dataSource.filter = this.email.trim().toLowerCase();
     /*  console.log(this.dataSource.filteredData.forEach(ele => {
        ele.email == this.email.trim().toLowerCase();
      })) 
      console.log(this.dataSource) */
     /*  this.dataSource.filteredData.forEach(ele => {
        // ele.email == this.email.trim().toLowerCase();
        console.log(ele.email)
      }) */
      /* console.log(this.dataSource.filteredData.forEach(ele => {
        console.log(ele.email.includes(this.email.trim().toLowerCase(),0))
      })) */
      /* console.log(this.dataSource.filteredData.forEach(ele => {
        console.log(ele.email.includes(this.email.trim().toLowerCase(),0))
      })) */
    } else if (field == 'user') {
      // console.log('user')
      // this.dataSource.filter = this.user.trim().toLowerCase();
      /* this.dataSource.filteredData.forEach(ele => {
        ele.usuario == this.user.trim().toLowerCase();
        // console.log(ele.usuario)
      }) */
      /* console.log(this.dataSource.filteredData.forEach(ele => {
        ele.usuario == this.user.trim().toLowerCase();
        // console.log(ele.usuario)
      })) */
      // console.log(object)
      /* console.log(this.dataSource.filteredData.forEach(ele => {
        ele.usuario.trim().toLowerCase() == this.user.trim().toLowerCase();
      })) */
      
      
    }
  }

  

}
