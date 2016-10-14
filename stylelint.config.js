module.exports = {
  'extends': 'stylelint-config-standard',
  'rules': {
    'at-rule-no-vendor-prefix': true,
    'at-rule-whitelist': [
        'font-face'
    ],
    'color-named': 'always-where-possible',
    'color-no-hex': true,
    'custom-media-pattern': '^[a-z]+[a-zA-Z]*$',
    'custom-property-no-outside-root': true,
    'custom-property-pattern': '^[a-z]+[a-zA-Z]*$',
    'declaration-block-properties-order': [
      [
        'composes'
      ],
      {
        'unspecified': 'bottomAlphabetical'
      }
    ],
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'numeric',
    'function-url-quotes': 'always',
    'function-whitelist': [
      'alpha',
      'color',
      'format',
      'gray',
      'hsl',
      'hsla',
      'url',
      'var'
    ],
    'indentation': 4,
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'property-blacklist': [
      'float'
    ],
    'property-no-unknown': [
      true,
      {
        'ignoreProperties': [
          'composes'
        ]
      }
    ],
    'property-no-vendor-prefix': true,
    'root-no-standard-properties': true,
    'selector-class-pattern': '^[a-z]+[a-zA-Z]*$',
    'selector-max-compound-selectors': 1,
    'selector-max-specificity': '0,2,1',
    'selector-no-attribute': true,
    'selector-no-type': true,
    'selector-no-universal': true,
    'selector-no-vendor-prefix': true,
    'selector-root-no-composition': true,
    'selector-pseudo-class-whitelist': [
      'focus',
      'hover',
      'root'
    ],
    'string-quotes': 'single',
    'unit-whitelist': [
      '%',
      'px',
      's'
    ],
    'value-no-vendor-prefix': true
  }
};
