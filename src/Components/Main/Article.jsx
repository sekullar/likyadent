import { useState, useEffect } from "react";
import "../../css/article.css";
import img1 from "../../images/inside1.png";
import img2 from "../../images/inside2.png";
import img3 from "../../images/inside3.webp";
import img4 from "../../images/main.png";
import Bottom from "../../images/bottom.svg"

const Article = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [img4,img1, img2, img3, ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
    }, 7000); // Fotoğrafı her 3 saniyede bir değiştir

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="h-full-special relative w-full"> 
        <div className="photo-container overflow-hidden"> {photos.map((photo, index) => ( <div key={index} className={`photo ${index === currentPhoto ? 'active transformInside' : ''}`} style={{ backgroundImage: `url(${photo})` }} /> ))} </div>
        <div className="bg-black-transparent-special h-full w-full">
            <div className="flex items-center justify-center h-full  pb-24">
                <flex className="flex flex-col items-center justify-center gap-4 mt-24">
                    <p className="old-standard-500 text-white text-2xl mb-4 welcomeAni1">WELCOME TO</p>
                    <p className="old-standard-500 text-white text-9xl likyadentAni1">LikyaDent</p>
                    <div className="flex items-center gap-5 mt-6">
                        <button className="bg-white p-4 px-14 inter-500 text-xl rounded-xs rezButton1 hover:bg-amber-400 transition-all duration-300 hover:text-white hover:font-bold">REZERVATION</button>
                        <button className="bg-white p-4 px-14 inter-500 text-xl rounded-xs learnButton2 hover:bg-amber-400 transition-all duration-300 hover:text-white">LEARN MORE</button>
                    </div>
                </flex>
            </div>
        </div>
        <div className="absolute bottom-0 mb-10 flex justify-center items-center w-full z-20">
          <img src={Bottom} className="w-[35px] bottomAni" alt="Slide" />
        </div>
    </div>
  );
};

export default Article;
