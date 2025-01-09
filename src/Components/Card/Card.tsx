import React from 'react'

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=560" alt="Image" />
        <div className="details">
        <h2> {companyName} ({ticker})</h2>
        <p>${price}</p>
    </div>
    <p className="information">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repudiandae sint corrupti laboriosam ducimus ut facere nihil inventore beatae adipisci. Quod laboriosam fuga repellat totam dicta aliquid, 
    ducimus porro ipsam.</p>
    </div>

  )
}

export default Card