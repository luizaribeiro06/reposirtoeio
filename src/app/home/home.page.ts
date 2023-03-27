import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /*valorPeso1: number=10; //menos de 1kg
  valorPeso3: number=12; //1 a 3kg
  valorPeso7: number=15; //4 a 7kg
  valorPeso10: number=20; //8 a 10kg

  //DISTANCIA até 10km/h
  valorFreteAM: number=20; //amanhã
  valorFrete2: number=15; //2 dias
  valorFrete5: number=10; //5 dias
  valorFrete7: number=5; //7 dias*/

  distancia: string='';
  resultado: number=0;
  item: string='';
  compra: number= 0;
  frete: string='';
  radioSelecionada: string='';
  pesoSelecionado: string='';


  constructor(
    public alertController: AlertController
  ) {}

  //VALOR COM FRETE
  calcular() { //ta chamando p executar as ações

    if (this.pesoSelecionado === 'peso1'){
      this.resultado= 30;
    }
    if(this.pesoSelecionado === 'peso3'){
      this.resultado= 30;
    }
    

    if (this.pesoSelecionado === 'peso7' && this.frete === 'freteAM'){
      this.resultado= 15 + 20;
    }
    if (this.pesoSelecionado === 'peso10' && this.frete === 'freteAM'){
      this.resultado= 20 + 20;
    }

    if (this.pesoSelecionado === 'peso1' && this.frete === 'frete2'){
      this.resultado= 10 + 15;
    }
    if (this.pesoSelecionado === 'peso3' && this.frete === 'frete2'){
      this.resultado= 12 + 15;
    }
    if (this.pesoSelecionado === 'peso7' && this.frete === 'frete2'){
      this.resultado= 15 + 15;
    }
    if (this.pesoSelecionado === 'peso10' && this.frete === 'frete2'){
      this.resultado= 20 + 15; 
    }

    if (this.pesoSelecionado === 'peso1' && this.frete === 'frete5'){
      this.resultado= 10 + 10;
    }
    if (this.pesoSelecionado === 'peso3' && this.frete === 'frete5'){
      this.resultado= 12 + 10;
    }
    if (this.pesoSelecionado === 'peso7' && this.frete === 'frete5'){
      this.resultado= 15 + 10;
    }
    if (this.pesoSelecionado === 'peso10' && this.frete === 'frete5'){
      this.resultado= 20 + 10;
    }

    if (this.pesoSelecionado === 'peso1' && this.frete === 'frete7'){
      this.resultado= 10 + 5;
    }
    if (this.pesoSelecionado === 'peso3' && this.frete === 'frete7'){
      this.resultado= 12 + 5;
    }
    if (this.pesoSelecionado === 'peso7' && this.frete === 'frete7'){
      this.resultado= 15 + 5;
    }
    if (this.pesoSelecionado === 'peso10' && this.frete === 'frete7'){
      this.resultado= 20 + 5;
    }

    
  }

  
    calcular (valor: any) { //recebe o parametro (any- esse parametro recebe qqr tipo de valor)
      let mensagem: string;
      mensagem = valor.detail.value; //variavel.detail.value //a propriedade $event é detail.value //no caso da multipla seleção a variavel virou um vetor
      this.exibirAlerta(mensagem);
    }
  
  
  //DESCONTO
  final (){
    if (this.radioSelecionada=== 'item3'){
      this.compra= (this.resultado);
    }

    if(this.radioSelecionada=== 'item7'){
      this.compra= (this.resultado) - ((this.resultado) * 0.10);
    }

    if(this.radioSelecionada==='item8') {
      this.compra= (this.resultado ) - ((this.resultado) * 0.15);
    }
    this.exibirDesconto();
  }


   async exibirDesconto() {
    const alert = await this.alertController.create({
   header: 'O valor total da compra é: ', //cabeçalho
    message: this.compra.toString(), //msg caixinha
   buttons: ['OK'] //config botoes
   });
    alert.present();
  }


}