import Card from './Card'
import Carousel from './Carousel'


const MyHero = () => {
  return (
    <div className="flex md:justify-between items-center gap-y-10 w-full h-fit my-16 sm:px-[15vw] flex-col-reverse md:flex-row">
      <Card />
      <Carousel />
    </div>
  )
}

export default MyHero
