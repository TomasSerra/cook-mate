import React from 'react'
import PriceBox from '../../common/priceBox/PriceBox'
import Button from '../../common/button/Button'
import LikeButton from '../../common/likeButton/LikeButton'
import IconsCard from '../../common/infoIconCard/IconsCard'

interface ProductCardProps {
  ingredientName: string,
  brandName: string,
  activeIcons: boolean[],
  imageSrc: string,
  price: number,
  discount?: number,
  onClick?: () => void,
}

function ProductCards({ingredientName, brandName, activeIcons, imageSrc, price, discount=0, onClick=()=>{}}: ProductCardProps) {

  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }

  return (
    <div className='select-none flex flex-col overflow-hidden rounded-[12px] shadow-card bg-neutral-white w-[170px] h-[252px] relative'>
      <div className='absolute top-[6px] right-[6px] z-10'>
        <LikeButton />
      </div>
      <img draggable={false} src={imageSrc} className='w-full h-[93px] object-cover'/>
      <div className='flex-1 w-full p-[8px] flex flex-col justify-between items-left'>
        <p className='text-body-b text-neutral-800 w-full overflow-hidden text-ellipsis'
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
        }}
        >{ingredientName}</p>
        <p className='text-small text-neutral-700 w-full overflow-hidden text-ellipsis'
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
        }}
        >{brandName}</p>
        <PriceBox inline={true} discount={discount} actualPrice={price} currency='USD'/>
        <IconsCard selections={activeIcons}/>
        <Button onClick={handleClick} size='sm' loading={loading}>
          Add To Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCards