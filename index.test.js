var postcss = require('postcss');

var plugin = require('./');

function run(input, output) {
    return postcss([ plugin() ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('test-plugin', () => {
    return run(
        /* eslint max-len: ["error", { "ignoreStrings": true }] */
        'div { background-image: url("./imgs/photo@2x.png"); /* 3x */ }',
        /* eslint max-len: ["error", { "ignoreStrings": true }] */
        'div { background-image: url("./imgs/photo@2x.png"); background-image: image-set(url("./imgs/photo@2x.png") 2x, url("./imgs/photo@3x.png") 3x); }'
    );
});

