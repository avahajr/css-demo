
function ExampleWithHeader({children, header, problemStatement}: { children: React.ReactNode; header: string, problemStatement: string}) {
    return <>
        <h5 className={'mt-3'}>{header}</h5>
        <p>{problemStatement}</p>
        <div>{children}</div>
    </>
}
export function HorizontalExample1() {
    return <ExampleWithHeader header={'Horizontal Alignment #1'} problemStatement={'Move this flex item to right edge.'}>
        <div className={"d-flex tw:flex-c"}>
            <div className={"tw:flex-i"}>Flex item</div>
        </div>
    </ExampleWithHeader>;
}

export function HorizontalExample2() {
    return <ExampleWithHeader header={'Horizontal Alignment #2'} problemStatement={'Move only the second flex item to the right edge.'}>
        <div className={"d-flex tw:flex-c"}>
            <div className={"tw:flex-i"}>Flex item</div>
            <div className={"tw:flex-i"}>Flex item</div>
        </div>
    </ExampleWithHeader>;
}
export function VerticalExample1() {
    return <ExampleWithHeader header={'Vertical Alignment #1'} problemStatement={'Center the flex items vertically.'}>
        <div className={'d-flex tw:flex-c tw:min-h-32'}>
            <div className={'tw:flex-i tw:h-fit'}>Flex item</div>
            <div className={'tw:flex-i tw:h-fit'}>Flex item</div>
        </div>
    </ExampleWithHeader>
}

export function VerticalExample2() {
    return <ExampleWithHeader header={'Vertical Alignment #2'} problemStatement={'Put only the second flex item on the bottom edge of the container.'}>
        <div className={'d-flex tw:flex-c tw:min-h-32'}>
            <div className={'tw:flex-i tw:h-fit'}>Flex item</div>
            <div className={'tw:flex-i tw:h-fit'}>Flex item</div>
        </div>
    </ExampleWithHeader>
}