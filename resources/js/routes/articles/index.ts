import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:10
* @route '/articles'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:10
* @route '/articles'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:10
* @route '/articles'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:10
* @route '/articles'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const articles = {
    index: Object.assign(index, index),
}

export default articles