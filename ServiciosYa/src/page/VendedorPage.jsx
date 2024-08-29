import React, { useEffect } from 'react'
import { useVendedor } from '../hooks/useVendedor';
import { useNavigate } from 'react-router-dom';
import { VendedorList } from '../components/VendedorList';

export const VendedorPage = () => {
    const {vendedores,getVendedor}=useVendedor();
    const navegar = useNavigate()
    const abrirFormulario = ()=>{
       // navegar('/usuarios/registrar')
    }
    useEffect(()=>{
getVendedor()
console.log(vendedores);

    },[])
  return (
    <>
    <div className="container m-4">
    <h2>Sección Vendedores</h2>
   
  
    <div className="row">
        <div className="col">
           
                <button className="btn btn-primary my-2" onClick={abrirFormulario}>
                    Nuevo Vendedor
                </button>
       
            {
                vendedores.length === 0
                    ? <div className="alert alert-warning">No hay ofertas en el sistema!</div>
                    : <VendedorList vendedores={vendedores} />
            }
        </div>
    </div>
</div>
</>
);
  
}