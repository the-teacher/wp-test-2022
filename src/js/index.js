import '../css/styles.css'
import image from "../images/goldmedal.png"

export const helloWorld = () => {
  console.log('Hello World!')
  document.querySelector('#root:after').textContent = image
  return true
}

helloWorld()
