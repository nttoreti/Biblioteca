export class Gibi {
    Id!: number;
    Titulo: string;
    Valor: number;
    Editora: number;
    DataPublicacao: Date;

    constructor() {
        this.Titulo = "";
        this.Valor = 0;
        this.Editora = 0;
        this.DataPublicacao = new Date();
    }
}