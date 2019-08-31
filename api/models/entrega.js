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
}