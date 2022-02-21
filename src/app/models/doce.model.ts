export class Doce {
    Id!: number;
    Descricao: string;
    Valor: number;
    DataFab: Date;

    constructor() {
        //this.Id = 0;
        this.Descricao = "";
        this.Valor = 0;
        this.DataFab = new Date();
    }
}