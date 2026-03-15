import MainController from './MainController'
import ArticleController from './ArticleController'
import TestController from './TestController'

const Controllers = {
    MainController: Object.assign(MainController, MainController),
    ArticleController: Object.assign(ArticleController, ArticleController),
    TestController: Object.assign(TestController, TestController),
}

export default Controllers