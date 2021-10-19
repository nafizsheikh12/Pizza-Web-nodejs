const home = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')
const guest = require('../app/http/middleware/guest');
const orderController = require('../app/http/controllers/customers/orderController')
const auth = require('../app/http/middleware/auth');
const AdminorderController = require('../app/http/controllers/admin/orderController')


const initRoutes = (app) => {
   
    app.get("/", home().index)
    
    app.get('/cart',cartController().index)
    
    app.get("/login",guest,authController().login);
    
    app.post('/logout',authController().logout)
    app.get("/register",guest,authController().register);
   

    app.post('/update-cart',cartController().update)
    app.post("/register",authController().postregister)
    app.post('/login',authController().postlogin)
    //customer routes

    app.get('/customer/orders',auth,orderController().index)
    app.post('/orders',auth, orderController().postorder)


    //Admin routed
    app.get('/admin/orders',AdminorderController().index)
   
}

module.exports = initRoutes;