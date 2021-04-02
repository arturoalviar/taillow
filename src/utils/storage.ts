const storage = {
  getItem(key: string, defaultValue: unknown = '') {
    if (typeof window === 'undefined') {
      return defaultValue
    }
    try {
      const unparsedValue = window.localStorage[key]
      if (typeof unparsedValue === 'undefined') {
        return defaultValue
      }
      return JSON.parse(unparsedValue)
    } catch (error) {
      return defaultValue
    }
  },

  setItem(key: string, value: unknown) {
    window.localStorage[key] = JSON.stringify(value)
  },
}

export default storage
