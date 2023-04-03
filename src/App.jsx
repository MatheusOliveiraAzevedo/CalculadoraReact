import { useState } from 'react';
import './App.css';
import Botao from './componentes/botao';
import Display from './componentes/display';
import calculo from './logica/calculo';

function App() {

  var [valor, setValor] = useState(0);
  var [valor2, setValor2] = useState(0);
  var [operacao, setOperacao] = useState(null);
  var [resultado, setResultado] = useState(null);
  

  function zerar() {
    
    setValor(0);
    setValor2(0);
    setOperacao(null);
    setResultado(null)
  }

  function direcao(Valor) {

    if (Valor === "+"|| Valor === "-" || Valor === "/" || Valor === "x") {
      setOperacao(Valor)
    } else if ( Valor === "=") {
      setResultado(calculo(valor, valor2, operacao))
    } 
    
    
    if (operacao === null) {
      setValor(parseInt(valor + Valor))
    } else {
      setValor2(parseInt(valor2 + Valor))
    }
    
    
    if (Valor ==="AC") {
      zerar();
      
    }
  }
  

  return (
    <div className='container'>
      <Display info={valor} info2={valor2} infoOp={operacao} result={resultado}></Display>

      <section className="botoes botoesTamanho1">
      <Botao corFundo={"grey"} corFonte={"black"} infoBotao="AC" aoClicado={valor => direcao(valor)} ></Botao>
      <Botao corFundo={"#da6f0ae7"} corFonte={"white"} infoBotao="+" aoClicado={valor => direcao(valor)} ></Botao>
      <Botao corFundo={"#da6f0ae7"} corFonte={"white"} infoBotao="-" aoClicado={valor => direcao(valor)} ></Botao>
      <Botao corFundo={"#da6f0ae7"} corFonte={"white"} infoBotao="/" aoClicado={valor => direcao(valor)} ></Botao>
      </section>

      <section className="botoes botoesTamanho1">
      <Botao infoBotao="7" aoClicado={valor => direcao(valor)} ></Botao>
      <Botao infoBotao="8" aoClicado={valor => direcao(valor)} ></Botao>
      <Botao infoBotao="9" aoClicado={valor => direcao(valor)} ></Botao>
      <Botao corFundo={"#da6f0ae7"} corFonte={"white"} infoBotao="x" aoClicado={valor => direcao(valor)} ></Botao>
      </section>

      <section className="botoes botoesTamanho2">
      <Botao infoBotao="4" aoClicado={valor => direcao(valor)} ></Botao>
      <Botao infoBotao="5" aoClicado={valor => direcao(valor)} ></Botao>
      <Botao infoBotao="6" aoClicado={valor => direcao(valor)} ></Botao>
      </section>

      <section className="botoes botoesTamanho4">
      <Botao corFundo={"#da6f0ae7"} corFonte={"white"} infoBotao="=" aoClicado={valor => direcao(valor)} ></Botao>
      </section>

      <section className="botoes botoesTamanho2">
      <Botao infoBotao="1" aoClicado={valor => direcao(valor)} ></Botao>
      <Botao infoBotao="2" aoClicado={valor => direcao(valor)} ></Botao>
      <Botao infoBotao="3" aoClicado={valor => direcao(valor)} ></Botao>
      </section>
      
      <section className="botoes botoesTamanho3">
      <Botao infoBotao="0" aoClicado={valor => direcao(valor)} ></Botao>
      </section>
      
    </div>
  );
}

export default App;

