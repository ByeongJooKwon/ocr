import { createMiddleware } from 'vue-router-middleware'

const FakeAuth = {
  isAuthenticated () {
    return true
  }
}

createMiddleware('/NotFound', (args, to, from, next) => {
  if (FakeAuth.isAuthenticated()) {
    console.log(args + ' : ' + to + ' : ' + from)
    next()
  } else {
    next(false)
  }
})
