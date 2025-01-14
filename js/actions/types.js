
export type Action =
  { type: 'PUSH_NEW_ROUTE', route: string }
    | { type: 'POP_ROUTE' }
    | { type: 'POP_TO_ROUTE', route: string }
    | { type: 'REPLACE_ROUTE', route: string }
    | { type: 'REPLACE_OR_PUSH_ROUTE', route: string }
    | { type: 'OPEN_DRAWER'}
    | { type: 'CLOSE_DRAWER'}
    | { type: 'SET_USER', name: string}
    | { type: 'SET_LIST', list: string}
    | { type: 'PRINT_ZONE' }
    | { type: 'PRINT_CLASSIFIEDS'}
    | { type: 'PRINT_TYPE'}
    | { type: 'PRINT_ESTABLISHMENT'}
    | { type: 'PK_ZONE'}
    | { type: 'PK_CLASSIFIED'}
    | { type: 'SEARCH_NAME'}
    | { type: 'PRINT_ESTABLISHMENT_TYPE'}
    | { type: 'PRINT_VIDEO'}
    | { type: 'RESET_STATE'}
    | { type: 'PRINT_CLASSIFIEDS_CATEGORY'}



export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;
