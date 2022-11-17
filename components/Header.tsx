import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineSearch} from "react-icons/ai";
import {IoIosNotificationsOutline} from "react-icons/io";

function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#010511]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="Netflix"
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <Link href="/">
            <li className="headerLink">Home</li>
          </Link>
          <Link href="/shows">
            <li className="headerLink">TV Shows</li>
          </Link>
          <Link href="/movies">
            <li className="headerLink">Movies</li>
          </Link>
          <Link href="/popular">
          <li className="headerLink">New & Popular</li>
          </Link>
          <Link href="mylist">
            <li className="headerLink">My List</li>
          </Link>
        </ul>
      </div>

      <div className="flex items-center space-x-4 font-light">
        <AiOutlineSearch className="hidden w-6 h-6 sm:inline cursor-pointer" />
        <p className="hidden lg:inline">lorem</p>
        <IoIosNotificationsOutline className="w-6 h-6 cursor-pointer" />
        <Link href="/account">
          <Image src="/accountImg.svg" alt="account" width={60} height={60} className="cursor-pointer rounded w-6 h-6" />
        </Link>
      </div>
    </header>
  );
}

export default Header;