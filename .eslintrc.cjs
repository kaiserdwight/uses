/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    // https://eslint.vuejs.org/user-guide/#usage
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
                printWidth: 120,
            },
        ],
    },
};
