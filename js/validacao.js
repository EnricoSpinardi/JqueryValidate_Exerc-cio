//validação simples
//$("#formExemplo").validate();

$("#formExemplo").validate({
    debug: true,
    rules: {
        //não existe ordem
        txtemail: {
            required: true,
            email: true,
        },
        txtnome: {
            required: true,
            rangelength: [2, 50],
        },
        txtidade: {
            min: 18,
            max: 100,
            required: true,
            //range: [18,100],
        }
    },
    messages: {
        txtemail: {
            required: "Email obrigatório",
            email: "Formato inválido de e-mail"
        },
        txtnome: {
            required: "Nome obrigatório",
            minlength: "Exigido 2 caractéres",
            maxlength: "Valor máximo: 50"
        },
        txtidade: {
            required: "Idade obrigatória",
            min: "Valor mínimo: 18",
            max: "Valor máximo: 100"
        }
    }
});

$("#formExercico").validate({
    debug: true,
    rules: {
        txtnomeEx:{
            required: true,
            rangelength: [5, 50],
        },
        txtemailEx: {
            required: true,
            email: true,
        },
        txtnfilhos:{
            required: true,
            min: 0,
            max: 10,
        },
        txtsalario:{
            required: true,
            range: [2.000, 10.000]
        },
        txtadmissao:{
            required: true,
            date: true,
        },
        txtredesocial:{
            required: true,
            url: true,
        }

    },
    messages: {
    txtnomeEx:{
        required: "Nome obrigatório",
        minlength: "Exigido 2 caractéres",
        maxlength: "Caractéres máximos: 50",
    },
    txtemailEx: {
        required: "Email obrigatório",
        email: "Formato inválido de email",
    },
    txtnfilhos:{    
        required: "Número de filhos obrigatório",
        min: "Valor mínimo: 0",
        max: "Valor máximo: 10",
    },
    txtsalario:{
        required: "Sálario obrigatório",
        min: "Valor mínimo: 2000",
        max: "Valor máximo: 10000",
        
    },
    txtadmissao:{
        required: "Admissão obrigatório",
    },
    txtredesocial:{
        required: "Endereço da Rede Social obrigatório",
        url: "Endereço de rede social inválida"
        }
    }
});