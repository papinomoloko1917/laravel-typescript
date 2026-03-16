import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\MainController::__invoke
* @see app/Http/Controllers/MainController.php:13
* @route '/'
*/
export const main = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: main.url(options),
    method: 'get',
})

main.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MainController::__invoke
* @see app/Http/Controllers/MainController.php:13
* @route '/'
*/
main.url = (options?: RouteQueryOptions) => {
    return main.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MainController::__invoke
* @see app/Http/Controllers/MainController.php:13
* @route '/'
*/
main.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: main.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MainController::__invoke
* @see app/Http/Controllers/MainController.php:13
* @route '/'
*/
main.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: main.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProductController::products
* @see app/Http/Controllers/ProductController.php:11
* @route '/products'
*/
export const products = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: products.url(options),
    method: 'get',
})

products.definition = {
    methods: ["get","head"],
    url: '/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::products
* @see app/Http/Controllers/ProductController.php:11
* @route '/products'
*/
products.url = (options?: RouteQueryOptions) => {
    return products.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::products
* @see app/Http/Controllers/ProductController.php:11
* @route '/products'
*/
products.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: products.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::products
* @see app/Http/Controllers/ProductController.php:11
* @route '/products'
*/
products.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: products.url(options),
    method: 'head',
})

