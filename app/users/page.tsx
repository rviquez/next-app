import React, {Suspense} from 'react'
import UserTable from "@/app/users/UserTable";
import Link from "next/link";

interface Props {
    searchParams: { sortOrder: string }
}
const UsersPage = async ({ searchParams: { sortOrder }}: Props) => {
    return (
        <>
            <h1>Users</h1>
            <Link href="/users/new" className="btn">NEW USER</Link>
            <Suspense fallback={<p>Loading...</p>}>
                <UserTable sortOrder={sortOrder}/>
            </Suspense>

        </>
    )
}

export default UsersPage