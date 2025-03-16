import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
    {children}
  </Dialog>
  )
}

Modal.Trigger = ({ children }: { children: React.ReactNode })=>{
    return <DialogTrigger >{children}</DialogTrigger>
}
Modal.Content = ({ children }: { children: React.ReactNode }) => {
    return <DialogContent className="sm:max-w-[425px] ">{children}</DialogContent>
  }
Modal.Header = ({ children }: { children: React.ReactNode }) => {
    return <DialogHeader>{children}</DialogHeader>;
  };
  
Modal.Title = ({ children }: { children: React.ReactNode }) => {
    return <DialogTitle>{children}</DialogTitle>;
  };
  
Modal.Description = ({ children }: { children: React.ReactNode }) => {
    return <DialogDescription>{children}</DialogDescription>;
  };

export default Modal
