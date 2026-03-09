import {useEffect, useState} from 'react';
import {Example} from "./Example";

function useBreakpoint() {
    const getBreakpoint = () => {
        const w = window.innerWidth;
        if (w >= 1200) return {name: 'xl', min: 1200, label: 'Extra Large'};
        if (w >= 992) return {name: 'lg', min: 992, label: 'Large'};
        if (w >= 768) return {name: 'md', min: 768, label: 'Medium'};
        if (w >= 576) return {name: 'sm', min: 576, label: 'Small'};
        return {name: 'xs', min: 0, label: 'Extra Small'};
    };

    const [bp, setBp] = useState(getBreakpoint);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const onResize = () => {
            setBp(getBreakpoint());
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return {...bp, width};
}

export default function BootstrapGrid() {
    const bp = useBreakpoint();

    return (
        <section id="bootstrap-grid" className="container mt-5">
            <div className={'tw:flex tw:justify-between tw:items-center tw:w-full'}><h2>Bootstrap Grid</h2>
                <div className={'tw:flex tw:gap-2 tw:mb-3'}>
                    <div className='tw:outlined-row tw:size-6'></div>
                    <span>= row</span>
                </div>
            </div>
            <p className={'text-muted'}>Each row can be split horizontally into <strong>12 equal parts</strong>.
                Each column takes up some number of these 12 parts.</p>
            <Example>
                <div className={'row tw:outlined-row'}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => <div
                        className={'col-1 tw:outlined-col tw:text-gray-700/80 text-center'} key={n}>col-1 <div
                        className={'tw:text-xs tw:text-gray-700/40'}>#{n}</div></div>)}
                </div>
            </Example>
            <h4>Sizing columns</h4>
            <Example caption={'Omit the column size to make all the columns equal size.'}>
                <div className={'row tw:outlined-row'}>
                    <div className={'col tw:text-red-700/80 tw:outlined-col'}>col</div>
                    <div className={'col tw:text-blue-700/80 tw:outlined-col'}>col</div>
                    <div className={'col tw:text-green-700/80 tw:outlined-col'}>col</div>
                </div>
            </Example>
            <Example caption={'...or, be explicit about it'}>
                <div className={'row tw:outlined-row'}>
                    <div className={'col-4 tw:text-red-700/80 tw:outlined-col'}>col-4</div>
                    <div className={'col-4 tw:text-blue-700/80 tw:outlined-col'}>col-4</div>
                    <div className={'col-4 tw:text-green-700/80 tw:outlined-col'}>col-4</div>
                </div>
            </Example>
            <Example caption={'Columns don\u2019t have to be equal. They just need to add up to 12 (or fewer).'}>
                <div className={'row tw:outlined-row'}>
                    <div className={'col-2 tw:text-red-700/80 tw:outlined-col'}>col-2</div>
                    <div className={'col-2 tw:text-blue-700/80 tw:outlined-col'}>col-2</div>
                    <div className={'col-2 tw:text-green-700/80 tw:outlined-col'}>col-2</div>
                    <div className={'col-6 tw:text-purple-700/80 tw:outlined-col'}>col-6</div>
                </div>
            </Example>
            <h4>Nesting</h4>
            <Example caption={'Nesting grids lets you line columns up anywhere in the row. But over-nested grids are difficult to read.'}>
                <div className={'row tw:outlined-row'}>
                    <div className={'col-8 tw:text-red-700/80 tw:outlined-col'}>
                        col-8
                        <div className={'row tw:outlined-row'}>
                            <div className={'col tw:text-blue-700/80 tw:outlined-col'}>col</div>
                            <div className={'col tw:text-green-700/80 tw:outlined-col'}>col</div>
                        </div>
                    </div>
                    <div className={'col-4 tw:text-purple-700/80 tw:outlined-col'}>col-4
                        <div className={'row tw:outlined-row'}>
                            <div className={'col-3 tw:text-red-700/80 tw:outlined-col'}>col-3</div>
                            <div className={'col-3 tw:text-blue-700/80 tw:outlined-col'}>col-3</div>
                            <div className={'col tw:text-green-700/80 tw:outlined-col'}>col</div>
                            <div className={'col-4 tw:text-yellow-700/80 tw:outlined-col'}>col-4</div>
                        </div>
                    </div>
                </div>
            </Example>
            <h4 className={'mt-4'}>Responsiveness</h4>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col text-muted'}>Sizes
                        (<code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>) attached to a column
                        indicate that the column will be the specified width on that screen size and wider.
                    </div>
                </div>
                <div className={'row mt-4'}>
                    <div className={'col'}>
                        <div className={'tw:rounded-lg tw:border tw:border-gray-300 tw:p-4 tw:bg-gray-50'}>
                            <div className={'tw:flex tw:items-center tw:justify-between tw:mb-3'}>
                                <span className={'tw:font-semibold tw:text-lg'}>Current breakpoint</span>
                                <span className={'tw:font-mono tw:text-sm tw:text-gray-500'}>{bp.width}px</span>
                            </div>
                            <div className={'tw:flex tw:flex-col tw:sm:flex-row tw:gap-2'}>
                                {[
                                    {name: 'xs', min: 0, max: 575, color: 'tw:bg-red-500'},
                                    {name: 'sm', min: 576, max: 767, color: 'tw:bg-orange-500'},
                                    {name: 'md', min: 768, max: 991, color: 'tw:bg-yellow-500'},
                                    {name: 'lg', min: 992, max: 1199, color: 'tw:bg-green-500'},
                                    {name: 'xl', min: 1200, max: Infinity, color: 'tw:bg-blue-500'},
                                ].map((b) => (
                                    <div
                                        key={b.name}
                                        className={`tw:flex-1 tw:text-center tw:py-2 tw:rounded tw:font-mono tw:text-sm tw:transition-all ${
                                            bp.name === b.name
                                                ? `${b.color} tw:text-white tw:font-bold tw:scale-105 tw:shadow-md`
                                                : 'tw:bg-gray-200 tw:text-gray-400'
                                        }`}
                                    >
                                        {b.name}
                                        <div className={'tw:text-xs tw:opacity-75'}>
                                            ≥{b.min}px
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className={'tw:pt-5 tw:mb-0 tw:text-center tw:text-gray-600'}>
                                Window is <strong>{bp.label} ({bp.name})</strong> — window
                                width: <code>{bp.width}px</code>
                            </p>
                            <p className={'tw:text-center tw:text-xs tw:text-gray-400 tw:mt-1 tw:mb-0'}>Try resizing
                                your browser!</p>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className={'my-4'}>Responsive columns in action</h5>
            <Example caption={"For narrower screens (in this case, xs) the column will automatically stack and become full-width."}>
                <div className={'row tw:outlined-row'}>
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className={'col-sm-6 col-md-4 col-lg-3 tw:outlined-col tw:text-blue-700/80'}>
                            col-sm-6 col-md-4 col-lg-3
                        </div>
                    ))}
                </div>
                <ul className={'text-muted tw:text-sm tw:list-disc ml-4 mt-3'}>
                    <li><code>xs</code> (&lt;576px): all columns stack full-width<br/></li>
                    <li><code>sm</code> (≥576px): 2 per row <br/></li>
                    <li><code>md</code> (≥768px): 3 per row <br/></li>
                    <li><code>lg</code> (≥992px): 4 per row</li>
                </ul>
            </Example>

        </section>
    );
}