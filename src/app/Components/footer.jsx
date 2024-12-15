import Logo from '@/app/Assets/Images/logo.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <>  
            <div className="bg-hover mt-28 py-8">
                <div className='flex justify-center gap-36'>
                    <div className="flex items-center text-white ">
                        <Image alt='logo' src={Logo} width={100} height={100}/>
                        <div>
                        <p>Dipersembahkan Oleh:</p>
                        <p>Tech Pioonerz - Universitas Halu Oleo</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center text-white mt-4">
                    <p>&copy; Tech Pioonerz || 2024</p>
                </div>
            </div>
        </>
    )
}

export default Footer;