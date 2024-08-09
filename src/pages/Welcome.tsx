import image1 from '../assets/welcome1.png'
import image2 from '../assets/welcome2.png'
import image3 from '../assets/welcome3.png'

const Welcome = () => {
  return (
    <div className='image-slider'>
      <img src={image1} alt='illustration1' />
      <img src={image2} alt='illustration2' />
      <img src={image3} alt='illustration3' />
    </div>
    
  )
}

export default Welcome
