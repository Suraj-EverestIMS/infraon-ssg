import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }
  
  ngOnInit(): void {
    this.title.setTitle('Infraon - Contact us');
    this.meta.updateTag({ name: 'description', content: 'Infraon offers ...' });
  }

}
