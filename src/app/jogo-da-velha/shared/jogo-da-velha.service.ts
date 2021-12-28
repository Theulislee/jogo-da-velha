import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  /**
   * Add serviço da calculadora
   */
  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numMovimentos: number;
  private vitoria: any;

  private _jogador: number;
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFinal: boolean;

  constructor() { }
/**
 * Inicializa o jogo. Define exibição da tela
 */
  inicializar(): void {
    this._showInicio = true;
    this._showTabuleiro = false;
    this._showFinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }
   /**
   * Inicializar o tabuleiro do jogo com vazio para todas as posições
   */
  inicializarTabuleiro(): void{
    this.tabuleiro = [this.TAM_TAB];
    for(let i = 0; i < this.TAM_TAB; i++){
    this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }
   /**
   * Retorna se a tela de ínicio deve ser exibida.
   */
    get showInicio(): boolean {
      return this.showInicio;
    }
    /**
    * Retorna se a tela de início deve ser exibida.
    */
    get showTabuleiro(): boolean {
      return this._showTabuleiro;
    }
    /**
     * Retorna o número de jogador a jogar
     */
    get jogador(): number {
      return this._jogador;
    }
    /**
     * Clique para iniciar o jogo
     */
    iniciarJogo(): void {
      this._showInicio = false;
      this._showTabuleiro = true;
    }
    /**
     * Realizar uma jogada, dado as coordenadas do tabuleiro
     * (Se alguém ja jogou e ter o valor diferente de vazio, está casa está ocupada
     * então ela não pode executar)
     */
    jogar(posX: number, posY: number): void {
      //jogada invalida (verifica se a jogada é invalida)
      if(this.tabuleiro[posX][posY] !== this.VAZIO ||
        this.vitoria) {
          return;
        }

    /**
    *Momento da jogada
    */
    /* this.tabuleiro[posX][posY] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(posX, posY,
      this.tabuleiro, this._jogador);
      this._jogador = (this.jogador === this.X) ? this.O: this.X;
 */
   /*  //metodo cpu jogar
    if(!this.vitoria && this.numMovimentos < 9) {
      this.cpuJogar();}
    }
  } */
 }
}
