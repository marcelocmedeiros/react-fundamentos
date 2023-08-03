export default function Page() {
    function renderizarTitulo() {
        return (
        <div>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </div>
        )
    }

    function rendenrizarConteudo() {
        return(
            <div>
                <ul>
                    <li>Ana</li>
                    <li>Carlos</li>
                    <li>Zico</li>
                </ul>
            </div>
        )
    }
    return (
     <div>
        {renderizarTitulo()}
        <hr />
        {rendenrizarConteudo()}
     </div>
    )
  }