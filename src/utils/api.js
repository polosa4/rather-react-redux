import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }
  
  export function saveQuestionApi(info) {
    return _saveQuestion(info)
  }
  
  export function saveQuestionAnswerApi (info) {
    return _saveQuestionAnswer(info) 
  }