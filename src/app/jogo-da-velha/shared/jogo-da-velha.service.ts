import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  //Add serviço da calculadora.
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
}
