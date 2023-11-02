import('../acorn/acorn/src/index.mjs').then((module) => {
    const input = "1 + 1";
    const tokens = module.parse(input,{ecmaVersion:"es7"});
    console.log(tokens);
})
