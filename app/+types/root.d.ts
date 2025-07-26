// Type definitions for the root route
import type { MetaFunction, LinksFunction, HeadersFunction } from 'react-router'

export namespace Route {
    export type MetaArgs = Parameters<MetaFunction>[0]
    export type HeadersArgs = Parameters<HeadersFunction>[0]
    export type LinksFunction = LinksFunction
    export interface ErrorBoundaryProps {
        error: unknown
    }
}
