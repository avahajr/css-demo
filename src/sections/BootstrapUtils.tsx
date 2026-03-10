import Example from "../components/Example.tsx";

export default function BootstrapUtils() {
    return (<section id="bootstrap-utils" className="container mt-5">
            <h2>Bootstrap Utilities</h2>
            <p><a href={"https://getbootstrap.com/docs/4.6/utilities/borders/"} target={'_blank'} rel={'noreferrer'}>Bootstrap's
                documentation</a> describes a bunch of useful CSS classes (called <strong>utility classes</strong>) that
                supersede ordinary Bootstrap styles.</p>
        <p>We already use many of these (<code>px-2</code>, <code>my-auto</code>, etc), but there are MANY MORE.</p>
            <p>Bootstrap 4.6+ is been <strong>implemented using flexbox</strong>, meaning <strong>rows are flex containers</strong>,
                and <strong>columns
                    are flex items</strong>.</p>
        <Example caption={<>a row with <code>justify-content-between</code> applied.</>}>
            <div className={'row tw:outlined-row justify-content-between'}>
                <div className={'col-5 tw:text-blue-700/80 tw:outlined-col'}>col-5</div>
                <div className={'col-5 tw:text-green-700/80 tw:outlined-col'}>col-5</div>
            </div>
        </Example>
        <Example caption={<>a row with <code>justify-content-end</code> applied.</>}>
            <div className={'row tw:outlined-row justify-content-end'}>
                <div className={'col-5 tw:text-blue-700/80 tw:outlined-col'}>col-5</div>
                <div className={'col-5 tw:text-green-700/80 tw:outlined-col'}>col-5</div>
            </div>
        </Example>
        <Example caption={<>a row with <code>flex-row-reverse</code> applied.</>}>
            <div className={'row tw:outlined-row flex-row-reverse'}>
                <div className={'col-5 tw:text-blue-700/80 tw:outlined-col'}>col-5</div>
                <div className={'col-5 tw:text-green-700/80 tw:outlined-col'}>col-5</div>
            </div>
        </Example>
        </section>);
}

