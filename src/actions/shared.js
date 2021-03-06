import { getInitialData, saveQuestionApi, saveQuestionAnswerApi } from '../utils/api'
import { receiveUsers, saveUserAnswer, saveUserQuestion } from './users'
import { receiveQuestions, saveQuestion, saveQuestionAnswer } from './questions'
import { showLoading } from 'react-redux-loading'


export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}

export function handleSaveQuestion (author, optionOneText, optionTwoText) {
    const question = {
      author: author,
      optionOneText: optionOneText,
      optionTwoText: optionTwoText
    }
    return (dispatch) => {
      return saveQuestionApi(question).then((q) => {
        dispatch(saveQuestion(q))
        dispatch(saveUserQuestion(q.author, q.id))
      })
    }
  }

  export function handleAnswer (authedUser, qid, answer) {
    return (dispatch) => {
      dispatch(saveQuestionAnswer(authedUser, qid, answer))
      dispatch(saveUserAnswer(authedUser, qid, answer))
      return saveQuestionAnswerApi({
        authedUser: authedUser,
        qid: qid,
        answer: answer
      })
    }
  }