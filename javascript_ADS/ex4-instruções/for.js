// for(i = 0; i < x ; i++)
var produtos = [
    {id: 1, descrição: "celular", categoria: 'eletronicos'},
    {id: 2, descrição: "geladeira", categoria: 'eletrodomesticos'},
    {id: 3, descrição: "nootbook", categoria: 'eletronicos'},
    {id: 4, descrição: "sofa", categoria: 'domesticos'},
    {id: 5, descrição: "cadeira;", categoria: 'domesticos'},
    {id: 6, descrição: "cpu", categoria: 'eletronicos'},
    {id: 7, descrição: "ventilador", categoria: 'eletrodomesticos'},
    {id: 8, descrição: "mouse", categoria: 'eletronicos'},
    {id: 9, descrição: "microondas", categoria: 'eletrodomesticos'}
]
for (let caracteristicas in produtos){
    console.log(produtos[caracteristicas].categoria)
}

for (let caracteristicas of produtos){
    console.log(caracteristicas.descrição, caracteristicas.categoria)
}