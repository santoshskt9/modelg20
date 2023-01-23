import React, { useState } from "react";
import Player from "@u-wave/react-vimeo";
import Loading from "../components/Loader/Loading";
const VimeoPlayer = ({
  videoId,
  viewIndex,
  setViewIndex,
  series,
  postProgress,
  // setCertificateDownloadable,
}) => {
  console.log("Vimeo Player Active", videoId);
  const [loader, setLoader] = useState(true);
  const [certificateDownloadable, setCertificateDownloadable] = useState(false);
  const onEndHandler = () => {
    console.log("Video Ended");
    postProgress(series[viewIndex].id);
  };

  return (
    <>
      <div className="h-100">
        <Loading attr={loader} />
        <Player
          video={videoId}
          controls
          autoplay
          onLoaded={() => setLoader(false)}
          responsive={true}
          onEnd={onEndHandler}
          pip={false}
        />
      </div>

      {/* Buttons  */}
      <div style={{ position: "absolute", top: "45%", width: "100%" }}>
        <div className="w-100 d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn btn-outline-warning rounded-pill py-2 px-4"
            disabled={viewIndex == 0}
            onClick={() => setViewIndex(viewIndex - 1)}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-warning rounded-pill py-2 px-4"
            onClick={() => {
              if (viewIndex == series.length - 1) {
                // setCertificateDownloadable(true);
              } else {
                setViewIndex(viewIndex + 1);
              }
            }}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default VimeoPlayer;
