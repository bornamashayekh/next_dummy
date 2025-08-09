'use client'
export default function Error({ error }) {
    return <main className='error'>
        <h1>an error occurred</h1>
        {/* <p>{error}</p> */}
        <p>an error occurred in sharing meal , try again later</p>
    </main>
}