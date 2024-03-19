import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import audiobtn from "../../assets/images/audiobtn.svg";
import SuffleIcon from "../../assets/images/suffle.svg";
export default function DuaAudioPlayer({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [replayMode, setReplayMode] = useState(false); // State to track replay mode

  useEffect(() => {
    // Update duration when audio metadata is loaded

    const handleLoadedMetadata = () => {
      setDuration(audioRef.current?.duration);
    };

    // Update current time every second
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    // Cleanup event listeners
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }

    // if (!audioRef.current.paused && !audioRef.current.ended) {
    //   audioRef.current.pause();
    // } else {
    //   audioRef.current.play();
    // }
    // setIsPlaying(!isPlaying);
  };

  const handleCanPlayThrough = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const handleRangeChange = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  // Function to toggle replay mode
  const toggleReplayMode = () => {
    setReplayMode(!replayMode);
  };

  const handleAudioEnded = () => {
    // Check if replay mode is active
    if (replayMode) {
      // Reset audio to the beginning
      audioRef.current.currentTime = 0;
      setCurrentTime(0);

      // Play audio again
      audioRef.current.play();
    } else {
      setIsPlaying(false);
    }
  };
  return (
    <>
      {audioUrl && (
        <div className="flex items-center gap-x-3">
          <Image
            src={audiobtn}
            alt="logo"
            width={44}
            height={44}
            onClick={handlePlayPause}
            className="cursor-pointer"
          />
          <audio
            onCanPlayThrough={handleCanPlayThrough}
            onEnded={handleAudioEnded}
            ref={audioRef}
            src={audioUrl}
          ></audio>
          {isPlaying && (
            <>
              <input
                id="custom-range"
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                step={1}
                onChange={handleRangeChange}
                style={{
                  // Custom styles for the range input
                  appearance: "none", // Remove the default styling
                  width: "100%", // Set width to 100%
                  height: "5px", // Set height
                  background:
                    "linear-gradient(to right, #1FA45B 0%, #1FA45B " +
                    (currentTime / (duration || 1)) * 100 +
                    "%, #EEEEEE " +
                    (currentTime / (duration || 1)) * 100 +
                    "%, #EEEEEE 100%)", // Set background color
                  border: "none", // Remove border
                  borderRadius: "5px", // Set border radius
                  outline: "none", // Remove outline
                  cursor: "pointer", // Add pointer cursor on hover
                }}
              />
              <span className="text-[#b4b3b3]">{formatTime(currentTime)}</span>

              <Image
                src={SuffleIcon}
                alt="logo"
                width={32}
                height={32}
                onClick={toggleReplayMode}
                className={`cursor-pointer ${
                  replayMode ? "opacity-100" : "opacity-50"
                }`}
              />
            </>
          )}
        </div>
      )}
    </>
  );
}
