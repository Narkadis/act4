import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor(private ds: DomSanitizer) {}

  transform(src) {
    return this.ds.bypassSecurityTrustResourceUrl(src);
  }

}
