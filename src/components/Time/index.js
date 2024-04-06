import React from 'react';
import PropTypes from "prop-types";

function Time({time}) {
    const diffSeconds = Math.floor((new Date() - new Date(time)) / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    return diffMinutes < 60 ? `${diffMinutes} минут(ы) назад` : (diffHours < 24 ? `${diffHours} час(ов) назад` : (diffDays >= 1 ? `${diffDays} дней назад` : 'Не могу посчитать' ) )
}

Time.propTypes = {
    time: PropTypes.number.isRequired,
}

export default Time;