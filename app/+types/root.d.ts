// Type definitions for the root route
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { MetaFunction, LinksFunction, HeadersFunction } from 'react-router'

export namespace Route {
    export type MetaArgs = Parameters<MetaFunction>[0]
    export type HeadersArgs = Parameters<HeadersFunction>[0]
    export type LinksFunction = LinksFunction
    export interface ErrorBoundaryProps {
        error: unknown
    }
}
