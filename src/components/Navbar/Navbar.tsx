import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import { SearchIcon } from "..";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Props {
  onHandleSearch: (value: string) => void;
}

export const NavbarComponent = ({ onHandleSearch }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onInputHandle = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onHandleSearch(inputValue);
  };

  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <Link href={"/"}>
          <p className="font-bold text-inherit">Movie Search</p>
        </Link>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent> */}
      <NavbarContent justify="end">
        <form onSubmit={handleSubmit}>
          <Input
            ref={inputRef}
            onChange={onInputHandle}
            value={inputValue}
            classNames={{
              base: "max-w-full sm:max-w-[10rem] lg:max-w-[20rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search a movie"
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </form>
      </NavbarContent>
    </Navbar>
  );
};
