export const TransformDate = (data: string):string => {
  return data.split('/').reverse().join('/')
}