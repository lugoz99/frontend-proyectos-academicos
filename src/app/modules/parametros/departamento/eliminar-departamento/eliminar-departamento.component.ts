import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { DepartamentoService } from 'src/app/services/parametros/departamento.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-eliminar-departamento',
  templateUrl: './eliminar-departamento.component.html',
  styleUrls: ['./eliminar-departamento.component.css'],
})
export class EliminarDepartamentoComponent implements OnInit {
  id: number = 0;
  nombre: string = '';
  id_facultad: number = 0;

  constructor(
    private router: Router,
    private service: DepartamentoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }
  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: DepartamentoModel) => {
        if (data.id && data.nombre && data.id_facultad) {
          console.log('Encontrado');
          this.id = data.id;
          this.nombre = data.nombre;
          this.id_facultad = data.id_facultad;
        } else {
          console.log('No encontrado');
        }
      },
    });
  }
  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(['/parametros/listar-departamento']);
      },
    });
  }
}
