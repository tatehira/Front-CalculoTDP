# CalculoTDP Frontend

## Descrição

Este repositório contém o código do frontend para o projeto CalculoTDP, que está relacionado ao cálculo de TDP (Thermal Design Power) de componentes eletrônicos. O TDP é uma medida da quantidade de energia térmica que um dispositivo eletrônico produz quando está em pleno funcionamento. O cálculo do TDP é essencial para garantir que os componentes eletrônicos estejam operando dentro de limites seguros de temperatura.

## Backend

O backend correspondente a este frontend pode ser encontrado no seguinte repositório: [Api-CalculoTDP](https://github.com/tatehira/Api-CalculoTDP). O backend é responsável por fornecer a API utilizada por este frontend.

## API

A API fornecida pelo backend retorna um JSON com as seguintes propriedades:

```json
{
  "Cpu": "Processador 1",
  "Gpu": "Placa de vídeo 1",
  "Ram": "Memória RAM 1",
  "HDD": "Armazenamento HDD 1",
  "SSD": "Armazenamento SSD 1",
  "Motherboard": "Placa-mãe 1",
  "TdpDefault": 0,
  "TdpTotal": 100
}

Para rodar o projeto, é necessário ter o 'yarn' instalado no computador e rodar o seguinte comando:
### `yarn start`
