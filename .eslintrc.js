module.exports = {
  parser: `@babel/eslint-parser`,
  extends: [
    `google`,
    `eslint:recommended`,
    `plugin:react/recommended`,
    `prettier`,
  ],
  plugins: [`prettier`, `react`, 'react-hooks', `babel`, `jsx-a11y`, `import`],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: `module`,
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'arrow-body-style': `off`,
    'object-shorthand': [`error`, `properties`],
    'prefer-arrow-callback': [
      `error`,
      { allowNamedFunctions: true, allowUnboundThis: true },
    ],
    'prefer-destructuring': `off`, // I like it, but not that much...
    'sort-imports': `off`,
    'babel/camelcase': `off`,
    'new-cap': `off`,
    'babel/new-cap': [
      `error`,
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    'no-invalid-this': `off`,
    'babel/no-invalid-this': `error`,
    'no-class-assign': `error`,
    'no-duplicate-imports': `error`,
    'no-restricted-exports': `off`,
    'no-restricted-imports': `off`,
    'no-useless-computed-key': `error`,
    'no-useless-constructor': `error`,
    'no-useless-rename': `error`,
    'no-var': `error`,
    'prefer-const': `error`,
    'prefer-numeric-literals': `error`,
    'prefer-rest-params': `error`,
    'prefer-spread': `error`,
    'prefer-template': `error`,
    'require-yield': `error`,
    'symbol-description': `error`,
    'constructor-super': `error`,
    'no-const-assign': `error`,
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'no-dupe-class-members': `error`,
    'no-new-symbol': `error`,
    'no-this-before-super': `error`,
    'no-unsafe-optional-chaining': `error`,
    'no-unused-expressions': `off`,
    'no-unused-vars': [
      `error`,
      {
        varsIgnorePattern: `^_`,
        argsIgnorePattern: `^_`,
        ignoreRestSiblings: true,
      },
    ],
    'babel/no-unused-expressions': `error`,
    'valid-typeof': `off`,
    'babel/valid-typeof': `error`,
    'require-jsdoc': `off`,
    'valid-jsdoc': `off`,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
          'object',
        ],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'off',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': 'off',
    'react/display-name': ['error', { ignoreTranspilerName: false }],
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'ignore' },
    ],
    'react/jsx-fragments': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'off',
    'react/no-array-index-key': 'off', // sometimes you don't care about the issues or they don't apply
    'react/no-children-prop': 'off',
    'react/no-danger': 'off',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'warn', // if you need it there should be a comment explaining why
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'off',
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'off',
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/accessible-emoji': 'error',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/autocomplete-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/interactive-supports-focus': 'warn',
    'jsx-a11y/label-has-associated-control': 'error',
    'jsx-a11y/lang': 'error',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'warn',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        embeddedLanguageFormatting: 'auto',
        endOfLine: 'lf',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 80,
        proseWrap: 'always',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
  },
  overrides: [
    {
      files: [`**/*.ts?(x)`],
      parser: `@typescript-eslint/parser`,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: `module`,
      },
      plugins: [`@typescript-eslint/eslint-plugin`],
      extends: [`plugin:@typescript-eslint/recommended`],
      rules: {
        'babel/no-invalid-this': `off`,
        '@typescript-eslint/no-invalid-this': `error`,
        'no-var': `error`,
        'prefer-const': `error`,
        'prefer-rest-params': `error`,
        'prefer-spread': `error`,
        'no-duplicate-imports': `off`,
        '@typescript-eslint/no-duplicate-imports': `error`,
        'no-useless-constructor': `off`,
        '@typescript-eslint/no-useless-constructor': `error`,
        'constructor-super': `off`,
        'no-const-assign': `off`,
        'no-new-symbol': `off`,
        'no-this-before-super': `off`,
        'babel/valid-typeof': `off`,
        'no-dupe-class-members': `off`,
        '@typescript-eslint/no-dupe-class-members': `off`,
        'babel/no-unused-expressions': `off`,
        '@typescript-eslint/no-unused-expressions': `error`,
        '@typescript-eslint/no-unused-vars': [
          `error`,
          {
            varsIgnorePattern: `^_`,
            argsIgnorePattern: `^_`,
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': `off`,
        '@typescript-eslint/no-explicit-any': `off`,
        '@typescript-eslint/ban-types': [
          `error`,
          {
            extendDefaults: true,
            types: {
              '{}': {
                fixWith: `Record<string, unknown>`,
              },
              object: {
                fixWith: `Record<string, unknown>`,
              },
            },
          },
        ],
        camelcase: `off`,
        '@typescript-eslint/naming-convention': [
          `error`,
          {
            selector: `default`,
            format: [`camelCase`],
          },
          {
            selector: `variable`,
            format: [`camelCase`, `UPPER_CASE`, `PascalCase`],
            leadingUnderscore: `allowSingleOrDouble`,
            trailingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `function`,
            format: [`camelCase`, `PascalCase`],
            leadingUnderscore: `allow`,
          },
          {
            selector: `parameter`,
            format: [`camelCase`, `PascalCase`, `snake_case`],
            leadingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `enumMember`,
            format: [`camelCase`, `UPPER_CASE`, `PascalCase`],
          },
          {
            selector: `typeLike`,
            format: [`PascalCase`],
          },
          {
            selector: `typeAlias`,
            format: [`camelCase`, `PascalCase`],
          },
          {
            selector: `property`,
            format: [`PascalCase`, `UPPER_CASE`, `camelCase`, `snake_case`],
            leadingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `objectLiteralProperty`,
            format: [`PascalCase`, `UPPER_CASE`, `camelCase`, `snake_case`],
            leadingUnderscore: `allowSingleOrDouble`,
            trailingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `enum`,
            format: [`PascalCase`, `UPPER_CASE`],
          },
          {
            selector: `method`,
            format: [`PascalCase`, `camelCase`],
            leadingUnderscore: `allowSingleOrDouble`,
          },
        ],
      },
    },
  ],
};
