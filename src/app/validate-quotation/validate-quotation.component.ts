import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiprojectService} from '../api/api-project.service';
import {ApiagencyService} from '../api/api-agency.service';
import {ApiQuotationService} from '../api/api-quotation.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-validate-quotation',
  templateUrl: './validate-quotation.component.html',
  styleUrls: ['./validate-quotation.component.sass']
})
export class ValidateQuotationComponent implements OnInit {
  Project: any = {};
  Agency: any = {};
  Quotation: any = {};
  myDate = new Date();
  uniqueNumber = Math.floor(Math.random() * 99999);
  valid: any = 0;




  constructor(
      private route: ActivatedRoute,
      public apiProject: ApiprojectService,
      public apiAgency: ApiagencyService,
      public apiQuotation: ApiQuotationService,
      public router: Router,
  ) {

  }

  ngOnInit() {
    this.loadAgency();

    this.route.params.subscribe(params => this.loadQuotation(params.id));
  }
  loadProject(id) {
    return this.apiProject.getProjectById(id).subscribe((data: {}) => {
      this.Project = data;
      console.log(this.Project);
    });
  }

  loadAgency() {
    return this.apiAgency.getAgencys().subscribe((data: {}) => {
      this.Agency = data[0];
    });
  }

  loadQuotation(id) {
    return this.apiQuotation.getQuotationById(id).subscribe((data: {}) => {
      this.Quotation = data;
      console.log(this.Quotation);
      this.loadProject(this.Quotation.project_id);
    });
  }

  totalprice() {
    const total1 = this.Quotation.unit_price1 * this.Quotation.quantity1;
    const total2 = this.Quotation.unit_price2 * this.Quotation.quantity2;
    let total3 = this.Quotation.unit_price3 * this.Quotation.quantity3;
    let total4 = this.Quotation.unit_price4 * this.Quotation.quantity4;
    let total5 = this.Quotation.unit_price5 * this.Quotation.quantity5;
    let total6 = this.Quotation.unit_price6 * this.Quotation.quantity6;
    let total7 = this.Quotation.unit_price7 * this.Quotation.quantity7;
    let total8 = this.Quotation.unit_price8 * this.Quotation.quantity8;
    let total9 = this.Quotation.unit_price9 * this.Quotation.quantity9;
    let total10 = this.Quotation.unit_price10 * this.Quotation.quantity10;
    let total11 = this.Quotation.unit_price11 * this.Quotation.quantity11;
    let total12 = this.Quotation.unit_price12 * this.Quotation.quantity12;
    let total13 = this.Quotation.unit_price13 * this.Quotation.quantity13;
    let total14 = this.Quotation.unit_price14 * this.Quotation.quantity14;
    let total15 = this.Quotation.unit_price15 * this.Quotation.quantity15;

    if (isNaN(total3)) {
      total3 = 0;
    }

    if (isNaN(total4)) {
      total4 = 0;
    }

    if (isNaN(total5)) {
      total5 = 0;
    }

    if (isNaN(total6)) {
      total6 = 0;
    }

    if (isNaN(total7)) {
      total7 = 0;
    }

    if (isNaN(total8)) {
      total8 = 0;
    }

    if (isNaN(total9)) {
      total9 = 0;
    }

    if (isNaN(total10)) {
      total10 = 0;
    }

    if (isNaN(total11)) {
      total11 = 0;
    }

    if (isNaN(total12)) {
      total12 = 0;
    }

    if (isNaN(total13)) {
      total13 = 0;
    }

    if (isNaN(total14)) {
      total14 = 0;
    }

    if (isNaN(total15)) {
      total15 = 0;
    }
    this.Quotation.price_total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14 + total15;
    if (isNaN(this.Quotation.price_total)) {
      this.Quotation.price_total = total1;
    }
    console.log(this.Quotation.price_total);
  }

  validQuotation() {
    if (this.valid == 1) {
      this.Quotation.pdf_path = '/' + this.Project.name + '/quotation/Devis_' + this.Quotation.quotation_number + '_signed.pdf';
      this.Quotation.status = 1;
      console.log(this.Quotation);
      this.apiQuotation.updateQuotation(this.Quotation.id, this.Quotation).subscribe((data: {}) => {
        this.router.navigate(['/project/', this.Project.id]);
      });
    } else {
      alert('Vous devez cocher la case de validation de devis pour le valider');
    }
  }
}
