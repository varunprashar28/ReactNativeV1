export interface ReduxAction {
  type: string
  params?: any
  onSuccess: (arg: any) => {}
  onError: (arg: any) => {}
}
