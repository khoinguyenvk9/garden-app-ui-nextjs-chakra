const initialState: any = {
  loading: false,
}

export default function ProductReducer(state = initialState, action: any) {
  const { loading } = action
  switch (action.type) {
    case 'LOADING': {
      return {
        ...state,
        loading,
      }
    }
    default:
      return state
  }
}
