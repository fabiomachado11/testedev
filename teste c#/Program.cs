Console.Write("Digite o valor do produto: ");
float valor = float.Parse(Console.ReadLine());

float novoValor = valor * 60/100;
float valorDesconto = valor - novoValor;

Console.WriteLine("O produto custava: " + valor);
Console.WriteLine("O novo valor com o desconto é: " + novoValor);
Console.WriteLine("O valor do desconto foi: " + valorDesconto);

