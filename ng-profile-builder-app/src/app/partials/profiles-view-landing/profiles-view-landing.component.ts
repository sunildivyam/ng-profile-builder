import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'pba-profiles-view-landing',
  templateUrl: './profiles-view-landing.component.html',
  styleUrls: ['./profiles-view-landing.component.scss']
})
export class ProfilesViewLandingComponent implements OnInit {
  public currentProfileId: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.parent.url.subscribe((urlSegments: Array<UrlSegment>) => {
      if (urlSegments.length) {
        this.currentProfileId = urlSegments[0].path;
      }
    });
  }

  ngOnInit() {
  }

}
