import "@/app/globals.css";
import AboutMain from "../components/AboutMain";
import AboutRow from "../components/AboutRow";
import customers from "@/data/customers";

export const metadata = {
  title: "Home Page",
  description: "หน้าแรกของโรงแรม",
};

export default function Home() {
  return (
    <>
      <h1 className="title-text">หน้า Localhost Details</h1>

      {/* ใส่ Component2 <Coverpage /> ที่นี่ (Nu) */}

      {/* ใส่ Component3 <About /> ที่นี่ (Michael) */}
      <AboutMain customers={customers} />
      <AboutRow customers={customers} />
      {/* ใส่ Component4 <Services /> ที่นี่ (Wen) */}
      {/* <Services /> */}

      {/* ใส่ Component5 <Roomtypes /> ที่นี่ (Wen) */}
      {/* <Roomtypes /> */}

      {/* ใส่ Component6 <CustomerSay /> ที่นี่ (Michael) */}
    </>
  );
}
