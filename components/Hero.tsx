import Image from "next/legacy/image";

const Hero = () => {
    return (
        <section id="about" className="mt-10">
            <div className="flex flex-col sm:flex-row justify-between gap-10 items-center">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl font-bold">
                        สวัสดีครับ ผมเดชาวัฒน์ กำลังมองหาโอกาสในการเป็น <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Frontend, Backend, FullStack Developer</span>,
                        ผมพร้อมที่จะเรียนรู้และเติบโตในสายอาชีพการพัฒนาซอฟต์แวร์ครับ.
                    </h2>
                    <p className="text-gray-300 mt-4">
                        บัณฑิตจบใหม่สาขาเทคโนโลยีสารสนเทศจากมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา.
                        มีประสบการณ์เป็นนักพัฒนาเว็บระหว่างฝึกงาน
                    </p>
                    <a href="/images/Resume.Dechawat.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-purple-400 to-pink-400 py-2 mt-4 rounded-md shadow-lg shadow-purple-500/50  text-text font-bold w-32 hover:scale-105 transition-transform duration-300">Resume</button>
                    </a>

                </div>
                <div className="w-full sm:w-1/2 flex justify-center">
                    <Image
                        className="object-cover rounded-full"
                        src="/images/me1.jpg"
                        alt="me"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className=" flex justify-center items-center">
                <div className="mt-16  border py-6 px-20 w-fit relative ">
                    <h5 className=" text-2xl font-bold  bg-gradient-to-l from-purple-400 to-pink-500 bg-clip-text text-transparent">
                       You don’t need to be perfect. Just be improving.
                    </h5>
                    <span className="absolute -top-6 left-4 bg-background px-2 text-primary text-7xl">
                        &quot;
                    </span>
                    <span className="absolute -bottom-12 h-fit right-4 bg-background px-2 text-primary text-7xl">
                        &quot;
                    </span>
                    <span className="absolute right-[-1px] -bottom-10.5 border-x border-b p-2">
                        -  First-year Developer
                    </span>
                </div>
            </div>
        </section>
    );
};
export default Hero;