import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationData } from 'src/app/config/configurationData';
import { UserCredentialsModel } from 'src/app/models/seguridad/user-credentials.model';
import { SeguridadService } from 'src/app/services/shared/seguridad.service';
import { MD5 } from 'crypto-js';
import { SessionDataModel } from 'src/app/models/seguridad/session-data.model';
import { LocalStorageService } from 'src/app/services/shared/local-storage.service';
import { Router } from '@angular/router';

declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private securityService: SeguridadService,
    private localStorageService: LocalStorageService,
    private rooter: Router
  ) {}

  ngOnInit(): void {
    this.FormBuilding();
  }
  //construir formulario
  FormBuilding() {
    this.dataForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(ConfigurationData.EMAIL_MIN_LENGHT),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(ConfigurationData.PASSWORD_MIN_LENGHT),
        ],
      ],
    });
  }
  Login() {
    if (this.dataForm.invalid) {
      ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
    } else {
      // enviar datos capturados al backend
      //ShowGeneralMessage(ConfigurationData.VALID_FORM_MESSAGE);
      let credential = new UserCredentialsModel();
      credential.username = this.GetDF['username'].value;
      credential.password = credential.password = MD5(
        this.GetDF['password'].value
      ).toString();
      console.log(credential.password);
      this.securityService.Login(credential).subscribe({
        next: (data: SessionDataModel) => {
          console.log(data);
          let saved = this.localStorageService.SaveSessionData(data);
          data.isLoggedIn = true;
          this.securityService.RefreshSessionInfo(data); // para por diferentes caminos isloged in este en true
          this.rooter.navigate(['/home']);
        },
        error: (error: any) => {},
        complete: () => {},
      });
    }
  }

  get GetDF() {
    return this.dataForm.controls;
  }
}
