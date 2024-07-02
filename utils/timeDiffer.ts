import { TimeProps } from "@/interface/interface";

const TimeDifference: React.FC<TimeProps> = ({ start, end, st, ed }) => {
    const convertTo24HourFormat = (time: string, period: string) => {
        let [hours, minutes] = time.split(":").map(Number);
        if (period === "PM" && hours !== 12) hours += 12;
        if (period === "AM" && hours === 12) hours = 0;
        return { hours, minutes };
    };

    const startTime = convertTo24HourFormat(start, st);
    const endTime = convertTo24HourFormat(end, ed);

    const startDate = new Date(2000, 0, 1, startTime.hours, startTime.minutes);
    const endDate = new Date(2000, 0, 1, endTime.hours, endTime.minutes);

    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
    const differenceInMinutes = differenceInMilliseconds / 60000;

    return differenceInMinutes;
};

export default TimeDifference;
