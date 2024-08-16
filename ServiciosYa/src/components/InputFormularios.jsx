import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'
import React from 'react'

export const InputFormularios = ({nombre,funcion}) => {
    return(
        <>
          <FloatLabel >
                <InputText type='text' name={nombre}  id={nombre} value={nombre} onChange={funcion} />
                <label htmlFor={nombre}>{nombre}</label>
            </FloatLabel>
        </>
    )
}

