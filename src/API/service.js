import axios from "axios";

// Делаем запрос к сервеву с лимитом и номером страницы
export const getAllEelement = async (limit, page) => {
    const response = await axios.get("http://localhost:3001/element", {
        params: {
            _limit: limit,
            _page: page
        }
    });
    return response
};

