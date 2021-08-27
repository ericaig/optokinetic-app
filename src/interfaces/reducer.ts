/**
 * This is a generic type for `action` param
 * when using a reducer. Eg:
 * 
 * @example
 * function reducer(state: any, action: ReducerAction){ ... }
 * 
 * const [] = useReducer(reducer, [])
 */
export interface ReducerAction<T = string, P = { [key: string]: any }> {
    type: T,
    payload: P
}