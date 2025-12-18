import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExamenUD4-JLB');

  public alumno1 = new Alumno("Pepe","Martin Dominguez",new Date(), "hola@gmail.com",7);
  public alumno2 = new Alumno("Sara","Dominguez Sanchez",new Date(), "hola1@gmail.com",9);
}
