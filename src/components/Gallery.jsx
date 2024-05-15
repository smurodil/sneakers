import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

function Gallery({ galleryImagesSmall, galleryImagesBig }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal(index) {
    setSlideNumber(index);
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  function prevSlide() {
    slideNumber === 0
      ? setSlideNumber(galleryImagesSmall.length - 1)
      : setSlideNumber(slideNumber - 1);
  }
  function nextSlide() {
    slideNumber + 1 === galleryImagesSmall.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  }
  return (
    <div className="gallery">
      {openModal && (
        <div className="fixed bottom-0 top-0 left-0 right-0 flex items-center justify-center flex-col bg-opacity-60 bg-slate-900 w-full h-full z-20">
          <button className="bin mb-4 ml-[464px] text-white hover:text-orange-400" onClick={handleCloseModal}>
            <CloseIcon fontSize="large" />
          </button>
          <div className="flex items-center">
            <button className="bin rounded-full z-20 text-white hover:text-orange-400" onClick={prevSlide}>
              <ArrowBackIosIcon />
            </button>
            <div className="large-image-lightbox">
              <img
                className="rounded-xl w-[480px]"
                src={galleryImagesBig[slideNumber].img}
              />
            </div>
            <button className="bin rounded-full z-20 text-white hover:text-orange-400" onClick={nextSlide}>
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div className="flex gap-6 mt-8">
            {galleryImagesSmall &&
              galleryImagesSmall.map((slide, index) => {
                return (
                  <div className="rounded-xl bg-white" key={index} onClick={() => handleOpenModal(index)}>
                    <img className="w-20 h-20 rounded-xl hover:cursor-pointer hover:opacity-30" src={slide.img}/>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <div className="flex items-center flex-col gap-8">
        <img
          className="w-9/12 rounded-lg"
          src={galleryImagesBig[0].img}
          alt="large"
        />
        <div className="flex items-center justify-between gap-8">
          {galleryImagesSmall &&
            galleryImagesSmall.map((slide, index) => {
              return (
                <div key={index} onClick={() => handleOpenModal(index)}>
                  <img className="cursor-pointer w-20 rounded-md hover:bg-white hover:opacity-50" src={slide.img} alt="thumbnail" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
