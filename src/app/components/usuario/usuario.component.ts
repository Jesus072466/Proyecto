import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  miembrosOrg: any = [{
    "nombre": "Juan Gabriel Huerta Huerta",
    "nacionalidad": "Mexicana",
    "oficio": "Diseñador grafico",
    "edad": "43",
    "descripcion": "Profesor de Diseño"
  }, {
    "nombre": "Brian Julian Tavarez López",
    "nacionalidad": "Peruana",
    "oficio": "Antropologo",
    "edad": "33",
    "descripcion": "Reconocido investigador de antropología"
  }, {
    "nombre": "Ignacio Doriga Parada",
    "nacionalidad": "Argentina",
    "oficio": "Sociologo",
    "edad": "24",
    "descripcion": "Principal donandor de bienes mobiliarios"
  }, {
    "nombre": "Jonathan Adolfo Hernandez Torres",
    "nacionalidad": "Estadounidense",
    "oficio": "Contador",
    "edad": "55",
    "descripcion": "Gerente de autoservicio"
  }, {
    "nombre": "Natasha Alix Romanoff ",
    "nacionalidad": "Alemana",
    "oficio": "Editora empresarial",
    "edad": "30",
    "descripcion": "Principal editora de articulos"
  }, {
    "nombre": "Joseph John Mora",
    "nacionalidad": "Finlandes",
    "oficio": "Comerciante de telas",
    "edad": "47",
    "descripcion": "Empresario reconocido en todo Europa"
  }, {
    "nombre": "Marcelo Scotish Valka",
    "nacionalidad": "Sueco",
    "oficio": "Intendente de la CIA",
    "edad": "34",
    "descripcion": "El mejor intendente de toda la CIA"
  }, {
    "nombre": "Lee Sin Kawa",
    "nacionalidad": "Chino",
    "oficio": "Director de una empresa automotriz",
    "edad": "42",
    "descripcion": "Famoso director de Shangai"
  }, {
    "nombre": "Jeremy Gothimberg",
    "nacionalidad": "Holandes",
    "oficio": "Florista",
    "edad": "37",
    "descripcion": "Florista aclamado en París"
  }, {
    "nombre": "Pablo Villagrán Montes de oca",
    "nacionalidad": "Colombiano",
    "oficio": "Gerente de ventas",
    "edad": "28",
    "descripcion": "Gerente en tiendas departamentales"
  }
  ]

}
