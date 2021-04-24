export default function ({ store, route, redirect }) {
    // If the user is not authenticated
    // console.log(route)
    if (!store.state.auth.isLoggedIn) {
        return redirect('/')
    }
  }