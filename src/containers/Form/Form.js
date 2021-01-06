import React , {useState} from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
// import { validate } from "../../util/validate";
import './Form.css';

const List = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setErrorState] = useState(false)

    const onChangeName = (e) => {
        const newVal = e.target.value
        setName(newVal)

    }

    const onChangePassword = (e) => {

        setPassword(e.target.value)

    }

    const onClick = () =>{ 

        if(name.length  || password.length ){
            
            setErrorState(true)
            
        }
        else {
            setErrorState(false)
        }
       
    }
    return(
        <div className="text-center form" >
            <h2>Login Form</h2>
            <form>
                <Input 
                    type="email" 
                    value={name} 
                    onChange={onChangeName} 
                    placeholder="Email or Phone"
                    />
                   
                <Input 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    placeholder="Your Password"
                    />
                <p className="text-danger m-0 p-0">{error ? 'The field name password is required': ' '}</p>   
                
                <Button onClick={onClick} />
            </form>
        </div>
    )
}
export default List;