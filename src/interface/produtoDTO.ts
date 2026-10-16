export interface CaracteristicaProdutoDTO {
  nome: string;
  valor: string;
}

export interface ProdutoDTO {
  // =========================
  // DADOS PRINCIPAIS
  // =========================

  idProduto?: number;
  codProduto?: string;

  nome: string;

  descricao?: string | null;

  preco: number;

  estoque: number;

  imagem?: string | null;

  idCategoria: number;

  // =========================
  // INFORMAÇÕES DO PRODUTO
  // =========================

  marca?: string;

  tipo?: string;

  faixaEtaria?: string;

  linha?: string;

  // =========================
  // VARIAÇÕES
  // =========================

  variacoes?: string[];

  tamanhos?: string[];

  // =========================
  // PREÇO / PROMOÇÃO
  // =========================

  desconto?: number;

  precoAnterior?: number;

  parcelas?: number;

  promocao?: boolean;

  destaque?: boolean;

  // =========================
  // AVALIAÇÕES
  // =========================

  avaliacao?: number;

  quantidadeAvaliacoes?: number;

  // =========================
  // CARACTERÍSTICAS
  // =========================

  caracteristicas?: CaracteristicaProdutoDTO[];
}