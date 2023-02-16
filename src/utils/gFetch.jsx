let productos = [
    {id: 1, name: 'Brown Jacket', stock:'12', price:'$200', img: 'https://media.gq.com/photos/616f1e50af7badb1a03350cd/master/w_2000,h_1333,c_limit/Landing-Leathers-A-2-bomber-jacket.jpg' },
    {id: 2, name: 'Brown Jacket', stock:'30', price:'$140', img: 'https://i.ebayimg.com/images/g/ZUUAAOSwC3FjRRcT/s-l1600.jpg' },
    {id: 3, name: 'Black Jacket', stock:'23', price:'169', img: 'https://i.ebayimg.com/images/g/vSoAAOSw5JdfmmYj/s-l1600.jpg' },
    {id: 4, name: 'Black Pants', stock:'20', price:'$69', img: 'https://n.nordstrommedia.com/id/sr3/cea59391-4670-41e4-9f96-583266948809.jpeg?h=365&w=240&dpr=2' },
    {id: 5, name: 'Black Pants', stock:'34', price:'$99', img: 'https://vader-prod.s3.amazonaws.com/1647234870-screen-shot-2022-03-14-at-12-14-14-am-1647234862.png' },
    {id: 6, name: 'Jogger Pants', stock:'99', price:'$39', img: 'https://static.nike.com/a/images/t_default/9e958bf4-9685-4844-8c93-449c7363f495/yoga-dri-fit-mens-fleece-pants-ZX61zH.png' },
]


export const gFetch = (id) => new Promise( (res, rej)=>{

    let condition = true
    if (condition) {
        setTimeout(()=>{
            res(id ? productos.find(prod => id === prod.id)  : productos)    
        }, 2000)
    } else {
        rej('Todo mal ')
        
    }
})
