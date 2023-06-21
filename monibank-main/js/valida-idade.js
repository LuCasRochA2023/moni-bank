export default function ehMaior(campo){
    
    const dataNas=new Date(campo.value);
    if(!validaIdade){
        campo.setCustomValidity("O usuário não é maior de idade");
    }
}

function validaIdade(data){
    const dataAtual= new Date();
    const dataMais18 = new Date(data.getUTCFullYear()+18, data.getUTCMonth(),data.getUTCDate());
    return dataAtual>=dataMais18;
}