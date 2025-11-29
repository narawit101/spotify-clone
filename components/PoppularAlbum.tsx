"use client";

import React, { useRef } from "react";
import Album from "@/data/mokalbum.json";

export default function PoppulaAlbum() {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -540, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 540, behavior: "smooth" });
    };


    return (
        <div>
            <div className='flex justify-between'>
                <a className='text-2xl hover:underline decoration-solid font-bold ml-2' href="#">อัลบั้มและซิงเกิลยอดนิยม</a>
                <a className='text-[#bab9b9] font-bold 50 flex justify-end items-end text-[14px]  hover:underline decoration-solid mr-9' href="#">แสดงทั้งหมด</a>
            </div>
            <div className="relative group/slider">
                <button
                    onClick={scrollLeft}
                    className="absolute left-1 top-[45%] -translate-y-1/2 z-10 bg-[#000000] hover:bg-[#222222] px-2.5 py-1.5 rounded-full cursor-pointer opacity-1 group-hover/slider:opacity-100 transition"
                >
                    <img
                        className="rotate-180"
                        src="data:image/png;base64,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"
                        width={10}
                        height={10}
                        alt="" />
                </button>
                <button
                    onClick={scrollRight}
                    className="absolute right-3 top-[45%] -translate-y-1/2 z-10 bg-[#000000] hover:bg-[#222222] px-2.5 py-1.5 rounded-full cursor-pointer opacity-1 group-hover/slider:opacity-100 transition"
                >
                    <img src="data:image/png;base64,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"
                        width={10}
                        height={10}
                        alt="" />
                </button>
                <div ref={scrollRef}
                    className='mt-3 pb-4 flex gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                    {Album.map((artis: any) => (
                        <div key={artis.id} className='relative group/card flex flex-col flex-none gap-2.5 p-2 hover:bg-[#28282883] rounded-lg cursor-pointer transition'>
                            <img src={artis.image}
                                className=' flex items-center justify-center rounded-md aspect-square object-contain'
                                width={170}
                                height={170}
                                alt="" />
                            <div
                                className='absolute bottom-17 right-4 bg-[#1ed760] p-3 rounded-full  opacity-0 translate-y-3
                                            group-hover/card:opacity-100 group-hover/card:translate-y-0
                                            group-hover/card:shadow-lg hover:bg-[#28c55f] hover:scale-106
                                            transition-all duration-100 cursor-pointer'
                            >
                                <a href="#"> <img
                                    src="data:image/png;base64,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"
                                    width={22}
                                    height={22}
                                    alt="play"
                                /></a>

                            </div>
                            <div className='flex flex-col gap-2 mt-1'>
                                <p className='w-40 line-clamp-2 hover:underline decoration-solid'>{artis.album_name}</p>
                                <p className='font-light text-[14px] text-[#bab9b9] w-40 line-clamp-2 hover:underline decoration-solid'>{artis.artis} </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
