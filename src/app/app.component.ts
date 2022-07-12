import { Component, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: Window, useValue: window }
]
})
export class AppComponent {
  title = 'print_angular';

  constructor(private elRef: ElementRef, private window: Window){}

  printTable(): void{
    window.print()
  }


  printTableNewInPage():void{
    const elemComponent = this.elRef.nativeElement as HTMLElement;
    const table = elemComponent.querySelector('.table-container') as HTMLElement;
    // const popupWindow = window.open('', 'Print-Window');
    const popupWindow = window.open('', 'Print-Window', 'width=auto,height=auto,toolbar=0,scrollbars=0,status=0');
    popupWindow?.document.open();
    popupWindow?.document.write(`
    <html>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <style>
    @page {
      counter-increment: page;
      counter-reset: page 1;
      @top-right {
          content: "Page " counter(page) " of " counter(pages);
      }
    }

    </style>
    </head>
    <body onload="window.print()">

    ` + table.innerHTML + `
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
    crossorigin="anonymous"></script>
    </body>
    </html>`);
    popupWindow?.document.close();
    setTimeout(function() {
      popupWindow?.close();
    }, 500);
  }
}
