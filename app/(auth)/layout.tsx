export default function({children}: {children: React.ReactNode}) {
    return(
        <>
        <div className="p-4 border-b">this is top page for signin folder</div>
        {children}
        </>
    )
}