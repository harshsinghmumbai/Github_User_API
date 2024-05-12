"use client";
import Card_Items from "@/Components/Card_Items";
import Skeleton_Card from "@/Components/Skeleton_Card";
import { Input } from "@/Components/ui/input";
import { useEffect, useState } from "react";

const Home_Page = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const getData = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setloading(false);
    setdata(data);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);
  return (
    <>
      <h1 className="text-2xl font-semibold text-center">
        List of Github User
      </h1>
      <div className="flex mt-3 mb-3 justify-center">
        <Input
          className="w-[14rem] h-[2.5rem] text-base"
          placeholder="Search Here"
        ></Input>
      </div>
      <div className="max-w-[1300px] m-auto">
        {loading ? <Skeleton_Card /> : <Card_Items datas={data} />}
      </div>
    </>
  );
};

export default Home_Page;
