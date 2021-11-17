import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "mauro@gmail.com", nombre: 'mauricio', apellido: "illanes", sexo: "masculino"},
    {usuario: "millanes@gmail.com", nombre: 'Juan', apellido: "Chipana", sexo: "masculino"},
  ];


  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }
  
  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }

}
