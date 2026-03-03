import react, { use } from 'react';
import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react'; 


const Preloader= (): ReactElement => {
  const [isloading, setIsloading] = useState<boolean>(true);  // 1. Tipamos el estado como booleano
  
  useEffect(() => {

    const timer = setTimeout(() => { // 2. Definimos el timer. NodeJS.Timeout o number según el entorno
      setIsloading(false);
    }, 3000);

       // 3. Limpieza: evita errores si el componente se desmonta antes de los 2s
    return () => clearTimeout(timer);
  }, []);

  if(isloading) {
    return (
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-white contenedor-del-preloader">
        <div className="spinner-border text-primary" role="status" style={{ width: '3.5rem', height: '3.5rem' }}>
          <span className="visually-hidden">Cargando...</span>
        </div>
        <h5 className="mt-3 text-primary animate-pulse">Preparando todo para ti...</h5>
      </div>
    );
  }
  return <></>; // 4. Retorna un fragmento vacío cuando no se muestra el preloader
}

export default Preloader;