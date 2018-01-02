module.exports = {
  'extends': 'stylelint-config-standard',
  'plugins': ['stylelint-order'],
  'rules': {
    // 常用样式
    'max-empty-lines': 2,
    'max-nesting-depth': 3,
    'no-invalid-double-slash-comments': true, // 不支持双斜线注释"//"
    'unit-no-unknown': [true, {
      // 忽略image-set的1x, 2x
      ignoreUnits: ['x'],
    }],
    // 注释相关
    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
    }],
    // 颜色相关
    'color-hex-case': 'lower',
    'color-hex-length': 'short', // 关闭：强制十六进制颜色值的简写形式
    // 函数相关
    'function-url-quotes': 'always', // 要求url使用引号
    'function-blacklist': ['expression'],
    'function-name-case': [ 'lower', {
      ignoreFunctions: ['/^DXImageTransform.Microsoft.*$/', 'Alpha'],
    }],
    // 字符串相关
    'string-quotes': 'double', // fixable: 字符串使用双引号
    // 值相关
    'value-keyword-case': 'lower', // 值的关键词小写
    'number-max-precision': 2, // 限制小数位数2位
    'number-leading-zero': 'never', // 省略小于1的小数前导0
    // property
    'property-no-vendor-prefix': true, // 禁止属性使用浏览器引擎前缀
    // 声明
    'declaration-block-semicolon-newline-after': 'always-multi-line', // 多行的时候要求声明块中的分号有另起一行
    'declaration-block-semicolon-space-after': 'always-single-line', // 声明块中单行的时候要求分号后面有空格
    'declaration-block-semicolon-space-before': 'never', // 声明块中分号前不能存在空格
    'declaration-block-trailing-semicolon': 'always', // 声明块中最后一位必须有拖尾分号
    // 媒体相关
    'media-feature-name-no-vendor-prefix': true, // 禁止给media添加浏览器引擎前缀
    // at-rule相关
    'at-rule-no-vendor-prefix': true, // 禁止给@添加浏览器引擎前缀
    'at-rule-no-unknown': [true, {
      // precss自带方法
      ignoreAtRules: ['define-extend', 'extend', 'define-mixin', 'each', 'mixin'],
    }],
    // 选择器相关
    'selector-max-id': 2, // 最多连续使用两个id作为选择器 #a #b {}
    // 在声明块中属性的顺序
    'order/properties-order': [
      [
        /* Positioning */
        {properties: ['position', 'z-index', 'top', 'right', 'bottom', 'left']},

        /* Display */
        {properties: ['display', 'float', 'clear', 'visibility', 'overflow', 'overflow-x', 'overflow-y', 'clip', 'zoom', 'flex-direction', 'flex-order', 'flex-pack', 'flex-align']},

        /* Box Model */
        {properties: ['box-sizing', 'width', 'height', 'max-width', 'max-height', 'min-width', 'min-height', 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left']},

        {properties: ['border', 'border-width', 'border-style', 'border-color', 'border-top', 'border-top-width', 'border-top-style', 'border-top-color', 'border-right', 'border-right-width', 'border-right-style', 'border-right-color', 'border-bottom', 'border-bottom-width', 'border-bottom-style', 'border-bottom-color', 'border-left', 'border-left-width', 'border-left-style', 'border-left-color', 'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius', 'border-image', 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset', 'border-image-repeat', 'outline', 'outline-width', 'outline-style', 'outline-color', 'outline-offset', 'background', 'background-color', 'background-image', 'background-repeat', 'background-attachment', 'background-position', 'background-position-x', 'background-position-y', 'background-clip', 'background-origin', 'background-size', 'box-shadow']},

        {properties: ['table-layout', 'caption-side', 'border-collapse', 'border-spacing', 'border-collapse', 'empty-cells', 'list-style', 'list-style-position', 'list-style-type', 'list-style-image']},

        /* 变换 & 动画 */
        {properties: ['transition', 'transition-delay', 'transition-timing-function', 'transition-duration', 'transition-property', 'transform', 'transform-origin', 'animation', 'animation-name', 'animation-duration', 'animation-play-state', 'animation-timing-function', 'animation-delay', 'animation-iteration-count', 'animation-iteration-count', 'animation-direction']},
        
        /* Text */
        {properties: [ 'color', 'line-height', 'text-shadow', 'text-align', 'white-space', 'text-decoration', 'text-indent', 'text-justify', 'text-transform', 'letter-spacing', 'word-spacing', 'text-outline', 'text-transform', 'text-wrap', 'text-overflow', 'text-overflow-ellipsis', 'word-wrap', 'word-break']},

        /* font */
        {properties: ['font', 'font-family', 'font-size', 'font-weight', 'font-style', 'font-variant', 'font-size-adjust', 'font-stretch', 'font-effect', 'font-emphasize', 'font-emphasize-position', 'font-emphasize-style', 'font-smooth']},

        /* Other */
        {properties: ['content', 'opacity', 'cursor', 'pointer-events', 'vertical-align']},
      ],
      {unspecified: 'bottomAlphabetical'},
    ],
  },
};
