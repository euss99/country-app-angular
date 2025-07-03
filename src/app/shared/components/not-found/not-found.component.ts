import { Component, inject, input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
})
export class NotFound {
  public title = input<string>('Not Found');
  public message = input<string>('The resource you are looking for does not exist');
  public backText = input<string>('Go Back');

  public location = inject(Location);

  public goBack() {
    this.location.back();
  }
}
