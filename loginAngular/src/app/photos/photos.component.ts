import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  pokemons } from 'src/assets/metadata';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  public pokemonAtual:any;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe((params:any)=>{
      if(params['codigo']){
        pokemons.forEach(
          (item)=>{
            if( item.code == params['codigo']  ) {
              this.pokemonAtual = item;
            }
          }
        );
      }
    })

   }

  ngOnInit(): void {
  }

}
