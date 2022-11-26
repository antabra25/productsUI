

interface ModalProps {
    show: boolean
    content: JSX.Element
    closeWindow: () => void
}

const Modal = ({show, content, closeWindow}: ModalProps) => {

    return (
        <>
            {show &&
                <div className="modal-container">
                    <div className="modal">
                        <div className="modal-top">
                            <button
                                onClick={closeWindow}
                                className="close-btn">X
                            </button>
                        </div>
                        {content}
                    </div>
                </div>
            }
        </>)

}
export default Modal;

