import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopMenu } from '../../components/top-menu/top-menu.component';

@Component({
  selector: 'country-layout',
  imports: [RouterOutlet, TopMenu],
  templateUrl: './CountryLayout.component.html',
})
export default class CountryLayout {}
