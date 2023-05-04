'use client'

import { Button } from "flowbite-react"
import { AiOutlineClose } from 'react-icons/ai'

export default function DepartmentBtn(props: any) {

    return (
        <Button
            color="gray"
            pill={true}
            disabled
            className="cursor-pointer"
        >
            <div className="flex gap-4">
                {props.deptName}
                <div className="mt-1" onClick={() => console.log(5)}><AiOutlineClose /></div>
            </div>

        </Button>
    )
}