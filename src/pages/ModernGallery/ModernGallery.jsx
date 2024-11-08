import { useEffect, useState } from "react";
import GalleryCard from "../CraftCard/GalleryCard";

function ModernGallery() {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch('/public/gallery.json')
            .then(res => res.json())
            .then(data=>setGallery(data))
    }, [])
    // console.log(gallery)
    return (
        <>
            <h1 className="text-4xl text-center font-bold mt-5">Contempo Art Space</h1>
            <p className="text-sm text-center pt-3 text-gray-500">A Curated Collection of Modern Masterpieces</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:px-0 px-5 my-7">
                {
                    gallery.map(item => <GalleryCard key={item.id} item={item} />)
                }
            </div>
        </>
  )
}

export default ModernGallery
