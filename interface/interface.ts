export interface TimeProps {
    start: string;
    end: string;
    st: string;
    ed: string;
}

export interface TaskProps {
    name: string;
    start: string;
    end: string;
    st: string;
    ed: string;
}

export interface TodayProps {
    isToday: boolean;
    today: () => void;
    calendar: () => void;
}
