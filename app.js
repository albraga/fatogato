let buscar = fetch('https://catfact.ninja/fact')

let lead = document.querySelector('.lead')

buscar.then(res => res.json()).then(json => lead.append(json.fact))
