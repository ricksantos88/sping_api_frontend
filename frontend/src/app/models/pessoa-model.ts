export class PessoaModel {
    constructor( dataDeNascimento: any ) {
        this.dataDeNascimento = dataDeNascimento;
    }

    public id: number
    public nome: string
    public sexo: string
    public email: string
    public dataDeNascimento: Date
    public naturalidade: string
    public nacionalidade: string
    public cpf: string

}
