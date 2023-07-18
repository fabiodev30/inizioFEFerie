import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AutenticazioneService } from "../service/autenticazione.service";
import { Observable } from "rxjs";

@Injectable()
export class IntercettatoreRequest implements HttpInterceptor {

  constructor(private authService: AutenticazioneService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/authenticate')) {
        return next.handle(request);
      }
    const { token, username } = this.authService.recuperaCredentiali();
    if (token && username) {
      const headers = new HttpHeaders({
        'Authorization': token,
        'gestionale_ferie_username': username,
      });
      request = request.clone({ headers });
    }
    return next.handle(request);
  }
}