
import { IUser,IUserRequest, IUserResponse } from "../../store/ducks/authentication/types";
import api from "../apiService"
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { Dispatch } from "redux";
import * as authActions from '../../store/ducks/authentication/actions'


export const getToken = ():string | null=>{
    return localStorage.getItem('token')
}
export const setUser = (data:IUser)=>{
    localStorage.setItem('user', JSON.stringify(data));
}
export const getUser = ()=>{
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user): null
}
export const setToken = (token:string)=>{
    localStorage.setItem('token', token);
}

export const generateToken = (user:IUser):string=>{
    if(process.env.REACT_APP_JWT_KEY==null)
        throw new Error('jwt key not found')
    const token = jwt.sign({user}, process.env.REACT_APP_JWT_KEY,{ expiresIn: '2h'});
    return token;
} 

export const validateToken = (token:string | null):boolean =>{
    try{

        if(process.env.REACT_APP_JWT_KEY==null)
        throw new Error('jwt key not found')
        
        if(token==null) return false
        
        const response = jwt.verify(token, process.env.REACT_APP_JWT_KEY);
        return response != null
    }catch(err){
        return false
    }
}





export const SetLogin = async (userData:IUserRequest):Promise<IUserResponse|null>   =>{
    try{
        const response = await api.get<IUserResponse[]>('usuarios')
        const allUser = response.data;
        const existsUser = allUser.find(u=>u.nome===userData.nome && u.senha===userData.senha);
        if(!existsUser){
            throw new Error('Usuário ou senha inválido!');
        }
        const token = generateToken(existsUser)
        setToken(token)
        setUser({id:existsUser.id,nome:existsUser.nome})
        return existsUser;
    }catch(err){
        console.error(err)
        return null;

    }
}

export const setLogout = ():void=>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
} 



export const CheckStoreAutentication = (dispatch:Dispatch)=>{
    const token = getToken()
    const validate = validateToken(token)
    if(validate){
        const user = getUser()
        dispatch(authActions.loginSuccess(validate,user,token))
    }else{
        dispatch(authActions.loginFailure())
        setLogout()
    }
  }