
function ExampleWithHeader({children, header, problemStatement}: { children: React.ReactNode; header: string, problemStatement: string}) {
    return <>
        <h5 className={'mt-3'}>{header}</h5>
        <p>{problemStatement}</p>
        <div>{children}</div>
    </>
}
export function HorizontalExample1() {
    return <ExampleWithHeader header={'Horizontal Alignment'} problemStatement={'Move this flex item to right edge.'}>
        <div className={"d-flex tw:flex-c"}>
            <div className={"tw:flex-i"}>Flex item</div>
        </div>
    </ExampleWithHeader>;
}

export function HorizontalExample2() {
    return <ExampleWithHeader header={'Horizontal Alignment'} problemStatement={'Move only the second flexbox to the right edge.'}>
        <div className={"d-flex tw:flex-c"}>
            <div className={"tw:flex-i"}>Flex item</div>
            <div className={"tw:flex-i"}>Flex item</div>
        </div>
    </ExampleWithHeader>;
}
export function FlexExample2() {
    return <></>
}