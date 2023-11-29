import React from 'react'
import {notFound} from "next/navigation";

interface Props {
    params: { id: number }
}

const UserDetailPage = ({ params: { id } }: Props) => {
    if (id > 10 ) {
        console.log(id);
        notFound();
    }
    return (
        <div>UserDetailPage {id}</div>
    )
}

export default UserDetailPage