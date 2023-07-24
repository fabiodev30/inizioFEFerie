import { Router } from '@angular/router';

export function checkCredenziali() {
  // recupero le credenziali da credenziali Utente
  const { token, username } = credenzialiUtente();
  // se le credenziali del nome e dello username sono null o sono strinag vuota allora non faccio nulla
  if (!token || !username || token == '' || username == '') {
    return false;
  }
  return true;
}

export function checkCredenzialiWithRouter(router: Router) {
  // recupero le credenziali da localStorage
  const { token, username } = credenzialiUtente();
  // se le credenziali del nome e dello username sono null o sono strinag vuota allora non faccio nulla
  if (!token || !username || token == '' || username == '') {
    router.navigate(['/login']);
  }
}

function credenzialiUtente() {
  // recupero le credenziali da localStorage
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  return { token, username };
}

export function logoutWithRouter(router: Router) {
  // rimuovo le credenziali da localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('ruolo');
  router.navigate(['/login']);
}
