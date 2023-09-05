/* eslint-disable react/prop-types */
import './PricingCard.css';
import { useState, useEffect } from 'react';

const PricingCard = ({ pricingData, toggle, price }) => {
    const { name, Resolution, Ads, Download, liveSupport, NoOfDevices } = pricingData;
    const [animatedPrice, setAnimatedPrice] = useState(price);
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
        if (price !== animatedPrice) {
            setIsAnimating(true);
            setTimeout(() => {
                setAnimatedPrice(price);
                setIsAnimating(false);
            }, 500);
        }
    }, [price, animatedPrice]);

    const animateCard = `${isAnimating ? 'animate-card' : ''}`;
    const toggleCard = `${toggle ? 'monthly-card' : 'yearly-card'}`;

    return (
        <div className={`pricing-card ${animateCard} ${toggleCard} card w-96 lg:w-auto bg-base-100 shadow-xl`}>
            <div className="card-body  px-0 pt-0 text-center">
                <div className="card-head justify-center text-white py-7 space-y-2 rounded-t-xl">
                    <p>{name === 'Premium Plan' ? 'Most Popular' : ''}</p>
                    <h2 className="text-xl lg:text-3xl font-bold">{name}</h2>
                    <h2 className="text-2xl lg:text-5xl">${price}</h2>
                </div>
                <ul className="space-y-4 m-4">
                    <li>{Resolution} Resolution</li>
                    <li>{Ads ? 'Ads' : 'No Ads'}</li>
                    <li>{Download ? 'Download' : 'No Download'}</li>
                    <li>{liveSupport ? '24/7 Live support' : 'Limited Support'}</li>
                    <li>{NoOfDevices} devices supported</li>
                </ul>
                <div className="card-actions justify-center">
                    <button className="btn btn-info">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
