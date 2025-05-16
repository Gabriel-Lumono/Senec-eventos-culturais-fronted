import React, {useState, type FormEvent} from 'react';
import styles from './RegisterPage.module.css';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

interface RegisterProps {
    onRegisterSucess?: () => void;
}

const RegisterPage: React.FC<RegisterProps> = ({ onRegisterSucess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    };

    function RegisterPage() {
        return (
            <div>

            </div>
        )
    }
    
    export default RegisterPage;
}






