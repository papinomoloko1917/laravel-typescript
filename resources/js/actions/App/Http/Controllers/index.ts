import MainController from './MainController'
import ArticleController from './ArticleController'

const Controllers = {
    MainController: Object.assign(MainController, MainController),
    ArticleController: Object.assign(ArticleController, ArticleController),
}

export default Controllers