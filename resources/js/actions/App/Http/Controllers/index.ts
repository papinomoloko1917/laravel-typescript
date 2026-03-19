import MainController from './MainController'
import ProductController from './ProductController'
import CartController from './CartController'

const Controllers = {
    MainController: Object.assign(MainController, MainController),
    ProductController: Object.assign(ProductController, ProductController),
    CartController: Object.assign(CartController, CartController),
}

export default Controllers