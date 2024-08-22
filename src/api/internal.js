import axios from "axios";

// const api = axios.create(
//     {
//         baseURL: 'http://localhost:5000',
//         withCredentials: true,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }
// );


export const internalApi = {

    //auth api
    async login(data){
        let response;
        try {
           response = await axios.post('/api/auth/login', data);
        } catch (error) {
           return error;
        }
        return response;
    },


    async register(data){
        let response;
        try {
            response = await axios.post('api/auth/register',data);
        } catch (error) {
            return error;
        }
        return response;
    },

    async logout(){
        let response;
        try {
            response = await axios.post('/api/auth/logout');
        } catch (error) {
            return error;
        }
        return response;
    },

    async updateUserProfile(data){
        let response;
        try {
            response = await axios.put('/api/user/profile',data);
        } catch (error) {
            return error;
        }
        return response;
    },



    // blogs api
    async postBlog(data){
        let response;
        try {
            response = await axios.post('api/user/blog',data);
        } catch (error) {
            return error;
        }
        return response;
    },


//  company
    async updateCompanyProfile(data){
        let response;
        try {
            response = await axios.put('/api/company/profile',data);
        } catch (error) {
            return error;
        }
        return response;
    },


    async postJob(data){
        let response;
        try {
            response = await axios.post('/api/company/job',data);
        } catch (error) {
            return error;
        }
        return response;
    },

    async getCompanyJobs(id){
        let response;
        try {
            response = await axios.get(`/api/company/job/all/${id}`);
        
        } catch (error) {
            return error;
        }
        return response;
    },

    async getAllCompanies(){
        let response;
        try {
            response = await axios.get('/api/user/company/all');
        
        } catch (error) {
            return error;
        }
        return response;
    },
    
    async getAllJobs(){
        let response;
        try {
            response = await axios.get('/api/user/job/all');
        
        } catch (error) {
            return error;
        }
        return response;
    },




    async getCompanyJobApplications(id){
        let response;
        try {
            response = await axios.get(`/api/company/application/all/${id}`);
        
        } catch (error) {
            return error;
        }
        return response;
    },


    async updateCompanyJobApplication(data){
        let response;
        try {
            response = await axios.put('/api/company/application',data);
        } catch (error) {
            return error;
        }
        return response;
    },

    async getUserJobApplications(id){
        let response;
        try {
            response = await axios.get(`/api/user/application/all/${id}`);
        
        } catch (error) {
            return error;
        }
        return response;
    },


    async getUserJobs(id){
        let response;
        try {
            response = await axios.get(`/api/user/application/all/${id}`);
        
        } catch (error) {
            return error;
        }
        return response;
    },



   
}

