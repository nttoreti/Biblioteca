import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Gibi } from 'src/app/models/gibi.model';
import { GibiService } from 'src/app/services/gibi/gibi.service';

@Component({
  selector: 'app-gibi-create',
  templateUrl: './gibi-create.component.html',
  styleUrls: ['./gibi-create.component.css']
})
export class GibiCreateComponent implements OnInit {

  gibi: Gibi;

  constructor(private router: Router, 
              private gibiService: GibiService) { 
    console.log("GibiCreateComponent-construtor")
    this.gibi = new Gibi();
  }

  ngOnInit(): void {
    console.log("GibiCreateComponent-ngOnInit")
  }

  goToIndex(): void {
    console.log("GibiCreateComponent-goToIndex");
    this.router.navigateByUrl("gibis/gibi-index");
  }

  create(): void {
    console.log("GibiCreateComponent-crate");
    console.log("GibiEditComponent-edit-start");
    this.gibiService.post(this.gibi)
      .pipe(
        take(1)
      )
      .subscribe(data =>{
        this.gibi = data;
        this.goToIndex();
      });
    console.log("GibiEditComponent-edit-end");
  }
}
