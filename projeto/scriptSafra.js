
function calcular(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var n3 = parseFloat(document.getElementById('lib').value)
	var s  = n1/n2
    var li = n3*n2
    var sli = parseFloat(li.toString(2))
	var sa = parseFloat(s.toFixed(2))
			
	// document.getElementById('res').innerHTML = sa.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})
    if(n1 <= 0){
        alert('ERRO')
    }else{
        var pz = document.getElementById('n2')
        var pr = Number(pz.value)
        var radco = document.getElementsByName('conv')
    //faz se for [GOV SC] em 84 - o coeficiente esta na var==gov
        if (radco[0].checked && pr == 84){
            var gov = 0.02040
            var sg = n1/gov
            var sgl = parseFloat(sg.toFixed(2))
            let coml = sgl*0.05
            let comp = coml*0.4
            
            document.getElementById('res').innerHTML = sgl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})
            document.getElementById('resp').innerHTML = 
                `Crédito Consignado<p>Convenio: GOV SC</p><p>Parcela: ${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}
                    <br>Prazo: ${pr} vezes
                    <br>Liberação: ${sgl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}
                 </p>
                <p>Comissão<br> ${comp.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}</p>`

    //faz se for GOV SC em 96 - o coeficiente esta na var==gov
     }else if(radco[0].checked && pr == 96){
        var gov = 0.01470
        var sg = n1/gov
        var sgl = parseFloat(sg.toFixed(2))
        let coml = sgl*0.06
        let comp = coml*0.4
        document.getElementById('res').innerHTML = sgl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})
        document.getElementById('resp').innerHTML =
        `Crédito Consignado<p>Convenio: GOV SC</p><p>Parcela: ${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}
                    <br>Prazo: ${pr} vezes
                    <br>Liberação: ${sgl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}
                 </p>
                <p>Comissão<br> ${comp.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}</p>`

     //faz se for [GOV SC] SC em 120 - o coeficiente esta na var==gov
    }else if(radco[0].checked && pr == 120){
        var gov = 0.01170
        var sg = n1/gov
        var sgl = parseFloat(sg.toFixed(2))
        let coml = sgl*0.08
        let comp = coml*0.4
        document.getElementById('res').innerHTML = sgl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})
        document.getElementById('resp').innerHTML =
        `Crédito Consignado<p>Convenio: GOV SC</p><p>Parcela: ${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}
                    <br>Prazo: ${pr} vezes
                    <br>Liberação: ${sgl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}
                 </p>
                <p>Comissão<br> ${comp.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}</p>`

    //faz se for [INSS] em 84 - o coeficiente esta na var==gov
    }else if (radco[1].checked && pr == 84){
        var gov = 0.02040
        var sg = n1/gov
        var sgl = parseFloat(sg.toFixed(2))
	let coml = sgl*0.08
        let comp = coml*0.8
        document.getElementById('res').innerHTML = sgl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})
	document.getElementById('resp').innerHTML =
        `Crédito Consignado<p>Convenio: INSS</p><p>Parcela: ${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}
                    <br>Prazo: ${pr} vezes
                    <br>Liberação: ${sgl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}
                 </p>
                <p>Comissão<br> ${comp.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}</p>`

    //faz se for [INSS] em 96 - o coeficiente esta na var==gov
    }else if(radco[1].checked && pr == 96){
        var gov = 0.01470
        var sg = n1/gov
        var sgl = parseFloat(sg.toFixed(2))
        document.getElementById('res').innerHTML = 'Prazo maximo 84X'
    //faz se for [INSS] em 120 - o coeficiente esta na var==gov
    }else if(radco[1].checked && pr == 120){
        var gov = 0.01170
        var sg = n1/gov
        var sgl = parseFloat(sg.toFixed(2))
        document.getElementById('res').innerHTML = 'Prazo maximo 84X'
    }else{
        alert('ERRO')
        }
    } 
}
  