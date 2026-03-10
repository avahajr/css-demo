export default function Example({children, caption}: { children: React.ReactNode; caption?: React.ReactNode }) {
    return (
        <>
            <div className={`container mt-1 ${caption ? 'mb-1' : 'mb-4'}`}>
                {children}
            </div>
            {caption && <p className={'mt-2 mb-4'}>{caption}</p>}</>
    );
}