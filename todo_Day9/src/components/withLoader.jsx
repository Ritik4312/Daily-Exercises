function withLoader(WrappedComponent){
    return function EComponent(props){
        const isLoading = false;
        if(isLoading){
            return <h2>Loading.......</h2>
        }
        return <WrappedComponent{...props}/>
    
    }
}

export default withLoader;