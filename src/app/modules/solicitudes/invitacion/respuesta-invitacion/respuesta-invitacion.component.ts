import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { evaluacionSolicitudModel } from 'src/app/models/parametros/evaluacionSolicitud.model';
import { RespuestaInvitacionModel } from 'src/app/models/parametros/respuestaInvitacion.model';
import { EvaluacionSolicitudService } from 'src/app/services/invitacion/evaluacion-solicitud.service';
declare const ShowGeneralMessage: any;
declare const InitSelect: any;
@Component({
  selector: 'app-respuesta-invitacion',
  templateUrl: './respuesta-invitacion.component.html',
  styleUrls: ['./respuesta-invitacion.component.css'],
})
export class RespuestaInvitacionComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  respuestaInvitacionList: RespuestaInvitacionModel[] = [];
  constructor(
    private fb: FormBuilder,
    private service: EvaluacionSolicitudService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
    setTimeout(() => {
      InitSelect('respuesta');
    }, 100);
  }
  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ['', [Validators.required]],
      respuesta: ['', [Validators.required]],
      observaciones: ['', [Validators.required]],
      id_jurado: ['', [Validators.required]],
      id_solicitud: ['', [Validators.required]],
    });
  }
  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    console.log('Buscando id', id);
    this.service.SearchRecord(id).subscribe({
      next: (data: evaluacionSolicitudModel) => {
        this.GetDF['id'].setValue(data.id);
        this.GetDF['observaciones'].setValue(data.observaciones);
        this.GetDF['id_jurado'].setValue(data.id_jurado);
        this.GetDF['id_solicitud'].setValue(data.id_solicitud);
        this.GetDF['respuesta'].setValue(data.respuesta);
      },
    });
  }
  SaveRecord() {
    let model = new evaluacionSolicitudModel();
    model.id_jurado = Number(this.GetDF['id_jurado'].value);
    model.id_solicitud = Number(this.GetDF['id_solicitud'].value);
    model.observaciones = this.GetDF['observaciones'].value;
    model.id = this.GetDF['id'].value;
    model.respuesta = Number(this.GetDF['respuesta'].value);
    this.service.RequestResponse(model).subscribe({
      next: (data: RespuestaInvitacionModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
      },
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }
}
