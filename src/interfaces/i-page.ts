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
 * NextJs 13 Page Component.
 * it can be a Function Component or Async Function Component
 */
export type IPage<TProps = {}> = FC<IPageProps & TProps> | AFC<IPageProps & TProps>

