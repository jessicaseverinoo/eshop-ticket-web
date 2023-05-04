export interface Tickets {
    readonly codigoReclamacao: string;
    readonly codigoCliente: string;
    readonly codigoPedido: string;
    readonly assunto?: string;
    readonly descricao: string;
    readonly status: string;
    readonly imagens: string | null;
}

export interface TicketImages {
    readonly images: string[];
}

export interface Ticket {
    readonly codigoCliente: string;
    readonly codigoPedido: string;
    readonly descricao: string;
}