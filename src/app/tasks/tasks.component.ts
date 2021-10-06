import { Component, OnInit } from '@angular/core';
import { Uzduotis } from "./task.model"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  pavadinimas: string = '';
  tipas: string = '';
  uzduotys: Uzduotis[]=[];
  alertas: string = 'Iveskite uzduoties pavadinima ir pasirinkite tipa'

  addUzduotis(){
    if(this.pavadinimas!="" && this.tipas!=""){
      this.uzduotys.push(new Uzduotis (this.pavadinimas, this.tipas));
      this.pavadinimas = "";
      this.tipas = "";
    }
    }

  trinti(i){
    this.uzduotys.splice(i,1)
  }

  getBackground(tipas){
    if(tipas == 'Skubus'){
      return 'orange'
    }else if(tipas == 'Rutininis'){
      return 'blue'
    }else if(tipas == 'Neskubus'){
      return 'green'
    }else if(tipas == 'Ypac skubus'){
      return 'red'
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
