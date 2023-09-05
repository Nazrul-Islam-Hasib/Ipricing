import { useState } from "react";
import PricingCard from "./PricingCard";
import SubscriptionForm from "../SubscriptionForm/SubscriptionForm";

const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(false);
    const toggleBilling = () => {
        setIsMonthly(!isMonthly);
    };
    const pricingData = [
        {
            id: 1,
            name: 'Basic Plan',
            priceMonthly: 10,
            priceAnnual: 100,
            Resolution: '1080p',
            Ads: true,
            Download: false,
            liveSupport: false,
            NoOfDevices: 2
        },
        {
            id: 2,
            name: 'Premium Plan',
            priceMonthly: 20,
            priceAnnual: 200,
            Resolution: '4k',
            Ads: false,
            Download: true,
            liveSupport: false,
            NoOfDevices: 5
        },
        {
            id: 3,
            name: 'Business Plan',
            priceMonthly: 50,
            priceAnnual: 500,
            Resolution: '4k+HDR',
            Ads: false,
            Download: true,
            liveSupport: true,
            NoOfDevices: 10
        },
    ]
    return (
        <div className='my-16'>
            <div className='text-center'>
                <h3 className='text-3xl lg:text-5xl font-bold text-info uppercase'>Our pricings</h3>
                <p className='my-8 px-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae facilisis lorem.
                    Curabitur bibendum massa ligula, at sagittis nibh auctor nec. Phasellus mollis odio sed ultrices rhoncus. Aenean finibus eros vitae luctus aliquet. </p>
                <div className="flex justify-center mt-4">

                    <div className="form-control">
                        <p>Choose pricing option: </p>
                        <label className="label cursor-pointer">
                            <span>Yearly</span>
                            <input type="checkbox" className="toggle" checked={isMonthly} onChange={toggleBilling} />
                            <span>Monthly</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='grid mt-8 px-5 gap-8 grid-clos-1 lg:grid-cols-3 justify-around'>
                {
                    pricingData.map(pricing =>
                        <PricingCard
                            key={pricing.id} pricingData={pricing}
                            price={isMonthly ? pricing.priceMonthly : pricing.priceAnnual}
                            toggle={isMonthly ? true : false}></PricingCard>)
                }
            </div>
            <SubscriptionForm></SubscriptionForm>
        </div>
    );
};

export default Pricing;