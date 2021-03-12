import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-alerta-oportunidade',
  templateUrl: './alerta-oportunidade.component.html',
  styleUrls: ['./alerta-oportunidade.component.css']
})
export class AlertaOportunidadeComponent implements OnInit {
  @Input() oportunidade;
  constructor() { }

  ngOnInit() {
  }

}