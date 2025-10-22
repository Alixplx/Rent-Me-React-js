import { useNavigate, useParams } from "react-router-dom"
import { assets, dummyCars } from "../assets/data"
import CarImage from "../components/CarImage"
import { useEffect, useState } from "react"



const CarDetails = () => {

    const [car, setCar] = useState(null)
    const { id } = useParams()
    const [pickUpDate, setPickUpDate] = useState(null)
    const [dropOffDate, setDropOffDate] = useState(null)
    const [isAvailable, setIsAvailable] = useState(false)
    
    const currency = "$"
    const navigate = useNavigate()

    useEffect(() => {

        if (dummyCars && dummyCars.length > 0) {

            const foundCar = dummyCars.find(car => car._id === id)
            
            if (foundCar) {
                
                setCar(foundCar)
            }    
        }
    }, [dummyCars, id])

    return (
        
        car && (

            <div className="bg-primary">

                <div className="max-padd-container px-6 pt-2 pb-16">

                    { /* Container */ }
                    <div className="flex flex-col md:flex-row gap-6 mt-16">

                        { /* Info Left Side */ }
                        <div className="flex-[5] bg-white p-5 rounded-xl my-4">

                            <p className="flexStart gap-x-2"> 
                                
                                <img src={assets.pin} width={19} /> 
                                <span>{car.address}</span>
                            </p>
                            
                            <div className="flex justify-between flex-col sm:flex-row sm:items-end mt-3">

                                <h3>{car.title}</h3>
                                <h4>{currency}{car.price.sale} | {car.price.rent}.00/day</h4>
                            </div>

                            <div className="flex justify-between items-start my-1">

                                <h4 className="text-solid">{car.bodyType}</h4>
                                <div className="flex items-baseline gap-2 text-solid relative top-1.5">

                                    <h4 className="relative bottom-0.5 text-black">5.0</h4>
                                    <img src={assets.star} alt="starIcon" width={18} />
                                    <img src={assets.star} alt="starIcon" width={18} />
                                    <img src={assets.star} alt="starIcon" width={18} />
                                    <img src={assets.star} alt="starIcon" width={18} />
                                    <img src={assets.star} alt="starIcon" width={18} />
                                </div>
                            </div>

                            <div className="flex gap-x-4 mt-3">

                                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">

                                    <img src={assets.transmission} alt="" width={19} />
                                    {car.specs.transmission}
                                </p>
                                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">

                                    <img src={assets.seats} alt="" width={19} />
                                    {car.specs.seats}
                                </p>
                                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">

                                    <img src={assets.fueltype} alt="" width={19} />
                                    {car.specs.fueltype}
                                </p>
                                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">

                                    <img src={assets.odometer} alt="" width={19} />
                                    {car.odometer}
                                </p>
                            </div>

                            <div className="mt-6">

                                <h4 className="mt-4 mb-1">Car Details</h4>
                                <p className="mb-4">{car.description}</p>
                            </div>

                            <h4 className="mt-6 mb-2">Features</h4>

                            <div className="flex gap-3 flex-wrap">

                                {
                                    car.features.map((feature) => (

                                        <p key={feature} className="p-3 py-1 rounded-lg bg-primary">{feature}</p>
                                    ))
                                }
                            </div>

                            { /* Form | Check Availability */ }
                            <form onSubmit="" className="text-gray-500 bg-primary rounded-lg px-6 py-4 flex flex-col lg:flex-row gap-4 max-w-md lg:max-w-full ring-1 ring-slate-900/50 relative mt-10">

                                <div className="flex flex-col w-full">

                                    <div className="flex items-center gap-2">

                                        <img src={assets.calendar} alt="calendarIcon" width={20} />
                                        <label htmlFor="pickUpDate">Pick Up</label>
                                    </div>

                                    <input 
                                        className="rounded bg-white border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                                        type="date" 
                                        onChange={(e) => setPickUpDate(e.target.value)} 
                                        min={new Date().toISOString().split("T")[0]} 
                                        id="pickUpDate" />
                                </div>

                                <div className="flex flex-col w-full">

                                    <div className="flex items-center gap-2">

                                        <img src={assets.calendar} alt="calendarIcon" width={20} />
                                        <label htmlFor="dropOffDate">Drop Off</label>
                                    </div>

                                    <input 
                                        className="rounded bg-white border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                                        type="date" 
                                        onChange={(e) => setDropOffDate(e.target.value)} 
                                        min={pickUpDate}
                                        disabled={!pickUpDate} 
                                        id="dropOffDate" />
                                </div>

                                <button className="flexCenter gap-1 rounded-md btn-solid min-2-44">

                                    <img src={assets.search} alt="searchIcon" width={20} className="invert" />
                                    <span>{isAvailable ? "Book Car" : "Check Dates"}</span>
                                </button>
                            </form>

                            { /* Contact Agency */ }
                            <div className="p-6 bg-primary rounded-xl mt-10 max-w-sm">

                                <h4 className="mb-3">For Buying Contact</h4>
                                <div className="text-sm sm:w-80 divide-y divide-gray-500/30 ring-1 ring-slate-900/10 rounded">

                                    <div className="flex items-start justify-between p-3">

                                        <div>

                                            <div className="flex items-center space-x-2">

                                                <h5>{car.agency.name}</h5>
                                                <p className="bg-green-500/20 px-2 py-0.5 rounded-full text-xs text-green-600 border border-green-500/30">Agency</p>
                                            </div>

                                            <p>Agency Office</p>
                                        </div>

                                        <img src={car.agency.owner.image} alt="" className="h-10 w-10 rounded-full" />
                                    </div>

                                    <div className="flexStart gap-2 p-1 5">

                                        <div className="bg-green-500/20 p-1 rounded-full border border-green-500/30"> 
                                            
                                            <img src={assets.phone} alt="" width={14} /> 
                                        </div>
                                        <p>{car.agency.contact}</p>
                                    </div>

                                    <div className="flexStart gap-2 p-1">

                                        <div className="bg-green-500/20 p-1 rounded-full border border-green-500/30"> 
                                            
                                            <img src={assets.mail} alt="" width={14} /> 
                                        </div>
                                        <p>{car.agency.email}</p>
                                    </div>

                                    <div className="flex items-center divide-x divide-gray-500/30">

                                        <button className="flex items-center justify-center gap-2 w-1/2 py-3 cursor-pointer"> 
                                            
                                            <img src={assets.mail} alt="" width={19} />
                                            Send Email 
                                        </button>
                                        
                                        <button className="flex items-center justify-center gap-2 w-1/2 py-3 cursor-pointer"> 
                                            
                                            <img src={assets.phone} alt="" width={19} />
                                            Call Now 
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        { /* Images Right Side */ }
                        <div className="flex flex-[4] w-full bg-white p-4 rounded-xl my-4">

                            <CarImage car={car} />
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default CarDetails