import { Suspense } from "react";
import Banner from "./components/Banner";
import BookList from "./components/BookList";
import Looding from "@/components/Looding";

export default function Home() {
  return (
    <>
   <Banner/>

   <Suspense fallback={<Looding/>}>
   <BookList/>
   </Suspense>


    </>
  );
}
