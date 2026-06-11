import ReactDOM from 'react-dom'
type Props = {
    message:string
}
function Modal({message}:Props){
    return ReactDOM.createPortal(
        <div style = {{
            position:"fixed",
            top:"50%",
            left:"50%",
            padding:"20px",
            background:"white",
            border:"1px solid black"
        }} >
            <h2>{message}</h2>
            <button>Close</button>
        </div>,
        document.getElementById("portal-root")!
    )

}
export default Modal;