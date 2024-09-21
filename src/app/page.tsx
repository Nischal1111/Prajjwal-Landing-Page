"use client"
import {Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBell, FaBook, FaHourglassHalf, FaPlus, FaUsers } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiUserStarFill } from "react-icons/ri";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Home() {
  const columns = [
    { name: "User Id", uid: "id" },
    { name: "Name", uid: "name" },
    { name: "Books Issued", uid: "books" },
    { name: "Department", uid: "dep" },
    { name: "ACTIONS", uid: "actions" },
  ];
  
  const bookcolumns = [
    { name: "Book Id", uid: "bookid" },
    { name: "Title", uid: "title" },
    { name: "Available", uid: "available" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const users = [
    {
      id: 1,
      name: "Prajjwal Basnet",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      Books: "33",
      role: "Admin",
      team: "Psychology",
    },
    {
      id: 2,
      name: "Nischal Neupane",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026702d",
      role: "Editor",
      team: "Content",
      Books: "32",
      status: "Commerce",
    },
    {
      id: 3,
      name: "Arun K.C",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026702d",
      role: "Editor",
      team: "Content",
      Books: "42",
      status: "Business",
    },
  ];

  const books = [
    {
      bookid: 1,
      title: "Atomic Habits",
      available: "33",
    },
    {
      bookid: 2,
      title: "The Fly",
      available: "9",
    },
    {
      bookid: 3,
      title: "Let's Not Go Here",
      available: "41",
    },
  ];

  const renderCell = React.useCallback((item: any, columnKey: any) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "id":
      case "bookid":
        return <p className="text-bold text-sm">{cellValue}</p>;

      case "name":
      
        return (
          <User
            avatarProps={{ radius: "lg", src: item.avatar }}
            name={cellValue}
          >
            {item.email}
          </User>
        );
        case "title":
        return <p>{item.title}</p>;
      case "books":
        return <p>{item.Books}</p>;
      case "dep":
        return <p>{item.team}</p>;
      case "available":
        return <p>{item.available}</p>;
      case "actions":
        return (
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" isIconOnly>
                <BsThreeDotsVertical size={22} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">Edit</DropdownItem>
              <DropdownItem key="copy">Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <main>
      <nav className="w-full flex gap-12 items-center justify-between px-6 py-1 bg-white shadow-md fixed z-[1000]">
        <div className="flex gap-20">
          <div className="size-16">
            <Image src={"/logo.png"} alt="image" height={1000} width={1000} className="h-full w-full rounded-full object-cover" />
          </div>

          <div className="flex gap-8 items-center">
            <GiHamburgerMenu size={22} />
            <h1 className="text-lg font-bold tracking-wider">Dashboard</h1>
          </div>
        </div>

        <div className="w-[40%]">
          <input type="text" placeholder="Search..." className="px-4 py-3 rounded-lg text-xs bg-gray-100 w-[90%]" />
        </div>

        <div className="flex items-center gap-8 mr-8">
          <Badge color="danger" content={5} shape="circle">
            <FaBell className="fill-current" size={20} />
          </Badge>
          <User
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            name="Prajjwal Basnet"
            description="Librarian"
            classNames={{
              base: "flex flex-row-reverse gap-3",
            }}
          />
        </div>
      </nav>

      <div className="pb-16 pt-32 px-20 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">
            Hello, <span className="text-[#183552]">Prajjwal</span>
          </h1>
          <div>
            <h1 className="font-medium text-xl">Sep 10, 2024 | Sunday, 8:00 AM</h1>
          </div>
        </div>

        <Dropdown>
          <DropdownTrigger>
            <Button className="w-[15%] flex items-center justify-between" variant="bordered" endContent={<IoIosArrowDown />}>
              This Week
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">Today</DropdownItem>
            <DropdownItem key="copy">This Month</DropdownItem>
            <DropdownItem key="edit">Past Month</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="flex items-center justify-between px-20">
        <div className="px-8 py-4 shadow-md bg-white rounded-lg w-[22%] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">1200</h1>
            <FaUsers size={35} />
          </div>
          <h1 className="text-gray-600">Total Visitors</h1>
        </div>
        <div className="px-8 py-4 shadow-md bg-white rounded-lg w-[22%] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">306</h1>
            <FaBook size={35} />
          </div>
          <h1 className="text-gray-600">Borrowed Books</h1>
        </div>
        <div className="px-8 py-4 shadow-md bg-white rounded-lg w-[22%] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">76</h1>
            <FaHourglassHalf size={35} />
          </div>
          <h1 className="text-gray-600">Overdue Books</h1>
        </div>
        <div className="px-8 py-4 shadow-md bg-white rounded-lg w-[22%] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">108</h1>
            <RiUserStarFill size={35} />
          </div>
          <h1 className="text-gray-600">New Members</h1>
        </div>
      </div>

      <div className="w-full px-20 py-12 flex gap-8 justify-between">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between px-4">
            <h1 className="text-2xl font-medium">Users</h1>
            <Button variant="bordered" className="flex gap-4 rounded-lg" startContent={<FaPlus size={16}/>}>Add User</Button>
          </div>
          <Table aria-label="Users Table">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={users}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between px-4">
            <h1 className="text-2xl font-medium">Books</h1>
            <Button variant="bordered" className="flex gap-4 rounded-lg" startContent={<FaPlus size={16}/>}>Add Book</Button>
          </div>
          <Table aria-label="Books Table">
            <TableHeader columns={bookcolumns}>
              {(column) => (
                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={books}>
              {(item) => (
                <TableRow key={item.bookid}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

      </div>

      <div className="w-full px-20 pb-16 mt-4">
        <h1 className="font-semibold text-3xl tracking-wide pb-8">
          Top Choices
        </h1>
        <div className="flex gap-12 w-full">
              <div className="w-[15%] h-[200px] flex flex-col gap-2">
                <div className="h-[180px]">
                  <Image src={"/atomic.jpeg"} alt="books" height={1000} width={1000} className="h-full w-full object-cover rounded-md"/>
                </div>
                <div>
                  <h1 className="text-lg font-medium">Atomic Habits</h1>
                  <p className="text-xs text-gray-500 -mt-1">Nischal Neupane</p>
                </div>

              </div>
              <div className="w-[15%] h-[200px] flex flex-col gap-2">
                <div className="h-[180px]">
                  <Image src={"/silent.jpg"} alt="books" height={1000} width={1000} className="h-full w-full object-cover rounded-md"/>
                </div>
                <div>
                  <h1 className="text-lg font-medium">The Silent Patient</h1>
                  <p className="text-xs text-gray-500 -mt-1">Prajjwal Basnet</p>
                </div>

              </div>
              <div className="w-[15%] h-[200px] flex flex-col gap-2">
                <div className="h-[180px]">
                  <Image src={"/house.jpg"} alt="books" height={1000} width={1000} className="h-full w-full object-cover rounded-md"/>
                </div>
                <div>
                  <h1 className="text-lg font-medium">The House Maid</h1>
                  <p className="text-xs text-gray-500 -mt-1">Arun K.C</p>
                </div>

              </div>
              <div className="w-[15%] h-[200px] flex flex-col gap-2">
                <div className="h-[180px]">
                  <Image src={"/little.webp"} alt="books" height={1000} width={1000} className="h-full w-full object-cover rounded-md"/>
                </div>
                <div>
                  <h1 className="text-lg font-medium">All Her Secrets</h1>
                  <p className="text-xs text-gray-500 -mt-1">Rabin Bhattarai</p>
                </div>

              </div>
              <div className="w-[15%] h-[200px] flex flex-col gap-2">
                <div className="h-[180px]">
                  <Image src={"/change.webp"} alt="books" height={1000} width={1000} className="h-full w-full object-cover rounded-md"/>
                </div>
                <div>
                  <h1 className="text-lg font-medium">The Changing Man</h1>
                  <p className="text-xs text-gray-500 -mt-1">Krischal Jung Kuri</p>
                </div>

              </div>
        </div>
      </div>
    </main>
  );
}
