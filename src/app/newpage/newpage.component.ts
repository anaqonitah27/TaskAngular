import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.scss'],
})
export class NewpageComponent {
  greetUser() {
    return this.nama;
  }

  title = 'hello code';
  nama = 'Ana Qonitah Munawwaroh';
  siteUrl = window.location.href;

  myId = 'testID';
  greeting = '';

  onClick() {
    console.log('Welcome to Angular');
    this.greeting = 'Welcome to Angular ' + this.nama;
  }
  onClick1(event: any) {
    console.log(event);
    this.greeting = event.type;
  }

  opened = true;
  tutup() {
    this.opened = !this.opened;
  }

  logMessage(value: any) {
    console.log(value);
  }
  tittle: string = 'Silahkan Ganti Teks disini';
}
