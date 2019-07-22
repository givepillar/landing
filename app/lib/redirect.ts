import Router from 'next/router'

const redirect = (context, target) => {
  if (context.res) {
    // server
    // 303: "See other"
    // console.log('====================================')
    // console.log(target)
    // console.log('====================================')
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target)
  }
}

export default redirect
