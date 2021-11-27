// https://stackoverflow.com/a/40076355/3410660
export type DeepPartial<T> = {
    // [P in keyof T]?: T[P];
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
}