/**
 * 生成Cli显示文档
 *
 * @returns {*}
 */
function hereDoc () {
    var text = '';
    switch (arguments.length) {
        case 0:
            throw Error('需要至少提供一个参数。');
        case 1:
        default :
            var param = arguments[0];

            switch (typeof arguments[0]) {
                case 'function':
                    text = param.toString();
                    break;
                case 'string':
                    text = param;
                    break;
                default :
                    throw Error('传递参数类型仅允许function以及string。');
            }
            return text.replace(/^[^\{]*\{\s*\/\*!|\*\/([\S\s]*?).+\}$/g, '');
    }
}

module.exports = {
    hereDoc: hereDoc
};