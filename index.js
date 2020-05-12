module.exports = {
  extends: ["stylelint-config-twbs-bootstrap/css"],
  rules: {
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment", "stylelint-commands"],
      },
    ],
    "selector-max-class": 8,
    "selector-max-combinators": 8,
    "selector-max-compound-selectors": 8,
    "selector-no-qualifying-type": [
      true,
      { ignore: ["attribute", "class", "id"] },
    ],
    "selector-type-no-unknown": [
      true,
      { ignore: ["custom-elements", "default-namespace"] },
    ],
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
  },
};
