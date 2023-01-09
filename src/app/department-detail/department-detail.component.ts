import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `<h3> You've selected {{departmentId}} </h3>
    <button> <a (click)="goPrevious()"> Previous</a> </button>
    <button> <a (click)="goNext()"> Next</a> </button>
    <br>
    <button> <a (click)="goBack()"> Back </a> </button>
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {
  public departmentId: any;
  
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    /** this.departmentId = this.route.snapshot.params['id']; */
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = parseInt(this.departmentId) - 1;
    this.router.navigate(['/departments', previousId]);
    // this.router.navigate([previousId], { relativeTo: this.route});
  }
  goNext() {
    let nextId = parseInt(this.departmentId) + 1;
    this.router.navigate(['/departments', nextId]);
    // this.router.navigate([nextId], { relativeTo: this.route});
  }
  goBack(){
    this.router.navigate(['../', {"id": this.departmentId}])
  }
}
