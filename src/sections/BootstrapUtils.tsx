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
        <h4>Colors</h4>
        <Example caption={"In Uportal, Central Camp has defined a custom boostrap theme that remaps these colors according to the M&T brand."}>
            <div className={'d-flex tw:justify-around'}>
                <div className="text-primary">primary</div>
                <div className="text-secondary">secondary</div>
                <div className="text-success">success</div>
                <div className="text-danger">danger</div>
                <div className="text-warning">warning</div>
                <div className="text-info">info</div>
                <div className="text-light bg-dark">light</div>
                <div className="text-dark">dark</div>
            </div>
        </Example>
        <p>You can apply these colors using the utility classes (either <code>text-{"<color>"}</code> or <code>bg-{"<color>"}</code>).</p>

        <h5>Using themed color variables directly</h5>
        <p>If you need to set the color of something <i>other</i> than text or background (i.e., border color), use the color variables.</p>
        <div className={'container'}>
            <img alt='bootstrap colors in css' src={'./colors.png'}/>
        </div>
    </section>);
}

