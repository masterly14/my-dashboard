import { Metadata } from "next";
import { Counter } from "@/components/counter/page";

export const metadata: Metadata = {
  title: "Counter App",
  description: "Amazing Counter",
};

const page = () => {
  return (
    <div className="items-center h-screen justify-center flex flex-col gap-6">
        <Counter value={0}/>
    </div>
  );
};

export default page;
