import React,{Component} from 'react'
type Props = {
    children:React.ReactNode
}
type State={
hasError:boolean
}
class ErrorBoundary extends Component<Props,State>{
 state={
    hasError:false
 }
 static getDerivedStateFromError(){
    return {
        hasError:true
    }
 }
 componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
     console.log("Error",error);     
 }
 render(){
    if( this.state.hasError){
        return (<h2>
            Some Error
        </h2>)
    }
    return this.props.children
 }
}
export default ErrorBoundary;
