import React from 'react';
import "./home.scss";
import dayjs from 'dayjs';

const Home = () => {
    const days = ["Monday", "Wednesday"];
    function getDates(startDate, endDate) {
        const dates = [];
        let currentDate = startDate;
        const addDays = function (days) {
          const date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
        while (currentDate <= endDate) {
            const splitCurrent = dayjs(currentDate).format("dddd")
            for (let index = 0; index < days.length; index++) {
                if (splitCurrent === days[index]) {
                    dates.push({ day: splitCurrent, date: dayjs(currentDate).format("YYYY/MM/DD")});
                }
            }
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
      }
    
      // Usage
      const dates = getDates(new Date("2020-01-03"), new Date("2021-01-03"));
      dates.forEach((date) => {
        console.log(date);
      });
    return (
        <div id="jumbotron">
            <p className="glitch">
                <span aria-hidden="true">React Courses</span>
                React Coursses
                <span aria-hidden="true">React Courses</span>
            </p>
        </div>
           
    );
};

export default Home;