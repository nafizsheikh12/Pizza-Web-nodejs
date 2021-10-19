const Order = require('../../../models/order')

const orderController = () => {
    return {
        postorder(req,res){
          const {number,address} = req.body;
          if(!number || !address){
              req.flash('error', 'All fields are required');
              return res.redirect('/cart')
          }

          const order = new Order ({
            customerId: req.user._id,
            items: req.session.cart.items,
            phone: number,
            address: address
          })

          order.save().then(result => {
            req.flash('success','Order placed successful')
            delete req.session.cart
            return res.redirect('/customer/orders')
          }).catch(err => {
              req.flash('error',"somethine went wrong")
              return res.redirect('/cart')
          })
        },

       async index(req,res) {
            const orders =  await Order.find({customerId: req.user._id});

            res.render('customers/order',{orders: orders})
        }
    }
}

module.exports= orderController;