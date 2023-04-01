CREATE TABLE Pedidos (
PedidoID INT,
nomeCliente VARCHAR(255),
dataHora DATETIME2,
valorTotal MONEY,
)

CREATE TABLE Produtos (
ProdutoID INT,
nomeProduto VARCHAR(255),
valorProduto MONEY,
)