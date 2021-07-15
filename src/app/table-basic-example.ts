import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html'
})
export class TableBasicExample implements OnInit, AfterViewInit {
  ngOnInit() {}

  ngAfterViewInit() {
    $(document).ready(function() {
      //scrollY: ($(window).height() * 85) / 100,
      $('#example')
        .DataTable()
        .destroy();
      var table = $('#example').DataTable({
        destroy: true,
        searching: false,
        paging: false,
        sort: false,
        info: false,
        fixedHeader: true,
        scrollX: true
      });

      $('#example1')
        .DataTable()
        .destroy();
      var table1 = $('#example1').DataTable({
        destroy: true,
        searching: false,
        paging: false,
        sort: false,
        info: false,
        fixedHeader: true,
        scrollX: true
      });

      $('#example2')
        .DataTable()
        .destroy();
      var table2 = $('#example2').DataTable({
        destroy: true,
        searching: false,
        paging: false,
        sort: false,
        info: false,
        scrollX: true,
        fixedColumns: {
          leftColumns: 2
        }
      });
    });
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
