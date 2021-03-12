import { Component } from '@angular/core';

import { oportunidades } from '../oportunidades';

@Component({
  selector: 'app-product-list',
  templateUrl: './lista-oportunidades.component.html',
  styleUrls: ['./lista-oportunidades.component.css']
})
export class ListaOportunidadesComponent {
  oportunidades = oportunidades;

  share() {
    window.alert('As oportunidades foram compartilhadas!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/