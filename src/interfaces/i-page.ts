import { FC, ReactElement } from 'react'

/**
* NextJs 13 Page Props
*/
export interface IPageProps {
  params: { [key: string]: string }
  searchParams?: Record<string, string>
}

/** 
* Async Function Component
*/
export interface AFC<P = {}> {
  (props: P, context?: any):
    | Promise<ReactElement<any, any>>
    | null
}

/** 
 * NextJs 13 SSR Page.
 * it can be a Function Component or Async Function Component
 */
export type SSRPage<TProps = {}> = FC<IPageProps & TProps> | AFC<IPageProps & TProps>

