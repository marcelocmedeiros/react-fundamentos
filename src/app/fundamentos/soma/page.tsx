export default function Page() {
    const nome = 'Marcelo'
    const idade = 45
    return (
     <div>
      <div>{nome} {idade}</div>
      <div>{2 + 7}</div>
      <div>{idade * 2}</div>
      <div>{Math.random()}</div>
     </div>
    )
  }