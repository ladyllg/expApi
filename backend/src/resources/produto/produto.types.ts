import { Produto } from '../../models/Produto';

export type ProdCreateDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;
export type ProdUpdateDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;