/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { StyLogin,StyForm } from "./style"
import { useDispatch, useSelector} from 'react-redux'
import { ApplicationState } from "../../store"
import * as uiActions from '../../store/ducks/ui/actions'
import * as authActions from '../../store/ducks/authentication/actions'
import { getToken, SetLogin } from "../../services/authService"
import { Navigate } from 'react-router-dom'



const LoginPage = ()=>{
    const [show, setShow] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [redirect, setRedirect] = useState<boolean>(false)

    const  {register, handleSubmit} = useForm()
    const formRef =useRef(document.createElement('form'))

    const dispatch = useDispatch()
    const uiState = useSelector((state:ApplicationState) => state.ui);
    const authState = useSelector((state:ApplicationState) => state.auth);


    useEffect(()=>{
        dispatch(uiActions.clean)
    },[])

    useEffect(()=>{
        setLoading(uiState.loading)
        setError(uiState.error)
        setRedirect(authState.authenticated)
    },[authState, uiState])


    const setSubmit = (data:any)=>{
        dispatch(uiActions.clean())
        dispatch(uiActions.setLoading(true))

        SetLogin(data)
            .then(res=>{
                if(!res){
                    dispatch(uiActions.setError(true))
                }else{
                    const token = getToken()
                    dispatch(authActions.loginSuccess(true,res,token))
                }
            })
            .catch(err=>{
                console.error(err)
                dispatch(uiActions.setError(true))
            })
            .finally(()=>{
                dispatch(uiActions.setLoading(false))
            })


    }

    const handleClick = () => setShow(!show)
    return(
        
        <StyLogin>
            {redirect && <Navigate to={'/'}/>}
            <StyForm action="" ref={formRef} onSubmit={handleSubmit(setSubmit)}>
                <h1>Login</h1>
                <div>
                    <Input 
                        placeholder='Usuário' 
                        isDisabled={loading}
                        isInvalid={error}
                        errorBorderColor='red.300'
                        {...register('nome')} 
                        />
                    <InputGroup size='md'>
                        <Input
                            isInvalid={error}
                            isDisabled={loading}
                            errorBorderColor='red.300'
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Senha'
                            {...register('senha')} 
                            
                            />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </div>
                <Button 
                    isLoading={loading}
                    loadingText='Submentendo'
                    type='submit'
                    className='button'
                    onClick={() => {
                        return formRef.current.reportValidity()
                    }}
                    colorScheme={!loading ?'blue':'teal' }>Logar</Button>
            
            </StyForm>
        </StyLogin>
    )
}


export default LoginPage