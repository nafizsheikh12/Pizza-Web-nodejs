const Menu = require('../../models/menu');

const homeController = () => {
    return {
        async index(req,res) {
             const pizzas = await Menu.find()
             return res.render('home',{pizzas:pizzas})

             //Menu.find().then((pizzas)=> {
             //   console.log(pizzas)
             //   return res.render('home',{pizzas:pizzas})
             //})
             
        }
    }
}

module.exports = homeController;