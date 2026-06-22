import axiosClient from './../../../services/api/axiosClient';

export const getMessages = (params) => 
    axiosClient.get("/messages", { params });

export const getMessageById = (id) => 
    axiosClient.get(`/messages/${id}`);

export const createMessage = (data) => 
    axiosClient.post("/messages", data);

export const updateMessage = (id, data) => 
    axiosClient.put(`/messages/${id}`, data);

export const deleteMessage = (id) => 
    axiosClient.delete(`/messages/${id}`);

export const getChatMessagesByConversation = (conversationId, params) => 
    axiosClient.get(`/messages/chat/${conversationId}`, { params });


export default {
    getMessages,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage,
    getChatMessagesByConversation
};