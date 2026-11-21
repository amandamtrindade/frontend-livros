# Catálogo de Livros (React) Lista 2 

## Objetivo
Interface em React que consulta a API de livros (Flask) e exibe os livros na tela quando o usuário clica em "Buscar Livros".

## Pré-requisito
A API da Lista 1 (repositório `api-livros-flask`) precisa estar rodando em http://127.0.0.1:5000.

## Instalação
```bash
npm install
```

## Execução
```bash
npm run dev
```
Acesse o endereço mostrado no terminal (normalmente http://localhost:5173).

## Observação
O Vite usa um proxy: as chamadas para `/api/livros` são encaminhadas para `http://127.0.0.1:5000/livros`.
