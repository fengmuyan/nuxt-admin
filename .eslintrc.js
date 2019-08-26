module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off', //允许 async-await
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 允许 debugger during development
    "comma-dangle": 0, //是否允许对象中出现结尾逗号 
    "no-extra-parens": 0, //不允许出现不必要的圆括号
    "complexity": 0, //限制条件语句的复杂度
    "consistent-return": 0, //无论有没有返回值都强制要求return语句返回一个值
    "dot-notation": 0, //获取对象属性的时候使用点号
    "no-alert": 0, //不允许使用alert，confirm，prompt语句
    "guard-for-in": 0, //监视for in循环，防止出现不可预料的情况
    "no-else-return": 0, //如果if语句有return，else里的return不用放在else里
    "semi": 0, //语句强制分号结尾
    "space-before-function-paren": 0, //函数定义时括号前面要不要有空格
    "eol-last": 0, //文件以单一的换行符结束
    "quotes": 0, //引号类型

  }
}