module.exports ={
    // 超过最大值换行
    printWidth: 100,
    // tab缩进大小 默认为2
    tabWidth: 2,
    // 缩进不使用tab 使用空格
    useTabs: false,
    semi: false,  //句尾使用分号，默认为true
    vuewIndentScriptAndStyle: true,
    singleQuote: true, // 使用单引号，代替双引号
    quoteProps: 'as-needed',
    bracketSpacing:true, // 在对象中，数组括号与文字中添加空格 默认true
    // 行尾逗号， 默认为none 可选 none|es5|all
    // es5 包括es5中的数组，对象
    // all 包括函数对象等所有可选项
    tarilingComma:'none',
    // jsx标签闭合位置 单独放一行 默认false
    jsxBracketSameLine:false,
    // 在jsx中使用单引号代替双引号
    jsxSingLeQuote: false,
    // 剪头函数参数括号 默认avoid 可选 avoid|always
    // avoid  能省括号省括号 例 x => x
    // always 总是带有括号
    arrowParens: 'always',
    insertPragma: false,
    requirePragma: false,
    proseWrap: 'never',
    htmlWhitesapceSensitivity:'strict',
    endOfline: 'lf'
}