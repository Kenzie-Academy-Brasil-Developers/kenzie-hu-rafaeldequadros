import { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext<IModalContext>({} as IModalContext);

interface IModalContext {
    openModal: boolean;
    handleModal: () => void;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModalProvider {
    children: ReactNode;
}
export const ModalProvider = ({ children }: IModalProvider) => {
    const [openModal, setOpenModal] = useState(false);

    const handleModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <ModalContext.Provider value={{ openModal, handleModal, setOpenModal }}>
            {children}
        </ModalContext.Provider>
    );
};
