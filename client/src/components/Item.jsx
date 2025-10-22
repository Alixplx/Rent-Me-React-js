import { useNavigate } from "react-router-dom"
import { assets } from "../assets/data"


const Item = ({ car }) => {
    
    const currency = '$'
    const navigate = useNavigate()
    const colors = ["#f5f5f5", "#f0f9fd", "#fcf6ed"]
    const bgColor = colors[parseInt(car._id?.slice(-4) || "0", 16) % colors.length]

    return (
        
        <div onClick={() => { navigate("/listing/" + car._id); scrollTo(0,0)}} style={{backgroundColor: bgColor}} className="block rounded-lg ring-1 ring-slate-900/50 p-5 cursor-pointer">
            
            <h4 className="line-clamp-1">{car.title}</h4>

            <div className="flexBetween">

                <h5 className="my-1 text-gray-50">{car.bodyType}</h5>
                <div className="text-sm font-bold text-solid">

                    {currency}
                    {car.price.sale} | {currency}{car.price.rent}.00 <span className="text-xs">/day</span>
                </div>
            </div>

            {/* Images */}
            <div className="relative py-6">

                <img src={car.images[0]} alt={car.title} />
            </div>

            {/* Info */}
            <div>

                <div className="flexBetween py-2">

                    <p className="flexCenter flex-col gap-1 font-semibold"> 
                        
                        <img src={assets.transmission} alt="" width={19} /> 
                        {car.specs.transmission}
                    </p>

                    <hr className="h-[44px] w-0.5 bg-slate-900/20 border-none" />
                    <p className="flexCenter flex-col gap-1 font-semibold"> 
                        
                        <img src={assets.seats} alt="" width={23} /> 
                        {car.specs.seats}
                    </p>

                    <hr className="h-[44px] w-0.5 bg-slate-900/20 border-none" />
                    <p className="flexCenter flex-col gap-1 font-semibold"> 
                        
                        <img src={assets.fueltype} alt="" width={19} /> 
                        {car.specs.fueltype}
                    </p>
                    
                    <hr className="h-[44px] w-0.5 bg-slate-900/20 border-none" />
                    <p className="flexCenter flex-col gap-1 font-semibold"> 
                        
                        <img src={assets.odometer} alt="" width={19} /> 
                        {car.odometer}
                    </p>
                </div>

                <p className="pt-2 mb-4 line-clamp-2"> {car.description} </p>
            </div>
        </div>
    )
}

export default Item