import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => console.log('params', params));
  }

  ngOnInit() {
  }

}
