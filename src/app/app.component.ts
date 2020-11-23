import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  posts: Array<object> = [];

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.minLength(3), Validators.required]),
      text: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });

    this.posts.push({
      title: 'Title 1',
      text: 'TExt 1'
    });
    this.posts.push({
      title: 'Title 2',
      text: 'TExt 2'
    });
  }

  submit() {
    const formData = {...this.form.value};

    let item = {
      title: formData.title,
      text: formData.text
    };

    this.posts.push(item);

    this.form.reset();
  }

  delete(index) {
    this.posts.splice(index, 1);
  }
}



