import { Component, input, output, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search.component.html',
})
export class CountrySearch {
  public placeholderInput = input.required<string>();
  public onSearch = output<string>();

  public txtSearch = viewChild<ElementRef<HTMLInputElement>>('txtSearch');

  public onSearchTerm(term: string) {
    if (term.length === 0) return;
    this.onSearch.emit(term);

    if (this.txtSearch()) {
      this.txtSearch()!.nativeElement.value = '';
    }
  }
}
