import { useState } from 'react'
import './App.css'

function App() {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function buscarLivros() {
    setCarregando(true)
    setErro('')
    setLivros([])

    try {
      const response = await fetch('/api/livros')

      if (!response.ok) {
        throw new Error('Erro HTTP: ' + response.status)
      }

      const dados = await response.json()
      setLivros(dados.livros)
    } catch (e) {
      setErro('Não foi possível buscar os livros.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="container">
      <h1>Catálogo de Livros</h1>

      <button onClick={buscarLivros}>Buscar Livros</button>

      {carregando && <p>Carregando livros...</p>}
      {erro && <p className="erro">{erro}</p>}

      <div className="lista">
        {livros.map((livro) => (
          <div key={livro.id} className="livro">
            <p>ID: {livro.id}</p>
            <p>Título: {livro.titulo}</p>
            <p>Autor: {livro.autor}</p>
            <p>Ano: {livro.ano}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App