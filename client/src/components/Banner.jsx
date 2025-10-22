import { useNavigate } from "react-router-dom"
import { assets } from "../assets/data"


const Banner = () => {

    const navigate = useNavigate()
  
    return (
        
        <section className="max-padd-container py-10">

            <div className="max-padd-container bg-solid rounded-3xl xl:max-h-72">

                { /* Container */ }
                <div className="flex flex-col md:flex-row">

                    { /* Left Side */ }
                    <div className="flex-[5] relative lg:bottom-12 xl:bottom-20">

                        <img src={assets.banner} alt="" />
                    </div>

                    { /* Right Side */ }
                    <div className="flex-[4] text-white">

                        <div className="flex flex-col gap-4 p-4">

                            <h3 className="capitalize xl:pt-6">Buy With Confidence, rent without worry</h3>
                            <p className="text-white/70">Find your next ride or earn from your vehicle in minutes. We handle insurance, driver verification and secure payments.</p>
                            <button onClick={() => navigate('/listing')} className="btn-white w-36">Explore Cars</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner