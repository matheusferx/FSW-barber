import { signIn } from "next-auth/react";
import { Button } from "./ui/button"
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import Image from "next/image";

const SignInDialog = () => {
    const handleLoginWithGoogleClick = () => signIn("google");

    return (
        <>
            <DialogHeader>
                <DialogTitle>Faaça o login na plataforma</DialogTitle>
                <DialogDescription>
                    Conecte-se usando sua conta Google.
                </DialogDescription>
            </DialogHeader>

            <Button variant="outline" className="gap-2 font-bold" onClick={handleLoginWithGoogleClick}>
                <Image src="/Google.png" alt="Fazer login com Google" width={18} height={18} />
                Google
            </Button>
        </>
    )
}

export default SignInDialog;