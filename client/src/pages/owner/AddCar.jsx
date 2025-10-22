import { useState } from "react"
import { assets, dummyCars } from "../../assets/data"
import { useUser } from "@clerk/clerk-react"


const AddCar = () => {

    const bodyTypes = ["SUV", "Sedan", "Hatchback", "Coupe", "Convertible", "Van", "Grand Tourer"]
    const transmissions = ["Automatic", "Manual", "CVT", "Dual-clutch"]
    const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"]

    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState({

        1: null,
        2: null,
        3: null,
        4: null
    })

    const [inputs, setInputs] = useState({

        title: "",
        description: "",
        city: "",
        country: "",
        address: "",
        odometer: "",
        bodyType: "",
        priceRent: "",
        priceSale: "",
        transmissions: "",
        seats: "",
        fuelType: "",
        features: {

            "Rear Camera": false,
            "Apple CarPlay": false,
            "Keyless Entry": false,
            "Adaptive Cruise": false,
            "Heated Seats": false,
            Sunroof: false,
            "Parking Assist" : false,
            "Cruise Control" : false,
        }
    })

    const currency = '$'
    const { user } = useUser()
  
    return (
        
        <div className="md:px-8 py-6 xl:py-8 m-1.5 sm:m-3 h-[97vh] overflow-y-scroll lg:w-11/12 bg-white shadow rounded-xl">
            
            <form className="flex flex-col gap-y-3.5 px-2 text-sm font-medium xl:max-w-3xl">

                <div className="w-full">

                    <h5>Car Name</h5>
                    <input type="text" placeholder="Type Here..." className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1 w-full" />
                </div>
                
                <div className="w-full">

                    <h5>Car Description</h5>
                    <textarea rows={5} type="text" placeholder="Type Here..." className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1 w-full" />
                </div>

                <div className="flex gap-4">

                    <div className="w-full">

                        <h5>City</h5>
                        <input type="text" placeholder="Type Here..." className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1 w-full" />
                    </div>

                    <div className="w-full">

                        <h5>Country</h5>
                        <input type="text" placeholder="Type Here..." className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1 w-full" />
                    </div>
                    
                    <div>

                        <h5>Car Type</h5>
                        <select className="w-36 px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1">

                            <option>Select Type</option>
                            {
                                bodyTypes.map((bodyType, index) => (

                                    <option key={index} value={bodyType}>{bodyType}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className="flex gap-4 flex-wrap w-full">

                    <div className="flex-1">

                        <h5>Address</h5>
                        <input type="text" placeholder="Type Here..." className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1 w-full" />
                    </div>

                    <div className="w-34">

                        <h5>Odometer</h5>
                        <input type="number" placeholder="e.g. 2,500(km)" className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1 w-full" />
                    </div>
                </div>

                <div className="flex gap-4 flex-wrap">

                    <div className="flex-1">

                        <h5>Rent Price <span className="text-xs">/day</span></h5>
                        <input type="number" placeholder="99" className="w-48 px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1" />
                    </div>

                    <div>

                        <h5>Sale Price</h5>
                        <input type="number" placeholder="9999" className="w-28 px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1" />
                    </div>

                    <div>

                        <h5>Transmissions</h5>
                        <select className="w-36 px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1">

                            <option>Select Type</option>
                            {
                                transmissions.map((transmission, index) => (

                                    <option key={index} value={transmission}>{transmission}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div>

                        <h5>Seats</h5>
                        <input type="number" placeholder="1" className="w-20 px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1" />
                    </div>

                    <div>

                        <h5>Fuel Type</h5>
                        <select className="w-36 px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-primary mt-1">

                            <option>Select Type</option>
                            {
                                fuelTypes.map((fuelType, index) => (

                                    <option key={index} value={fuelType}>{fuelType}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                
                { /* Features */ }
                
                <div>

                    <h5>Features</h5>
                    <div className="flex gap-3 flex-wrap mt-1">

                        {Object.keys(inputs.features).map((feature, index) => (

                            <div key={index} className="flex gap-1">

                                <input id={`features[index + 1]`} type="checkbox" checked={inputs.features[feature]} />
                                <label htmlFor={`features${index + 1}`}>{feature}</label>
                            </div>
                        ))}
                    </div>
                </div>
                
                { /* Images */ }

                <div className="flex gap-2 mt-2">

                    {
                        Object.keys(images).map((key) => (

                            <label htmlFor={`carImages${key}`} key={key} className="ring-1 ring-slate-900/10 overflow-hidden rounded-lg">

                                <input id={`carImages${key}`} type="file" accept="image/*" onChange={(e) => setImages({...images, [key]: e.target.files[0]})} hidden />
                                <div className="h-12 w-24 bg-primary flexCenter">

                                    <img src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadIcon} className="overflow-hidden object-contain" />
                                </div>
                            </label>
                        ))
                    }
                </div>
                
                <button type="submit" className="btn-solid mt-3 max-w-36">

                    {loading ? "Adding" : "Add Car"}
                </button>

            </form>
        </div>
    )
}

export default AddCar