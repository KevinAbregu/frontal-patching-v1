import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-instancias',
  templateUrl: './instancias.component.html',
  styleUrls: ['./instancias.component.css'],
  standalone: true,
  imports: [PageHeaderComponent]
})
export class InstanciasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
