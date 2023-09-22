import { Component } from "react";
import ErrorMessage from "../errorMessage/error";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        // якщо помилка відображаємо картинку з помилкою
        if (this.state.error) {
            return <ErrorMessage/>
        }
        // якщо не має помлки відображаем вложений компонент, який обертає ErrorBoundary
        return this.props.children;
    }
}

export default ErrorBoundary;
