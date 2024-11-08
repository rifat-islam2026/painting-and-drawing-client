
function GalleryCard({item}) {
  return (
      <div className="relative group">
          <div>
              <img className="h-52 w-full" src={item.img_url} />
          </div>
          <div className="absolute top-0 p-4 left-0 opacity-0 group-hover:opacity-100 w-full h-full bg-black/30 group-hover:backdrop-blur-sm duration-500">
              <h2 className="flex items-center justify-center text-white text-xl font-bold">{item.name}</h2>
          </div>
      </div>
  )
}

export default GalleryCard
