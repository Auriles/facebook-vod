/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

// Fichier AuthService.js
// Ce fichier est une librairie javascript permettant de créer un système d'authentification personnalisé.
// On peut à l'aide de cette librairie 'auth0-js' gérer les utilisateurs qui se connectent à la plateforme, avoir une vue sur les connexions etc... de manière sécurisée
// https://auth0.com/

import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import auth0 from 'auth0-js';

// Définition des constantes
const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const CLIENT_ID = 'ncL2Bwm7aEtWw9KVtNZVIdIbrQLYqQW5';
const CLIENT_DOMAIN = 'auriles.eu.auth0.com';
const REDIRECT = 'http://localhost:3000/callback';
const SCOPE = 'openid';
const AUDIENCE = 'https://auriles.eu.auth0.com/userinfo';

// Initialisation d'une nouvelle session
var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

// Fonction de connexion
export function login() {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
}

// Fonction de déconnexion
export function logout() {
  clearIdToken();
  clearAccessToken();
  browserHistory.push('/');
}

// Fonction d'authentification
export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({ pathname: '/' });
  }
}

// Fonction getIdToken()
export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

// Fonction getAccessToken()
export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

// Fonction clearIdToken()
function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

// Fonction clearAccessToken()
function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Fonction permettant de récupérer l'acces_token et l'id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Récupérer et stocker l'acces_token et le garder en mémoire
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Récupérer et stocker l'id_token et le garder en mémoire
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

// Fonction isLoggedIn()
export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

// Fonction getTokenExpirationDate()
function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

// Fonction isTokenExpired()
function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}