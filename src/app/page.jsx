"use client";
import Card_Items from "@/Components/Card_Items";
import { Input } from "@/Components/ui/input";
import { useEffect, useState } from "react";

const Home_Page = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setdata(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1 className="text-2xl font-semibold text-center">
        List of Github User
      </h1>
      <div className="flex mt-4 justify-center">
        <Input
          className="w-[14rem] h-[2.5rem] text-base"
          placeholder="Search Here"
        />
      </div>
      <Card_Items datas={data} />
    </>
  );
};

export default Home_Page;
