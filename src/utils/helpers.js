
const helper = {}

helper.getItem = (key) => {
    if (localStorage.getItem(key)) {
        return localStorage.getItem(key)
    } else {
        return {}
    }
}

helper.checkItem = (key) => {
    if (localStorage.getItem(key)) {
        return true
    } else {
        return false
    }
}

helper.setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    return value
}

helper.removeItem = (key) => {
    localStorage.removeItem(key)
    return true
}

helper.isLogin = () => {
    return localStorage.getItem('auth') ? true : false
}

helper.isAuthrized = (route, switchMethod) => {
    if (route) {
        return !localStorage.getItem('auth') && switchMethod.replace('login')
    } else {
        return !localStorage.getItem('auth') && switchMethod.replace('login')
    }
}

export default helper