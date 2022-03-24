import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Black Widow'];
  heroeBorrado: string = '';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  
  }

  
}
