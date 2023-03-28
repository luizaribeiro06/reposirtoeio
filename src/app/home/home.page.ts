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

  distanciaNum: number=0;
  resultado: number=0;
  item: string='';
  compra: number= 0;
  radioSelecionada: string='';
  radioDesc: string='';
  pesoNum: number=0;
  peso: string='';
  distancia: string='';
  valor: string='';


  constructor(
    public alertController: AlertController
  ) {}

  //VALOR COM FRETE
  calcular() { //ta chamando p executar as ações

    this.pesoNum = parseFloat(this.peso)
    this.distanciaNum = parseFloat(this.distancia)

    this.resultado = (parseFloat(this.peso) * 0.5)+ (parseFloat(this.distancia) * 0.1 + (parseFloat(this.valor)))

  
    if(this.radioSelecionada == "freteAM"){
      this.resultado = this.resultado + 20
    }
    else if(this.radioSelecionada == "frete2"){
      this.resultado = this.resultado + 15
    }
    else if(this.radioSelecionada == "frete5"){
      this.resultado = this.resultado + 12
    }
    else if(this.radioSelecionada == "frete7"){
      this.resultado = this.resultado + 10
    }
  

    if(this.distanciaNum >= 10 && this.pesoNum >= 70){
      this.resultado = (this.resultado) + ((this.resultado) * 0.7);
    } 
  }

  verificar(){
    this.calcular()
  }
  
  
  //DESCONTO
  desconto (){
    if (this.radioDesc=== 'item3'){
      this.compra= (this.resultado);
    }

    else if(this.radioDesc=== 'item7'){
      this.compra= (this.resultado) - ((this.resultado) * 0.10);
    }

    else if(this.radioDesc==='item8') {
      this.compra= (this.resultado ) - ((this.resultado) * 0.15);
    }
  }

    async exibirDesconto() {
    const alert = await this.alertController.create({
   header: 'O valor total da compra é: ', //cabeçalho
    message: this.compra.toString(), //msg caixinha
   buttons: ['OK'] //config botoes
   });
    alert.present();
  }

  verificarDesc(){
    this.desconto();
    this.exibirDesconto();
  }
}