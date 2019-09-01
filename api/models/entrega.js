class Entrega{

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
        return this._idPedido;
    }

    get idCliente(){
        return this._idCliente;
    }

    get nomeRecebedor(){
        return this._nomeRecebedor;
    }

    get cpfRecebedor(){
        return this._cpfRecebedor;
    }

    get isComprador(){
        return this._isComprador;
    }

    get dataHoraEntrega(){
        return this._dataHoraEntrega;
    }

    get localização(){
        return this._localização;
    }

    // Setters
    set idPedido(idPedido){
        this._idPedido = idPedido;
    }

    set idCliente(idCliente){
        this._idCliente = idCliente;
    }

    set nomeRecebedor(nomeRecebedor){
        this._nomeRecebedor = nomeRecebedor;
    }

    set cpfRecebedor(cpfRecebedor){
        this._cpfRecebedor = cpfRecebedor;
    }

    set isComprador(isComprador){
        this._isComprador = isComprador;
    }

    set dataHoraEntrega(dataHoraEntrega){
        this._dataHoraEntrega = dataHoraEntrega;
    }

    set localização(localização){
        this._localização = localização;
    }
}

module.exports = Entrega;