import Pagina from "@/components/Pagina";

export default function Page(){
    return(
        <Pagina titulo="Minha Aplicação" subtitulo="Melhor APP da Web">
            <ul className="list-disc pl-8">
                        <li>Ana</li>
                        <li>Banana</li>
                        <li>Cana</li>
            </ul>
        </Pagina>
        
    )
}