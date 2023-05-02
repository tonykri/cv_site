'use client';
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterFormWrapper from "./RegisterFormWrapper";

export default function LoginRegisterWrapper(props: any) {
    const [viewLoginPage, setViewLoginPage] = useState(true);

    return (
        <div className="w-screen lg:w-4/5 lg:h-screen items-center justify-center flex">
            {viewLoginPage === true ? <LoginForm viewLogin={setViewLoginPage} /> : <RegisterFormWrapper viewLogin={setViewLoginPage} />}
        </div>

    )
}