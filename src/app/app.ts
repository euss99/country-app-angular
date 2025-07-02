import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from '@app/shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
})
export class App {}
