interface ConteudoProps{
    children: any
}

export default function Conteudo(props:any){
    console.log(props);
    return(
        <div className={`
        bg-zinc-900
        items-start
        flex-1
        p-4
        text-3xl
        `}        
        >
           {props.children}
        </div>
    )
}