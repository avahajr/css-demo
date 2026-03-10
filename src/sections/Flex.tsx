import Example from './Example';
export default function Flex() {
    return (
        <section id="flex" className="container mt-5">
            <h2>Flexbox</h2>
            <p className="text-muted">Bootstrap versions 4.6 and newer are <strong>built on top of flexbox</strong>.</p>
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
            <p className={'text-muted'}>What this really means is that their <code>display</code> property is automatically set to either <code>block</code> or <code>inline</code>.</p>
            <p className={'text-muted'}>Note that <strong>inline elements can't contain block elements</strong>.</p>
            <div className={'container mb-4'}>
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
            </div>

            <h3>Flexbox</h3>
            <p className={'text-muted'}>In CSS, setting the  <code className={'tw:px-2'}> display</code> property to <code>flex</code> makes an HTML element a <strong>flex
                container</strong>. </p>
            <div className={'container mb-4'}>
            </div>
        </section>
    );
}