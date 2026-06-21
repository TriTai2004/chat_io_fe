import axiosClient from './../../../services/api/axiosClient';

export const getConversations = (params) => 
    axiosClient.get("/conversations", { params });

export const getConversationById = (id) => 
    axiosClient.get(`/conversations/${id}`);

export const createConversation = (data) => 
    axiosClient.post("/conversations", data);

export const updateConversation = (id, data) => 
    axiosClient.put(`/conversations/${id}`, data);

export const deleteConversation = (id) => 
    axiosClient.delete(`/conversations/${id}`);


export default {
    getConversations,
    getConversationById,
    createConversation,
    updateConversation,
    deleteConversation
};