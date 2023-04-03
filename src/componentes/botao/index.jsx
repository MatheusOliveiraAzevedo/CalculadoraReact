import "./Botao.css";

function Botao(props) {



    function aoClicar(evento) {
        evento.preventDefault();
    }

    function clicando(evento) {
        props.aoClicado(props.infoBotao)
        
    }

    return(
            <form onSubmit={aoClicar}>
                <button style={{background: props.corFundo, color: props.corFonte}} onClick={() => clicando()} value={"r"} className="Botao">{props.infoBotao}</button>
            </form>
    )
}

export default Botao;