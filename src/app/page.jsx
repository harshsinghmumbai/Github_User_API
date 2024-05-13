"use client";
import Card_Items from "@/Components/Card_Items";
import Skeleton_Card from "@/Components/Skeleton_Card";
import { Input } from "@/Components/ui/input";
import { useEffect, useState } from "react";

const Home_Page = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [search, setsearch] = useState("");

  const getData = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setloading(false);
    setdata(data);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 900);
  }, []);
  return (
    <>
      <h1 className="text-2xl font-semibold text-center">
        List of Github User
      </h1>
      <div className="flex mt-3 mb-3 justify-center">
        <Input
          className="w-[14rem] h-[2.5rem] text-base"
          placeholder="Search Name Here"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        ></Input>
      </div>
      <div className="max-w-[1300px] m-auto">
        {loading ? (
          <Skeleton_Card />
        ) : (
          <Card_Items datas={data} search={search} />
        )}
      </div>
    </>
  );
};

export default Home_Page;
