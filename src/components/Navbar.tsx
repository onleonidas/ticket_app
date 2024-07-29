import Image from "next/image";
import Link from "next/link";
import { HiOutlinePuzzle, HiOutlineShoppingCart } from "react-icons/hi";

export function Navbar() {
  return (
    <div className="flex max-w-full items-center justify-items-stretch rounded-2xl bg-[#1D232A] px-6 py-2 shadow-nav">
      <div className="flex grow items-center justify-center">
        <Link href="/"> 
            <HiOutlinePuzzle />
        </Link>
      </div>
      <div className="flex grow items-center justify-center" />
      <Link href={"/checkout"} className="">
        <HiOutlineShoppingCart />
      </Link>
    </div>
  );
}