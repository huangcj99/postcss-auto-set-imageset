var postcss = require('postcss');

const createImagetSetRule = (bgImgURL) => {
    let regExp = /@2x/ig;
    let imageSetRule = null;
    // matching @2x and replace it to @3x
    let img3xURL = bgImgURL.replace(regExp, '@3x');

    imageSetRule = postcss.decl({
        prop: 'background-image',
        value: `image-set(${bgImgURL} 2x, ${img3xURL} 3x)`
    });

    return imageSetRule;
};

let plugin = postcss.plugin('postcss-auto-set-imageset', function () {
    return function (cssAst) {
        cssAst.walkComments(function (comment) {
            if (comment.text === '3x') {
                let baseBgImg = comment.prev(); // comment which is 3x
                let bgImgURL = baseBgImg.value;
                let imageSetRule = null; // imageset rule

                if (baseBgImg.prop === 'background-image') {
                    imageSetRule = createImagetSetRule(bgImgURL);
                    // replace
                    comment.replaceWith(imageSetRule);
                }
            }
        });
    };
});

module.exports = plugin;


