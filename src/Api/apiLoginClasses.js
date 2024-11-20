import http from '../Api/httpServices'

const urlLogin = "https://fakeapi.platzi.com"

export const apiLoginClasses = async(input) => {
    try{
       const response = await http.Post(`${urlLogin}/en/rest/auth-jwt/`,input)
        return response.data; 
    }
    catch(error){
        console.error('Error during login:', error)
        throw error;
    }
}
