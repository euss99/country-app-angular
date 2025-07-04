import {
  Component,
  input,
  output,
  viewChild,
  ElementRef,
  signal,
  effect,
} from '@angular/core';

@Component({
  selector: 'country-search',
  templateUrl: './country-search.component.html',
})
export class CountrySearch {
  public placeholderInput = input.required<string>();
  public isLoading = input<boolean>(false);
  public onSearch = output<string>();

  public inputValue = signal<string>('');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const debounce = setTimeout(() => {
      this.onSearch.emit(value);
    }, 500);

    onCleanup(() => clearTimeout(debounce));
  });

  public txtSearch = viewChild<ElementRef<HTMLInputElement>>('txtSearch');

  public onSearchTerm(term: string) {
    if (term.length === 0) return;

    this.onSearch.emit(term);

    if (this.txtSearch()) {
      this.txtSearch()!.nativeElement.value = '';
    }
  }
}
