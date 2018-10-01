// why import? https://stackoverflow.com/a/35706271/57095
import * as request from 'request-promise'

const log = (...args: any[]) => console.log.apply(console, args)

interface Slideshow { author: string }
interface MyHttpResult { slideshow: Slideshow }
const io = async (): Promise<MyHttpResult> => request.get({ url: 'https://httpbin.org/json', json: true })

const asIfItWasSync = async () => {
  console.log('before')
  // declaration and then usage on two lines
  // seems to be mandatory, TypeScript will complain
  // about the following
  // console.log(await io().lideshow.author) 
  let result = await io()
  console.log(result.slideshow.author)
  console.log('after')
  // prints:
  // before
  // Yours Truly
  // after
}

const usualThenSyntax = () => {
  console.log('before')
  io().then((result) => console.log(result.slideshow.author))
  console.log('after')
  // prints:
  // before
  // after
  // Yours Truly
}

// asIfItWasSync()
// usualThenSyntax()

// an example of using the Either monad
const enum EitherType { LEFT, RIGHT }
interface Left<T> { kind: EitherType.LEFT; value: T }
interface Right<T> { kind: EitherType.RIGHT; value: T }
type Either<T> = Left<T> | Right<T>
const Left = <T>(val: T): Left<T> => ({ kind: EitherType.LEFT, value: val })
const Right = <T>(val: T): Right<T> => ({ kind: EitherType.RIGHT, value: val })

const asyncFunctionThatErrors = async <T>(): Promise<Either<T>> => {
  let url = 'blargh'
  try {
    let response: T = await request.get({ url: url, json: true })
    return Promise.resolve(Right(response))
  } catch (ex) {
    return Promise.reject(Left(ex))
  }
}

// you could do it in a function
// where it makes sense to match on the type
// over Left and Right...
const unpack = async <T>(): Promise<T> => {
  let result = await asyncFunctionThatErrors<T>()
  switch (result.kind) {
    case EitherType.LEFT:  return result.value
    case EitherType.RIGHT: { 
      console.error(result.value)
      return result.value 
    }
  }
}

// ...or with the usual then
asyncFunctionThatErrors().then(
  (result: Right<any>) => log('SUCCESS!', result.value), 
  (error: Left<any>) => log('ERROR!', error.value.message))

// but if you don't need the ease provided by matching on the type
// then it might be better to just deal with promise, without
// the wrapping around Either
// if so then we can just rewrite

const asyncFunction = async <T>(): Promise<T> => 
  await request.get({ url: 'https://httpbin.org/json', json: true })

asyncFunction().then(
  (result) => log('SUCCESS 2!', result), 
  (error) => log('ERROR 2!', error))

