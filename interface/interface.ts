export interface TimeProps {
    start: string;
    end: string;
    st: string;
    ed: string;
}

export interface TaskProps {
    name: string;
    end: string;
    ed: string;
}

export interface TodayProps {
    isToday: boolean;
    today: () => void;
    calendar: () => void;
}

export interface TodoProps {
    date: string;
    name: string;
    end: string;
    ed: string;
}
