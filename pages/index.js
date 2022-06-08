/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'

const Home = () => (
  <div>
    <header>
      <h1>Inicio</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li>
            <a href="/contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <section className="hero">
        <h2>Esto es el Hero</h2>
        <p>Esto es una descripción</p>
        <button>Esto es un botón</button>
      </section>

      <section className="cards">
        <h2>Cards</h2>
        <div className="cards">
          <div className="card">
            <h3>Card 1</h3>
            <p>Esto es una descripción</p>
          </div>
          <div className="card">
            <h3>Card 2</h3>
            <p>Esto es una descripción</p>
          </div>
          <div className="card">
            <h3>Card 3</h3>
            <p>Esto es una descripción</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>Esto es un footer</p>
    </footer>
  </div>
)

export default Home
