import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChicasService } from '../../services/chicas.service';
import { ChicasI } from '../../interfaz/ChicasInteface';

@Component({
  selector: 'app-uchica',
  templateUrl: './uchica.component.html',
  styles: []
})
export class UChicaComponent implements OnInit {
  public chica: ChicasI = {};
  constructor(private dataChica: ChicasService, private ar: ActivatedRoute) {
  }

  ngOnInit() {
    const idChica = this.ar.snapshot.params['id'];
    this.getDetails(idChica);
  }
  getDetails(idChica: string): void {
    this.dataChica.getOneChica(idChica).subscribe(chica => {
        this.chica = chica;
      });
}
}
