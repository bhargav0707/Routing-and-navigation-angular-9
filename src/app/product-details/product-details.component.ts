import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product_id: string;

  constructor(private actRoute: ActivatedRoute) {
    this.product_id = this.actRoute.snapshot.params.id;
  }



  ngOnInit() {
  }

}
