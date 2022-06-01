import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products'

@Component({
  selector: 'app-produtc-alerts',
  templateUrl: './produtc-alerts.component.html',
  styleUrls: ['./produtc-alerts.component.css']
})
export class ProdutcAlertsComponent implements OnInit {

  @Input() product!: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
