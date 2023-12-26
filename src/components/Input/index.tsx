import { ComponentPropsWithoutRef, LegacyRef, ReactNode, forwardRef } from "react"

interface InputProps extends ComponentPropsWithoutRef<'input'> {
    error?: boolean
    errorMessage?: string
}

function Input({ ...props }: InputProps, ref: LegacyRef<HTMLInputElement> | undefined,) {
    return (
        <input ref={ref}
            {...props}
            className={`w-full p-3 bg-white text-black text-center text-2xl outline-none rounded-lg disabled:opacity-50`}
        />
    )
}


export default forwardRef(Input)