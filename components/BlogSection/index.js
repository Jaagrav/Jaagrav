import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {SubHeader} from "../";
import axios from 'axios';
import {useEffect, useState} from "react";
import Link from "next/link";

export default function BlogSection() {
    const [blogs, setBlogs] = useState([]);
    const getBlogs = async () => {
        const {data} = await axios.get('api/get-all-blogs-metadata').catch(e => {console.log(e)})
        setBlogs(data)
    }

    useEffect( () => {
        getBlogs();
    }, [])

    return <div>
        <SubHeader
            title="My Blogs"
            caption="I honestly enjoy writing, now it's a different story that I don't write a lot cause interesting shit doesn't happen everyday, anyway on that note checkout some of the blogs I wrote!"
        />
        <div className="skew relative z-10 h-fit md:px-32">
            <div className='max-w-screen-xl mx-auto'>
                <AliceCarousel
                    autoWidth
                    mouseTracking
                    ssrSilentMode
                    touchTracking
                    disableButtonsControls
                    swipeExtraPadding={2000}
                >
                    {
                        blogs && blogs.map((blog, index) => <Blog key={`blog-${index}`} {...blog}/>)
                    }
                </AliceCarousel>
            </div>
        </div>
    </div>
}

export function Blog({file, metadata}) {
    return <div className="w-[36rem] px-10 md:pl-0 md:pr-12">
            <div><div className='rounded-2xl h-72 w-full bg-cover bg-center' style={{background: `url('https://blog.jaagrav.in/assets/blogs-media/${file}/thumbnail.webp')`}}></div></div>
            <div>
                <div className="text-3xl font-bold mt-4 text-lightTextColor dark:text-white line-clamp-1">{metadata.title}</div>
                <div className="text-xl mt-4 text-lightTextColor dark:text-white">{metadata.publishedOn} • {metadata.readingTime}</div>
                <div className="text-xl mt-4 text-lightTextColor dark:text-white line-clamp-3">{metadata.excerpt}</div>
            </div>
            <Link href={`https://blog.jaagrav.in/${file}`}>
                <a
                    target="_blank"
                    className={`mt-4 inline-block w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition shadow-none`}
                >
                    Read blog
                </a>
            </Link>
        </div>
}