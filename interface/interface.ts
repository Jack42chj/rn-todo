export interface TodayProps {
    isToday: boolean;
    today: () => void;
    calendar: () => void;
}

export interface TaskProps {
    date: string;
    name: string;
    end: string;
    ed: string;
}
