import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ArticleController::show
* @see app/Http/Controllers/ArticleController.php:26
* @route '/articles'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleController::show
* @see app/Http/Controllers/ArticleController.php:26
* @route '/articles'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::show
* @see app/Http/Controllers/ArticleController.php:26
* @route '/articles'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::show
* @see app/Http/Controllers/ArticleController.php:26
* @route '/articles'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

const articles = {
    show: Object.assign(show, show),
}

export default articles