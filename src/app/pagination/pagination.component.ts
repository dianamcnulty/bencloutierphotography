
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})

export class PaginationComponent {
  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;
  @Input() loading: boolean;
  @Input() pagesToShow: number;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() { }

  getMin(): number {
    console.log("getMin() triggered")
    return ((this.perPage * this.page) - this.perPage) + 1;
  }

  getMax(): number {
    console.log("getMax() triggered")
    let max = this.perPage * this.page;
    if (max > this.count) {
      max = this.count;
    }
    return max;
  }

  onPage(pageNum: number): void {
    console.log("onPage() triggered. pageNum is", pageNum)
    this.goPage.emit(pageNum);
  }

  onPrev(): void {
    console.log("onPrev() triggered")
    this.goPrev.emit(true);
  }

  onNext(next: boolean): void {
    console.log("onNext() triggered")
    this.goNext.emit(next);
  }

  totalPages(): number {
    console.log("totalPages() triggered")
    return Math.ceil(this.count / this.perPage) || 0;
  }

  lastPage(): boolean {
    console.log("is this the last page?", this.perPage * this.page > this.count)
    console.log('this page is', this.page, 'total photos', this.count, "this.perPage is", this.perPage)
    return this.perPage * this.page > this.count;
  }

  getPages(): number[]{
    let numPages = Math.ceil(this.count / this.perPage);
    let ticker = 0
    const pages: number[] = [];
    while (ticker < numPages){
      ticker++
      pages.push(ticker)
    }
    console.log(numPages, "pages")
    return pages
  }
  // getPages(): number[] {
  //   console.log("getPages() triggered")
  //   const c = Math.ceil(this.count / this.perPage);
  //   const p = this.page || 1;
  //   const pagesToShow = this.pagesToShow || 9;
  //   const pages: number[] = [];
  //   pages.push(p);
  //   const times = pagesToShow - 1;
  //   for (let i = 0; i < times; i++) {
  //     if (pages.length < pagesToShow) {
  //       if (Math.min.apply(null, pages) > 1) {
  //         pages.push(Math.min.apply(null, pages) - 1);
  //       }
  //     }
  //     if (pages.length < pagesToShow) {
  //       if (Math.max.apply(null, pages) < c) {
  //         pages.push(Math.max.apply(null, pages) + 1);
  //       }
  //     }
  //   }
  //   pages.sort((a, b) => a - b);
  //   return pages;
  // }
}
