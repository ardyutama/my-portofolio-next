import Image from "next/image";

export default function Card({data}) {
  return (
    <>
      <a
        className="group flex snap-center list-none flex-col gap-4 rounded-3xl 
        bg-white p-6 text-start shadow-card border-[#E5E7EB] border-[1px] 
        max-w-[350px]"
        href="#"
      >
        <div className="aspect-[3/2] h-[200px] w-full overflow-hidden rounded-2xl bg-primary-yellow">
          <div className="relative left-8 top-12 transition-all group-hover:-translate-y-4">
            <Image src="" alt="" className="shadow-card" />
          </div>
        </div>
        <p className="text-h4 font-bold"> {data.name} </p>
        <p className="text-medium-4 font-medium"> {data.description} </p>
      </a>
    </>
  );
}
