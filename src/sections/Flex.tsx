import Example from './Example';
export default function Flex() {
    return (
        <section id="flex" className="container mt-5">
            <h2>Flexbox</h2>
            <p>Bootstrap versions 4.6 and newer are <strong>built on top of flexbox</strong>.</p>
            <h3>Block vs. Inline</h3>
            <Example caption={'HTML elements are either block  (they stack in vertical "blocks").'}>
                <div className={'tw:outlined-col tw:text-red-700/80 pl-4'}>{"<div>"}</div>
                <div className={'tw:outlined-col tw:text-yellow-700/80 pl-4'}>{"<div>"}</div>
                <div className={'tw:outlined-col tw:text-blue-700/80 pl-4'}>{"<div>"}</div>
                <div className={'tw:outlined-col tw:text-purple-700/80 pl-4'}>{"<div>"}</div>
            </Example>
            <Example caption={'...or inline.'}>
                <span className={'tw:outlined-col tw:text-red-700/80 px-3'}>{"<span>"}</span>
                <span className={'tw:outlined-col tw:text-yellow-700/80 px-3'}>{"<span>"}</span>
                <span className={'tw:outlined-col tw:text-blue-700/80 px-3'}>{"<span>"}</span>
                <span className={'tw:outlined-col tw:text-purple-700/80 px-3'}>{"<span>"}</span>
            </Example>
            <p >What this really means is that their <code>display</code> property is automatically set to either <code>block</code> or <code>inline</code>.</p>
            <p >Note that <strong>inline elements can't contain block elements</strong>.</p>
            <div className={'container mb-4'}>
                <details>
                    <summary className={'tw:cursor-pointer tw:mb-2 text-muted'}>Common block &amp; inline elements</summary>
                    <table className={'table table-bordered table-sm'}>
                        <thead className={'thead-light'}>
                            <tr>
                                <th>Block-Level Elements</th>
                                <th>Inline Elements</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><code>&lt;div&gt;</code> — generic container</td><td><code>&lt;span&gt;</code> — generic inline container</td></tr>
                            <tr><td><code>&lt;p&gt;</code> — paragraph</td><td><code>&lt;a&gt;</code> — anchor / link</td></tr>
                            <tr><td><code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> — headings</td><td><code>&lt;strong&gt;</code> — bold emphasis</td></tr>
                            <tr><td><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code> — lists</td><td><code>&lt;em&gt;</code> — italic emphasis</td></tr>
                            <tr><td><code>&lt;table&gt;</code> — table</td><td><code>&lt;img&gt;</code> — image</td></tr>
                            <tr><td><code>&lt;form&gt;</code> — form</td><td><code>&lt;input&gt;</code> — form input</td></tr>
                            <tr><td><code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;section&gt;</code></td><td><code>&lt;button&gt;</code> — button</td></tr>
                            <tr><td><code>&lt;blockquote&gt;</code> — block quote</td><td><code>&lt;code&gt;</code> — inline code</td></tr>
                            <tr><td><code>&lt;pre&gt;</code> — preformatted text</td><td><code>&lt;label&gt;</code> — form label</td></tr>
                        </tbody>
                    </table>
                </details>
            </div>

            <div className={'d-flex justify-content-between'}>
                <h3>Flexbox</h3>
                <div className={'tw:flex tw:gap-2 tw:mb-3'}>
                    <div className='tw:flex-c tw:size-6'></div>
                    <span>= flex container</span>
                </div>
            </div>
            <p>In CSS, setting the  <code> display</code> property to <code>flex</code> makes an HTML element a <strong>flex
                container</strong>. That element's children become <strong>flex items</strong>.</p>
            <div className={'d-flex tw:flex-c'}><div className={'tw:flex-i'}>Flex item</div></div>
            <h4 className={'mt-4'}>Main and Cross Axes</h4>
            <p>... There's a lot to cover here. Other people have done it better. See <a href={'https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/'}>this tutorial</a>.</p>
        </section>
    );
}