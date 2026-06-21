import axiosClient from './../../../services/api/axiosClient';

export const getConversationMembers = (params) => 
    axiosClient.get("/conversation-members", { params });

export const getConversationMemberById = (conversationId, userId) => 
    axiosClient.get(`/conversation-members/${conversationId}/${userId}`);

export const createConversationMember = (data) => 
    axiosClient.post("/conversation-members", data);

export const updateConversationMember = (conversationId, userId, data) => 
    axiosClient.put(`/conversation-members/${conversationId}/${userId}`, data);

export const deleteConversationMember = (conversationId, userId) => 
    axiosClient.delete(`/conversation-members/${conversationId}/${userId}`);

export const getChatList = (params) => 
    axiosClient.get("/conversation-members/getChatList", { params });


export default {
    getConversationMembers,
    getConversationMemberById,
    createConversationMember,
    updateConversationMember,
    deleteConversationMember,
    getChatList
};