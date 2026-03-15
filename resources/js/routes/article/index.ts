import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:12
* @route '/article'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/article',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:12
* @route '/article'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:12
* @route '/article'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:12
* @route '/article'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleController::store
* @see app/Http/Controllers/ArticleController.php:17
* @route '/article'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/article',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ArticleController::store
* @see app/Http/Controllers/ArticleController.php:17
* @route '/article'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::store
* @see app/Http/Controllers/ArticleController.php:17
* @route '/article'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleController::destroy
* @see app/Http/Controllers/ArticleController.php:41
* @route '/articles/{article}'
*/
export const destroy = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/articles/{article}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ArticleController::destroy
* @see app/Http/Controllers/ArticleController.php:41
* @route '/articles/{article}'
*/
destroy.url = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return destroy.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::destroy
* @see app/Http/Controllers/ArticleController.php:41
* @route '/articles/{article}'
*/
destroy.delete = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ArticleController::update
* @see app/Http/Controllers/ArticleController.php:33
* @route '/article/{article}'
*/
export const update = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/article/{article}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ArticleController::update
* @see app/Http/Controllers/ArticleController.php:33
* @route '/article/{article}'
*/
update.url = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return update.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::update
* @see app/Http/Controllers/ArticleController.php:33
* @route '/article/{article}'
*/
update.put = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

const article = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
    update: Object.assign(update, update),
}

export default article