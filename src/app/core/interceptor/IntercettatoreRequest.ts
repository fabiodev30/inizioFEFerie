import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutenticazioneService } from '../service/autenticazione.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class IntercettatoreRequest implements HttpInterceptor {
  constructor(
    private authService: AutenticazioneService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/authenticate')) {
      return next.handle(request);
    }
    const { token, username } = this.authService.recuperaCredentiali();
    // se token e username sono presenti, aggiungo l'header
    if (token && username) {
        const headers = new HttpHeaders({
          'Authorization': token,
          'gestionale_ferie_username': username,
        });
        request = request.clone({ headers });
        return next.handle(request);
    }else{ // altrimenti reindirizzo alla pagina di login
      this.router.navigate(['/login']);
      // TODO: aggiungere modale di errore
    }
    return next.handle(request);
  }

  

}