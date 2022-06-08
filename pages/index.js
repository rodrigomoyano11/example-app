/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Button from '@mui/material/Button'

const Home = () => (
  <div>
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </head>

    <body>
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

        <Button variant="contained">Esto es un botón</Button>
      </header>

      <main>
        <section className="hero">
          <h2>Esto es el Hero</h2>
          <p>Esto es una descripción</p>
          <Button variant="outlined">Esto es un botón</Button>
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
    </body>
  </div>
)

export default Home
