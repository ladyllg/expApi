import { Produto } from '../../models/Produto';
import { ProdCreateDto, ProdUpdateDto } from './produto.types';

const getAllProdutos = async (): Promise<Produto[]> => {
    const produtos = await Produto.findAll();
    return produtos.map((p) => p.toJSON());
};
const createProduto = async (produto: ProdCreateDto): Promise<Produto> => {
    return await Produto.create(produto);
};
const getProduto = async (id: string): Promise<Produto | null> => {
    return await Produto.findOne({ where: { id } })
}
const updateProduto = async (id: string, produto: ProdUpdateDto): Promise<number | null> => {
    const prod = await getProduto(id);
    if (prod === null) return null
    const [affectedCount] = await Produto.update(produto, { where: { id } })
    return affectedCount;
}
export { getAllProdutos, createProduto, getProduto, updateProduto };