function CHANGE_PAGE_MESSAGES_ACTION(state : any, action : any) { return { ...state, app: { ...state.app, page: state.messages.connections.length || state.messages.messages.length || state.messages.new.length ? 'messages' : state.app.permissions.swipe ? 'swipe' : 'profile', permissions: { ...state.app.permissions, message: state.messages.connections.length || state.messages.messages.length || state.messages.new.length ? true : false } } }}

export default CHANGE_PAGE_MESSAGES_ACTION
