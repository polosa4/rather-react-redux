import { getInitialData, saveQuestionApi, saveQuestionAnswerApi } from '../utils/api'
import { receiveUsers } from './users'
import { recieveUsers, saveUserAnswer, saveUserQuestion } from './users'
import { receiveQuestions, saveQuestion, saveQuestionAnswer } from './questions'
//import { setAuthedUser} from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            //dispatch(setAuthedUser(AUTHED_ID))
            //dispatch(hideLoading())
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