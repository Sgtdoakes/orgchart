import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  redirect():any {
    this.router.navigate([''], { relativeTo: this.route });
  }

  redirectToRoot():any {
    this.router.navigate(['roots'], { relativeTo: this.route });
  }

}
