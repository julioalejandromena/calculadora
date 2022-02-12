var display = document.getElementById("display")

var operandos = {
    operador : "",
    operadorAnt : "",
    numAnt : 0
}

var calculadora = {
    init : function()
    {
        var self = this
        var cero = document.getElementById("0")
        var uno = document.getElementById("1")
        var dos = document.getElementById("2")
        var tres = document.getElementById("3")
        var cuatro = document.getElementById("4")
        var cinco = document.getElementById("5") 
        var seis = document.getElementById("6")
        var siete = document.getElementById("7")
        var ocho = document.getElementById("8")
        var nueve = document.getElementById("9")

        var punto = document.getElementById("punto")
        var on = document.getElementById("on")
        var sign = document.getElementById("sign")
        var raiz = document.getElementById("raiz")
        var divide = document.getElementById("dividido")
        var por = document.getElementById("por")
        var menos = document.getElementById("menos")
        var mas = document.getElementById("mas")
        var igual = document.getElementById("igual")

        cero.addEventListener("click", function(){
            self.numero("0")
        })

        cero.addEventListener("mousedown", function(){
            cero.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        cero.addEventListener("mouseout", function(){
            cero.setAttribute("style", "transform: scale(1, 1)")
        })

        uno.addEventListener("click", function(){
            self.numero("1")
        })

        uno.addEventListener("mousedown", function(){
            uno.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        uno.addEventListener("mouseout", function(){
            uno.setAttribute("style", "transform: scale(1, 1)")
        })

        dos.addEventListener("click", function(){
            self.numero("2")
        })

        dos.addEventListener("mousedown", function(){
            dos.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        dos.addEventListener("mouseout", function(){
            dos.setAttribute("style", "transform: scale(1, 1)")
        })

        tres.addEventListener("click", function(){
            self.numero("3")
        })

        tres.addEventListener("mousedown", function(){
            tres.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        tres.addEventListener("mouseout", function(){
            tres.setAttribute("style", "transform: scale(1, 1)")
        })

        cuatro.addEventListener("click", function(){
            self.numero("4")
        })

        cuatro.addEventListener("mousedown", function(){
            cuatro.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        cuatro.addEventListener("mouseout", function(){
            cuatro.setAttribute("style", "transform: scale(1, 1)")
        })

        cinco.addEventListener("click", function(){
            self.numero("5")
        })

        cinco.addEventListener("mousedown", function(){
            cinco.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        cinco.addEventListener("mouseout", function(){
            cinco.setAttribute("style", "transform: scale(1, 1)")
        })

        seis.addEventListener("click", function(){
            self.numero("6")
        })

        seis.addEventListener("mousedown", function(){
            seis.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        seis.addEventListener("mouseout", function(){
            seis.setAttribute("style", "transform: scale(1, 1)")
        })

        siete.addEventListener("click", function(){
            self.numero("7")
        })

        siete.addEventListener("mousedown", function(){
            siete.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        siete.addEventListener("mouseout", function(){
            siete.setAttribute("style", "transform: scale(1, 1)")
        })

        ocho.addEventListener("click", function(){
            self.numero("8")
        })

        ocho.addEventListener("mousedown", function(){
            ocho.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        ocho.addEventListener("mouseout", function(){
            ocho.setAttribute("style", "transform: scale(1, 1)")
        })

        nueve.addEventListener("click", function(){
            self.numero("9")
        })

        nueve.addEventListener("mousedown", function(){
            nueve.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        nueve.addEventListener("mouseout", function(){
            nueve.setAttribute("style", "transform: scale(1, 1)")
        })

        punto.addEventListener("click", function(){
            self.numero(".")
        })

        punto.addEventListener("mousedown", function(){
            punto.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        punto.addEventListener("mouseout", function(){
            punto.setAttribute("style", "transform: scale(1, 1)")
        })

        on.addEventListener("click", function(){
            display.innerHTML = "0"
            operandos.numAnt = 0
            operandos.operador = ""
            operandos.operadorAnt = ""
        })

        on.addEventListener("mousedown", function(){
            on.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        on.addEventListener("mouseout", function(){
            on.setAttribute("style", "transform: scale(1, 1)")
        })

        sign.addEventListener("click", function(){
            self.sign()
        })

        sign.addEventListener("mousedown", function(){
            sign.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        sign.addEventListener("mouseout", function(){
            sign.setAttribute("style", "transform: scale(1, 1)")
        })

        raiz.addEventListener("click", function(){
            display.innerHTML = Math.sqrt(parseFloat(display.innerHTML))
            acomodarDisplay()
        })

        raiz.addEventListener("mousedown", function(){
            raiz.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        raiz.addEventListener("mouseout", function(){
            raiz.setAttribute("style", "transform: scale(1, 1)")
        })

        mas.addEventListener("click", function(){
            self.operandos("+")
        })

        mas.addEventListener("mousedown", function(){
            mas.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        mas.addEventListener("mouseout", function(){
            mas.setAttribute("style", "transform: scale(1, 1)")
        })

        menos.addEventListener("click", function(){
            self.operandos("-")
        })

        menos.addEventListener("mousedown", function(){
            menos.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        menos.addEventListener("mouseout", function(){
            menos.setAttribute("style", "transform: scale(1, 1)")
        })

        divide.addEventListener("click", function(){
            self.operandos("/")
        })

        divide.addEventListener("mousedown", function(){
            divide.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        divide.addEventListener("mouseout", function(){
            divide.setAttribute("style", "transform: scale(1, 1)")
        })

        por.addEventListener("click", function(){
            self.operandos("*")
        })

        por.addEventListener("mousedown", function(){
            por.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        por.addEventListener("mouseout", function(){
            por.setAttribute("style", "transform: scale(1, 1)")
        })

        igual.addEventListener("click", function(){
            self.operandos("=")
        })

        igual.addEventListener("mousedown", function(){
            igual.setAttribute("style", "transform: scale(0, 95, 0.95)")
        })

        igual.addEventListener("mouseout", function(){
            igual.setAttribute("style", "transform: scale(1, 1)")
        })
         
    }, // fin de el metodo init
    numero : function(n)
    {
        var num = display.innerHTML
        var self = this
        var limit = 8

        if(num.indexOf(".") != -1)
        {
            if(n == ".")
            {
                n = ""
            }
            limit = 9
        }
        if(num == "0" && n != ".")
        {
            num = ""
        }
        if(operandos.operador.length > 0)
        {
            num = ""
            operandos.operadorAnt = operandos.operador
            operandos.numAnt = parseFloat(display.innerHTML)
            operandos.operador = ""
        }
        if(display.innerHTML.length < limit)
        {
            display.innerHTML = num + n
        }

    }, // fin del metodo numero 
    sign : function()
    {
        var cadena = display.innerHTML
        var i = cadena.indexOf("-")

        if(i == -1)
        {
            display.innerHTML = "-" + cadena
        }
        else
        {
            cadena = cadena.substring(1, cadena.length)
            display.innerHTML = cadena
        }

    }, // fin del metodo sign
    operandos : function(op)
    {
        switch(op)
        {
            case "+" :
                operandos.operador = op
                console.log(operandos.operador);
                switch (operandos.operadorAnt) 
                {
                    case "+" :
                        operandos.numAnt = operandos.numAnt + parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;

                    case "-" :
                        operandos.numAnt = operandos.numAnt - parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;
                        
                    case "*" :
                        operandos.numAnt = operandos.numAnt * parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;
    
                    case "/" :
                        operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;        
                
                }
            break

            case "-" :
                operandos.operador = op
                console.log(operandos.operador);
                switch (operandos.operadorAnt) 
                {
                    case "+" :
                        operandos.numAnt = operandos.numAnt + parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;

                    case "-" :
                        operandos.numAnt = operandos.numAnt - parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;
                        
                    case "*" :
                        operandos.numAnt = operandos.numAnt * parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;
    
                    case "/" :
                        operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;        
                
                }
            break

            case "*" :
                operandos.operador = op
                console.log(operandos.operador);
                switch (operandos.operadorAnt) 
                {
                    case "+" :
                        operandos.numAnt = operandos.numAnt + parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;

                    case "-" :
                        operandos.numAnt = operandos.numAnt - parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;
                        
                    case "*" :
                        operandos.numAnt = operandos.numAnt * parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;
    
                    case "/" :
                        operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                        display.innerHTML = operandos.numAnt
                        operandos.operadorAnt = operandos.operador
                        acomodarDisplay()                        
                        break;        
                
                }
            break

            case "/" :
                operandos.operador = op
                console.log(operandos.operador);
                if(operandos.operadorAnt.length > 0)
                {
                    operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                    display.innerHTML = operandos.numAnt
                    acomodarDisplay()
                }
            break

            case "=" : 
                switch (operandos.operadorAnt) 
                {
                    case "+" :
                        operandos.numAnt += parseFloat(display.innerHTML)                        
                        break;

                    case "-" :
                        operandos.numAnt -= parseFloat(display.innerHTML)                        
                        break;

                    case "*" :
                        operandos.numAnt *= parseFloat(display.innerHTML)                        
                        break;

                    case "/" :
                        operandos.numAnt /= parseFloat(display.innerHTML)                        
                        break;
                }
                display.innerHTML = operandos.numAnt
                acomodarDisplay()
                operandos.operadorAnt = ""
                operandos.operador = ""
                break
        }

    } // fin del metodoo operandos


}    

function acomodarDisplay()
{
    var cadena = display.innerHTML
    var numero = parseFloat(cadena)
    limit = 8

    if(cadena.indexOf(".") != -1)
    {
        limit++
    }
    if(cadena.indexOf("-") != -1)
    {
        limit ++
    }

    if(cadena.length > limit)
    {
        if(numero - numero.toFixed(0) == 0)
        {
            display.innerHTML = numero
        }
        else
        {
            display.innerHTML = parseFloat(cadena).toFixed(8)
        }
    }
} // fin de la funcion acomodarDisplay

calculadora.init()