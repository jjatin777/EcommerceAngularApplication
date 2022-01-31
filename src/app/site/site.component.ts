import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  pageTitle: string = 'DemoAngular';

  constructor(private router: Router) { }

  // clicked(): void{
  //   console.log("clicked");
  //   // this.router.navigate([{outlets: {primary:'Main',site: 'Products'}}]);
  // }

  ngOnInit(): void {
  }

}
