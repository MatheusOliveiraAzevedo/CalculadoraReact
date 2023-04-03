import "./Display.css"

function Display({info, info2, infoOp, result}) {

    var numero = info


    if (infoOp != null) {
        numero = info2;
        if (result != null) {
            numero = result
        }
    } 





    return(
        <div className="display">
            <h1 className="resultado">{numero}</h1>
        </div>

    )
}

export default Display;