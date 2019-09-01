class entrega{

    constructor(idPedido, idCliente, nomeRecebedor, cpfRecebedor,
        isComprador, dataHoraEntrega, localização ){
        
            this.idPedido = idPedido;
            this.idCliente = idCliente;
            this.nomeRecebedor = nomeRecebedor;
            this.cpfRecebedor = cpfRecebedor;
            this.isComprador = isComprador;
            this.dataHoraEntrega = dataHoraEntrega;
            this.localização = localização;
    }

    // Getters
    get idPedido(){
        return this.idPedido;
    }

    get idCliente(){
        return this.idCliente;
    }

    get nomeRecebedor(){
        return this.nomeRecebedor;
    }

    get cpfRecebedor(){
        return this.cpfRecebedor;
    }

    get isComprador(){
        return this.isComprador;
    }

    get dataHoraEntrega(){
        return this.dataHoraEntrega;
    }

    get localização(){
        return this.localização;
    }

    // Setters
    set idPedido(idPedido){
        this.idPedido = idPedido;
    }

    set idCliente(idCliente){
        this.idCliente = idCliente;
    }

    set nomeRecebedor(nomeRecebedor){
        this.nomeRecebedor = nomeRecebedor;
    }

    set cpfRecebedor(cpfRecebedor){
        this.cpfRecebedor = cpfRecebedor;
    }

    set isComprador(isComprador){
        this.isComprador = isComprador;
    }

    set dataHoraEntrega(dataHoraEntrega){
        this.dataHoraEntrega = dataHoraEntrega;
    }

    set localização(localização){
        this.localização = localização;
    }
}