module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['@wogns3623/better-exhaustive-deps'],
  rules: {
    'no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@wogns3623/better-exhaustive-deps/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useLoadableCallback|useSetter|useSingletonEffect)',
        staticHooks: {
          useLazyState: [false, true, false],
          useLiftedState: [false, true],
          useRefOf: true,
          useSuspense: [true, true],
          useSynchronizedState: [false, true],
          useScrollEffect: [true, true],
        },
        checkMemoizedVariableIsStatic: true,
      },
    ],
    'jsx-a11y/alt-text': 'off',
  },
};
