import Image from "next/image";
import logo from "../../public/image/logo.png";

const Header = () => {
	return (
		<>
			<div className='h-[10rem] bg-header-color flex w-full items-center'>
				<div className='w-[9rem] ml-20'>
					<Image src={logo} width={590} height={590} alt='airlines logo' layout-fill='responsive' style='cover' className='' />
				</div>

				<h1 className='text-center w-[80%] font-title font-bold text-4xl bg-gradient-to-r from-[#5C8A99] via-[#24EBDE] to-[#5C8A99] text-transparent bg-clip-text animate-gradient'>
					Cholo Trip
				</h1>
			</div>
		</>
	);
};

export default Header;
