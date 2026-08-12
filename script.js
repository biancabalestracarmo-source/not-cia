/* Configurações gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f2f5f8;
    color: #222;
    line-height: 1.6;
}

/* Cabeçalho */
.cabecalho {
    background: linear-gradient(135deg, #123c69, #1e6fa8);
    color: white;
    padding: 35px 20px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

.container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
}

.cabecalho .container {
    text-align: center;
}

.colegio {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
}

.cabecalho h1 {
    font-size: 2.2rem;
    margin-bottom: 8px;
}

.disciplina {
    font-size: 1.1rem;
    opacity: 0.9;
}

/* Notícia */
.noticia {
    background-color: white;
    margin: 40px 0;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.categoria {
    display: inline-block;
    background-color: #e7f2fa;
    color: #17659a;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 18px;
}

.noticia h2 {
    color: #123c69;
    font-size: 2.3rem;
    line-height: 1.2;
    margin-bottom: 18px;
}

.subtitulo {
    color: #555;
    font-size: 1.15rem;
    margin-bottom: 20px;
}

.informacoes {
    display: flex;
    gap: 30px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 15px 0;
    margin-bottom: 25px;
    color: #555;
    font-size: 0.95rem;
}

/* Imagem */
figure {
    margin: 0 0 25px 0;
}

figure img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 10px;
    display: block;
}

figcaption {
    color: #777;
    font-size: 0.85rem;
    margin-top: 8px;
    text-align: center;
}

/* Corpo da notícia */
.conteudo {
    font-size: 1.08rem;
    color: #333;
}

.conteudo p {
    margin-bottom: 15px;
}

/* Contador */
.contador {
    margin-top: 30px;
    padding: 15px;
    background-color: #f4f8fb;
    border-left: 4px solid #1e6fa8;
    border-radius: 5px;
    font-size: 0.85rem;
    color: #555;
}

.contador span {
    font-weight: bold;
    color: #123c69;
}

/* Rodapé */
.rodape {
    background-color: #123c69;
    color: white;
    text-align: center;
    padding: 25px 15px;
    font-size: 0.9rem;
}

.rodape p {
    margin: 4px 0;
}

/* Responsividade para tablets */
@media (max-width: 768px) {

    .cabecalho h1 {
        font-size: 1.8rem;
    }

    .noticia {
        padding: 25px;
        margin: 25px 0;
    }

    .noticia h2 {
        font-size: 1.8rem;
    }

    .subtitulo {
        font-size: 1rem;
    }

    .informacoes {
        flex-direction: column;
        gap: 5px;
    }
}

/* Responsividade para celulares */
@media (max-width: 480px) {

    .container {
        width: 94%;
    }

    .cabecalho {
        padding: 25px 10px;
    }

    .cabecalho h1 {
        font-size: 1.5rem;
    }

    .colegio {
        font-size: 0.8rem;
    }

    .disciplina {
        font-size: 0.95rem;
    }

    .noticia {
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
    }

    .noticia h2 {
        font-size: 1.5rem;
    }

    .conteudo {
        font-size: 1rem;
    }

    figure img {
        max-height: 300px;
    }
}
