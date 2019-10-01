const userInfoSuccess = {
    email: 'tienhoang1211@gmail.com',
    info: []
};

const userInfoCurrent = {
    email: 'tienhoang1211@gmail.com',
    topicId: 0,
    courseId: 0,
    lessonId: 0,
    questionIndex: 0
}

export const updateUserInfoSuccess = () => {
    const current = userInfoCurrent;
    const info = userInfoSuccess.info
        .find(x => x.topicId === current.topicId 
            && x.courseId === current.courseId 
            && x.lessonId === current.lessonId);
    
    if(!info){
        userInfoSuccess.info.push({
            topicId: current.topicId,
            courseId: current.courseId,
            lessonId: current.lessonId
        })
    }
    userInfoCurrent.questionIndex = 0;
}

export const setUserInfoCurrentTopicId = (topicId) => {
    userInfoCurrent.topicId = topicId;
}

export const getUserInfoCurrentTopicId = () => {
    return userInfoCurrent.topicId;
}

export const setUserInfoCurrentCourseId = (courseId) => {
    userInfoCurrent.courseId = courseId;
}

export const getUserInfoCurrentCourseId = () => {
    return userInfoCurrent.courseId;
}

export const setUserInfoCurrentLessonId = (lessonId) => {
    userInfoCurrent.lessonId = lessonId;
}

export const getUserInfoCurrentLessonId = () => {
    return userInfoCurrent.lessonId;
}

export const setUserInfoCurrentQuestionIndex = (index) => {
    userInfoCurrent.questionIndex = index;
}

export const getUserInfoCurrentQuestionIndex = () => {
    return userInfoCurrent.questionIndex;
}

