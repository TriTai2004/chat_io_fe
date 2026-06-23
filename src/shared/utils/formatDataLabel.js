const getDateLabel = (date) => {
    const msgDate = new Date(date);
    const today = new Date();

    const isToday =
        msgDate.toDateString() === today.toDateString();

    if (isToday) return "Hôm nay";


    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const isYesterday =
        msgDate.toDateString() === yesterday.toDateString();

    if (isYesterday) return "Hôm qua";


    return msgDate.toLocaleDateString("vi-VN");
};

export default getDateLabel;