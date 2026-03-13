import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MainController::__invoke
* @see app/Http/Controllers/MainController.php:13
* @route '/'
*/
const MainController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MainController.url(options),
    method: 'get',
})

MainController.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MainController::__invoke
* @see app/Http/Controllers/MainController.php:13
* @route '/'
*/
MainController.url = (options?: RouteQueryOptions) => {
    return MainController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MainController::__invoke
* @see app/Http/Controllers/MainController.php:13
* @route '/'
*/
MainController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MainController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MainController::__invoke
* @see app/Http/Controllers/MainController.php:13
* @route '/'
*/
MainController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: MainController.url(options),
    method: 'head',
})

export default MainController