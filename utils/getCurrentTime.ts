const GetCurrentTime = () => {
    const currentTime = new Date();
    const month = currentTime.toLocaleString("en-US", { month: "2-digit" });
    const day = currentTime.toLocaleString("en-US", { day: "2-digit" });
    const year = currentTime.getFullYear();
    const dateKey = year + month + day;
    const hours = currentTime.getHours();
    const minutes = currentTime.toLocaleString("ko-KR", { minute: "2-digit" });
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const displayHours = hours % 12 === 0 ? 12 : hours % 12;
    const ampm = hours < 12 ? "AM" : "PM";
    return {
        currentTime,
        month,
        day,
        year,
        hours,
        minutes,
        formattedMinutes,
        displayHours,
        ampm,
        dateKey,
    };
};

export default GetCurrentTime;
