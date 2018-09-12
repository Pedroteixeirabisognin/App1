import { Component } from '@angular/core';
//Indica qual o novo componente
@Component({
    //Podemos usar [app-topo] para chamar o seletor como uma div e também podemos chama-lo como uma classe ex: .app-topo 
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    //Template serve para não ter que implementar um arquivo teamplate
    //template: '<p>Esse é o componente Topo</p>'
    //Você pode usar ' para estilos de uma linha e pode usar ` para estilos de mais de uma linha
    /*styles :[`.exemplo{
        color:red
    } `]*/
    styleUrls: ['./topo.component.css']
})
export class TopoComponent{}