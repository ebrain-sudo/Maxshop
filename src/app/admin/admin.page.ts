import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  submitForm()
  {
    console.log('form inside');
    this.router.navigate(['../admin/logs']);
  }
}
