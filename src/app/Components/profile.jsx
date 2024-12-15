import Image from "next/image";


const Profile = () => {
    return (
        <> 
            <div className="h-screen flex justify-center items-center">
            <div className="bg-hover w-1/2 text-white rounded py-8">
                <h1 className="text-center font-bold font-inter tracker-wide">PROFILE</h1>
                <div className="">  
                    <div className="flex justify-center gap-12">
                        <div>
                            <Image alt="gambar"/>
                        </div>
                        <div className="flex">
                            <div>
                            <p>Nama  </p>
                            <p>Umur  </p>
                            <p>Email </p>
                            </div>
                            <div>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Profile;