export class Caderno {
    Id!: number;
    Titulo: string;
    Valor: number;
    NrFolhas: number;

    constructor() {
        this.Titulo = "";
        this.Valor = 0;
        this.NrFolhas = 0;
    }
}