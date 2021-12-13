import React from "react";

function Home() {
    return(
        <>
        <div class="content-wrapper d-flex justify-content-center">
            <section class="content">
                <div class="container-fluid">
                    <h1 className="text-center mt-2">Bienvenid@ a TRender</h1>
                    <br/>
                    <p className="Paragraph_120 text-black">La plataforma TRender es una aplicación que permite administar la venta de cursos Online.
                    En el menú de la izquierda se puede acceder a los diferentes módulos de la aplicación.</p>
                </div>
                <div className="Logo mb-3">
                    <img className="img-thumbnail border border-dark" src="TRender.png" alt="logo" />
                </div>
            </section>
        </div>
        </>
    )
}

export default Home;