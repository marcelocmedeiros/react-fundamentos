import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

interface PaginaProps{
    titulo: string
    subtitulo: string
    children:any
    
}

export default function Pagina(props:any){
    return(
        <div className={`flex h-screen`}>
            <AreaLateral/>
            <div className="flex flex-col flex-1">
            <Cabecalho 
            titulo={props.titulo}
            subtitulo={props.subtitulo}
            className="h-16 bg-zinc-800"
            />

                <Conteudo>
                    {props.children}
                </Conteudo>
            <Rodape
                esquerda={`Curso Fundamentos do Rect`} 
                direita={`Desemvolvido em ${new Date().getFullYear()}`}
            />
            </div>
        </div>
    )

}