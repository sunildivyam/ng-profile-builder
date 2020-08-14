import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ActivationEnd, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { LoaderService } from '../../core';

@Component({
  selector: 'pba-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  // bareboneMode enables the Header and footer invisible. For example, printing a profile.
  public bareboneMode: boolean;
  private routeDataSubscription: any;
  public loading: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService) {

  }

  ngOnInit(): void {
    this.loaderService.status.subscribe((value: boolean) => {
      this.loading = value;
    });

    this.routeDataSubscription = this.router.events.subscribe((event:any) => {
      switch(true) {
        case event instanceof NavigationStart:
          this.loaderService.start();
          break;
        case event instanceof ActivationEnd:
          this.bareboneMode = event.snapshot.data['bareboneMode'] || false;
          break;
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
          this.loaderService.stop();
          break;
        default:
        break;
    }
    });
  }

  ngOnDestroy(): void {
    this.routeDataSubscription.unsubscribe();
  }
  title = 'Profile Builder';
}
