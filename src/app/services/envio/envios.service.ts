import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Envio } from '../../models/envios.model';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EnviosService {

  constructor(public http: HttpClient) { }

  ObtieneInfoRequi( id: number = 0 ) {
    const url = URL_SERVICIOS + '/Requisicion?id=' + id;
    return this.http.get( url );
  }

  guardaEnvios( envio: Envio ) {
    const url = URL_SERVICIOS + '/Envio';

    return this.http.post( url, envio )
    .map((data: any) => {
      swal('Se registró el envío', envio.requisicion.cliente.Nombre, 'success' );
      return data;
    });
  }

  confirmacionEnvios( envio: Envio ) {
    const url = URL_SERVICIOS + '/Confirmar';
    return this.http.post( url, envio )
    .map((data: Envio) => {
      swal('Se confirmó el envio', `H  ${ envio.confhombre } M ${ envio.confmujer } I ${ envio.confindistinto }`, 'success' );
      return data;
    });
  }

}
