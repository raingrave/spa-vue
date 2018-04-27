const config = {
  errorBagName: 'errors',
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      attributes: {
        keyword: ' ',
        password: 'senha'
      }
    }
  },
  strict: true,
  classes: false,
  classNames: {
    touched: 'touched',
    untouched: 'untouched',
    valid: 'valid',
    invalid: 'invalid',
    pristine: 'pristine',
    dirty: 'dirty'
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true,
  i18n: null,
  i18nRootKey: 'validations'
}

export default config
