import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  pokemons } from 'src/assets/metadata';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imagens: any;
  constructor(private router:Router) {  

  }

  ngOnInit(): void {
    this.imagens = pokemons;
  }

  navigate(path:any){
    this.router.navigate(path)
  }
}
