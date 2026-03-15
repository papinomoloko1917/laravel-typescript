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
* @see \App\Http\Controllers\TestController::test
* @see app/Http/Controllers/TestController.php:10
* @route '/test'
*/
export const test = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: test.url(options),
    method: 'get',
})

test.definition = {
    methods: ["get","head"],
    url: '/test',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TestController::test
* @see app/Http/Controllers/TestController.php:10
* @route '/test'
*/
test.url = (options?: RouteQueryOptions) => {
    return test.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestController::test
* @see app/Http/Controllers/TestController.php:10
* @route '/test'
*/
test.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: test.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TestController::test
* @see app/Http/Controllers/TestController.php:10
* @route '/test'
*/
test.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: test.url(options),
    method: 'head',
})

