import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  type ModalProps = {
    children: React.ReactNode;
   
  };

  type ModalComposition = React.FC<ModalProps> & {
    Trigger: React.FC<{ children: React.ReactNode }>;
    Content: React.FC<{ children: React.ReactNode }>;
    Header: React.FC<{ children: React.ReactNode }>;
    Title: React.FC<{ children: React.ReactNode }>;
    Description: React.FC<{ children: React.ReactNode }>;
  }
const Modal:ModalComposition = ({ children }) => {
  return (
    <Dialog>
    {children}
  </Dialog>
  )
}

Modal.Trigger = ({children})=>{
    return <DialogTrigger >{children}</DialogTrigger>
}
Modal.Content = ({ children }) => {
    return <DialogContent className="sm:max-w-[425px] ">{children}</DialogContent>
  }
Modal.Header = ({ children }) => {
    return <DialogHeader>{children}</DialogHeader>;
  };
  
Modal.Title = ({ children }) => {
    return <DialogTitle>{children}</DialogTitle>;
  };
  
Modal.Description = ({ children }) => {
    return <DialogDescription>{children}</DialogDescription>;
  };

export default Modal
