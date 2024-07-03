import { useAuthStore } from '../store';
import { Navigate } from 'react-router-dom';

const AuthProvider = ({ children }) => {
    const { isAuthenticated } = useAuthStore();

    return (isAuthenticated ? children : <Navigate to='/auth/signin' />)
}

export default AuthProvider;