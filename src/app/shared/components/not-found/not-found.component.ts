import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
})
export class NotFound {
  public title = input<string>('Not Found');
  public message = input<string>('The resource you are looking for does not exist');
  public backUrl = input<string>('/');
  public backText = input<string>('Go Back');
}
