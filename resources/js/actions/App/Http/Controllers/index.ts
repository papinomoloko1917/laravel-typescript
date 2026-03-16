import MainController from './MainController'
import ProductController from './ProductController'

const Controllers = {
    MainController: Object.assign(MainController, MainController),
    ProductController: Object.assign(ProductController, ProductController),
}

export default Controllers