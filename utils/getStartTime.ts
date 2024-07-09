const GetStartTime = (timeString: string) => {
    let [time, modifier] = timeString.split(" ");
    let [hours, minutesPart] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
        hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
        hours = 0;
    }

    let date = new Date();
    date.setHours(hours, minutesPart);

    date.setMinutes(date.getMinutes() - 25);

    let newHours = date.getHours();
    let newMinutes = date.getMinutes();

    let newModifier = newHours >= 12 ? "PM" : "AM";

    newHours = newHours % 12;
    newHours = newHours ? newHours : 12;

    const formattedMinutes = String(newMinutes).padStart(2, "0");

    return `${newHours}:${formattedMinutes} ${newModifier}`;
};

export default GetStartTime;
