import { Component, OnInit } from '@angular/core';
import { ChicasService } from '../../services/chicas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  myInterval = 5000;
  public chicas = [];

  constructor(private dataChica: ChicasService) { }

  ngOnInit() {
    this.dataChica.getAllChicasC().subscribe(chicas => {
      console.log('CHICAS', chicas);
      this.chicas = chicas;
    });
  }

} 
