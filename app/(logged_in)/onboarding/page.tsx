import React from 'react'
import { getDatabase } from '@/lib/mongodb'

const page = async () => {
    const db = await getDatabase()
    return (
        <div>

        </div>
    )
}

export default page
