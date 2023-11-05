type ObjectProp = {
  [key: string]: string | number | boolean
}

export const customQueryStringify = (obj: ObjectProp): string => {
  return Object.keys(obj)
    .map((key) => {
      const value = obj[key]
      return `${encodeURIComponent(key)}=${encodeURIComponent(
        typeof value === 'string' ? value : value.toString()
      )}`
    })
    .join('&')
}
