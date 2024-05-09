import Image from "next/image";
import { Button } from "@/components/ui/button"
import { SignIn } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className=" justify-end p-2 ">
      <Button className="p-4 m-2 justify-end left-1" variant="gray">
        
      </Button>
      <Button variant="red">Signup</Button>
      </div>
  );
}
