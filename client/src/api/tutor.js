import API from ".";

const createCourseAPI = (body, route = `/tutor/courses/create`) => {
    return API.post(
        route,
        body,
        { headers: { 'Content-Type': 'multipart/form-data' } }
    )
}

const getCourseDetailsAPI = (id,route='/tutor/courses/') => {
    return API.get(route+id)
}


export {
    createCourseAPI,
    getCourseDetailsAPI
}