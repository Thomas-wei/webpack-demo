export default function printMe() {
  console.log('I get called from print.js1111!')
  if (process.env.NODE_ENV === 'production') {
    console.log('Looks like we are in development mode!');
  }
}