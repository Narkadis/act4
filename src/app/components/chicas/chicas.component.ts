import { Component, OnInit } from '@angular/core';
import { ChicasService } from 'src/app/services/chicas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chicas',
  templateUrl: './chicas.component.html',
  styles: []
})
export class ChicasComponent implements OnInit {
  public chicas = [];
  constructor(private dataChica: ChicasService, private _r: Router) { }
 


  ngOnInit() {
    this.dataChica.getAllChicas().subscribe(chicas => {
      console.log('CHICAS', chicas);
      this.chicas = chicas;
    });
 
  }
  
  verChica(idChica: string) {
    this._r.navigate(['/chica', idChica]);
   }
}
