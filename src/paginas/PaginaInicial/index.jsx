import React from "react";
import styles from "./PaginaInicial.module.scss"

import banner from "./banner.png"
import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Galeria from "componentes/Galeria";
import Rodape from "componentes/Rodape";
import Populares from "componentes/Populares";


export default function PaginaInicial() {
    return (
        <React.Fragment>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço!</h1>
                        <img  src={banner} alt="Imagem da terra vista do espaço"/>
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares/>
                </div>
            </main>
            <Rodape />
        </React.Fragment>
    )
}