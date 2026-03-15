import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TestController::index
* @see app/Http/Controllers/TestController.php:10
* @route '/test'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/test',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TestController::index
* @see app/Http/Controllers/TestController.php:10
* @route '/test'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestController::index
* @see app/Http/Controllers/TestController.php:10
* @route '/test'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TestController::index
* @see app/Http/Controllers/TestController.php:10
* @route '/test'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const TestController = { index }

export default TestController