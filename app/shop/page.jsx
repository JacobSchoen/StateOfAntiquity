"use client";
import Link from "next/link";
import Image from "next/image";

export default function page({ params }) {
  return (
    <div className="bg-dark">
      <div className="grid pt-6">
        <div className="col-12 md:col-6 md:pr-3 md:pl-6 p-6 md:p-0 justify-content-center flex">
          <Link href="/shop/studio">
            {/* <img
              className="w-full h-full shadow-2 border-round"
              v-bind:src="artDesk"
              alt="Image"
            /> */}
            <Image src={"/shop/artDesk.png"} width={150} height={150} />
          </Link>
        </div>
        <div className="col-12 md:col-6 md:pl-3 p-6 md:p-0 md:pr-6 justify-content-center flex">
          <Link href="/shop/painting">
            {/* <img
              className="w-full h-full shadow-2 border-round"
              v-bind:src="artCanvas"
              alt="Image"
            /> */}
            <Image src={"/shop/artCanvas.jpg"} width={150} height={150} />
          </Link>
        </div>
      </div>
    </div>
  );
}
