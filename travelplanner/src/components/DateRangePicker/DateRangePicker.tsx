import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

interface DateRangePickerProps {
    handleDateRangeChange: (range: { start: Date, end: Date }) => void;
}

export default function DateRangePicker({ handleDateRangeChange }: DateRangePickerProps) {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    
    useEffect(() => {
        if (startDate && endDate) {
            handleDateRangeChange({ start: startDate, end: endDate });
        }
    }, [startDate, endDate, handleDateRangeChange]);
    
    return (
        <>
            <DatePicker 
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />
            <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />
        </>
    )
}