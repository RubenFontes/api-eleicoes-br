
import fetch from 'node-fetch'

const votes = async() => {
	const result = await fetch('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json')
	.then(res => res.json())
	.then(data => data.cand.map(cand => ({ name: cand.nm, votos: cand.vap, porcentagem: cand.pvap })))
	console.table(result)
	setTimeout(votes, 3000)
}

votes()
