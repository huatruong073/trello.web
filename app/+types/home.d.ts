// Type definitions for the home route
import type { MetaFunction, LoaderFunction, ActionFunction } from 'react-router'

export namespace Route {
    export type MetaArgs = Parameters<MetaFunction>[0]
    export type LoaderArgs = Parameters<LoaderFunction>[0]
    export type ActionArgs = Parameters<ActionFunction>[0]
}
