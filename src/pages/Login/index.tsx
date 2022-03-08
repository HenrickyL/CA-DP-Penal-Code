import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { StyLogin,StyForm } from "./style"
export const LoginPage = ()=>{
    const [show, setShow] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const  {register, handleSubmit} = useForm()
    const formRef =useRef(document.createElement('form'))

    const setSubmit = (data:Object)=>{
        
    }

    const handleClick = () => setShow(!show)
    return(
        <StyLogin>
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