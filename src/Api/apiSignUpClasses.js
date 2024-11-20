import http from './httpServices'

const urlSignUp = "https://fakeapi.platzi.com"
// const endUrl = `${urlSignUp}/en/rest/auth-jwt/`


const apiSignUpClasses = () => {
    const response = http.get(`${urlSignUp}/en/rest/auth-jwt/`)
    return response.data;
}

export default apiSignUpClasses;