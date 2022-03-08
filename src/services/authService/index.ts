
import { IUser,IUserRequest, IUserResponse } from "../../store/ducks/authentication/types";
import api from "../apiService"
import jwt from 'jsonwebtoken'
import 'dotenv/config'

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
    if(process.env.JWT_KEY==null)
        throw new Error('jwt key not found')
    const token = jwt.sign({user}, process.env.JWT_KEY,{ expiresIn: '2h'});
    return token;
} 

export const validateToken = (token:string):boolean =>{
    if(process.env.JWT_KEY==null)
        throw new Error('jwt key not found')

    const response = jwt.verify(token, process.env.JWT_KEY);
    return response!= null
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