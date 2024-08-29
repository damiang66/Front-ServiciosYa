import React, { useEffect, useState } from 'react'
import { UsuarioList } from '../components/UsuarioList';
import styles from './views.module.css';
import { useUsuario } from '../hooks/useUsuario';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const UsuarioPage = () => {

    const { usuarios, getUsuario } = useUsuario();
    const navegar = useNavigate()
    const abrirFormulario = () => {
        navegar('/usuarios/registrar')
    }
    useEffect(() => {
        getUsuario()
        console.log(usuarios);

    }, [])
    return (
        <>
            <Header />
            <main className={styles['user-page']}>
                <h1>Sección Usuario</h1>


                    <section>

                        <button className="btn btn-primary my-2" onClick={abrirFormulario}>
                            Nuevo Usuario
                        </button>

                        {
                            usuarios.length === 0
                                ? <div className="alert alert-warning">No hay ofertas en el sistema!</div>
                                : <UsuarioList usuarios={usuarios} />
                        }
                    </section>
            </main>
            <Footer />
        </>
    );

}
