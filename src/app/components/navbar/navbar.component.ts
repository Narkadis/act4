import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { mergeMap } from 'rxjs/operators';
import { ChicasService } from '../../services/chicas.service';
import { ChicasI } from '../../interfaz/ChicasInteface';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  selected: string;
  selectedOption: any;
  public chicas = [];
  constructor(private dataChica: ChicasService, private _r: Router) { }

  ngOnInit() {
    this.dataChica.getAllChicas().subscribe(chicas => {
      console.log('CHICAS', chicas);
      this.chicas = chicas;
    });
 
  }
 
  verChica(idChica: string) {
    idChica = this.dataChica.selectedChica.id;
    this._r.navigate(['/chica', idChica]);
   }
}
