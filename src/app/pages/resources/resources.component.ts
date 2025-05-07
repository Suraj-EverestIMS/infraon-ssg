import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private route : ActivatedRoute) { }
    
  ngOnInit(): void {
    let doc = this.route.snapshot.params
    this.title.setTitle('Infraon Infinity');
    this.meta.updateTag({ name: 'description', content: 'Infraon offers ...' });
  }

}
