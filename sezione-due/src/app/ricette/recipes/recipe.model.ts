export class Recipe {
  public nome: string;
  public descrizione: string;
  public immagine: string;

  constructor(nome: string, desc: string, immagine: string) {
    this.nome = nome;
    this.descrizione = desc;
    this.immagine = immagine;
  }
}
