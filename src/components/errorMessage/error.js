import './error.css';

const ErrorMessage = () => {
    return(
        <img className='error' src={process.env.PUBLIC_URL + 'error/error.gif'} alt="error" />
    )
}

export default ErrorMessage;
