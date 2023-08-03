// import '../app/globals.css'
import Pagina from '@/components/Pagina'

export default function TestePagina(){
    
    function executar() {
        console.log('O botão foi executado!!!');
        
    }
    return(
        <Pagina titulo="Minha Página"
        subtitulo="Estou na pasta Pages">
             <button
                    onClick={executar}
                    className='botao'
                    >
                        Teste
            </button>

        </Pagina>
        
    )
} 