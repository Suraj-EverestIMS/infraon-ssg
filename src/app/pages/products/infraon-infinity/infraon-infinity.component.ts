import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-infraon-infinity',
  templateUrl: './infraon-infinity.component.html',
  styleUrls: ['./infraon-infinity.component.scss']
})
export class InfraonInfinityComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private title: Title, private meta: Meta, private renderer: Renderer2, @Inject(DOCUMENT) private doc: Document, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.title.setTitle('Modernize IT Operations Management with Infraon Infinity | Infraon');
    this.meta.updateTag({ name: 'description', content: 'Overcome your ITOps challenges with a no-code, full-stack BizOps & IT operations management platform. Get on-demand scalability, rapid deployment, and affordable licensing costs.' });

    const link: HTMLLinkElement = this.renderer.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://infraon.io/infraon-infinity');
    this.renderer.appendChild(this.doc.head, link);

    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Email:', this.myForm.value.email);
    } else {
      console.warn('Form is invalid');
    }
  }

}
