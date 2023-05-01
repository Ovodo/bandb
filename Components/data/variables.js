export const selectStyles = {
  m: 1,
  width: 125,
  "& .MuiSelect-select": {
    fontSize: ".75rem",
    lineHeight: 1,
    height: "20px",
    minWidth: "3.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .MuiSelect-icon": {
    fontSize: 25,
    position: "relative",
    bottom: "2px",
    display: "none",
  },
  "& .MuiInputLabel-root": {
    fontSize: ".85rem",
    fontWeight: "550",
    lineHeight: 1,
    alignSelf: "center",
  },
};

export const buttonStyles = {
  "& .MuiButton-root": {
    textTransform: "lowercase",
    backgroundColor: "black",
  },
};

export function formatTime(timeInSeconds) {
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = Math.floor(timeInSeconds % 60);
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${formattedMinutes}:${formattedSeconds}`;
}
