import Image from 'next/image';

export default function LogoInfoSide() {
    return (
        <div className="w-full">
            <h1 className="text-xl font-bold text-white text-center">
                <div className='flex justify-center'>
                    <div>
                        <div>
                        Welcome to
                        </div>
                        <div className='flex'>
                            <Image src={'/EduConnectLogoSmall.ico'} alt={"logo"} width={50} height={50}/><span className="text-blue-600 mt-1 text-2xl"> Connect</span>
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    )
}