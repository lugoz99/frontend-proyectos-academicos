import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { DepartamentoService } from 'src/app/services/parametros/departamento.service';
import { FacultadService } from 'src/app/services/parametros/facultad.service';
declare const ShowGeneralMessage: any;
declare const InitSelect: any;
@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css'],
})
export class EditarDepartamentoComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  facultadList: FacultadModel[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService,
    private facultadService: FacultadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
    this.SearchRecord();
  }
  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      facultadId: ['', [Validators.required]],
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }
  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: DepartamentoModel) => {
        this.GetDF['id'].setValue(data.id);
        this.GetDF['nombre'].setValue(data.nombre);
        this.GetDF['facultadId'].setValue(data.id_facultad);
      },
    });
  }
  SaveRecord() {
    let model = new DepartamentoModel();
    model.id = this.GetDF['id'].value;
    model.nombre = this.GetDF['nombre'].value;
    model.id_facultad = Number(this.GetDF['facultadId'].value);
    console.log('lfdlkf', model.nombre);
    console.log('id-facultad', model.id_facultad);
    this.service.SaveRecord(model).subscribe({
      next: (data: DepartamentoModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-departamento']);
      },
    });
  }
  GetDataForSelects() {
    this.facultadService.GetRecordList().subscribe({
      next: (data: FacultadModel[]) => {
        this.facultadList = data;
        setTimeout(() => {
          InitSelect('selFacultad');
        }, 100);
      },
    });
  }
}
