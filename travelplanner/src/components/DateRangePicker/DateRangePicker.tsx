import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateRangePickerProps {
    handleDateRangeChange: (range: { start: Date; end: Date }) => void;
    handleNightsChange: (nights: number) => void;
}

export default function DateRangePicker({
    handleDateRangeChange,
    handleNightsChange,
}: DateRangePickerProps) {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);

    useEffect(() => {
        if (startDate && endDate) {
            handleDateRangeChange({ start: startDate, end: endDate });
        }
    }, [startDate, endDate, handleDateRangeChange]);

    useEffect(() => {
        if (startDate && endDate) {
            const diffInTime = endDate.getTime() - startDate.getTime();
            const diffInDays = diffInTime / (1000 * 3600 * 24);
            const nights = Math.ceil(diffInDays);
            handleNightsChange(nights);
        }
    }, [startDate, endDate, handleNightsChange]);

    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />
        </>
    );
}
