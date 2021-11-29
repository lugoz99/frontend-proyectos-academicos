import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/configurationData';
import { SolicitudModel } from 'src/app/models/parametros/solicitud.model';
import { SolicitudService } from 'src/app/services/parametros/solicitud.service';

@Component({
  selector: 'app-listar-solicitud',
  templateUrl: './listar-solicitud.component.html',
  styleUrls: ['./listar-solicitud.component.css'],
})
export class ListarSolicitudComponent implements OnInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  recordList: SolicitudModel[] = [];

  constructor(private service: SolicitudService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) => {
        console.log('data solicitud');
        data.forEach((element) => {
          console.log(element);
          console.log(element.id_proponente);
          console.log(element.asociado?.primerApellido);
          console.log(element.asociado);
        });
        this.recordList = data;
      },
    });
  }
}
